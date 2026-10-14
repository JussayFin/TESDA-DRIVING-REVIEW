
/* ===== CONTENT (edit here) ===== */
// Question format: [question, [4 options], correctIndex, explanation]
const M=[
{t:"Assessment overview and preparation",s:"Driving NC II checks your driving knowledge and your practical skills. Tasks and criteria follow the current TESDA Training Regulations.",n:["Driving NC II covers written knowledge and practical driving","Exact tasks depend on the current Training Regulations and your assessment center","Prepare with a qualified instructor in a safe practice area"],e:"Before booking, ask your accredited assessment center which vehicle type and tasks will be used.",q:[
["What decides the exact tasks in your Driving NC II assessment?",["A friend's advice","Current TESDA Training Regulations and your assessment center","The car brand","The weather"],1,"Tasks follow the applicable regulations and center requirements."],
["Who should you ask to confirm assessment requirements?",["Any social media post","Your TESDA assessment center","A random driver","Nobody"],1,"Requirements can vary, so confirm with the center."],
["The practice questions on this site are...",["Official TESDA exam items","Guaranteed to match the exam","Unofficial study aids","Required by LTO"],2,"They are unofficial practice only and do not guarantee passing."],
["Driving NC II is assessed through...", ["Written knowledge only", "Knowledge and practical driving", "A photo submission", "Social media activity"], 1, "Assessment covers both knowledge and practical skills."],
["Best way to prepare for the practical part?", ["Practice with a qualified instructor", "Skip practice", "Memorize only signs", "Wait for assessment day"], 0, "Supervised practice builds safe habits."]]},
{t:"Traffic laws, signs, signals, and markings",s:"RA 4136 is the Land Transportation and Traffic Code. Drivers must obey laws, road signs, traffic signals, and pavement markings.",n:["RA 4136 is the Land Transportation and Traffic Code","Obey signs, signals, and pavement markings","Speed limits vary by road type; obey the posted limit","Give way to pedestrians at crosswalks"],e:"A red light at a busy city intersection means stop behind the line, even if no enforcer is present.",q:[
["Which law is the Land Transportation and Traffic Code?",["RA 4136","RA 8750","RA 10054","RA 9003"],0,"RA 4136 is the Land Transportation and Traffic Code."],
["What does a steady red light mean?",["Slow down","Stop","Go if clear","Honk"],1,"Stop behind the line until the light changes."],
["A broken white lane line means you may...",["Never change lanes","Change lanes only when safe","Park on it","Overtake on blind curves"],1,"Check mirrors, blind spot, and signal first."],
["A double solid yellow center line means...", ["You may overtake freely", "Do not overtake or cross it", "Parking is allowed", "Speed up"], 1, "It separates opposing traffic."],
["Pedestrians are crossing at a crosswalk. You should...", ["Honk", "Give way", "Speed up", "Overtake"], 1, "Pedestrians have priority at crosswalks."]]},
{t:"Defensive driving and road safety",s:"Defensive driving means expecting other road users to make mistakes and keeping enough space and time to react.",n:["Expect mistakes from others","Keep a gap of at least 3 seconds; more in rain","Scan ahead, mirrors, and blind spots often","Never drive tired, drunk, or distracted"],e:"Jeepneys and tricycles stop suddenly to load passengers, so leave extra space behind them.",q:[
["A safe following distance is about...",["Bumper to bumper","A 3-second gap","One meter","No gap needed"],1,"Count three seconds after the car ahead passes a fixed object. Use more in rain."],
["Which is distracted driving?",["Checking mirrors","Texting while driving","Signaling","Wearing a seatbelt"],1,"Phones take your eyes and mind off the road."],
["In heavy rain you should...",["Speed up","Slow down and add distance","Turn off lights","Tailgate"],1,"Wet roads need longer stopping distance."],
["Which is NOT a defensive driving habit?", ["Scanning ahead", "Tailgating", "Checking mirrors", "Keeping space"], 1, "Tailgating removes your reaction time."],
["If you feel sleepy while driving you should...", ["Keep going", "Stop in a safe place and rest", "Open the window and speed up", "Turn up the music"], 1, "Drowsy driving is dangerous. Rest before continuing."]]},
{t:"Pre-driving vehicle inspection",s:"Inspect the vehicle before every trip to find problems early. A common Filipino memory aid is BLOWBAGETS.",n:["BLOWBAGETS: Battery, Lights, Oil, Water, Brakes, Air, Gas, Engine, Tires, Self","Walk around the vehicle and look underneath for leaks","Check tire pressure, tread, and damage","'Self' means you are rested, sober, and ready to drive"],e:"Before a provincial trip, check tires and coolant; long, hot roads stress both.",q:[
["BLOWBAGETS is a memory aid for...",["Pre-driving vehicle checks","Road signs","Traffic fines","Parking rules"],0,"It lists Battery, Lights, Oil, Water, Brakes, Air, Gas, Engine, Tires, Self."],
["Which is part of the tire check?",["Pressure and condition","Radio volume","Air freshener","Paint color"],0,"Check pressure, tread, cracks, and bulges."],
["Why walk around the vehicle before driving?",["To spot leaks, damage, and obstacles","To wash it","To skip the seatbelt","To warm the radio"],0,"A walk-around finds problems before they become hazards."],
["The 'W' in BLOWBAGETS includes checking...", ["Radiator coolant level", "Drinking water", "Car wash", "Rain"], 0, "Check coolant and washer water."],
["Which check belongs under 'Lights'?", ["Headlights, brake lights, and signals", "Tire tread", "Oil level", "Seat position"], 0, "Make sure all lights work and are clean."]]},
{t:"Vehicle controls and instruments",s:"Know the pedals, steering, gear selector, handbrake, switches, and dashboard warning lights before you drive.",n:["Manual pedals from left: clutch, brake, accelerator","Automatic cars have only brake and accelerator","Red warning lights need immediate attention","Locate horn, wipers, lights, and handbrake"],e:"In stop-and-go city traffic, watch the temperature gauge; engines can overheat.",q:[
["In a manual car, the clutch pedal is...",["Left","Middle","Right","Not present"],0,"Manual order from left: clutch, brake, accelerator."],
["A red brake or oil warning light means...",["Ignore it","Stop safely and check","Speed up","Turn on the aircon"],1,"Red lights signal serious problems."],
["Before starting an automatic car, it should be in...",["Reverse","Park (P) with foot on brake","Drive","Low"],1,"Park (or Neutral) prevents sudden movement."],
["The handbrake is used mainly to...", ["Hold the parked vehicle in place", "Speed up", "Turn the engine on", "Clean the windshield"], 0, "Apply it when parking."],
["Which controls clean the windshield?", ["Wipers and washer", "Horn", "Handbrake", "Clutch"], 0, "Use wipers and washer for clear visibility."]]},
{t:"Starting, moving, turning, reversing, parking, stopping",s:"Basic maneuvers need observation, signaling, smooth control, and correct speed.",n:["Observe, signal, then move off when clear","Brake early and smoothly","Reverse slowly while looking behind","Park, apply the handbrake, and select P or first gear"],e:"On a narrow barangay street, check for motorcycles on both sides before pulling over.",q:[
["Before moving off you should...",["Honk","Check mirrors and blind spot","Rev the engine","Look away"],1,"Observe, then signal and move when clear."],
["When reversing you should...",["Look behind and go slowly","Go fast","Rely on the horn only","Look only forward"],0,"Turn to look behind and keep speed low."],
["After parking you should...",["Leave it running","Apply the handbrake and secure the car","Leave doors open","Block traffic"],1,"Secure the vehicle: handbrake, P or gear, engine off."],
["When braking, you should...", ["Brake early and smoothly", "Brake suddenly at the last second", "Pump the horn", "Close your eyes"], 0, "Smooth braking keeps control."],
["Before turning you should...", ["Signal and slow down", "Speed up", "Turn off the lights", "Stop signaling"], 0, "Signal early and reduce speed."]]},
{t:"Road positioning, lane changing, intersections",s:"Stay in your lane, signal early, and give way correctly at intersections.",n:["Keep to your lane; signal before changing lanes","Check blind spots every time","A vehicle already in the intersection has priority","If two arrive together, the left-side driver yields to the right (RA 4136)"],e:"At unmarked junctions, slow down and expect motorcycles to filter through gaps.",q:[
["Before changing lanes you should...",["Signal and check mirrors and blind spot","Brake hard","Honk only","Speed up"],0,"Signal early and make sure it is safe."],
["Two vehicles reach an uncontrolled intersection together. Who yields?",["Driver on the left yields to the right","Driver on the right","The faster vehicle","Whoever honks"],0,"RA 4136 gives way to the vehicle on the right."],
["On a curve you should...",["Stay in your lane","Cut the corner","Use the opposite lane","Stop in the middle"],0,"Slow before the curve and keep lane position."],
["When should you signal a lane change?", ["Early, before you move", "After you move", "Never", "Only at night"], 0, "Signal first, then move when clear."],
["A blind spot is...", ["An area not visible in your mirrors", "A broken light", "A type of sign", "A parking space"], 0, "Turn your head to check it."]]},
{t:"Basic maintenance and common problems",s:"Simple regular checks prevent breakdowns and keep the vehicle safe.",n:["Check engine oil with the dipstick on level ground","Check coolant only when the engine is cool","Check brake fluid, battery terminals, and wipers","Check tire pressure when tires are cold"],e:"After driving through floodwater, test your brakes lightly and have the vehicle checked.",q:[
["Tire pressure is best checked when tires are...",["Cold","After a long drive","Flat only","Wet only"],0,"Warm tires read higher."],
["Engine oil level is checked with...",["A dipstick","The horn","The wiper","The mirror"],0,"Park level, engine off, wipe and reinsert the dipstick."],
["If the brake pedal feels spongy you should...",["Keep driving","Have the brakes checked before driving","Ignore it","Add air freshener"],1,"It may mean low fluid or air in the lines."],
["Coolant should be checked when the engine is...", ["Cool", "Very hot", "Running at high speed", "Overheating"], 0, "Opening a hot radiator cap can cause burns."],
["Worn wiper blades should be...", ["Replaced", "Ignored", "Painted", "Removed only"], 0, "Good wipers are needed for visibility in rain."]]},
{t:"Emergency procedures and hazard awareness",s:"Stay calm in emergencies. Make the vehicle visible and protect yourself and others.",n:["Tire blowout: grip the wheel, ease off the accelerator, brake gently","Breakdown: hazard lights, warning device, move to a safe place","Give way to ambulances, fire trucks, and police with sirens","Stay calm and keep your distance"],e:"On a flooded road during the rainy season, avoid deep water and do not stop in the middle of it.",q:[
["During a tire blowout you should...",["Brake hard","Grip the wheel and ease off the accelerator","Steer sharply","Accelerate"],1,"Hard braking or sharp steering can cause loss of control."],
["If your vehicle breaks down on the road...",["Switch on hazard lights and place a warning device","Leave it dark","Stand in traffic","Remove the plate"],0,"Make the vehicle visible and move to safety."],
["An ambulance with siren approaches. You should...",["Safely move aside and give way","Speed up","Stop in the middle","Block it"],0,"Give way without causing a crash."],
["If the brakes seem to fail you should...", ["Pump the brakes, downshift, and use the handbrake gradually", "Jump out of the car", "Accelerate", "Close your eyes"], 0, "Slow the vehicle in steps and steer to a safe place."],
["Hazard lights are used when...", ["Your vehicle is stopped and a danger to others", "Driving normally", "Overtaking", "Parking at home"], 0, "They warn others of a breakdown or danger."]]},
{t:"Practical assessment checklist and common mistakes",s:"Calm, consistent habits (mirror, signal, observe) are easy to show and help in any assessment.",n:["Do cockpit checks every time: seat, mirrors, seatbelt","Signal and observe before every move","Come to a full stop at stop signs","Avoid stalling, rolling back, and hitting cones; finish with a safe shutdown"],e:"Practice the same routine on every drive so it becomes automatic on assessment day.",q:[
["A common practical mistake is...",["Skipping mirror and seatbelt checks","Signaling early","Observing","Smooth braking"],0,"Always do cockpit checks before moving."],
["At a stop sign you should...",["Come to a full stop","Roll through","Honk and go","Speed up"],0,"Full stop, observe, then proceed when safe."],
["When the drive ends you should...",["Secure the car: handbrake, engine off","Leave it running","Leave lights on","Abandon it"],0,"Safe shutdown is part of good practice."],
["Which shows good practical driving habits?", ["Smooth control and constant observation", "Fast driving", "Ignoring signals", "Skipping checks"], 0, "Safe, smooth, observant driving is what matters."],
["If you stall during the practical you should...", ["Stay calm, secure the car, and restart safely", "Panic", "Leave the car", "Hit the accelerator"], 0, "Set the handbrake, check surroundings, then restart."]]}
];
// Supplemental original practice questions. These are study aids, not official exam items.
const EXTRA=[
[
["What should you do if an instruction from another road user conflicts with a traffic sign?",["Follow the other road user", "Obey the applicable sign and law, proceeding safely", "Ignore both", "Stop permanently"],1,"Follow applicable traffic controls and proceed safely; seek clarification from an authorized instructor when learning."],
["Before a long drive, what is a sensible preparation?",["Skip the vehicle check", "Plan the route, rest, and inspect the vehicle", "Drive until tired", "Rely only on the fuel gauge"],1,"Plan ahead, be rested, and inspect the vehicle before leaving."]
],
[
["At a STOP sign, when may you proceed?",["After slowing slightly", "After a complete stop and checking that it is safe", "If the road looks empty from far away", "Only after honking"],1,"Come to a complete stop, observe, and proceed only when safe."],
["A traffic enforcer directs you differently from a traffic light. What is the safest action?",["Ignore the enforcer", "Follow the authorized enforcer's direction safely", "Follow whichever is faster", "Close your eyes and proceed"],1,"Authorized traffic directions should be followed safely." ]
],
[
["Why should you leave an escape space around your vehicle?",["To encourage others to cut in", "To give yourself room to react to hazards", "To drive faster", "To avoid checking mirrors"],1,"Space around the vehicle gives you options if traffic changes suddenly."],
["A motorcycle is in your blind spot. Before changing lanes, you should...",["Move immediately", "Check the blind spot and wait until the lane is clear", "Flash high beams and move", "Rely only on the rear-view mirror"],1,"Mirrors do not show every area; check the blind spot before moving." ]
],
[
["A tire has a visible bulge. What should you do?",["Ignore it until the next service", "Avoid driving on it and arrange a safe repair or replacement", "Inflate it beyond the recommended pressure", "Drive faster to test it"],1,"A bulge can indicate tire damage and risk of failure."],
["Where should you find the recommended tire pressure?",["A random online comment", "The vehicle manual or manufacturer label", "The tire's color", "The radio display"],1,"Use the manufacturer's recommended pressure, typically listed in the manual or vehicle label." ]
],
[
["What should you do if a dashboard warning light appears while driving?",["Ignore every warning light", "Assess the warning, stop safely if needed, and consult the manual", "Cover the light", "Accelerate"],1,"Warning meanings differ; follow the vehicle manual and stop safely for serious warnings."],
["Before using a vehicle you are unfamiliar with, you should...",["Start driving immediately", "Locate the controls and understand the vehicle's operating instructions", "Disable the mirrors", "Guess which pedal is the brake"],1,"Familiarize yourself with controls before moving." ]
],
[
["When approaching a blind corner, you should...",["Speed up to clear it", "Slow down and keep to your side of the road", "Overtake without looking", "Drive in the center"],1,"Reduce speed and maintain lane position when visibility is limited."],
["When parking on a slope, what matters most?",["Leaving the vehicle in neutral only", "Securing the vehicle with the parking brake and the correct gear/park setting", "Leaving the engine running", "Turning off all safety systems"],1,"Secure the vehicle and follow the vehicle manual and instructor's guidance for slope parking." ]
],
[
["You need to change lanes in heavy traffic. You should...",["Force your way in", "Signal, check mirrors and blind spot, and move only when a safe gap exists", "Turn without signaling", "Look only at the dashboard"],1,"Signal and observe; never force a lane change."],
["If an intersection is blocked by traffic ahead, you should...",["Enter and block cross traffic", "Wait before the intersection until there is room to clear it", "Use the opposite lane", "Follow the vehicle in front regardless"],1,"Do not enter an intersection unless you can proceed without blocking it." ]
],
[
["What should you do if the vehicle begins to skid?",["Make abrupt steering inputs", "Ease off the accelerator and steer smoothly toward the intended path", "Accelerate hard", "Close your eyes"],1,"Avoid sudden actions; follow your instructor's guidance for the vehicle and conditions."],
["When should you use headlights?",["Only when you want other drivers to move", "When visibility or conditions require them, and as required by law", "Never in rain", "Only on empty roads"],1,"Use lights to see and be seen in low visibility and as required by law." ]
],
[
["If you miss a turn, the safest choice is to...",["Reverse in traffic", "Continue safely and find a legal place to turn around", "Turn suddenly across lanes", "Stop in the travel lane"],1,"Never make a sudden or unsafe maneuver; reroute safely."],
["During a practical assessment, if you are unsure of an instruction, you should...",["Guess and act immediately", "Ask the assessor to repeat or clarify it before proceeding", "Ignore the instruction", "Drive faster"],1,"Clarifying an instruction is safer than guessing." ]
]
];
M.forEach((m,i)=>{ if(EXTRA[i]) m.q.push(...EXTRA[i]); });

