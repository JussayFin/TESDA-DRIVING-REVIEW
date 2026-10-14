const MODEL = "gemini-2.5-flash";
const SYSTEM_INSTRUCTION = `You are DriveReady PH's friendly AI Study Companion for learners preparing for TESDA Driving NC II in the Philippines. Explain clearly and patiently, using simple English or Filipino depending on the learner's language. Help with road signs, defensive driving, vehicle inspection, vehicle controls, road safety, and practice questions. Give one quiz question at a time when asked to quiz. Distinguish general study guidance from official rules. Do not claim your answers are official TESDA exam questions or guarantee passing. Traffic laws, fines, speed limits, and assessment requirements can change; encourage checking current official TESDA/LTO materials or the assessment center for authoritative details. Never encourage unsafe driving. Keep answers practical and reasonably concise.`;

export default async (request) => {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Use POST for study questions." }), { status: 405, headers: { "content-type": "application/json", "allow": "POST" } });
  }
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Gemini is not configured yet. Add GEMINI_API_KEY in Netlify environment variables, then redeploy." }, { status: 503 });
  }
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid JSON request." }, { status: 400 }); }
  if (!Array.isArray(body.contents) || body.contents.length < 1 || body.contents.length > 12) {
    return Response.json({ error: "Send between 1 and 12 conversation messages." }, { status: 400 });
  }
  const contents = [];
  for (const item of body.contents) {
    if (!item || !["user", "model"].includes(item.role) || !Array.isArray(item.parts)) continue;
    const text = item.parts.map(p => typeof p?.text === "string" ? p.text : "").join("\n").trim();
    if (text && text.length <= 2000) contents.push({ role: item.role, parts: [{ text }] });
  }
  if (!contents.length || contents[contents.length - 1].role !== "user") {
    return Response.json({ error: "Please enter a study question." }, { status: 400 });
  }
  try {
    const upstream = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, {
      method: "POST",
      headers: { "content-type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
        contents,
        generationConfig: { temperature: 0.5, maxOutputTokens: 900 }
      }),
      signal: AbortSignal.timeout(25000)
    });
    const result = await upstream.json().catch(() => ({}));
    if (!upstream.ok) {
      const message = upstream.status === 429 ? "Gemini rate limit or quota reached. Please wait and try again." : upstream.status === 401 || upstream.status === 403 ? "Gemini rejected the API key. Check that the key is valid and Gemini API access is enabled." : "Gemini request failed. Please try again later.";
      return Response.json({ error: message }, { status: upstream.status === 429 ? 429 : 502 });
    }
    const reply = (result.candidates?.[0]?.content?.parts || []).map(p => p.text || "").join("\n").trim();
    if (!reply) return Response.json({ error: "Gemini returned an empty answer. Please try again." }, { status: 502 });
    return Response.json({ reply }, { headers: { "cache-control": "no-store" } });
  } catch (error) {
    return Response.json({ error: "Could not reach Gemini. Check the network and try again." }, { status: 502 });
  }
};
