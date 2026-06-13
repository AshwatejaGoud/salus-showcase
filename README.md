# Salus Showcase — by SATG

A premium, interactive, single-page product showcase for **Salus** — the two-sided healthcare super-platform (Salus Patient + Salus Pro). Built to share on LinkedIn, Twitter/X, investor decks, and to embed on a website. No app install needed — people *see and try* the product in the browser.

> **Tagline:** Healthcare. Reimagined for Everyone.

---

## 📁 What's inside

```
salus-showcase/
├── index.html              ← the main landing page (10 sections + live demo)
├── styles.css              ← all styling, phone frames, animations
├── script.js               ← mockups, count-ups, scroll animations, booking demo
├── social/
│   ├── linkedin.html       ← 1200 × 627  share image
│   ├── twitter.html        ← 1200 × 675  share image
│   ├── instagram.html      ← 1080 × 1080 share image
│   └── investor-slide.html ← 1920 × 1080 pitch slide
└── README.md               ← this file
```

**Tech (all via free CDN — just needs internet):** Tailwind CSS · GSAP + ScrollTrigger · AOS · Lucide Icons · Inter font.

---

## ▶️ 1. View it locally

**Easiest:** double-click `index.html` — it opens in your browser. Done.

**If animations or icons don't load** (some browsers restrict `file://`), run a tiny local server:

```bash
cd ~/Downloads/salus-showcase
python3 -m http.server 5500
```
Then open **http://localhost:5500** in your browser.

> Internet is required the first time so the CDN libraries (Tailwind, GSAP, etc.) can load.

---

## 🌐 2. Host it online (free) — pick one

### Option A — Netlify Drop (no account math, 30 seconds) ⭐ recommended
1. Go to **https://app.netlify.com/drop**
2. Drag the whole **`salus-showcase`** folder onto the page.
3. You instantly get a live link like `https://salus-xyz.netlify.app`.
4. (Optional) Sign in → **Site settings → Change site name** → `salus` → `https://salus.netlify.app`.

### Option B — Vercel
1. Install once: `npm i -g vercel`
2. `cd ~/Downloads/salus-showcase && vercel`
3. Follow the prompts → get a live URL. Run `vercel --prod` to promote it.

### Option C — GitHub Pages
1. Create a repo, e.g. `salus-showcase`, and push these files.
   ```bash
   cd ~/Downloads/salus-showcase
   git init && git add . && git commit -m "Salus showcase"
   git branch -M main
   git remote add origin https://github.com/<you>/salus-showcase.git
   git push -u origin main
   ```
2. Repo → **Settings → Pages → Branch: `main` / root → Save**.
3. Live in ~1 min at `https://<you>.github.io/salus-showcase/`.

---

## 📸 3. Take the social-media screenshots

Each file in `social/` is sized to the *exact* pixel dimensions of the platform. Two reliable ways to capture them:

### Method A — Chrome DevTools "Capture node screenshot" (pixel-perfect) ⭐
1. Open the file (e.g. `social/linkedin.html`).
2. Right-click the colored card → **Inspect**.
3. In the Elements panel, find the `<div class="frame">` element.
4. Right-click that element → **Capture node screenshot**.
5. A perfectly-cropped PNG downloads at the exact size. ✅

### Method B — Set the window and full-screenshot
1. Open the file, zoom to 100% (`Cmd/Ctrl + 0`).
2. macOS: `Cmd + Shift + 4`, drag over the frame. Windows: **Snipping Tool**.

> Tip: the little monospace label in the top-left corner ("LinkedIn · 1200×627") is just a guide — it sits *outside* the frame, so it won't appear if you capture the frame node (Method A).

| File | Size | Use for |
|------|------|---------|
| `social/linkedin.html` | 1200×627 | LinkedIn link/post image |
| `social/twitter.html` | 1200×675 | Twitter/X post |
| `social/instagram.html` | 1080×1080 | Instagram feed post |
| `social/investor-slide.html` | 1920×1080 | Pitch deck slide / 16:9 |

---

## 🔗 4. Share the live link

Once deployed (e.g. `https://salus.netlify.app`):
- **LinkedIn / Twitter:** paste the link — the page has Open Graph tags so it previews nicely. Attach the matching `social/` image for a richer post.
- **WhatsApp / email:** paste the link; add it to your **email signature** ("See Salus →").
- **Embed on a website:** `<iframe src="https://salus.netlify.app" width="100%" height="900" style="border:0"></iframe>`
- **Investor deck:** screenshot `investor-slide.html` (Method A) and drop the PNG straight into a slide.

---

## ✏️ Customize

- **Colors:** edit the `:root` variables at the top of `styles.css` (Navy `#0A2463`, Gold `#B9964A`, Teal `#0D9488`).
- **Features / stats / roadmap:** edit the arrays near the top of `script.js` (`FEATURES`) and the `data-target` numbers in `index.html`.
- **Founder photo:** replace the `.founder-photo` block in `index.html` with an `<img>`.
- **App screens:** the phone mockups are pure HTML/CSS in `script.js` (`patientHome()`, `proDashboard()`) — tweak the sample clinics/stats freely.

---

Made with care in India 🇮🇳 · **Salus by SATG — Global Health Technology**
