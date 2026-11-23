/* Single source of truth for all projects.
   To add a new project: copy one object, change the fields, done.
   No new HTML file needed — work.html renders every slug here. */
const PROJECTS = [
  {
    slug: "shelf-trip",
    k: "game", p: "WebGL",
    j: "Shelf Trip: Cat Market",
    m: "Triple-match shelf sorting around the world",
    h: "20 levels • 4 cat tricks",
    r: "Solo Developer — core loop, level generator, meta, portal build",
    t: "Defold 1.14.1 • Lua • HTML5 • Playgama Bridge",
    img: "assets/games/shelf-trip/cover-web.jpg",
    tag: "PUZZLE • WEB",
    badges: ["GAME — PUZZLE SORT", "WEB • PORTRAIT", "20 LEVELS"],
    subtitle: "A cozy triple-match shelf sorter: drag goods between shelves, clear three of a kind, and keep the cheeky shop cat out of mischief.",
    roleLine: "Role: Solo Developer • Board logic • Level generator • Boosters & meta • Portal SDK",
    youtubeId: null,
    buttons: [
      { label: "More of my work on Itch.io", href: "https://goldfire32.itch.io/", primary: true },
      { label: "Want a puzzle game? Chat", href: "https://wa.me/6282226551246?text=Hello%20Choirul,%20I%20want%20a%20puzzle%20game%20like%20Shelf%20Trip" }
    ],
    problem: "The portal sort-puzzle shelf is crowded with look-alike match-three games. This one needed a reason to click in three seconds — and a build light enough for a phone browser.",
    role: "Built the whole game solo: pure-Lua board rules, a DFS solver that generates and verifies every level, the drag/tap input layer, boosters, stars, coins, the item album, and the Playgama bridge build.",
    tech: "Defold 1.14.1 • Lua • pure-Lua logic tests • HTML5 • Playgama Bridge",
    result: "20 handcrafted levels • ≈3.6 MB web build • EN, portrait, phone-first",
    beforeAfter: [
      { img: "assets/games/shelf-trip/card_play.jpg", alt: "Shelf Trip level 8 and level 15 side by side", caption: "Play: level 8 and level 15 — three rows of shelves, stars, timer, and the shop cat watching from the corner." },
      { img: "assets/games/shelf-trip/card_meta.jpg", alt: "Shelf Trip level map and item album", caption: "Meta: country map unlocks next to the collectible item album." }
    ],
    videos: [
      { src: "assets/games/shelf-trip/preview.mp4", label: "Preview — silent gameplay capture (1920×1080)" }
    ],
    shots: [
      { no: 1, kamera: "Static overhead — the shelf wall", aksi: "Goods slide in from both sides, timer starts, the cat settles on the top-right shelf", audio: "Soft market ambience, wooden knocks, gentle chimes" },
      { no: 2, kamera: "POV first-person — over the player's finger", aksi: "A milk carton is dragged across three shelves, lands, and the triple pops in a burst of crumbs", audio: "Clack, satisfying pop, tiny cat chirp" },
      { no: 3, kamera: "Close-up — the cat pushes a jar", aksi: "The cat's paw flicks a jar one shelf over and it glows as the next target", audio: "Wobble, sly meow, rising hint hum" }
    ],
    steps: [
      { title: "Prove the loop before the art", body: "The board rules live in one pure-Lua module with 17 tests, so triple matching, row shifting, and win/timeout states were verified before a single final asset existed.", mono: "board_state.lua → 17 tests → autoplay 10/10" },
      { title: "Generate levels, then prove them solvable", body: "A DFS solver drives both the level generator and an autoplay mode: each level needs at least one winning line before it ships, and the generator can re-roll anything too tight.", mono: "gen_levels.lua → solver → levels/level_NNN.json" },
      { title: "Design the cat as a rule, not decoration", body: "Four cat tricks change the board on purpose — napping on shelves, pushing, swapping, and chasing fish. Glowing shelves telegraph the next strike so the mischief reads as fair.", accent: true }
    ],
    perf: { label: "LOAD BUDGET", value: "≈3.6 MB web build — portrait 720×1280", pct: 62, note: "Bar shows budget headroom against heavier Unity WebGL sorters on the same portals." },
    cta: "Building a casual puzzle for web portals?",
    gallery: [
      { img: "assets/games/shelf-trip/card_win.jpg", alt: "Shelf Trip win dialog with three stars", caption: "Win: three-star dialog with coin payout and the cat celebrating." },
      { img: "assets/games/shelf-trip/card_play.jpg", alt: "Shelf Trip levels in play", caption: "In play: two levels mid-sort with boosters, timer, and target stars." },
      { img: "assets/games/shelf-trip/card_meta.jpg", alt: "Shelf Trip level map and album", caption: "Meta: Universal Shop map and the collectible album." }
    ],
    related: ["cucumber-panic", "dukun-malam", "petal-pals"]
  },
  {
    slug: "cucumber-panic",
    k: "game", p: "WebGL",
    j: "Cucumber Panic: Space Cat",
    m: "3D lane shooter — cat vs cucumbers",
    h: "Hook build • 90–120s runs",
    r: "Solo Developer — lane shooter loop, hook scope, portal SDK",
    t: "Defold 1.14.1 • Lua • 3D • Playgama Bridge",
    img: "assets/games/cat-chaos/gameplay_cover.jpg",
    tag: "3D LANE SHOOTER",
    badges: ["GAME — ARCADE SHOOTER", "WEB • PLAYGAMA", "3D"],
    subtitle: "The orange cat from Shelf Trip gets blasted into space and must shoot a rain of cucumbers — until the giant vacuum cleaner shows up.",
    roleLine: "Role: Solo Developer • Lane shooter rules • Hook scope • Cat-themed HUD • Playgama SDK",
    youtubeId: null,
    buttons: [
      { label: "More of my work on Itch.io", href: "https://goldfire32.itch.io/", primary: true },
      { label: "Want a web arcade game? Chat", href: "https://wa.me/6282226551246?text=Hello%20Choirul,%20I%20want%20a%20web%20arcade%20game%20like%20Cucumber%20Panic" }
    ],
    problem: "Every cat-in-space shooter on the portals is 2D. The bet here was 3D lanes plus physical comedy — readable with no text at all, for an 8–15 audience on a school laptop.",
    role: "Took the MIT Starbreaker template and rebuilt the rules around it: lane movement, a 15-cucumber objective over 18 spawns, three fish lives, a sub-second auto-restart, and a full swap from Poki SDK to Playgama Bridge.",
    tech: "Defold 1.14.1 • Lua • 3D physics • Playgama Bridge",
    result: "Hook build: win/lose in 90–120s • auto-restart 0.9s • logic tests 16/16",
    beforeAfter: [
      { img: "assets/games/cat-chaos/gameplay_target.jpg", alt: "Cucumber Panic gameplay: target counter at 2/15 with a cucumber closing in", caption: "In play: the target counter reads 2/15 while the tuna cannon streams up the centre lane at an incoming cucumber." },
      { img: "assets/games/cat-chaos/gameplay_hull_hit.jpg", alt: "Cucumber Panic gameplay: red damage flash after a collision", caption: "Hull hit: a collision flashes the screen red and burns one of the three fish lives." }
    ],
    shots: [
      { no: 1, kamera: "Wide orbit — cardboard rocket enters frame", aksi: "The cat spins in from the left, cucumbers begin to drift in from three lanes", audio: "Cartoon whoosh, distant meow, playful synth pulse" },
      { no: 2, kamera: "POV first-person — behind the cat's ears", aksi: "Cucumbers rush toward the camera, tuna-can shots burst past both cheeks", audio: "Pop, pop, gleeful hiss, comic boing" },
      { no: 3, kamera: "Low close-up — vacuum hose opens", aksi: "The giant vacuum switches on, everything including the cat slides toward it", audio: "Dusty rumble, rising suction whine, music cuts to silence" }
    ],
    steps: [
      { title: "Cut the scope into a hook", body: "Instead of building the full game first, the prototype was reduced to one mission you can win or lose in under two minutes — no menu, no hub, no tutorial gate to clear.", mono: "18 spawns → 15 cucumbers → win/lose → auto-restart" },
      { title: "Make the restart instant", body: "A hypercasual run dies the moment a player waits. Losing now resets the run in 0.9s with lives and target already back on the HUD, so one more try is free.", mono: "result_flow.finish_hook_restart → reset_run" },
      { title: "Swap the platform layer, keep the feel", body: "The template's Poki SDK and ads wrapper were replaced with Playgama Bridge, and Esc bindings were removed per portal rules — while the template's touch controls and juice stayed intact.", accent: true }
    ],
    perf: null,
    cta: "Need a web arcade game with a 3-second hook?",
    gallery: [
      { img: "assets/games/cat-chaos/gameplay_enemy_wave.jpg", alt: "Cucumber Panic gameplay: enemy wave with a dodge coaching card", caption: "Wave start: cucumbers drift in while a coach card tells the player to dodge the incoming fire." },
      { img: "assets/games/cat-chaos/gameplay_crossfire.jpg", alt: "Cucumber Panic gameplay: two cucumbers under fire at 2/15", caption: "Crossfire: two cucumbers ahead, tuna cans climbing the centre lane." },
      { img: "assets/games/cat-chaos/gameplay_tuna_pickup.jpg", alt: "Cucumber Panic gameplay: tuna pickup meter at 6/12", caption: "Tuna pickup: the weapon meter fills to 6/12 as the next cucumber drops in." }
    ],
    related: ["shelf-trip", "drift-line", "pillow-fight"]
  },
  {
    slug: "street-food-rush",
    k: "game", p: "WebGL",
    j: "Street Food Rush: World Tour",
    m: "Idle street-food court, city by city",
    h: "5 cities • Rush Hour + minigames",
    r: "Unity Developer — gameplay loops, SDK-agnostic services, release tooling",
    t: "Unity 6 • C# • Addressables • Playgama/CrazyGames/Yandex",
    img: "assets/games/fast-travel/cover.jpg",
    tag: "IDLE • WEB + MOBILE",
    badges: ["GAME — IDLE / ARCADE", "WEB + MOBILE", "5 CITIES"],
    subtitle: "Run a street-food court in an open town square: cook, carry, serve cute animal customers, then travel to the next city with its own dishes and landmark.",
    roleLine: "Role: Unity Developer • Carry & serve loop • Rush Hour • Services layer • Localization",
    youtubeId: null,
    buttons: [
      { label: "More of my work on Itch.io", href: "https://goldfire32.itch.io/", primary: true },
      { label: "Want an idle game? Chat", href: "https://wa.me/6282226551246?text=Hello%20Choirul,%20I%20want%20an%20idle%20restaurant%20game" }
    ],
    problem: "The project started as an indoor burger template. Turning it into an outdoor Indonesian food street meant new loops, new AI customers, and one codebase that could ship to five different portals and then Android.",
    role: "Built the carry-and-serve loop (stations, tables, central cashier, ojek delivery), the Rush Hour phase with speed lines and bonus pay, background minigames for helpers, plus an SDK-agnostic services package so ads, IAP, and cloud save swap adapters instead of touching game code.",
    tech: "Unity 6 (6000.3) • C# • SimpleInput • Addressables • com.fasttravel.services facade (Ads / IAP / Cloud Save)",
    result: "5 Indonesian cities playable • EN + ID complete • portrait & landscape • portal + Android release paths",
    beforeAfter: [
      { img: "assets/games/fast-travel/gameplay.jpg", alt: "Street Food Rush gameplay with cash, gems, and progress HUD", caption: "Play: cooking stations, plate stacks, chibi animal customers, and the full landscape HUD." },
      { img: "assets/games/fast-travel/upgrade.jpg", alt: "Street Food Rush staff upgrade panel over the town square", caption: "Meta: the upgrade karyawan panel — staff speed, carry capacity, and headcount — over the live square." }
    ],
    shots: [
      { no: 1, kamera: "High isometric — town square at golden hour", aksi: "Customers stream in, an idle helper wipes a table, the money pile grows by the counter", audio: "Cozy street ambience, sizzling wok, soft UI pings" },
      { no: 2, kamera: "POV first-person — hands carrying a plate", aksi: "A stack of fried rice plates wobbles toward the counter as a cat customer waves", audio: "Footsteps, plate clink, cheerful customer chirp" },
      { no: 3, kamera: "Wide — Rush Hour erupts", aksi: "Speed lines kick in, queues surge, coin numbers climb faster", audio: "Music tempo jumps, cash register cascade, crowd cheer" }
    ],
    steps: [
      { title: "One loop, endlessly re-feedable", body: "Cook → carry → deliver → get paid → unlock. Every upgrade sits within a few seconds of the player's route, so there is always a next purchase in reach.", mono: "cook → carry → deliver → pay → unlock / upgrade" },
      { title: "Phases instead of scattered flags", body: "Intro, tutorial, play, and Rush Hour are one explicit phase object that every system asks — tutorial checks, cutscene locks, and Rush Hour rules never fight each other in condition spaghetti.", mono: "LocationPhase.IsPlay / IsPastTutorial / Changed" },
      { title: "Portals without rewriting the game", body: "A services facade sits in front of every third-party SDK: game code calls Services.Ads.ShowRewarded, adapters translate, so moving from a mock to AdMob or a portal bridge is a swap — not a refactor.", accent: true }
    ],
    perf: null,
    cta: "Shipping to web portals and mobile at once?",
    gallery: [
      { img: "assets/games/fast-travel/menu.jpg", alt: "Street Food Rush main menu with the Jakarta landmark", caption: "Menu: daily reward, missions, shop, wardrobe, and the MAIN button into Jakarta." },
      { img: "assets/games/fast-travel/rush.jpg", alt: "Street Food Rush Rush Hour with the JAM RAMAI timer at 0:10", caption: "Rush Hour: the JAM RAMAI timer counts down while the queue keeps growing." },
      { img: "assets/games/fast-travel/minigame.jpg", alt: "Street Food Rush helper minigame with ingredient buttons", caption: "Minigame: tap the right ingredient into the wok before the timer runs out." }
    ],
    related: ["shelf-trip", "petal-pals", "prototyping"]
  },
  {
    slug: "dukun-malam",
    k: "game", p: "WebGL",
    j: "Dukun Malam",
    m: "Pixel-art ghost clinic — horror comedy",
    h: "v0.4.1 • 3 nights + endless",
    r: "Solo Developer — case design, interaction, UI, release",
    t: "Godot 4.6.3 • GDScript • HTML5 + Windows",
    img: "assets/games/dukun-malam/cover-web.jpg",
    tag: "PIXEL HORROR-KOMEDI",
    badges: ["GAME — PUZZLE / SIM", "WEB + WINDOWS", "INDONESIAN FOLKLORE"],
    subtitle: "Indonesian ghosts have lost their signature powers. As the Dokter Setan, you listen, examine, search the Kitab, brew a cure, and hand it over at the counter.",
    roleLine: "Role: Solo Developer • Case data • Drag interaction • UI windows • Validator & release builds",
    youtubeId: null,
    buttons: [
      { label: "More of my work on Itch.io", href: "https://goldfire32.itch.io/", primary: true },
      { label: "Want a narrative puzzle? Chat", href: "https://wa.me/6282226551246?text=Hello%20Choirul,%20tell%20me%20about%20Dukun%20Malam" }
    ],
    problem: "A point-and-click clinic can turn into a text wall fast. The design had to teach a five-step examination loop using only objects, windows, and the patient's mood — while keeping the folklore jokes readable.",
    role: "Wrote and structured every case as data, built the drag/click interaction and the movable Kitab and examination-tray windows, then added a validator and autoplay harness so each night is proven completable before it ships.",
    tech: "Godot 4.6.3 • GDScript • GL Compatibility • pixel-art pipeline (pixelize, chroma-key)",
    result: "v0.4.1 demo • nights 1–3 + endless nights • web and Windows builds • 10+ patient cases",
    beforeAfter: [
      { img: "assets/games/dukun-malam/pasien.jpg", alt: "Dukun Malam v0.4.1 night 1 desk with a pocong patient at the window", caption: "Night 1: the pocong at the window with its complaint bubble, the patience candles, CATATAN PASIEN, and the five-step PETUNJUK checklist." },
      { img: "assets/games/dukun-malam/kitab.jpg", alt: "Dukun Malam Kitab Primbon Mbah table of contents", caption: "Kitab: the contents page is the puzzle — locked entries read ??? (sobek) until the matching mark is found." }
    ],
    shots: [
      { no: 1, kamera: "Wide — the practice at 23:00", aksi: "Lanterns flicker over the counter, a queue of ghosts waits outside, three candles burn", audio: "Night insects, gamelan drone, a distant gong at midnight" },
      { no: 2, kamera: "POV first-person — as the Dokter Setan", aksi: "A lens is dragged across the patient, a knot mark glows, the Kitab flips open in the hand", audio: "Glass ring, paper rustle, patient's nervous whisper" },
      { no: 3, kamera: "Close-up — the cure handed over", aksi: "The tied rope lands in the pocong's hands and it hops out the door, relieved", audio: "Cloth snap, happy hop, candle snuff, warm chord" }
    ],
    steps: [
      { title: "Cases as data, not scripts", body: "Every night, patient, complaint, recipe, and Kitab page lives in one data module. Adding a ghost means adding a record — the interaction code never changes.", mono: "case_data.gd → NIGHTS → cases / recipes / pages" },
      { title: "Windows you can physically move", body: "The Kitab and the examination tray are draggable windows with their own titles and close buttons, so the desk stays readable even when three clues are on top of each other.", mono: "drag_window.gd → title drag / X close / right-click cancel" },
      { title: "Prove every night is solvable", body: "A validator checks that each night has the required tool, station, ingredients, and Kitab page, plus a self-test that confirms the checker catches deliberately broken data. Autoplay then plays the nights end to end.", accent: true }
    ],
    perf: null,
    cta: "Making a narrative puzzle on a small budget?",
    gallery: [
      { img: "assets/games/dukun-malam/menu.jpg", alt: "Dukun Malam main menu with the practice at night", caption: "Menu: the practice at 23:00 — main baru, opening story, how to play, settings." },
      { img: "assets/games/dukun-malam/keluhan.jpg", alt: "Dukun Malam patient complaint bubble for Suster Ngesot", caption: "Step 1: Suster Ngesot introduces herself — hear the complaint, then reach for a tool." },
      { img: "assets/games/dukun-malam/alat.jpg", alt: "Dukun Malam magnifier held and ready to inspect", caption: "Step 2: the magnifier is picked up — the inventory footer reads Dipegang: Lensa, ready for the patient." },
      { img: "assets/games/dukun-malam/kitab_halaman.jpg", alt: "Dukun Malam Kitab recipe page for LANTAI LICIN", caption: "Step 3: the recipe page lists the ingredients (ijuk, benang, jarum, sarung tangan kasar) and the station." },
      { img: "assets/games/dukun-malam/intro_lulus.jpg", alt: "Dukun Malam opening cinematic at graduation", caption: "Opening cinematic: graduation day, framed as a 90s manga page." },
      { img: "assets/games/dukun-malam/intro_hutan.jpg", alt: "Dukun Malam opening cinematic in the bamboo forest", caption: "Opening cinematic: the first patient in the bamboo forest, ghosts queued behind." }
    ],
    related: ["shelf-trip", "maze-puzzle-uii", "maskbound-jinosi"]
  },
  {
    slug: "drift-line",
    k: "game", p: "WebGL",
    j: "Drift Line",
    m: "One-button drift racer for web portals",
    h: "Combo ×10 • <1s restart",
    r: "Solo Developer — drift feel, tracks, HUD, portal hook",
    t: "Godot 4.6.3 • GDScript • Kenney kit (CC0) • Playgama Bridge",
    img: "assets/games/drift-line/cover-web.jpg",
    tag: "HYPERCASUAL RACING",
    badges: ["GAME — HYPERCASUAL", "WEB • PLAYGAMA", "ONE BUTTON"],
    subtitle: "Hold to drift tight, release to widen out. Keep the car on the golden line for a combo multiplier — and cross the start line to teleport into another world.",
    roleLine: "Role: Solo Developer • Drift feel • Track data • Combo scoring • Portal bridge",
    youtubeId: null,
    buttons: [
      { label: "More of my work on Itch.io", href: "https://goldfire32.itch.io/", primary: true },
      { label: "Want a hypercasual game? Chat", href: "https://wa.me/6282226551246?text=Hello%20Choirul,%20I%20want%20a%20hypercasual%20game%20like%20Drift%20Line" }
    ],
    problem: "One-button drift games live or die on a single feel decision. The risk was spending weeks on content before proving that holding and releasing a button actually feels good on a phone.",
    role: "Tuned the kinematic drift model by hand, built the track data and the start-line portal that teleports between worlds, and implemented combo scoring, crash, instant restart, and the minimum Playgama bridge layer.",
    tech: "Godot 4.6.3 • GDScript • GL Compatibility • Kenney Starter Kit Racing (MIT / CC0) • Playgama Bridge",
    result: "Hook build playable in browser • 2 tracks live from 5 designed worlds • restart under 1s",
    beforeAfter: [
      { img: "assets/games/drift-line/gameplay_line.jpg", alt: "Drift Line gameplay: car holding the golden line under the start gate", caption: "In play: the car holds the golden line under the start gate — score 11, drift hint, and the next corner ahead." },
      { img: "assets/games/drift-line/gameplay_crash.jpg", alt: "Drift Line crash screen with debris and tap-to-retry prompt", caption: "Run over: CRASH with score and best on screen, debris still settling — one tap puts the car back on the line." }
    ],
    shots: [
      { no: 1, kamera: "High chase — car entering the hairpin", aksi: "The car leans in, smoke spills off the rear wheels, a combo counter pops ×5", audio: "Tire squeal, engine wind-up, crisp combo blip" },
      { no: 2, kamera: "POV first-person — over the hood", aksi: "The golden ideal line stretches ahead as the track bends into a neon road floating in space", audio: "Whoosh of teleport, deep bass drop, sparkle of portal particles" },
      { no: 3, kamera: "Low side-on — the crash", aksi: "The car slides wide, clips the edge, dust bursts, then one tap restarts the run instantly", audio: "Metal thud, dust hiss, instant restart chirp" }
    ],
    steps: [
      { title: "One input, two extremes", body: "Hold bends sharp, release widens — nothing else. Collision and speed are derived from how long the player stayed near that ideal line, so skill reads as a number they can chase.", mono: "hold → drift tight • release → widen • line → combo" },
      { title: "Track as data, worlds as palette", body: "Tracks are tile/spline data with five world palettes prepared, so a new world is a data entry rather than a new scene — two are live in the hook build.", mono: "TRACKS (game.gd) + worlds.gd → SUNSET / SPACE live" },
      { title: "Restart before regret", body: "A crash leads straight back into a run with a tap, best score persists through platform storage, and the whole loop was built to be recorded as a 9:16 clip for testing interest.", accent: true }
    ],
    perf: null,
    cta: "Need a hypercasual loop that feels right on a phone?",
    gallery: [
      { img: "assets/games/drift-line/menu.jpg", alt: "Drift Line boot screen with logo and hold-to-drift prompt", caption: "Boot: the logo over the live track with the one-line prompt — no menu, first input starts the run." },
      { img: "assets/games/drift-line/gameplay_drift.jpg", alt: "Drift Line gameplay at score 8 approaching the start gate", caption: "Sunset track: score ticking up as the car lines up for the gate." },
      { img: "assets/games/drift-line/gameplay_best.jpg", alt: "Drift Line NEW BEST screen with score 14", caption: "New best: score 14, best 14 — the retry prompt sits under the result." }
    ],
    related: ["shelf-trip", "cucumber-panic", "prototyping"]
  },
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