const C=[
["Documents and preparation",["Bring valid ID and the requirements from your center","Wear closed shoes and comfortable clothes","Rest well and arrive early"]],
["Pre-driving safety checks",["Walk around the vehicle","Check tires, lights, and leaks","Check oil, coolant, brake fluid, and fuel"]],
["Seat, mirror, and seatbelt",["Adjust the seat to reach the pedals","Adjust inside and side mirrors","Fasten the seatbelt"]],
["Controls and instruments",["Check gear selector and handbrake","Check horn, wipers, and lights","Check dashboard warning lights"]],
["Safe starting and stopping",["Check surroundings before moving","Move off smoothly","Brake early and smoothly"]],
["Signaling and observation",["Signal before turning or changing lanes","Check mirrors and blind spots","Scan ahead continuously"]],
["Turning, reversing, parking",["Slow down before turns","Reverse while looking behind","Park straight and secure the vehicle"]],
["Defensive driving and compliance",["Obey signs and signals","Keep a safe distance","Yield correctly"]],
["Shutdown and post-driving",["Apply handbrake, select P or neutral","Engine off, lights off","Take belongings and lock the vehicle"]]];
const lite=(a,b,c)=>`<svg viewBox="0 0 60 60" aria-hidden="true"><rect x="18" y="4" width="24" height="52" rx="6" fill="#222"/><circle cx="30" cy="16" r="7" fill="${a}"/><circle cx="30" cy="30" r="7" fill="${b}"/><circle cx="30" cy="44" r="7" fill="${c}"/></svg>`;
const ln=x=>`<svg viewBox="0 0 60 60" aria-hidden="true"><rect width="60" height="60" fill="#555"/>${x}</svg>`;
const SG={
stop:'<svg viewBox="0 0 60 60" aria-hidden="true"><polygon points="18,4 42,4 56,18 56,42 42,56 18,56 4,42 4,18" fill="#c0392b"/><text x="30" y="35" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">STOP</text></svg>',
give:'<svg viewBox="0 0 60 60" aria-hidden="true"><polygon points="6,8 54,8 30,52" fill="#fff" stroke="#c0392b" stroke-width="6" stroke-linejoin="round"/></svg>',
noent:'<svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="26" fill="#c0392b"/><rect x="14" y="25" width="32" height="10" fill="#fff"/></svg>',
speed:'<svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="25" fill="#fff" stroke="#c0392b" stroke-width="6"/><text x="30" y="36" font-size="18" font-weight="700" text-anchor="middle" fill="#111">60</text></svg>',
warn:'<svg viewBox="0 0 60 60" aria-hidden="true"><polygon points="30,3 57,30 30,57 3,30" fill="#f4c20d" stroke="#111" stroke-width="3"/><text x="30" y="38" font-size="22" font-weight="700" text-anchor="middle" fill="#111">!</text></svg>',
curve:'<svg viewBox="0 0 60 60" aria-hidden="true"><polygon points="30,3 57,30 30,57 3,30" fill="#f4c20d" stroke="#111" stroke-width="3"/><path d="M24 45 V30 Q24 20 35 20 H39" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/></svg>',
ped:'<svg viewBox="0 0 60 60" aria-hidden="true"><polygon points="30,3 57,30 30,57 3,30" fill="#f4c20d" stroke="#111" stroke-width="3"/><circle cx="30" cy="19" r="4" fill="#111"/><path d="M30 24 L26 34 L35 36 M27 31 L20 35 M29 34 L25 43 M31 34 L39 42" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/></svg>',
slip:'<svg viewBox="0 0 60 60" aria-hidden="true"><polygon points="30,3 57,30 30,57 3,30" fill="#f4c20d" stroke="#111" stroke-width="3"/><path d="M17 23 H42 M20 29 H39 M17 35 H42 M22 41 H38" stroke="#111" stroke-width="2.5"/><path d="M31 18 L27 25 L33 30 L28 37" fill="none" stroke="#111" stroke-width="3"/></svg>',
inter:'<svg viewBox="0 0 60 60" aria-hidden="true"><polygon points="30,3 57,30 30,57 3,30" fill="#f4c20d" stroke="#111" stroke-width="3"/><path d="M26 14 V46 M14 30 H46" stroke="#111" stroke-width="4"/></svg>',
info:'<svg viewBox="0 0 60 60" aria-hidden="true"><rect x="6" y="10" width="48" height="40" rx="4" fill="#1d4ed8"/><text x="30" y="38" font-size="22" font-weight="700" fill="#fff" text-anchor="middle">i</text></svg>',
red:lite("#e53935","#555","#555"),yel:lite("#555","#fbc02d","#555"),grn:lite("#555","#555","#43a047"),
dash:ln('<line x1="30" y1="2" x2="30" y2="58" stroke="#fff" stroke-width="4" stroke-dasharray="10 8"/>'),
solid:ln('<line x1="30" y1="0" x2="30" y2="60" stroke="#fff" stroke-width="4"/>'),
dbl:ln('<line x1="26" y1="0" x2="26" y2="60" stroke="#f4c20d" stroke-width="4"/><line x1="34" y1="0" x2="34" y2="60" stroke="#f4c20d" stroke-width="4"/>'),
cross:ln([6,16,26,36,46].map(x=>`<rect x="${x}" y="8" width="6" height="44" fill="#fff"/>`).join(''))};
const SIGNS=[
["Regulatory","Stop","stop","Come to a complete stop, look, and go only when it is safe."],
["Regulatory","Give way","give","Slow down and yield to traffic that has the right of way."],
["Regulatory","No entry","noent","Vehicles may not enter this road or lane."],
["Regulatory","Speed limit","speed","The number is the maximum speed in km/h."],
["Warning","Curve ahead","curve","Slow down before the bend and keep to your lane."],
["Warning","Pedestrian crossing","ped","Expect people crossing. Be ready to stop."],
["Warning","Slippery road","slip","Reduce speed and avoid hard braking."],
["Warning","Intersection ahead","inter","Prepare to slow down and watch cross traffic."],
["Informative","Hospital","info","Shows a hospital nearby. Give way to ambulances."],
["Informative","Parking","info","Shows where parking is allowed. Read any time or vehicle limits."],
["Informative","Direction sign","info","Guides you to towns, roads, or places and shows distances."],
["Traffic signals","Red light","red","Stop behind the stop line."],
["Traffic signals","Yellow light","yel","Prepare to stop. Do not speed up to beat the red."],
["Traffic signals","Green light","grn","Go only if the intersection is clear."],
["Pavement markings","Broken white line","dash","Separates lanes in the same direction. Change lanes only when safe."],
["Pavement markings","Solid white line","solid","Stay in your lane and avoid changing lanes."],
["Pavement markings","Double solid yellow line","dbl","Separates opposing traffic. Do not overtake or cross."],
["Pavement markings","Pedestrian crossing","cross","Give way to pedestrians. Do not stop on the crosswalk."]];
const CATS=["Regulatory","Warning","Informative","Traffic signals","Pavement markings"];

