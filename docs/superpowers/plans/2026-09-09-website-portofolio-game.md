# Website Portofolio Game Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Membangun website portofolio client-focused untuk game developer 5 tahun yang menjual jasa Game, Shader/VFX, dan Game AI lintas Android/PC/WebGL.

**Architecture:** Next.js App Router + TypeScript + Tailwind, data statis dari `data/projects.ts` dengan filter client-side per kategori skill dan platform, routing `/`, `/works/[slug]`, `/services`, `/kontak`, embed WebGL via iframe untuk proyek WebGL.

**Tech Stack:** Next.js 14+, React 18, TypeScript, Tailwind CSS, hosting gratis Vercel-ready.

**Spec:** Brief revisi 2026-09-09 — Aku game developer 5 tahun, website untuk diarahkan ke client, isi campur game + shader + AI game, platform Android + PC + WebGL. Daftar proyek asli menyusul, plan ini pakai 6 data contoh yang strukturnya sama persis agar tinggal ganti isi.

## Global Constraints

- Bahasa komunikasi dan copy website: Bahasa Indonesia.
- Mobile-first, prioritas Android (320px, 375px, 768px, 1024px, 1440px harus lolos).
- Gaya minimal profesional: bersih, whitespace lega, 1 warna aksen saja, tanpa neon berlebihan.
- Utamakan aset gratis ready-to-use (Tailwind, YouTube embed, link Play Store/Itch/WebGL) bukan build dari nol.
- Setiap proyek bertipe game wajib punya story ala shooting script sinematik shot-by-shot termasuk signature POV/first-person shot.
- Hosting gratis-ready (Vercel), tanpa biaya, tanpa backend.
- Setiap halaman proyek harus menjawab: masalah client apa, peran saya apa, tech stack apa, hasil apa, video 15-30 detik di paling atas.

---

## File Structure

- `app/layout.tsx` — layout global, metadata Indonesia, navigasi, footer.
- `app/page.tsx` — homepage: hero client-focused, filter kategori+platform, grid Selected Works, section services ringkas, CTA WhatsApp.
- `app/works/[slug]/page.tsx` — detail proyek dengan template jualan + section kondisional per kategori.
- `app/services/page.tsx` — layanan sewa (full game, shader custom, AI enemy, porting) + cara kerja.
- `app/kontak/page.tsx` — kontak WhatsApp, email, LinkedIn, Itch, Play Store.
- `components/Navbar.tsx` — navigasi responsif: Works, Services, Kontak.
- `components/Footer.tsx` — footer minimal.
- `components/FilterBar.tsx` — filter client component kategori + platform.
- `components/ProjectCard.tsx` — kartu proyek reusable dengan badge kategori dan platform.
- `components/TrailerEmbed.tsx` — embed YouTube responsif.
- `components/WebGLEmbed.tsx` — embed WebGL via iframe responsif.
- `components/ShootingScript.tsx` — tabel shot-by-shot sinematik untuk proyek game.
- `data/projects.ts` — tipe Project + 6 data contoh (2 game, 2 shader, 2 AI) lintas Android/PC/WebGL.
- `app/globals.css` — Tailwind + token minimal + focus visible.

---

### Task 1: Setup Next.js + Tailwind + Base Config

**Files:**
- Create: `package.json` via create-next-app
- Modify: `app/globals.css`
- Test: `npm run build`

**Interfaces:**
- Consumes: Node 18+
- Produces: Project Next.js yang bisa `npm run dev` dan `npm run build`

- [ ] **Step 1: Write the failing test**

```bash
npm run build
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run build`
Expected: FAIL dengan "package.json not found" atau "next: not found" karena project belum ada.

- [ ] **Step 3: Write minimal implementation**

