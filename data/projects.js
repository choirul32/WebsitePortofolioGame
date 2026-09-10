/* Single source of truth for all projects.
   To add a new project: copy one object, change the fields, done.
   No new HTML file needed — work.html renders every slug here. */
const PROJECTS = [
  {
    slug: "metanesia",
    k: "multiplayer", p: "PC",
    j: "Metanesia Metaverse",
    m: "Virtual world, 10+ major events",
    h: "700+ simultaneous users",
    r: "Game Developer — Photon, realtime events, NFT",
    t: "Unity • C# • Photon • Backend",
    img: "assets/canva/p02_01.jpg",
    tag: "700+ LIVE",
    badges: ["MULTIPLAYER / METAVERSE", "PC + WEB", "700+ LIVE USERS"],
    subtitle: "A virtual interaction platform for expos and showrooms — 10+ major events, Honda showroom included.",
    roleLine: "Role: Game Developer (Telkom, 2022–2024) • Unity • Photon • Backend • Realtime events",
    youtubeId: "_vcEHNK6Iqo",
    credit: "Video © IDX Channel Insight — metaNesia feature, embedded for portfolio showcase",
    buttons: [
      { label: "More of my work on Itch.io", href: "https://goldfire32.itch.io/", primary: true },
      { label: "Want a virtual event? Chat", href: "https://wa.me/6282226551246?text=Hello%20Choirul,%20I%20want%20a%20virtual%20event%20like%20Metanesia" }
    ],
    problem: "Physical expos are expensive and capped by venue. Clients needed an interactive virtual venue that still feels alive with hundreds of visitors inside.",
    role: "Designed and maintained the platform: Photon multiplayer, realtime event systems, cutscene sensing for showrooms, NFT transactions, UI and VFX.",
    tech: "Unity • C# • Photon • Backend servers • NFT • Event tooling",
    result: "700+ simultaneous users • 10+ major events • −30% event cost",
    beforeAfter: [
      { img: "assets/canva/p03_00.png", alt: "metaNesia virtual stage event", caption: "Live: virtual stage event with avatar crowd and interactive booths." },
      { img: "assets/canva/p04_02.png", alt: "metaNesia virtual concert with avatars", caption: "Live: virtual concert — hundreds of avatars gathered in one scene." }
    ],
    shots: [],
    steps: [
      { title: "Scale the rooms first", body: "Photon rooms tuned for 700+ concurrent avatars: interest management, LOD avatars, and event channels separated from gameplay traffic so live shows never stutter." },
      { title: "Make events operable by clients", body: "Built realtime event tooling: cutscene sensing for showroom reveals, broadcast triggers, and NFT transaction hooks — so the client team can run a Honda launch without touching code.", mono: "rooms → event channel → cutscene trigger → broadcast + NFT" },
      { title: "Prove it on live events", body: "Ran 10+ major events with the client team on-site: monitoring, hotfixes between sessions, and post-event reports with engagement numbers. Result: higher visitor engagement at 30% lower cost.", accent: true }
    ],
    perf: { label: "SCALE", value: "700+ simultaneous users — 10+ major events — 99% live stability", pct: 100, note: "Bar shows peak concurrent users vs the 700+ target we committed to clients." },
    cta: "Planning a virtual expo or showroom?",
    gallery: [
      { img: "assets/canva/p03_02.png", alt: "Avatar exploring the metaNesia event plaza", caption: "In-world: avatar exploring the event plaza." },
      { img: "assets/canva/p04_03.png", alt: "metaNesia virtual mall district", caption: "Explore: virtual mall district — Jelajahi Dunia Baru." },
      { img: "assets/canva/p03_05.png", alt: "Stylized player avatars", caption: "Avatars: stylized player characters." },
      { img: "assets/canva/p05_03.png", alt: "Scanning a QR code with a phone", caption: "Access: QR scan to join the virtual world." }
    ],
    related: ["ar-peta-budaya", "ar-excavator", "maze-puzzle-uii"]
  },
  {
    slug: "ar-peta-budaya",
    k: "arvr", p: "Android",
    j: "AR Peta Budaya Kemendikbud",
    m: "Scan barcode → AR cultural info",
    h: "+50% visitor learning",
    r: "AR Dev — JSON DB, UI, code logic",
    t: "Unity • AR • JSON • UI",
    img: "assets/canva/p02_03.jpg",
    tag: "AR + EDUCATION",
    badges: ["AR / EDUCATION", "ANDROID", "+50% LEARNING"],
    subtitle: "An AR education app about Indonesian culture — scan a barcode on the Nusantara map to reveal stories.",
    roleLine: "Role: Game Developer (Telkom) • AR • JSON database • UI • Code logic",
    youtubeId: null,
    buttons: [
      { label: "Want an AR app? Chat", href: "https://wa.me/6282226551246?text=Hello%20Choirul,%20I%20want%20an%20AR%20app%20like%20Peta%20Budaya", primary: true }
    ],
    problem: "Museum visitors walked past the Nusantara map without engaging. The client needed a reason to stop, scan, and learn.",
    role: "Built the AR scanning flow, wired a JSON database of cultural content, and implemented the UI and code logic end to end.",
    tech: "Unity • AR • JSON database • UI",
    result: "+50% visitor learning • measured by interaction metrics + feedback",
    beforeAfter: [
      { img: "assets/canva/p02_03.jpg", alt: "AR Peta Budaya scan flow", caption: "Scan: point the phone at a barcode on the map to unlock the region." },
      { img: "assets/canva/p05_10.png", alt: "AR Peta Budaya cultural info screen", caption: "Learn: cultural info like Candi Cangkuang with prev/next navigation." }
    ],
    shots: [],
    steps: [
      { title: "Scan that works in a museum", body: "Barcode targets tuned for indoor lighting and odd angles — fast lock-on even with shaky hands and crowds around." },
      { title: "Content as data, not code", body: "All cultural entries live in a JSON database, so educators can add regions and stories without a new build.", mono: "scan → region id → JSON lookup → AR overlay" },
      { title: "UI for all ages", body: "Big tap targets, readable type, and audio-friendly pacing — built for school groups, not just tech visitors.", accent: true }
    ],
    perf: null,
    cta: "Need an AR experience for education or tourism?",
    gallery: [
      { img: "assets/canva/p05_08.png", alt: "Takemedia Javanese script logo", caption: "Script: Javanese hanacaraka content branding." },
      { img: "assets/canva/p05_14.png", alt: "Aya Jogjakarta cultural article", caption: "Content: regional culture articles like Aya Jogjakarta." },
      { img: "assets/canva/p02_05.png", alt: "UII ODIEX VR introduction collage", caption: "Outreach: ODIEX VR introduction among students and visitors." }
    ],
    related: ["ar-excavator", "metanesia", "maze-puzzle-uii"]
  },
  {
    slug: "ar-excavator",
    k: "arvr", p: "Android",
    j: "AR Excavator Simulator",
    m: "VR training before real machines",
    h: "200+ trainees",
    r: "Particles, interaction, animation",
    t: "Unity • VR • VFX • Animation",
    img: "assets/canva/p02_02.jpg",
    tag: "VR TRAINING",
    badges: ["VR / TRAINING SIM", "ANDROID", "200+ TRAINEES"],
    subtitle: "A near-realistic excavator training sim — learn the machine before touching the real one.",
    roleLine: "Role: Game Developer (ARUTALA, 2019) • Particles • Interaction • Animation • Code",
    youtubeId: null,
    buttons: [
      { label: "Need a training sim? Chat", href: "https://wa.me/6282226551246?text=Hello%20Choirul,%20I%20need%20a%20VR%20training%20sim", primary: true }
    ],
    problem: "Training new excavator operators on real machines is slow, expensive, and risky. The client needed a safe first step.",
    role: "Built fire/spark particle VFX, user-to-object interaction, machine animations, level design, and gameplay code.",
    tech: "Unity • VR • Particles/VFX • Animation",
    result: "200+ trainees • +15% system responsiveness after animation optimization",
    beforeAfter: [
      { img: "assets/canva/p02_02.jpg", alt: "Excavator VR simulator screens", caption: "Train: full excavator workflow from start to finish in VR." },
      { img: "assets/canva/p07_05.png", alt: "Excavator engine detail in Unity", caption: "Detail: inner machine workings modeled part by part in Unity." }
    ],
    shots: [],
    steps: [
      { title: "Feel the machine", body: "Machine animations refined frame by frame, plus fire and spark particles so every lever pull gets instant visual feedback." },
      { title: "Touch and interact", body: "Grab, pull, and operate controls with natural VR interaction — objects respond the way trainees expect from the real cabin.", mono: "grab → lever → hydraulics anim → particle feedback" },
      { title: "Optimize for training labs", body: "Animation and VFX pass lifted system responsiveness +15%, so shared lab hardware runs the sim smoothly all day.", accent: true }
    ],
    perf: null,
    cta: "Need a VR training sim for your equipment?",
    gallery: [
      { img: "assets/canva/p07_00.png", alt: "Excavator cockpit lever and gauge", caption: "Cockpit: lever and gauge interaction in first person." },
      { img: "assets/canva/p07_01.png", alt: "Excavator joystick close-up", caption: "Controls: joystick handling with haptic-like feedback." },
      { img: "assets/canva/p07_04.png", alt: "Excavator 3D model", caption: "Model: excavator unit modeled for the sim." }
    ],
    related: ["ar-peta-budaya", "metanesia", "pillow-fight"]
  },
  {
    slug: "maze-puzzle-uii",
    k: "game", p: "Android",
    j: "Maze Puzzle UII",
    m: "Campus expo puzzle game",
    h: "ODIEX exhibition",
    r: "Level design, game logic",
    t: "Unity • C# • Level design",
    img: "assets/canva/p02_04.jpg",
    tag: "PUZZLE",
    badges: ["GAME — PUZZLE", "ANDROID", "EXPO TITLE"],
    subtitle: "A maze puzzle game built to introduce UII at the ODIEX exhibition — easy to pick up at a busy booth.",
    roleLine: "Role: Level Design • Game Logic • Unity C#",
    youtubeId: null,
    buttons: [
      { label: "Want an expo game? Chat", href: "https://wa.me/6282226551246?text=Hello%20Choirul,%20I%20want%20a%20puzzle%20game", primary: true }
    ],
    problem: "A campus booth needs a game visitors understand in 10 seconds and finish in 3 minutes — while staff explain the university.",
    role: "Designed the maze levels and implemented all game logic: movement, goals, timers, and win states.",
    tech: "Unity • C# • Level design",
    result: "Shipped for ODIEX exhibition • played by expo visitors live",
    beforeAfter: [],
    shots: [
      { no: 1, kamera: "Top-down — maze entrance", aksi: "Player dot pulses at the gate, arrow hints the first turn", audio: "Playful plucks, crowd murmur" },
      { no: 2, kamera: "POV first-person — racing the corridor", aksi: "Walls blur past, timer ticks down, exit glows", audio: "Ticking + rising beat" },
      { no: 3, kamera: "Close-up — goal flag + confetti", aksi: "Flag waves, UII logo resolves from maze paths", audio: "Win jingle, applause" }
    ],
    steps: [
      { title: "10-second onboarding", body: "One verb — reach the flag. No tutorial text; the first corridor teaches movement by itself." },
      { title: "Levels tuned for a booth", body: "Short mazes with rising twists, each solvable in under 3 minutes so queues keep moving.", mono: "enter → navigate → goal → next maze" },
      { title: "Build it booth-proof", body: "Locked frame rate, big touch targets, and auto-reset between players — staff never touch the device.", accent: true }
    ],
    perf: null,
    cta: "Need a quick-play game for an event booth?",
    gallery: [
      { img: "assets/canva/p08_00.jpg", alt: "UII expo VR booth with visitors", caption: "Booth: VR demos for students and ODIEX visitors." },
      { img: "assets/canva/p08_02.jpg", alt: "Student trying VR headset at expo", caption: "Live: students trying the headset at the booth." },
      { img: "assets/canva/p08_12.png", alt: "VR quiz game on tablet", caption: "Play: VR quiz maze played on tablet." },
      { img: "assets/canva/p08_04.jpg", alt: "Crowded VIRTUAL REALITY expo booth", caption: "Crowd: expo visitors queueing at the VR booth." },
      { img: "assets/canva/p08_08.png", alt: "VR maze quiz split-screen view", caption: "In-headset: VR maze quiz with faculty directions." },
      { img: "assets/canva/p08_10.jpg", alt: "VR anatomy face split-screen view", caption: "In-headset: VR anatomy quiz — internal organs intro." }
    ],
    related: ["pillow-fight", "ar-peta-budaya", "petal-pals"]
  },
  {
    slug: "uii-tutorial",
    k: "game", p: "Android",
    j: "UII Tutorial",
    m: "Interactive guide for new UII students",
    h: "500+ students guided",
    r: "UI, level animation, transition scenes",
    t: "Unity • 2D Animation • UI",
    img: "assets/canva/p02_00.jpg",
    tag: "EDU APP",
    badges: ["GAME — EDU APP", "ANDROID", "500+ STUDENTS"],
    subtitle: "An interactive app guiding new UII students through key-in, academic leave, and active enrollment — with dynamic 2D animation.",
    roleLine: "Role: UI • Level Animation • Transition Scenes",
    youtubeId: null,
    buttons: [
      { label: "Need an edu app? Chat", href: "https://wa.me/6282226551246?text=Hello%20Choirul,%20I%20need%20an%20education%20app", primary: true }
    ],
    problem: "New students struggled with academic processes like key-in and leave requests — paper guides went unread.",
    role: "Built UI, level animation, and transition scenes that walk students through each process step by step.",
    tech: "Unity • 2D Animation • UI",
    result: "Used by 500+ students • simpler academic journey per student feedback",
    beforeAfter: [
      { img: "assets/canva/p02_00.jpg", alt: "UII Tutorial campus gate scene", caption: "Guide: animated campus walkthrough from the front gate." },
      { img: "assets/canva/p06_00.jpg", alt: "UII Tutorial key-in cuti aktif menu", caption: "Flows: key-in, cuti, and aktif explained with animated characters." }
    ],
    shots: [
      { no: 1, kamera: "Wide — UII front gate", aksi: "Camera pushes through the gate as mascot waves students in", audio: "Warm chimes, campus ambience" },
      { no: 2, kamera: "POV first-person — tapping key-in", aksi: "Finger taps the glowing key-in button, form fills itself", audio: "Tap, success ding, guide voice" },
      { no: 3, kamera: "Close-up — completed checklist", aksi: "All three flows checked green, confetti pops", audio: "Completion fanfare" }
    ],
    steps: [
      { title: "Turn paperwork into a walk", body: "Each academic process became a guided animated scene — students follow a character instead of reading a manual." },
      { title: "Animate every transition", body: "Scene transitions carry the teaching: the camera move itself shows where to go next.", mono: "gate → key-in → cuti → aktif → done" },
      { title: "Keep it student-proof", body: "Big buttons, plain language, replayable scenes — built for nervous freshmen on low-end phones.", accent: true }
    ],
    perf: null,
    cta: "Need an onboarding or tutorial app?",
    related: ["maze-puzzle-uii", "lab-mikro-ar", "ar-peta-budaya"]
  },
  {
    slug: "lab-mikro-ar",
    k: "arvr", p: "Android",
    j: "Lab Virtual AR Mikrobiologi",
    m: "AR chemistry lab practices for students",
    h: "Hands-on sim before real labs",
    r: "AR Dev — API integration, UI, level design",
    t: "Unity 3D • Vuforia • API backend",
    img: "assets/canva/p09_03.png",
    tag: "AR LAB",
    badges: ["AR / EDU LAB", "ANDROID", "VUFORIA"],
    subtitle: "An AR lab simulator for university chemistry practicums — virus and plasmid isolation with worksheets and quizzes.",
    roleLine: "Role: AR Development • API integration • UI • Level design",
    youtubeId: null,
    buttons: [
      { label: "Need an AR lab? Chat", href: "https://wa.me/6282226551246?text=Hello%20Choirul,%20I%20need%20an%20AR%20lab%20app", primary: true }
    ],
    problem: "Students entered real labs underprepared — abstract procedures like plasmid isolation are hard to grasp from slides.",
    role: "Built the AR lab scenes, integrated API data and spreadsheet-backed worksheets, and implemented UI, level design, and quizzes.",
    tech: "Unity 3D • Vuforia • API backend",
    result: "Visual + hands-on sim before real practicums • worksheet + quiz built in",
    beforeAfter: [
      { img: "assets/canva/p09_03.png", alt: "AR lab worksheet practicum screen", caption: "Practice: guided isolation worksheet with input fields." },
      { img: "assets/canva/p09_04.png", alt: "AR lab quiz screen", caption: "Check: quizzes verify understanding before the real lab." }
    ],
    shots: [],
    steps: [
      { title: "Simulate the procedure", body: "Each lab practice became an AR scene students can rotate, zoom, and step through before touching real equipment." },
      { title: "Wire it to real data", body: "Materials, worksheets, and quiz scores sync through the API and spreadsheet backend for lecturers.", mono: "AR scene → worksheet input → API → lecturer sheet" },
      { title: "Test understanding in-app", body: "Quizzes gate progress — students prove they get plasmid isolation before the practicum day.", accent: true }
    ],
    perf: null,
    cta: "Need an AR simulator for training or labs?",
    gallery: [
      { img: "assets/canva/p09_00.jpg", alt: "AR waterbath lab step in phone", caption: "Guide: AR waterbath step-by-step in the lab." },
      { img: "assets/canva/p09_02.png", alt: "Virus lifecycle learning module", caption: "Learn: virus lifecycle module (Biology)." },
      { img: "assets/canva/p09_05.png", alt: "Virus material explainer screen", caption: "Material: virus explainer with presenter character." }
    ],
    related: ["ar-peta-budaya", "ar-excavator", "uii-tutorial"]
  },
  {
    slug: "pillow-fight",
    k: "game", p: "PC",
    j: "Pillow Fight",
    m: "2-player turn-based party game",
    h: "Community title",
    r: "UI, level design, game logic",
    t: "Unity • C# • UI",
    img: "assets/canva/p08_06.png",
    tag: "2P TURN-BASED",
    badges: ["GAME — PARTY", "PC • 2 PLAYERS", "TURN-BASED"],
    subtitle: "A turn-based pillow brawl for two players — built with the UII game community, made for laughs.",
    roleLine: "Role: UI • Level Design • Game Logic • Unity C#",
    youtubeId: null,
    buttons: [
      { label: "Want a party game? Chat", href: "https://wa.me/6282226551246?text=Hello%20Choirul,%20I%20want%20a%20party%20game", primary: true }
    ],
    problem: "Community game nights needed something two people learn instantly and shout about within a minute.",
    role: "Built the UI, designed the levels, and implemented turn logic, hit feedback, and win conditions.",
    tech: "Unity • C# • UI",
    result: "Played at community game nights • same-keyboard 2P",
    beforeAfter: [],
    shots: [
      { no: 1, kamera: "Wide — pillow fort arena", aksi: "Two fighters bounce in from opposite sides", audio: "Cartoon boing + giggles" },
      { no: 2, kamera: "POV first-person — pillow swing", aksi: "Feathers explode toward camera on impact", audio: "Whump, feather rustle, crowd ooh" },
      { no: 3, kamera: "Slow-mo close-up — final hit", aksi: "Feathers hang mid-air as loser spins out", audio: "Time slows, then victory fanfare" }
    ],
    steps: [
      { title: "One-input fun", body: "Each turn is a single meaningful choice — aim, pick power, swing. Depth comes from reading your opponent, not memorizing combos." },
      { title: "Juice over scope", body: "Feather bursts, squash-and-stretch, screen shake — a small game that feels big because every hit celebrates.", mono: "aim → swing → feathers → turn passes" },
      { title: "Same-screen rivalry", body: "Shared keyboard, shared laughter — UI keeps both players' states readable at a glance.", accent: true }
    ],
    perf: null,
    cta: "Need a small game with big laughs?",
    gallery: [
      { img: "assets/canva/p08_06.png", alt: "Pillow Fight bedroom battle", caption: "Battle: P1 vs P2 pillow duel with health bars." }
    ],
    related: ["maze-puzzle-uii", "petal-pals", "retromania"]
  },
  {
    slug: "petal-pals",
    k: "game", p: "PC",
    j: "Petal Pals",
    m: "Cozy idle creature-collector on Steam",
    h: "Trailer + Steam page live",
    r: "Gameplay Programmer + Game AI — idle systems, creature behaviour",
    t: "Unity • C# • Idle systems • Creature AI",
    img: "https://i.ytimg.com/vi/z2ORykyH0fQ/hqdefault.jpg",
    tag: "COZY IDLE • STEAM",
    badges: ["GAME — COZY IDLE", "PC • STEAM", "CREATURE AI"],
    subtitle: "A cozy idle creature-collector: hatch eggs, raise pals, run a farm and hotel — progress continues while away.",
    roleLine: "Role: Gameplay Programmer + Game AI • Idle systems • Creature behaviour • Unity C#",
    youtubeId: "z2ORykyH0fQ",
    credit: "Trailer © Petal Pals — embedded for portfolio showcase",
    buttons: [
      { label: "Wishlist on Steam", href: "https://store.steampowered.com/app/4146150/Petal_Pals/", primary: true },
      { label: "Want an idle game? Chat", href: "https://wa.me/6282226551246?text=Hello%20Choirul,%20I%20want%20an%20idle%20game%20like%20Petal%20Pals" }
    ],
    problem: "Idle games must feel alive 24/7: offline progress, evolving creatures, and automation — without bugs that wipe progress or unbalance the economy.",
    role: "Gameplay programming (idle loops, farm/hotel systems, AutoPals automation) plus creature AI behaviour and evolution logic.",
    tech: "Unity • C# • State machines • Offline timers • Save systems",
    result: "Trailer live • Steam page + demo live • farm, hotel, gacha playable",
    beforeAfter: [],
    shots: [
      { no: 1, kamera: "Wide aerial — pastel farm at dawn", aksi: "Camera drifts over fields as pals wake up", audio: "Soft chimes + morning ambience" },
      { no: 2, kamera: "POV first-person — hands hatch an egg", aksi: "Shell cracks, light spills out, tiny pal blinks", audio: "Crack SFX, gasp, gentle lullaby swell" },
      { no: 3, kamera: "Close-up — pal eyes reflecting farm", aksi: "Reflection grows into the full farm + hotel", audio: "Music blooms, fireflies sparkle" }
    ],
    steps: [
      { title: "Idle core that never loses progress", body: "Timestamp-based offline progress with caps and catch-up curves, versioned saves, and economy sinks (farm upgrades, hotel, gacha) so away-time feels rewarding, never broken." },
      { title: "Creature AI with personality", body: "Behaviour states (idle, hungry, playful, sleepy) drive animations and needs; evolution unlocks new behaviours. Designers tune moods and timers without code.", mono: "idle → hungry → playful → sleepy → evolve" },
      { title: "Cozy systems that ship", body: "Farm planting/harvesting, hotel management, AutoPals automation, Pomodoro + transparent window hooks — balanced for a relaxing loop and a Steam demo (14 in-game days).", accent: true }
    ],
    perf: null,
    cta: "Need a cozy idle or creature game?",
    related: ["retromania", "maze-puzzle-uii", "metanesia"]
  },
  {
    slug: "retromania",
    k: "game", p: "PC",
    j: "RetroMania Wrestling",
    m: "Retro arcade wrestling by Retrosoft",
    h: "Official trailer live",
    r: "Gameplay Programmer — match logic, grapple systems",
    t: "Unity • C# • Gameplay systems",
    img: "https://i.ytimg.com/vi/CR5a4SWulbc/hqdefault.jpg",
    tag: "RETRO ARCADE",
    badges: ["GAME — RETRO ARCADE", "PC", "GAMEPLAY"],
    subtitle: "Retro arcade wrestling by Retrosoft Studios — pixel art, grapples, and crowd-pumping match flow.",
    roleLine: "Role: Gameplay Programmer • Match logic • Grapple systems • Unity C#",
    youtubeId: "CR5a4SWulbc",
    credit: "Trailer © Retrosoft Studios — embedded for portfolio showcase",
    buttons: [
      { label: "Watch Retrosoft Studios", href: "https://www.youtube.com/@RetrosoftStudios", primary: true },
      { label: "Want an arcade game? Chat", href: "https://wa.me/6282226551246?text=Hello%20Choirul,%20I%20want%20an%20arcade%20game%20like%20RetroMania" }
    ],
    problem: "Retro wrestling must feel snappy and fair: grapple timing, reversals, and match pacing — all readable in chunky pixels at 60fps.",
    role: "Gameplay programming: match state flow, grapple/reversal timing windows, and move balancing with designers.",
    tech: "Unity • C# • State machines • Input buffering • Hit-stop feel",
    result: "Official trailer live • arcade match loop playable • 60fps feel",
    beforeAfter: [],
    shots: [
      { no: 1, kamera: "Wide — arena under CRT glow", aksi: "Crowd roars as two pixel wrestlers enter", audio: "Chiptune riff + crowd swell" },
      { no: 2, kamera: "POV first-person — through the ropes", aksi: "Opponent charges, player reverses into a suplex", audio: "Bell ding, impact thud, crowd erupts" },
      { no: 3, kamera: "Close-up — referee hand hits three", aksi: "1… 2… 3 — confetti pixels burst", audio: "Count beats, victory jingle" }
    ],
    steps: [
      { title: "Match flow as a state machine", body: "Entrance → lockup → grapple → pinfall → result, with clean transitions so designers can reorder or extend bouts without code changes." },
      { title: "Grapples that feel fair", body: "Input buffering plus generous-but-readable reversal windows, hit-stop and screen shake tuned per move weight. Every loss must feel like the player's mistake, not the game's.", mono: "buffer 120ms → reversal window → hit-stop → shake" },
      { title: "Retro look, modern perf", body: "Pixel-perfect rendering with pooled particles and capped effects so the chaos stays at a locked 60fps on modest PCs.", accent: true }
    ],
    perf: null,
    cta: "Need arcade gameplay with tight feel?",
    gallery: [
      { img: "assets/canva/p10_01.jpg", alt: "Prototyping title card", caption: "R&D: prototyping new mechanics before production." },
      { img: "assets/canva/p10_06.jpg", alt: "Isometric desert outpost prototype", caption: "Prototype: isometric desert outpost with units." }
    ],
    related: ["petal-pals", "pillow-fight", "metanesia"]
  },
  {
    slug: "shader-rnd",
    k: "rnd", p: "PC",
    j: "Shader & Post-Process R&D",
    m: "Stylized shader and post-processing studies",
    h: "Reusable looks + perf notes",
    r: "Shader studies — URP, post-processing",
    t: "Unity URP • Shader • Post-processing",
    img: "assets/canva/p11_01.jpg",
    tag: "SHADER R&D",
    badges: ["R&D — SHADER", "PC • URP", "STUDIES"],
    subtitle: "Shader and post-processing studies: stylized looks with measured frame cost.",
    roleLine: "Role: Shader studies • URP • Post-processing",
    youtubeId: null,
    buttons: [
      { label: "Need a custom shader? Chat", href: "https://wa.me/6282226551246?text=Hello%20Choirul,%20I%20need%20a%20custom%20shader", primary: true }
    ],
    problem: "Stylized looks are easy to mock and hard to ship — clients need to know the frame cost before committing.",
    role: "Built shader and post-processing studies with side-by-side looks and ms measurements.",
    tech: "Unity URP • Shader • Post-processing",
    result: "Reusable looks • perf notes per effect",
    beforeAfter: [],
    shots: [],
    steps: [
      { title: "Mock the look fast", body: "Small scenes per effect — grass wind, embers, night grading — so each look is judged alone." },
      { title: "Measure everything", body: "Frame cost recorded per effect at target resolution, so trade-offs are explicit.", mono: "look → profile → note ms → keep or cut" },
      { title: "Keep what ships", body: "Only looks under budget survive into the reusable set with tuning notes.", accent: true }
    ],
    perf: null,
    cta: "Need a stylized look with known cost?",
    gallery: [
      { img: "assets/canva/p11_01.jpg", alt: "Stylized warrior with embers", caption: "Study: ember-lit warrior in tall grass." },
      { img: "assets/canva/p11_03.jpg", alt: "Chase through poppy field", caption: "Study: motion feel through a poppy field." },
      { img: "assets/canva/p11_05.jpg", alt: "Night path with lantern", caption: "Study: night grading with lantern light." }
    ],
    related: ["prototyping", "ar-excavator", "petal-pals"]
  },
  {
    slug: "prototyping",
    k: "rnd", p: "PC",
    j: "Gameplay Prototyping",
    m: "Rapid prototypes before production",
    h: "Fail fast, keep what is fun",
    r: "Rapid prototyping — mechanics, feel",
    t: "Unity • C# • Rapid iteration",
    img: "assets/canva/p10_06.jpg",
    tag: "PROTOTYPES",
    badges: ["R&D — PROTOTYPES", "PC", "RAPID"],
    subtitle: "Rapid gameplay prototypes: test the fun in days, not months.",
    roleLine: "Role: Rapid prototyping • Mechanics • Game feel",
    youtubeId: null,
    buttons: [
      { label: "Need a prototype? Chat", href: "https://wa.me/6282226551246?text=Hello%20Choirul,%20I%20need%20a%20game%20prototype", primary: true }
    ],
    problem: "Ideas are cheap until playable — clients need to feel the mechanic before funding production.",
    role: "Built throwaway prototypes focused on one mechanic each, tuned for feel first.",
    tech: "Unity • C# • Rapid iteration",
    result: "Playable concepts in days • clear keep/kill calls",
    beforeAfter: [],
    shots: [],
    steps: [
      { title: "One mechanic per build", body: "Each prototype answers one question — is the movement, combat, or loop actually fun?" },
      { title: "Feel over content", body: "Juice, timing, and feedback first; art and content come only if the core survives.", mono: "idea → build → playtest → keep or kill" },
      { title: "Kill fast, document faster", body: "Dead prototypes get a one-line verdict and the learning — no sunk-cost attachment.", accent: true }
    ],
    perf: null,
    cta: "Have a mechanic to test?",
    related: ["shader-rnd", "pillow-fight", "maze-puzzle-uii"]
  },
  {
    slug: "new-robinsonade",
    k: "game-ai", p: "PC",
    j: "New Robinsonade",
    m: "Top-down island survival with living wildlife",
    h: "20+ animal AI • A* pathfinding",
    r: "Game AI Programmer — animal brains, NPC monkey, combat AI",
    t: "Unity • C# • A* Pathfinding • TopDown Engine • URP",
    img: "assets/robinsonade/cover.jpg",
    tag: "SURVIVAL • AI",
    badges: ["GAME — SURVIVAL", "PC", "20+ ANIMAL AI"],
    subtitle: "A top-down island survival: farm, craft, fish, and survive among 20+ AI animals — from fleeing agoutis to ambushing alligators and a companion NPC monkey.",
    roleLine: "Role: Game AI Programmer • A* pathfinding • State machines • NPC companion",
    youtubeId: null,
    buttons: [
      { label: "Need living wildlife AI? Chat", href: "https://wa.me/6282226551246?text=Hello%20Choirul,%20I%20need%20animal%20AI%20like%20New%20Robinsonade", primary: true }
    ],
    problem: "Survival islands feel dead when animals are decoration. The game needed wildlife with real behaviours — foraging, fleeing, hunting, day/night routines — plus an NPC companion that follows, climbs, and helps.",
    role: "Built the animal AI system: per-species brains (agouti, alligator, bat, crab, crow, deer, frog, tortoise, parrot, monkey, panther), water/land transitions, sensor areas, and an NPC albino monkey with follow, climb, fetch, and sign-language modes.",
    tech: "Unity • C# • A* Pathfinding Project • TopDown Engine • URP • State machines",
    result: "20+ animal AI prefabs • land/water/submerge behaviours • NPC companion with 10+ states",
    beforeAfter: [
      { img: "assets/robinsonade/cover.jpg", alt: "Robinsonade island gameplay with day-night UI", caption: "Live: top-down island with day/night cycle, hearts, and hotbar." },
      { img: "assets/robinsonade/preview-small.gif", alt: "Robinsonade gameplay animation", caption: "Motion: the island in action — character, river, trees, UI." }
    ],
    shots: [
      { no: 1, kamera: "Wide aerial — island at dawn", aksi: "Camera sweeps over beach, forest, and ponds as animals wake", audio: "Waves + birdsong, day theme fades in" },
      { no: 2, kamera: "POV first-person — spear fishing", aksi: "Hands aim the spear, fish dart, strike ripples the water", audio: "Splash, heartbeat, catch chime" },
      { no: 3, kamera: "Close-up — alligator eyes break the surface", aksi: "Eyes emerge silently while the player fishes nearby", audio: "Music cuts, low drone, sudden lunge" }
    ],
    steps: [
      { title: "One brain per species", body: "Each animal got its own AIBrain: agoutis flee, alligators submerge-ambush, crabs retreat to sea, frogs hop pond-to-pond, tortoises hide in shells, monkeys throw and climb. Shared decisions (distance, danger, countdowns) keep the codebase DRY.", mono: "sense → decide → act → return to routine" },
      { title: "Water is a state, not a wall", body: "Alligators and crabs transition between land, surface, and submerged behaviours with shadow scaling and submersion effects — ambushes feel real because the water hides them.", mono: "wander → submerge → chase → emerge attack" },
      { title: "A companion, not a pet", body: "The NPC albino monkey follows, climbs trees, fetches items, and performs juggling, dancing, and sign language — driven by an animal-mode system designers can command.", accent: true }
    ],
    perf: null,
    cta: "Need wildlife or companion AI for your game?",
    related: ["petal-pals", "prototyping", "pillow-fight"]
  },
  {
    slug: "maskbound-jinosi",
    k: "game", p: "PC",
    j: "Maskbound Jinosi",
    m: "2D action platformer — Panji & the masks",
    h: "In development • vertical slice",
    r: "Solo Developer — systems, combat, soul economy",
    t: "Unity 6000 • C# • Corgi Engine • URP • Fungus",
    img: "assets/maskbound/cover.jpg",
    tag: "IN DEV • 2D ACTION",
    badges: ["GAME — 2D ACTION", "PC", "IN DEVELOPMENT"],
    subtitle: "A 2D action platformer about Panji, prince of Jenggala: explore levels, calm the Agony Masks, collect souls, and spend them at Spiritual Gates to empower Mask Spirits.",
    roleLine: "Role: Solo Developer • Game systems • Combat • Soul economy • Dialogue",
    youtubeId: null,
    buttons: [
      { label: "Follow the dev journey? Chat", href: "https://wa.me/6282226551246?text=Hello%20Choirul,%20tell%20me%20about%20Maskbound%20Jinosi", primary: true }
    ],
    problem: "Soulslike systems are easy to overcomplicate. This project needed a tight core loop first: explore, fight waves, earn souls, spend them meaningfully — before any content sprawl.",
    role: "Solo developer: soul wallet/pickups/drop tables, Mask Spirit data + effects (ScriptableObjects), Agony Mask encounters with waves, Spiritual Gate shop, dialogue runner, checkpoint/respawn, and the vertical-slice playtest loop.",
    tech: "Unity 6000 • C# • Corgi Engine (platformer/combat) • InControl • Fungus (dialogue) • URP",
    result: "Vertical slice in progress • 24-phase build plan • playable loop: mask → souls → gate → exit",
    beforeAfter: [
      { img: "assets/maskbound/cover.jpg", alt: "Panji Maskbound Awakening main menu", caption: "Menu: Panji — Maskbound Awakening main menu with New Game and Level Select." },
      { img: "assets/maskbound/preview-small.gif", alt: "Panji dialogue scene animation", caption: "Story: Panji dialogue — Mengapa semuanya berantakan?" }
    ],
    videos: [
      { src: "assets/maskbound/Boss Laser Beam sfx.mp4", label: "Boss laser beam SFX" },
      { src: "assets/maskbound/UI Skill Scenario.mp4", label: "UI skill scenario" }
    ],
    shots: [
      { no: 1, kamera: "Wide side-scroll — misty Jenggala gate", aksi: "Panji walks in from the left, Agony Mask pulses ahead", audio: "Gamelan drone, wind, distant gong" },
      { no: 2, kamera: "POV first-person — through Panji's eyes", aksi: "Mask looms, wave spawns, spear spirit slashes toward camera", audio: "Mask whisper, clash, soul chimes" },
      { no: 3, kamera: "Close-up — Spiritual Gate ignites", aksi: "Souls stream into the gate, Mask Spirit icon lights up", audio: "Rising choir, gate hum, upgrade fanfare" }
    ],
    steps: [
      { title: "Engine for platforming, custom for rules", body: "Corgi Engine handles movement, health, checkpoints, and camera. Soul, Mask Spirit, Agony Mask, Spiritual Gate, and dialogue live in clean asmdef modules under Assets/_Maskbound.", mono: "Corgi = platformer • Maskbound = game rules" },
      { title: "Souls as a real economy", body: "SoulWallet, pickups, drop tables, and a transaction service with can-spend guards — every purchase at the Spiritual Gate is verified, with feedback on failure." },
      { title: "One slice before the feast", body: "The vertical slice gates everything: one level, one mask, one wave, two spirits, one dialogue. Only when that 2–5 minute loop feels good does content expand.", accent: true }
    ],
    perf: null,
    cta: "Want a tight action loop like this?",
    related: ["new-robinsonade", "petal-pals", "retromania"]
  }
];
function klabel(k) { return k === "game" ? "Game" : k === "arvr" ? "AR/VR" : k === "multiplayer" ? "Multiplayer" : k === "rnd" ? "R&D" : k; }