/* ===== STATE ===== */
const $=s=>document.querySelector(s),K='tesdaNC2';
let S={done:{},bm:{},qb:{},sc:[],st:{},ck:{},goal:2,td:{d:'',n:0},dm:0,lastMod:0};
try{Object.assign(S,JSON.parse(localStorage.getItem(K)||'{}'))}catch(e){}
const bar=p=>`<div class="bar" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><i style="width:${p}%"></i></div>`;
const nDone=()=>M.filter((m,i)=>S.done[i]).length,pct=()=>Math.round(nDone()/M.length*100);
const today=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const nChk=()=>C.reduce((a,s,i)=>a+s[1].filter((x,j)=>S.ck[i+'-'+j]).length,0),tChk=C.reduce((a,s)=>a+s[1].length,0);
function save(){try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}hdr();if(Z){Z.end?res():rQ()}else go(cur,arg)}
function hdr(){$('#hp').textContent=pct()+'%';document.documentElement.dataset.dark=S.dm?1:0}
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const allQ=()=>M.flatMap((m,i)=>m.q.map((q,j)=>({id:i+'-'+j,m:i,t:q[0],o:q[1],a:q[2],x:q[3]})));
const qById=id=>allQ().find(q=>q.id==id);

/* ===== NAVIGATION ===== */
const NAV=[["home","🏠","Dashboard"],["mods","📚","Modules"],["prac","📝","Practice"],["mock","⏱","Mock exam"],["chk","✅","Practical"],["sign","🛑","Road signs"],["study","✦","AI Study Companion"],["prog","📊","Progress"],["flash","🃏","Flashcards"],["src","🔗","Sources"]];
let cur="home",arg=null,Z=null,T=null,onlyBm=false,tab=CATS[0],flashIndex=0,flashFlip=false;
function toggleNav(){if(innerWidth<=760){document.body.classList.toggle('nav-open')}else{document.body.classList.toggle('min')}}
function closeNav(){document.body.classList.remove('nav-open')}
function nav(x){$('#nav').innerHTML=`<div class="nav-brand"><span class="brand-mark">🚗</span><span>DriveReady PH</span></div><button class="new-session" onclick="go('home')"><span>＋</span><em>New study session</em></button><div class="nav-label">STUDY</div>`+NAV.map(n=>`<button class="${n[0]==x?'on':''}" aria-label="${n[2]}" onclick="go('${n[0]}')"><span aria-hidden="true">${n[1]}</span><em>${n[2]}</em></button>`).join('')+`<div class="nav-bottom"><div class="nav-tip">Keep learning a little every day.</div><button class="nav-profile" onclick="go('prog')"><span class="profile-dot">DR</span><em><b>Driving NC II</b><small>Study companion</small></em><span class="profile-more">•••</span></button></div>`}
function go(v,a){closeNav();clearInterval(T);Z=null;cur=v;arg=a;if(v==='mod'&&Number.isInteger(a)&&M[a]){S.lastMod=a;try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}}nav(v=='mod'?'mods':v);$('#v').innerHTML=R[v](a);hdr()}
const link=(v,a,t,c)=>`<button class="btn ${c||''}" onclick="go('${v}'${a!==undefined?','+a:''})">${t}</button>`;
const stat=(t,b,p,btn)=>`<div class="card"><h3>${t}</h3><p class="mu">${b}</p>${p!==undefined?bar(p):''}<div class="row">${btn}</div></div>`;