```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir=false --import-alias="@/*" --use-npm
npm install
```

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --accent: #0f766e;
}
body {
  background: #fafaf9;
  color: #1c1917;
}
a:focus-visible, button:focus-visible {
  outline: 2px solid #0f766e;
  outline-offset: 2px;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run build`
Expected: PASS dengan "Compiled successfully".

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: setup nextjs tailwind base"
```

### Task 2: Layout Global + Navbar + Footer Client-Focused

**Files:**
- Create: `components/Navbar.tsx`
- Create: `components/Footer.tsx`
- Modify: `app/layout.tsx`
- Test: `app/page.tsx` sementara

**Interfaces:**
- Consumes: Tailwind dari Task 1
- Produces: `Navbar()`, `Footer()` dipakai semua halaman

- [ ] **Step 1: Write the failing test**

```tsx
// app/page.tsx sementara
export default function Home() {
  return <main><h1>Portofolio</h1></main>
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run dev`, buka http://localhost:3000
Expected: FAIL visual — belum ada navigasi Works/Services/Kontak dan belum ada CTA WhatsApp.

- [ ] **Step 3: Write minimal implementation**

```tsx
// components/Navbar.tsx
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="border-b border-stone-200 bg-white/90 sticky top-0 z-10">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-lg">NamaKamu<span className="text-teal-700">.dev</span></Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/#works">Works</Link>
          <Link href="/services">Services</Link>
          <Link href="/kontak">Kontak</Link>
          <a href="https://wa.me/6281234567890" className="bg-stone-900 text-white px-4 py-2 rounded-lg">Diskusi Proyek</a>
        </div>
      </nav>
    </header>
  );
}
```

```tsx
// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-stone-200 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-stone-600 flex flex-col sm:flex-row justify-between gap-2">
        <p>© 2026 NamaKamu — Game Developer 5 tahun</p>
        <p>Android • PC • WebGL — Game • Shader • Game AI</p>
      </div>
    </footer>
  );
}
```

```tsx
// app/layout.tsx
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export const metadata = { title: "NamaKamu — Game Developer Android/PC/WebGL", description: "Portofolio game developer 5 tahun: game, shader/VFX, dan game AI untuk Android, PC, WebGL." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body><Navbar />{children}<Footer /></body>
    </html>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run build`
Expected: PASS, preview ada Navbar Works/Services/Kontak + tombol Diskusi Proyek + Footer.

- [ ] **Step 5: Commit**

```bash
git add components/Navbar.tsx components/Footer.tsx app/layout.tsx app/page.tsx
git commit -m "feat: layout global navbar footer client"
```

### Task 3: Data Model Campuran + Homepage Filter + Cards

**Files:**
- Create: `data/projects.ts`
- Create: `components/ProjectCard.tsx`
- Create: `components/FilterBar.tsx`
- Create: `components/TrailerEmbed.tsx`
- Modify: `app/page.tsx`
- Test: homepage render 6 kartu dan filter berfungsi

**Interfaces:**
- Consumes: Navbar/Footer Task 2
- Produces: `projects: Project[]`, `ProjectCard({project})`, `FilterBar({kategori, platform, onKategori, onPlatform})`

- [ ] **Step 1: Write the failing test**

```bash
ls data/projects.ts
```

- [ ] **Step 2: Run test to verify it fails**

Run: `ls data/projects.ts`
Expected: FAIL "No such file or directory".

- [ ] **Step 3: Write minimal implementation**

```ts
// data/projects.ts
export type Kategori = "game" | "shader" | "game-ai";
export type Platform = "Android" | "PC" | "WebGL";
export type Shot = { no: number; kamera: string; aksi: string; audio: string };
export type Project = {
  slug: string; judul: string; kategori: Kategori; platform: Platform;
  peran: string; masalah: string; deskripsi: string;
  techstack: string[]; hasil: string[];
  youtubeId: string; playUrl?: string; webglUrl?: string; pcUrl?: string;
  screenshots: string[]; fitur: string[]; storyShots: Shot[];
  breakdown: string[]; perfCost: string;
};
export const projects: Project[] = [
  {
    slug: "petualangan-nusantara", judul: "Petualangan Nusantara", kategori: "game", platform: "Android",
    peran: "Solo dev: desain, code, rilis", masalah: "Client butuh platformer ringan offline ukuran kecil.",
    deskripsi: "Platformer 2D 30 level tentang anak menjelajah pulau.",
    techstack: ["Unity 2022", "C#", "2D URP"], hasil: ["50rb+ download", "Rating 4.6", "Size 48MB"],
    youtubeId: "dQw4w9WgXcQ", playUrl: "https://play.google.com/",
    screenshots: ["/shots/nusantara-1.jpg"], fitur: ["30 level", "Kontrol sentuh 48px", "Offline"],
    storyShots: [
      { no: 1, kamera: "Wide drone — pantai pagi", aksi: "Tokoh lari kecil menuju perahu", audio: "Ombak + gamelan lembut" },
      { no: 2, kamera: "POV first-person — tangan mendorong perahu", aksi: "Kamera goyang, air muncrat", audio: "SFX air, napas" },
      { no: 3, kamera: "Close-up — mata tokoh", aksi: "Refleksi pulau di mata", audio: "Hening lalu musik naik" },
    ],
    breakdown: [], perfCost: "60fps di Redmi 9",
  },
  {
    slug: "warung-tycoon-pc", judul: "Warung Tycoon PC", kategori: "game", platform: "PC",
    peran: "Gameplay programmer", masalah: "Client punya game mobile mau dibawa ke Steam.",
    deskripsi: "Simulasi warung dari gerobak sampai resto, port PC dengan mouse+keyboard.",
    techstack: ["Unity 2022", "C#", "Steamworks"], hasil: ["Port 3 minggu", "Support 1080p-4K", "Cloud save"],
    youtubeId: "dQw4w9WgXcQ", pcUrl: "https://itch.io/",
    screenshots: ["/shots/warung-1.jpg"], fitur: ["100 resep", "Mouse+keyboard", "Cloud save"],
    storyShots: [
      { no: 1, kamera: "Overhead — warung malam", aksi: "Lampu menyala satu per satu", audio: "Jangkrik" },
      { no: 2, kamera: "POV kasir — tangan terima uang", aksi: "Uang masuk laci", audio: "Ting kasir" },
    ],
    breakdown: [], perfCost: "60fps di GTX 1050",
  },
  {
    slug: "stylized-water-shader", judul: "Stylized Water Shader", kategori: "shader", platform: "PC",
    peran: "Technical artist", masalah: "Client butuh air stylized murah untuk low-spec.",
    deskripsi: "Shader air stylized dengan foam dan depth fade.",
    techstack: ["Unity URP", "HLSL", "Shader Graph"], hasil: ["0.4ms di GTX 1050", "Reusable 5 proyek", "Dokumentasi"],
    youtubeId: "dQw4w9WgXcQ", pcUrl: "https://itch.io/",
    screenshots: ["/shots/water-before.jpg", "/shots/water-after.jpg"], fitur: ["Foam", "Depth fade", "Flow map"],
    storyShots: [],
    breakdown: ["Before: standard lit flat", "After: depth fade + foam + flow", "Node: depth texture ke foam mask"],
    perfCost: "0.4ms @1080p GTX 1050",
  },
  {
    slug: "mobile-dissolve-vfx", judul: "Mobile Dissolve VFX", kategori: "shader", platform: "Android",
    peran: "VFX artist", masalah: "Efek hilang musuh bikin drop FPS di HP kentang.",
    deskripsi: "Dissolve + spawn effect 1 draw call untuk mobile.",
    techstack: ["Unity URP", "Shader Graph", "VFX Graph mobile"], hasil: ["Tetap 60fps Redmi 9", "1 draw call", "Paket reusable"],
    youtubeId: "dQw4w9WgXcQ", playUrl: "https://play.google.com/",
    screenshots: ["/shots/dissolve-1.jpg"], fitur: ["1 draw call", "Tanpa texture besar", "URP mobile"],
    storyShots: [],
    breakdown: ["Before: 8 material + particle berat", "After: 1 shader dissolve + 1 particle sederhana"],
    perfCost: "60fps di Redmi 9",
  },
  {
    slug: "horde-enemy-ai", judul: "Horde Enemy AI", kategori: "game-ai", platform: "PC",
    peran: "AI programmer", masalah: "100+ musuh bikin CPU jebol.",
    deskripsi: "AI gerombolan dengan LOD otak dan avoidance murah.",
    techstack: ["Unity 2022", "C# Jobs", "State machine"], hasil: ["100 musuh 60fps", "CPU AI turun 70%", "3 behaviour"],
    youtubeId: "dQw4w9WgXcQ", pcUrl: "https://itch.io/",
    screenshots: ["/shots/horde-1.jpg"], fitur: ["Seek, flank, retreat", "LOD AI", "Jobs+Burst"],
    storyShots: [],
    breakdown: ["Diagram: idle-seek-attack-retreat", "Optimasi: LOD tiap 0.2s jauh, tiap frame dekat"],
    perfCost: "AI 1.2ms untuk 100 agen",
  },
  {
    slug: "stealth-guard-ai-webgl", judul: "Stealth Guard AI WebGL", kategori: "game-ai", platform: "WebGL",
    peran: "AI + WebGL", masalah: "Client butuh demo AI yang bisa dicoba langsung di browser.",
    deskripsi: "Penjaga stealth dengan vision cone dan patroli, playable di browser.",
    techstack: ["Unity WebGL", "C#", "NavMesh"], hasil: ["Bisa dimainkan di web", "Load <10 detik", "3 level demo"],
    youtubeId: "dQw4w9WgXcQ", webglUrl: "https://itch.io/",
    screenshots: ["/shots/guard-1.jpg"], fitur: ["Vision cone", "Patroli+kejar", "WebGL compressed"],
    storyShots: [],
    breakdown: ["Behaviour: patroli-curiga-kejar", "WebGL: compress Brotli, heap 256MB"],
    perfCost: "60fps Chrome laptop 2020",
  },
];
```

```tsx
// components/ProjectCard.tsx
import Link from "next/link";
import type { Project } from "../data/projects";
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border border-stone-200 rounded-xl p-4 bg-white">
      <div className="flex gap-2 text-[11px]">
        <span className="bg-stone-900 text-white px-2 py-0.5 rounded-full">{project.kategori}</span>
        <span className="border px-2 py-0.5 rounded-full">{project.platform}</span>
      </div>
      <h3 className="font-semibold text-lg mt-2">{project.judul}</h3>
      <p className="text-sm text-stone-600 mt-1">{project.masalah}</p>
      <Link href={`/works/${project.slug}`} className="inline-block mt-3 text-sm font-medium text-teal-700">Lihat studi kasus →</Link>
    </article>
  );
}
```

```tsx
// components/FilterBar.tsx
"use client";
import type { Kategori, Platform } from "../data/projects";
export default function FilterBar({ kategori, platform, onKategori, onPlatform }: {
  kategori: Kategori | "semua"; platform: Platform | "semua";
  onKategori: (v: Kategori | "semua") => void; onPlatform: (v: Platform | "semua") => void;
}) {
  const btn = (aktif: boolean) => aktif ? "bg-stone-900 text-white" : "border";
  return (
    <div className="flex flex-wrap gap-2 text-sm">
      {(["semua", "game", "shader", "game-ai"] as const).map(k => <button key={k} onClick={() => onKategori(k)} className={`px-3 py-1.5 rounded-full ${btn(kategori === k)}`}>{k}</button>)}
      <span className="w-2" />
      {(["semua", "Android", "PC", "WebGL"] as const).map(p => <button key={p} onClick={() => onPlatform(p)} className={`px-3 py-1.5 rounded-full ${btn(platform === p)}`}>{p}</button>)}
    </div>
  );
}
```

```tsx
// components/TrailerEmbed.tsx
export default function TrailerEmbed({ youtubeId, title }: { youtubeId: string; title: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
      <iframe className="h-full w-full" src={`https://www.youtube.com/embed/${youtubeId}`} title={title} allowFullScreen />
    </div>
  );
}
```

```tsx
// app/page.tsx
"use client";
import { useState } from "react";
import { projects, type Kategori, type Platform } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import FilterBar from "../components/FilterBar";
import TrailerEmbed from "../components/TrailerEmbed";
export default function Home() {
  const [kategori, setKategori] = useState<Kategori | "semua">("semua");
  const [platform, setPlatform] = useState<Platform | "semua">("semua");
  const filtered = projects.filter(p => (kategori === "semua" || p.kategori === kategori) && (platform === "semua" || p.platform === platform));
  const unggulan = projects[0];
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="py-8">
        <p className="text-sm text-teal-700 font-medium">Game Developer — 5 tahun — Android / PC / WebGL</p>
        <h1 className="text-3xl sm:text-5xl font-bold mt-2">Saya bantu wujudkan game Anda sampai rilis.</h1>
        <p className="mt-3 text-stone-600 max-w-2xl">Spesialis Game, Shader/VFX, dan Game AI. 20+ proyek, rilis Android, PC, dan WebGL.</p>
        <div className="mt-5 flex gap-3">
          <a href="https://wa.me/6281234567890" className="bg-stone-900 text-white px-5 py-2.5 rounded-lg text-sm">Diskusi Proyek</a>
          <a href="#works" className="border px-5 py-2.5 rounded-lg text-sm">Lihat works</a>
        </div>
      </section>
      <section><TrailerEmbed youtubeId={unggulan.youtubeId} title={unggulan.judul} /></section>
      <section id="works" className="mt-10">
        <h2 className="text-xl font-bold">Selected Works</h2>
        <div className="mt-3"><FilterBar kategori={kategori} platform={platform} onKategori={setKategori} onPlatform={setPlatform} /></div>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run build`
Expected: PASS, homepage tampil hero client + 6 kartu + filter 2 baris.

- [ ] **Step 5: Commit**

```bash
git add data/projects.ts components/ProjectCard.tsx components/FilterBar.tsx components/TrailerEmbed.tsx app/page.tsx
git commit -m "feat: homepage filter works campur game shader ai"
```

### Task 4: Detail Works + WebGL Embed + Section Kondisional

**Files:**
- Create: `components/ShootingScript.tsx`
- Create: `components/WebGLEmbed.tsx`
- Create: `app/works/[slug]/page.tsx`
- Test: `/works/stealth-guard-ai-webgl` ada iframe WebGL, `/works/petualangan-nusantara` ada shooting script

**Interfaces:**
- Consumes: `projects` dari Task 3
- Produces: Halaman detail studi kasus client

- [ ] **Step 1: Write the failing test**

```bash
ls "app/works/[slug]/page.tsx"
```

- [ ] **Step 2: Run test to verify it fails**

Run: perintah di atas. Buka http://localhost:3000/works/petualangan-nusantara → 404.
Expected: FAIL 404.

- [ ] **Step 3: Write minimal implementation**

```tsx
// components/ShootingScript.tsx
import type { Shot } from "../data/projects";
export default function ShootingScript({ shots }: { shots: Shot[] }) {
  return (
    <div className="overflow-x-auto border rounded-xl">
      <table className="w-full text-sm">
        <thead className="bg-stone-100 text-left"><tr><th className="p-2">No</th><th className="p-2">Kamera</th><th className="p-2">Aksi</th><th className="p-2">Audio</th></tr></thead>
        <tbody>{shots.map(s => <tr key={s.no} className="border-t"><td className="p-2">{s.no}</td><td className="p-2">{s.kamera}</td><td className="p-2">{s.aksi}</td><td className="p-2">{s.audio}</td></tr>)}</tbody>
      </table>
    </div>
  );
}
```

```tsx
// components/WebGLEmbed.tsx
export default function WebGLEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl border bg-black">
      <iframe className="h-full w-full" src={src} title={title} allowFullScreen />
    </div>
  );
}
```

```tsx
// app/works/[slug]/page.tsx
import { projects } from "../../../data/projects";
import TrailerEmbed from "../../../components/TrailerEmbed";
import WebGLEmbed from "../../../components/WebGLEmbed";
import ShootingScript from "../../../components/ShootingScript";
import { notFound } from "next/navigation";
export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export default function Detail({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return notFound();
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <p className="text-sm text-stone-600">{project.kategori} • {project.platform}</p>
      <h1 className="text-3xl font-bold mt-1">{project.judul}</h1>
      <div className="mt-3 text-sm grid gap-1">
        <p><b>Masalah:</b> {project.masalah}</p>
        <p><b>Peran saya:</b> {project.peran}</p>
        <p><b>Tech:</b> {project.techstack.join(", ")}</p>
        <p><b>Hasil:</b> {project.hasil.join(" • ")}</p>
      </div>
      <div className="mt-6"><TrailerEmbed youtubeId={project.youtubeId} title={project.judul} /></div>
      {project.webglUrl ? <div className="mt-6"><h2 className="font-semibold mb-2">Coba langsung di browser</h2><WebGLEmbed src={project.webglUrl} title={project.judul} /></div> : null}
      <h2 className="font-semibold mt-8 mb-2">Fitur utama</h2>
      <ul className="list-disc ml-5 text-sm">{project.fitur.map(f => <li key={f}>{f}</li>)}</ul>
      {project.kategori === "game" && project.storyShots.length > 0 ? <><h2 className="font-semibold mt-8 mb-2">Cerita — Shooting Script Sinematik</h2><ShootingScript shots={project.storyShots} /></> : null}
      {project.kategori !== "game" ? <><h2 className="font-semibold mt-8 mb-2">Breakdown</h2><ul className="list-disc ml-5 text-sm">{project.breakdown.map(b => <li key={b}>{b}</li>)}</ul><p className="text-sm mt-2"><b>Cost:</b> {project.perfCost}</p></> : <p className="text-sm mt-2"><b>Performa:</b> {project.perfCost}</p>}
      <div className="mt-6 flex gap-3 text-sm">
        {project.playUrl ? <a href={project.playUrl} className="bg-stone-900 text-white px-5 py-2.5 rounded-lg">Play Store</a> : null}
        {project.pcUrl ? <a href={project.pcUrl} className="border px-5 py-2.5 rounded-lg">Itch/Steam</a> : null}
        <a href="https://wa.me/6281234567890" className="border px-5 py-2.5 rounded-lg">Mau seperti ini? Diskusi</a>
      </div>
    </main>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run build`
Expected: PASS, 6 halaman statis `/works/*` ter-generate.

- [ ] **Step 5: Commit**

```bash
git add components/ShootingScript.tsx components/WebGLEmbed.tsx "app/works/[slug]/page.tsx"
git commit -m "feat: detail works webgl breakdown sinematik"
```

### Task 5: Services + Cara Kerja + Kontak WhatsApp

**Files:**
- Create: `app/services/page.tsx`
- Create: `app/kontak/page.tsx`
- Test: `/services` ada 4 layanan, `/kontak` ada WhatsApp

**Interfaces:**
- Consumes: Layout global
- Produces: Halaman jualan jasa dan kontak

- [ ] **Step 1: Write the failing test**

```bash
ls app/services/page.tsx app/kontak/page.tsx
```

- [ ] **Step 2: Run test to verify it fails**

Run: perintah di atas. Buka /services → 404.
Expected: FAIL.

- [ ] **Step 3: Write minimal implementation**

```tsx
// app/services/page.tsx
const layanan = [
  { judul: "Full Game", isi: "Dari prototype sampai rilis Android/PC/WebGL. Cocok untuk client yang punya ide tapi butuh eksekusi." },
  { judul: "Shader & VFX Custom", isi: "Shader stylized, dissolve, water, efek mobile-friendly dengan laporan cost performa." },
  { judul: "Game AI", isi: "Enemy AI, horde, stealth guard, NPC dengan state machine/BT yang dioptimasi." },
  { judul: "Porting", isi: "Android ke PC/WebGL atau sebaliknya, termasuk optimasi size dan kontrol." },
];
const cara = ["Diskusi + NDA", "Prototype 1-2 minggu", "Milestone mingguan + build", "Rilis + source + dokumentasi"];
export default function Services() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="text-stone-600 mt-1">Yang bisa Anda sewa dari saya.</p>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {layanan.map(l => <div key={l.judul} className="border rounded-xl p-4 bg-white"><h2 className="font-semibold">{l.judul}</h2><p className="text-sm mt-1">{l.isi}</p></div>)}
      </div>
      <h2 className="font-bold mt-10">Cara kerja</h2>
      <ol className="mt-2 text-sm grid gap-2">{cara.map((c, i) => <li key={c} className="border rounded-lg p-3 bg-white">{i + 1}. {c}</li>)}</ol>
      <a href="https://wa.me/6281234567890" className="inline-block mt-6 bg-stone-900 text-white px-5 py-2.5 rounded-lg text-sm">Diskusi proyek via WhatsApp</a>
    </main>
  );
}
```

```tsx
// app/kontak/page.tsx
export default function Kontak() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Kontak</h1>
      <p className="text-stone-600 mt-1">Respon cepat untuk kebutuhan client.</p>
      <div className="mt-6 border rounded-xl p-5 bg-white text-sm grid gap-2">
        <p>WhatsApp: <a className="text-teal-700" href="https://wa.me/6281234567890">wa.me/6281234567890</a></p>
        <p>Email: <a className="text-teal-700" href="mailto:email@contoh.com">email@contoh.com</a></p>
        <p>LinkedIn: <a className="text-teal-700" href="https://linkedin.com/">linkedin.com/in/namakamu</a></p>
        <p>Itch.io: <a className="text-teal-700" href="https://itch.io/">itch.io/namakamu</a></p>
        <p>Play Store: <a className="text-teal-700" href="https://play.google.com/">play.google.com/dev/namakamu</a></p>
      </div>
      <a href="https://wa.me/6281234567890?text=Halo,%20saya%20lihat%20portofoliomu" className="inline-block mt-5 bg-stone-900 text-white px-5 py-2.5 rounded-lg text-sm">Chat WhatsApp</a>
    </main>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add app/services/page.tsx app/kontak/page.tsx
git commit -m "feat: services cara kerja kontak whatsapp"
```

### Task 6: Responsive + Aksesibilitas + Deploy Ready

**Files:**
- Modify: `app/globals.css`, semua komponen untuk focus + kontras
- Create: `README.md`
- Test: build + cek viewport

**Interfaces:**
- Consumes: Semua task 1-5
- Produces: Site siap deploy Vercel

- [ ] **Step 1: Write the failing test**

Run: `npm run build && npm run lint`

- [ ] **Step 2: Run test to verify it fails**

Catat lint error atau iframe tanpa title, perbaiki satu per satu.
Expected: FAIL awal jika ada error, lalu diperbaiki.

- [ ] **Step 3: Write minimal implementation**

Pastikan:
- Semua `iframe` punya `title` (sudah), semua `img` wajib `alt` saat ganti screenshot asli.
- Target sentuh min 44px, filter button sudah `py-1.5` + padding cukup di mobile.
- Test 320px, 375px, 768px, 1024px, 1440px tidak overflow horizontal.
- Ganti nomor WhatsApp, email, link Play Store/Itch/WebGL dengan data aslimu.
- Ganti 6 data contoh di `data/projects.ts` dengan proyek aslimu memakai struktur tipe yang sama.

```md
<!-- README.md -->
# Portofolio Game Developer
npm install
npm run dev
npm run build
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run build`
Expected: PASS. Deploy: push ke GitHub lalu import di Vercel, atau `npx vercel --prod`.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: responsive a11y deploy ready"
```

## Self-Review

1. Spec coverage: 5 tahun + client → hero jualan + template masalah/peran/hasil tiap proyek; campur game+shader+AI → tipe Kategori dan section kondisional; Android+PC+WebGL → tipe Platform + filter + WebGLEmbed + tombol Play/Itch; minimal profesional → layout bersih Task 2; shooting script POV → Task 4 khusus game.
2. Placeholder scan: tidak ada TBD/TODO, semua code block nyata, link wa.me/email/Play Store wajib diganti data asli saat implementasi, 6 data contoh tinggal ditimpa proyek asli tanpa ubah tipe.
3. Type consistency: `Project.slug/kategori/platform`, `Shot.no/kamera/aksi/audio`, `FilterBar` props, `generateStaticParams` slug dipakai konsisten Task 3-4.
