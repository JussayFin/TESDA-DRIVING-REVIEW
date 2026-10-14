// Optional AI helper. The rest of the site is static and works without this function.
const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const MAX_MESSAGES = 12, MAX_CHARS = 2000, LIMIT = 20, WINDOW_MS = 10 * 60 * 1000;
const hits = new Map(); // best-effort, per warm instance only

const FACTS = `Reference facts (Philippines, checked 2026-10-14; the learner should still confirm with current TESDA/LTO sources):
- TESDA Driving NC II (Training Regulations promulgated Dec 2004) is project-type; core units: Carry Out Minor Vehicle Maintenance and Servicing; Drive Light Vehicle; Obey and Observe Traffic Rules and Regulations; Implement and Coordinate Accident-Emergency Procedures. Evidence is commonly written test, demonstration, oral questioning; items, time, and passing marks vary by assessment center, so do not state numbers.
- RA 4136 Sec. 35 maximums for cars/motorcycles: 80 km/h open country roads; 40 km/h designated through streets; 30 km/h city/municipal streets with light traffic; 20 km/h crowded streets, blind-corner intersections, school zones. Posted or local limits may be lower.
- RA 4136 Sec. 42: vehicle already in the intersection has priority; if two arrive together the left driver yields to the right; unlawful speed forfeits right of way; give way to pedestrians in crosswalks. Overtake on the left (Sec. 39); give way to an overtaking vehicle (Sec. 40).
- RA 8750: driver and front-seat passengers wear seat belts. RA 11229: children 12 and below need a suitable child restraint and may sit in front only if at least 150 cm and belted. RA 10913 Anti-Distracted Driving; RA 10586 Anti-Drunk and Drugged Driving.
- Philippine warning signs are yellow triangles with a red border; regulatory signs are mostly red-bordered circles; Stop is a red octagon; Give Way is an inverted triangle.`;

const SYSTEM_INSTRUCTION = `You are the optional AI Study Companion in DriveReady PH, helping learners prepare for TESDA Driving NC II in the Philippines. Explain clearly in simple English or Filipino, matching the learner. Help with road signs, defensive driving, vehicle inspection, controls, road safety, and practice questions; give one quiz question at a time when asked. Use the reference facts below and do not contradict them. If unsure, say so and point to current TESDA, LTO, or the assessment center. Never present answers as official TESDA exam questions or promise a pass. Never encourage unsafe driving. Stay on driving study topics. Keep answers concise.\n\n${FACTS}`;

const json = (body, status = 200, extra = {}) => Response.json(body, { status, headers: { "cache-control": "no-store", ...extra } });

export default async (request, context) => {
  if (request.method !== "POST") return json({ error: "Use POST for study questions." }, 405, { allow: "POST" });
  const allowed = process.env.ALLOWED_ORIGIN; // optional, e.g. https://your-site.netlify.app
  const origin = request.headers.get("origin");
  if (allowed && origin && origin !== allowed) return json({ error: "Origin not allowed." }, 403);

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return json({ error: "The AI Study Companion is not set up yet." }, 503);

  const ip = context?.ip || request.headers.get("x-nf-client-connection-ip") || "unknown", now = Date.now();
  const recent = (hits.get(ip) || []).filter(t => now - t < WINDOW_MS);
  if (recent.length >= LIMIT) return json({ error: "Too many questions. Please wait a few minutes." }, 429);
  recent.push(now); hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();

  let body;
  try { body = await request.json(); } catch { return json({ error: "Invalid request." }, 400); }
  if (!Array.isArray(body.contents) || !body.contents.length || body.contents.length > MAX_MESSAGES) return json({ error: `Send 1 to ${MAX_MESSAGES} messages.` }, 400);

  const contents = [];
  for (const item of body.contents) {
    if (!item || !["user", "model"].includes(item.role) || !Array.isArray(item.parts)) continue;
    const text = item.parts.map(p => typeof p?.text === "string" ? p.text : "").join("\n").trim().slice(0, MAX_CHARS);
    if (!text) continue;
    if (!contents.length && item.role !== "user") continue; // Gemini needs a user turn first
    const last = contents[contents.length - 1];
    if (last && last.role === item.role) last.parts[0].text += "\n" + text; else contents.push({ role: item.role, parts: [{ text }] });
  }
  if (!contents.length || contents[contents.length - 1].role !== "user") return json({ error: "Please enter a study question." }, 400);

  try {
    const upstream = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, {
      method: "POST",
      headers: { "content-type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify({ systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] }, contents, generationConfig: { temperature: 0.4, maxOutputTokens: 900 } }),
      signal: AbortSignal.timeout(25000)
    });
    const result = await upstream.json().catch(() => ({}));
    if (!upstream.ok) return json({ error: upstream.status === 429 ? "The AI is busy right now. Please try again shortly." : "The AI could not answer right now. Please try again later." }, upstream.status === 429 ? 429 : 502);
    const reply = (result.candidates?.[0]?.content?.parts || []).map(p => p.text || "").join("\n").trim();
    if (!reply) return json({ error: "The AI returned an empty answer. Please try again." }, 502);
    return json({ reply });
  } catch {
    return json({ error: "Could not reach the AI service. Please try again." }, 502);
  }
};