const R={
home(){const first=M.findIndex((m,i)=>!S.done[i]),last=Number.isInteger(S.lastMod)&&M[S.lastMod]&&!S.done[S.lastMod]?S.lastMod:-1,nx=last>=0?last:first,td=S.td.d==today()?S.td.n:0,gp=Math.min(100,Math.round(td/S.goal*100));
return `<h1>Welcome back</h1><p class="mu">Unofficial study companion for TESDA Driving NC II. Not affiliated with TESDA or LTO.</p><div class="grid">
${stat("Continue Learning",nx<0?"All modules completed. Review with a mock exam.":`Next: Module ${nx+1}, ${M[nx].t}`,pct(),nx<0?link('mock',undefined,'Start mock exam'):link('mod',nx,'Continue'))}
${stat("Study Modules",`${nDone()} done, ${M.length-nDone()} remaining`,pct(),link('mods',undefined,'Open modules'))}
${stat("Practice Exam","10 random unofficial practice questions with instant feedback.",undefined,link('prac',undefined,'Start practice')+link('mock',undefined,'Mock exam','gh'))}
${stat("Practical Assessment",`${nChk()} of ${tChk} checklist items done`,Math.round(nChk()/tChk*100),link('chk',undefined,'Open checklist'))}
${stat("Daily Study Goal",`${td} of ${S.goal} lessons today`,gp,`<button class="btn gh" aria-label="Decrease goal" onclick="goal(-1)">−</button><button class="btn gh" aria-label="Increase goal" onclick="goal(1)">+</button>`)}
${stat("Progress","Scores, bookmarks, and topics to improve.",undefined,link('prog',undefined,'View progress')+link('sign',undefined,'Road signs','gh'))}</div>`},
mods(){const l=M.map((m,i)=>[m,i]).filter(x=>!onlyBm||S.bm[x[1]]);
return `<h1>Study modules</h1><div class="row"><label><input type="checkbox" ${onlyBm?'checked':''} onchange="onlyBm=this.checked;go('mods')"> Show bookmarked only</label></div><div class="grid" style="margin-top:12px">${l.map(([m,i])=>`<div class="card"><h3>${S.bm[i]?'★ ':''}Module ${i+1}</h3><p><b>${m.t}</b></p><p class="mu sm">${S.done[i]?'✓ Completed':'Not completed'}</p><div class="row">${link('mod',i,'Open')}</div></div>`).join('')||'<p class="mu">No bookmarked modules yet.</p>'}</div>`},
mod(i){const m=M[i];return `${link('mods',undefined,'← All modules','gh')}<section class="card" style="margin-top:12px"><h2>Module ${i+1}: ${m.t}</h2><p>${m.s}</p><h3>Key takeaways</h3><ul>${m.n.map(x=>`<li>${x}</li>`).join('')}</ul><div class="ex"><b>Philippine example:</b> ${m.e}</div><div class="row"><button class="btn" onclick="mark(${i})">${S.done[i]?'✓ Completed (undo)':'Mark as completed'}</button><button class="btn gh" onclick="bmod(${i})">${S.bm[i]?'★ Bookmarked':'☆ Bookmark'}</button><button class="btn gh" onclick="qm(${i})">Take quiz (${m.q.length} questions)</button></div></section><div class="row">${i>0?link('mod',i-1,'← Previous','gh'):''}${i<M.length-1?link('mod',i+1,'Next →','gh'):''}</div>`},
prac(){return `<section class="card"><h1>Practice exam</h1><p>10 random multiple-choice questions with instant feedback and explanations.</p><p class="mu sm">Unofficial practice questions. They are not actual TESDA exam items and do not guarantee passing.</p><div class="row"><button class="btn" onclick="startQ({k:'Practice',nav:'prac',fb:1,gen:()=>shuffle(allQ()).slice(0,10)})">Start practice</button><button class="btn gh" onclick="startWeak()">Review weak topics</button><button class="btn gh" onclick="go('flash')">Study flashcards</button></div></section>`},
mock(){const h=S.sc.filter(s=>s.k=='Mock exam').slice(-5).reverse();return `<section class="card"><h1>Mock examination</h1><p>${allQ().length} questions, 50-minute timer, no feedback until you finish. Final score and full answer review at the end.</p><p class="mu sm">Unofficial practice only. Real assessments follow TESDA and your assessment center.</p><div class="row"><button class="btn" onclick="startQ({k:'Mock exam',nav:'mock',fb:0,time:3000,gen:()=>shuffle(allQ())})">Start mock exam</button></div></section><section class="card"><h3>Recent mock results</h3>${h.length?`<table>${h.map(s=>`<tr><td>${s.d}</td><td>${s.s}/${s.n}</td><td>${Math.round(s.s/s.n*100)}%</td></tr>`).join('')}</table>`:'<p class="mu">No mock exams yet.</p>'}</section>`},
chk(){return `<h1>Practical assessment checklist</h1><section class="card"><b>${nChk()} of ${tChk} done</b>${bar(Math.round(nChk()/tChk*100))}<p class="mu sm">The exact assessment tasks depend on the applicable TESDA Training Regulations and your assessment center. Use this as a general guide and confirm with your center.</p></section>${C.map((s,i)=>`<section class="card"><h3>${s[0]}</h3>${s[1].map((x,j)=>`<label class="chk"><input type="checkbox" ${S.ck[i+'-'+j]?'checked':''} onchange="ck('${i}-${j}',this.checked)"><span>${x}</span></label>`).join('')}</section>`).join('')}<button class="btn gh" onclick="if(confirm('Clear all checklist items?')){S.ck={};save()}">Reset checklist</button>`},
sign(){return `<h1>Road signs reviewer</h1><div class="tabs" role="tablist">${CATS.map(c=>`<button role="tab" aria-selected="${c==tab}" class="btn gh ${c==tab?'on':''}" onclick="tab='${c}';go('sign')">${c}</button>`).join('')}</div><div class="grid">${SIGNS.filter(s=>s[0]==tab).map(sgCard).join('')}</div><p class="mu sm">Graphics are simple original illustrations. Exact official designs and colors are in the DPWH/LTO sign manuals.</p>`},
find(t){t=(t||'').toLowerCase().trim();const ms=M.map((m,i)=>[m,i]).filter(([m])=>(m.t+' '+m.s+' '+m.e+' '+m.n.join(' ')+' '+m.q.map(q=>q.join(' ')).join(' ')).toLowerCase().includes(t)),ss=SIGNS.filter(s=>(s[0]+' '+s[1]+' '+s[3]).toLowerCase().includes(t));
return `<h1>Search results</h1>${ms.length?`<h3>Lessons</h3><div class="grid">${ms.map(([m,i])=>`<div class="card"><b>Module ${i+1}</b><p>${m.t}</p>${link('mod',i,'Open')}</div>`).join('')}</div>`:''}${ss.length?`<h3 style="margin-top:16px">Signs</h3><div class="grid">${ss.map(sgCard).join('')}</div>`:''}${ms.length+ss.length?'':'<p class="mu">Nothing found. Try another word.</p>'}`},
prog(){const bad=Object.keys(S.st).filter(i=>{const x=S.st[i],n=x.c+x.w;return n&&x.c/n<.7&&M[i]}),qb=Object.keys(S.qb).map(qById).filter(Boolean);
return `<h1>Progress and review</h1><p class="mu sm">Progress is stored locally in this browser. Use the backup tools below to move it to another device.</p><div class="grid"><div class="card"><h3>Lessons completed</h3><p class="big">${nDone()}/${M.length}</p>${bar(pct())}</div><div class="card"><h3>Practical checklist</h3><p class="big">${nChk()}/${tChk}</p>${bar(Math.round(nChk()/tChk*100))}</div></div>
<section class="card" style="margin-top:16px"><h3>Topics needing improvement</h3>${bad.length?bad.map(i=>`<div class="row"><span>${M[i].t} (${Math.round(S.st[i].c/(S.st[i].c+S.st[i].w)*100)}% correct)</span>${link('mod',i,'Review','gh')}</div>`).join(''):'<p class="mu">None yet. Topics under 70% correct appear here.</p>'}</section>
<section class="card"><h3>Quiz and mock exam scores</h3>${S.sc.length?`<table>${S.sc.slice(-12).reverse().map(s=>`<tr><td>${s.d}</td><td>${s.k}</td><td>${s.s}/${s.n}</td><td>${Math.round(s.s/s.n*100)}%</td></tr>`).join('')}</table>`:'<p class="mu">No scores yet. Take a quiz to get started.</p>'}</section>
<section class="card"><h3>Bookmarked questions</h3>${qb.length?qb.map(q=>`<div class="rev"><p><b>${q.t}</b></p><p class="gt">${q.o[q.a]}</p><p class="mu sm">${q.x}</p><button class="btn gh" onclick="bq('${q.id}')">★ Remove bookmark</button></div>`).join(''):'<p class="mu">No bookmarked questions yet.</p>'}</section>
<section class="card"><h3>Back up your progress</h3><p class="mu sm">Your progress is saved only in this browser on this device. Export a backup before clearing browser data or switching devices.</p><div class="row"><button class="btn" onclick="exportProgress()">Download progress backup</button><button class="btn gh" onclick="document.getElementById('restoreProgressFile').click()">Restore backup</button><input id="restoreProgressFile" type="file" accept="application/json,.json" hidden onchange="importProgress(this)"></div></section>
<button class="btn" onclick="startWeak()">Review weak topics</button> <button class="btn gh" onclick="go('flash')">Study flashcards</button> <button class="btn gh" onclick="if(confirm('Delete all saved progress on this device?')){S={done:{},bm:{},qb:{},sc:[],st:{},ck:{},goal:2,td:{d:'',n:0},dm:S.dm,lastMod:0};save()}">Reset all progress</button>`},
flash(){const qs=allQ(),q=qs[((flashIndex%qs.length)+qs.length)%qs.length];return `<h1>Flashcards</h1><p class="mu">Review questions, answers, and explanations. Use these as quick recall practice.</p><section class="card flashcard"><div class="pill">Card ${((flashIndex%qs.length)+qs.length)%qs.length+1} of ${qs.length} · ${M[q.m].t}</div><div class="flashface"><p class="mu sm">${flashFlip?'ANSWER':'QUESTION'}</p><h2>${flashFlip?q.o[q.a]:q.t}</h2>${flashFlip?`<p>${q.x}</p>`:''}</div><div class="row"><button class="btn" onclick="flashFlip=!flashFlip;go('flash')">${flashFlip?'Show question':'Reveal answer'}</button><button class="btn gh" onclick="flashMove(-1)">← Previous</button><button class="btn gh" onclick="flashMove(1)">Next →</button><button class="btn gh" onclick="flashShuffle()">Shuffle</button></div><p class="mu sm">Practice questions are unofficial and are not actual TESDA exam items.</p></section><section class="card"><h3>How to study</h3><p>Try to answer before revealing the answer. Revisit questions you miss and read the explanation.</p></section>`},
study(){return `<div class="ai-shell"><div class="ai-intro"><div class="ai-orb">✦</div><h1>AI Study Companion</h1><p class="mu">Your personal Driving NC II tutor, powered by Gemini.</p><p class="mu sm">Ask in English or Filipino. Get explanations, practice questions, and safe-driving tips.</p></div><div id="aiPrompts" class="ai-prompts" ${AI_HISTORY.length?'hidden':''}><button class="ai-prompt" onclick="askSuggestion('Explain BLOWBAGETS in a simple way.')">🚗 Explain BLOWBAGETS</button><button class="ai-prompt" onclick="askSuggestion('Quiz me on Philippine road signs, one question at a time.')">🛑 Quiz me on road signs</button><button class="ai-prompt" onclick="askSuggestion('Explain defensive driving with examples in the Philippines.')">🛡 Defensive driving tips</button><button class="ai-prompt" onclick="askSuggestion('Give me a 5-question Driving NC II practice quiz, one question at a time.')">📝 Practice for my exam</button></div><div id="aiThread" class="ai-thread" aria-live="polite">${renderAIHistory()}</div><form class="ai-compose" onsubmit="sendAI(event)"><textarea id="aiInput" maxlength="2000" rows="2" placeholder="Ask your study companion…" aria-label="Message your AI study companion"></textarea><div class="ai-compose-foot"><span class="ai-status" id="aiStatus">Gemini · Study help</span><button class="btn" id="aiSend" type="submit">Send ↑</button></div></form><p class="ai-note">AI answers can be wrong. Verify legal rules and assessment requirements with current TESDA/LTO sources.</p></div>`},
src(){return `<h1>Sources</h1><section class="card"><ul><li><a href="https://www.tesda.gov.ph/Downloadables/TR%20-%20DRIVING%20NC%20II.pdf" target="_blank" rel="noopener">TESDA Driving NC II Training Regulations (PDF)</a></li><li><a href="https://www.tesda.gov.ph/Download/Training_Regulations?SearchTitle=driving&amp;Searchcat=Training+Regulations" target="_blank" rel="noopener">TESDA Training Regulations directory</a></li><li><a href="https://lto.gov.ph/wp-content/uploads/2023/10/FDM-Vol.-1-2nd-Edition.pdf" target="_blank" rel="noopener">LTO Driver’s Manual, Volume 1 (PDF)</a></li><li><a href="https://portal.lto.gov.ph/ords/f?p=ELEARNING:HOME" target="_blank" rel="noopener">LTO LTMS eLearning</a></li><li><a href="https://www.officialgazette.gov.ph/" target="_blank" rel="noopener">Official Gazette</a> – RA 4136, Land Transportation and Traffic Code</li><li><a href="https://www.dpwh.gov.ph/" target="_blank" rel="noopener">DPWH</a> – road sign and pavement marking manuals</li></ul><p><b>Last updated:</b> 2026-10-14. Content was written from general knowledge of these materials and has not been re-verified line by line against the current documents. Requirements, speed limits, and assessment tasks can change or vary by center.</p><p>Always confirm with the current TESDA Training Regulations and your assessment center. This site is an unofficial study aid; its questions are original practice questions, not actual TESDA exam items, and passing is not guaranteed.</p></section>`}
};
const sgCard=s=>`<div class="card sg">${SG[s[2]]}<b>${s[1]}</b><p class="mu sm">${s[3]}</p></div>`;
function find(t){if(t.trim().length>1)go('find',t.trim());else if(cur=='find')go('home')}

/* ===== GEMINI AI STUDY COMPANION ===== */
let AI_HISTORY=[];
function escAI(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function renderAIHistory(){return AI_HISTORY.map(m=>`<div class="ai-msg ${m.role==='user'?'user':'assistant'}">${escAI(m.text)}</div>`).join('')}
function refreshAI(){const t=document.getElementById('aiThread');if(t){t.innerHTML=renderAIHistory();t.scrollTop=t.scrollHeight}const p=document.getElementById('aiPrompts');if(p)p.hidden=AI_HISTORY.length>0}
function askSuggestion(text){const input=document.getElementById('aiInput');if(input){input.value=text;input.focus();}sendAI(new Event('submit',{cancelable:true}));}
async function sendAI(event){if(event&&event.preventDefault)event.preventDefault();const input=document.getElementById('aiInput');if(!input)return;const text=input.value.trim();if(!text)return;if(text.length>2000){alert('Please keep your message under 2,000 characters.');return;}if(AI_HISTORY.filter(m=>m.role==='user').length>=30){AI_HISTORY=AI_HISTORY.slice(-20)}AI_HISTORY.push({role:'user',text});input.value='';refreshAI();const status=document.getElementById('aiStatus'),send=document.getElementById('aiSend');if(status)status.textContent='Gemini is thinking…';if(send)send.disabled=true;const thread=document.getElementById('aiThread');const pending=document.createElement('div');pending.className='ai-msg assistant';pending.textContent='Thinking…';if(thread)thread.appendChild(pending);try{const contents=AI_HISTORY.slice(-12).map(m=>({role:m.role==='assistant'?'model':'user',parts:[{text:m.text}]}));const response=await fetch('/.netlify/functions/study-companion',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents})});let data={};try{data=await response.json()}catch(e){}if(!response.ok)throw new Error(data.error||`Request failed (${response.status}).`);const answer=String(data.reply||'I could not generate an answer. Please try again.');AI_HISTORY.push({role:'assistant',text:answer});}catch(err){AI_HISTORY.push({role:'assistant',text:'I could not connect to Gemini. Check that the Netlify function is deployed and the GEMINI_API_KEY environment variable is configured. Details: '+(err.message||'Unknown error')});}finally{refreshAI();if(status)status.textContent='Gemini · Study help';if(send)send.disabled=false;const el=document.getElementById('aiInput');if(el)el.focus();}}

/* ===== ACTIONS ===== */
function mark(i){if(!S.done[i]){S.done[i]=1;if(S.td.d!=today())S.td={d:today(),n:0};S.td.n++}else delete S.done[i];save()}
function bmod(i){S.bm[i]?delete S.bm[i]:S.bm[i]=1;save()}
function goal(d){S.goal=Math.max(1,Math.min(10,S.goal+d));save()}
function ck(id,v){v?S.ck[id]=1:delete S.ck[id];const y=scrollY;save();scrollTo(0,y)}
function bq(id){S.qb[id]?delete S.qb[id]:S.qb[id]=1;save()}
function qm(i){startQ({k:'Quiz: '+M[i].t,nav:'mods',fb:1,gen:()=>allQ().filter(q=>q.m==i)})}

function flashMove(d){const n=allQ().length;flashIndex=(flashIndex+d+n)%n;flashFlip=false;go('flash')}
function flashShuffle(){flashIndex=Math.floor(Math.random()*allQ().length);flashFlip=false;go('flash')}
function startWeak(){const weak=Object.keys(S.st).map(Number).filter(i=>M[i]&&S.st[i].c+S.st[i].w>0&&S.st[i].c/(S.st[i].c+S.st[i].w)<.7);const pool=weak.length?allQ().filter(q=>weak.includes(q.m)):allQ();startQ({k:weak.length?'Weak-topic review':'Review practice',nav:'prac',fb:1,gen:()=>shuffle(pool).slice(0,Math.min(15,pool.length))})}

/* ===== PROGRESS BACKUP ===== */
function exportProgress(){
  const payload={app:'DriveReady PH',version:1,exportedAt:new Date().toISOString(),progress:S};
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);const a=document.createElement('a');
  a.href=url;a.download='driveready-ph-progress-'+today()+'.json';document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function importProgress(input){
  const file=input.files&&input.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=()=>{try{
    const data=JSON.parse(reader.result),p=data&&data.progress;
    if(!p||typeof p!=='object'||!p.done||!p.bm||!p.qb||!Array.isArray(p.sc)||!p.st||!p.ck)throw new Error('invalid');
    if(!confirm('Restore this backup? It will replace the progress currently saved in this browser.')){input.value='';return;}
    S={done:p.done,bm:p.bm,qb:p.qb,sc:p.sc.slice(-50),st:p.st,ck:p.ck,goal:Math.max(1,Math.min(10,Number(p.goal)||2)),td:p.td||{d:'',n:0},dm:p.dm?1:0,lastMod:Number.isInteger(p.lastMod)?p.lastMod:0};
    save();alert('Progress restored successfully.');
  }catch(e){alert('That backup file could not be read. Choose a DriveReady PH progress backup JSON file.');}
  input.value='';};
  reader.onerror=()=>{alert('Could not read the selected file. Please try again.');input.value='';};
  reader.readAsText(file);
}

/* ===== QUIZ ENGINE ===== */
const fmt=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
function startQ(o){clearInterval(T);Z={o,i:0,end:0,qs:o.gen().map(q=>{const ix=shuffle([0,1,2,3]);return{...q,o:ix.map(k=>q.o[k]),a:ix.indexOf(q.a),p:null}})};if(o.time){Z.left=o.time;T=setInterval(tick,1000)}nav(o.nav);scrollTo(0,0);rQ()}
function tick(){Z.left--;const e=$('#tm');if(e)e.textContent=fmt(Math.max(0,Z.left));if(Z.left<=0)fin()}
function rQ(){if(Z.end)return res();const q=Z.qs[Z.i],n=Z.qs.length,fb=Z.o.fb,ans=q.p!==null,last=Z.i==n-1;
const opts=q.o.map((t,k)=>{let c='opt';if(fb&&ans){if(k==q.a)c+=' ok';else if(k==q.p)c+=' bad'}else if(q.p===k)c+=' sel';return `<button class="${c}" ${fb&&ans?'disabled':''} onclick="pick(${k})">${'ABCD'[k]}. ${t}</button>`}).join('');
$('#v').innerHTML=`<section class="card"><div class="row" style="margin-top:0"><b>${Z.o.k}</b><span class="mu">Question ${Z.i+1} of ${n}</span>${Z.o.time?`<span class="pill" id="tm" aria-label="Time left">${fmt(Math.max(0,Z.left))}</span>`:''}</div>${bar(Math.round(Z.i/n*100))}<p class="qt">${q.t}</p><div class="opts">${opts}</div>${fb&&ans?`<div class="fb ${q.p==q.a?'g':'r'}" role="status"><b>${q.p==q.a?'Correct.':'Not quite.'}</b> ${q.x}</div>`:''}<div class="row"><button class="btn gh" onclick="bq('${q.id}')">${S.qb[q.id]?'★ Bookmarked':'☆ Bookmark'}</button>${!fb&&Z.i>0?'<button class="btn gh" onclick="mv(-1)">Back</button>':''}<button class="btn" ${fb&&!ans?'disabled':''} onclick="${last?'fin()':'mv(1)'}">${last?'Finish':'Next'}</button></div><p class="mu sm">Unofficial practice question.</p></section>`}
function pick(k){const q=Z.qs[Z.i];if(Z.o.fb&&q.p!==null)return;q.p=k;rQ()}
function mv(d){Z.i+=d;rQ()}
function fin(){clearInterval(T);if(Z.end)return;Z.end=1;let s=0;Z.qs.forEach(q=>{const x=S.st[q.m]||(S.st[q.m]={c:0,w:0});if(q.p===q.a){s++;x.c++}else x.w++});Z.s=s;S.sc.push({k:Z.o.k,s,n:Z.qs.length,d:today()});S.sc=S.sc.slice(-50);save()}
function res(){const n=Z.qs.length,p=Math.round(Z.s/n*100),bad=Z.qs.filter(q=>q.p!==q.a);
$('#v').innerHTML=`<section class="card"><h2>${Z.o.k}: results</h2><p class="big">${Z.s}/${n} (${p}%)</p>${bar(p)}<p class="mu sm">Unofficial practice result. It does not predict or guarantee your TESDA result.</p><div class="row"><button class="btn" onclick="startQ(Z.o)">Retake</button><button class="btn gh" onclick="go('${Z.o.nav}')">Back</button></div></section><section class="card"><h3>Review of incorrect answers (${bad.length})</h3>${bad.length?bad.map(q=>`<div class="rev"><p><b>${q.t}</b></p><p>Your answer: ${q.p===null?'No answer':q.o[q.p]}</p><p class="gt">Correct: ${q.o[q.a]}</p><p class="mu sm">${q.x}</p><button class="btn gh" onclick="bq('${q.id}')">${S.qb[q.id]?'★ Bookmarked':'☆ Bookmark'}</button></div>`).join(''):'<p>Perfect score. No incorrect answers.</p>'}</section>`}

hdr();go('home');

