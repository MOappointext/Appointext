# AGENTS.md
# AI Build Instructions — AppoinText Funnel
# Built by AK Digital House

---

## 🧠 PROJECT OVERVIEW

You are building a **2-page high-converting sales funnel** for a client.

- **Page 1** → `/index.astro` — VSL funnel page (video locked behind lead form)
- **Page 2** → `/thank-you.astro` — Thank you page (video + book a call button)

**Stack:** Astro + Tailwind CSS + Vanilla JS
**Hosted on:** Cloudflare Pages (via GitHub)
**CRM:** GoHighLevel (leads sent via webhook)
**Payment:** Stripe (hosted payment link — no Stripe SDK needed)

---

## 🚫 STRICT RULES — NEVER BREAK THESE

- ❌ NEVER use Inter, Roboto, Arial, or system fonts
- ❌ NEVER use purple, teal, or generic SaaS gradients
- ❌ NEVER use `<form>` tags — use `onclick` handlers only
- ❌ NEVER add a download button or fullscreen on the video
- ❌ NEVER show the Stripe button before the form is submitted
- ❌ NEVER show the video before the form is submitted
- ❌ NEVER use localStorage or sessionStorage
- ❌ NEVER install unnecessary npm packages
- ❌ NEVER use Shadcn Card components — use custom divs

---

## ✅ ALWAYS DO THIS

- ✅ Use **Urbanist** for all text (headings + body)
- ✅ Use **JetBrains Mono** for code/mono elements
- ✅ Use Tailwind utility classes only — no custom CSS except global.css
- ✅ Every page must have full SEO meta tags
- ✅ All images use Astro `<Image />` component for optimization
- ✅ All sections below the fold use `loading="lazy"`
- ✅ Use semantic HTML: `<section>`, `<header>`, `<main>`, `<footer>`
- ✅ Every interactive element must have a `data-testid` attribute
- ✅ Mobile-first responsive design on all components

---

## 🎨 COLORS

```js
// tailwind.config.mjs
colors: {
  yellow:        '#FFD900',   // highlights, badges, secondary buttons
  'yellow-soft': '#FFE970',   // hover states
  blue:          '#1849D6',   // primary CTA buttons
  'blue-hover':  '#1339B5',   // blue hover
  red:           '#E63946',   // urgency badges ONLY
  dark:          '#0A0A0A',   // dark sections
  ink:           '#000000',   // pure black
  surface:       '#111111',   // cards on dark bg
  muted:         '#5B6480',   // body text, captions
}
```

**Usage:**
- **Yellow** → text highlights, pill badges, secondary buttons
- **Blue** → primary CTA buttons, anchor links, accent words in headlines
- **Red** → urgency ONLY ("ONLY 10 SPOTS", "CLOSING SOON")
- **Dark/Ink** → navbar, dark sections, footer
- **White** → main page background, white sections

---

## 🔤 TYPOGRAPHY

```js
fontFamily: {
  sans: ['Urbanist', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

```
Hero H1:         text-6xl md:text-7xl font-black tracking-tight leading-none
Section H2:      text-4xl md:text-5xl font-black tracking-tight leading-tight
Card Title H3:   text-xl md:text-2xl font-bold tracking-tight
Body Text:       text-base font-normal text-muted leading-relaxed
Badge Label:     text-xs font-bold uppercase tracking-[0.15em]
```

**Headline color rules:**
- Main words → black (on white) or white (on dark)
- Key phrase → wrap in `<span class="hl-yellow-full">`
- Accent word → `<span class="text-blue">`
- Urgency word → `<span class="text-red">`

---

## 🔠 FONTS IMPORT

```html
<!-- In BaseLayout.astro <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
```

---

## 🗂️ PROJECT STRUCTURE

```
/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro       ← SEO meta, fonts, global imports
│   ├── pages/
│   │   ├── index.astro            ← Page 1: VSL funnel
│   │   └── thank-you.astro        ← Page 2: Thank you + calendar
│   ├── components/
│   │   ├── AnnouncementBar.astro
│   │   ├── Navbar.astro
│   │   ├── VideoGate.astro        ← Form + locked video logic
│   │   ├── Ticker.astro
│   │   └── Footer.astro
│   └── styles/
│       └── global.css             ← Animations, hl-yellow, dotted-bg
├── public/
├── tailwind.config.mjs
├── astro.config.mjs
└── AGENTS.md                      ← This file
```

---

## 📄 PAGE 1 — INDEX (VSL Funnel)

### Section order (top to bottom):

```
1.  AnnouncementBar     → bg-ink, yellow price, red urgency text
2.  Navbar              → bg-ink sticky, logo left, nav links center, blue CTA right
3.  Hero                → bg-white dotted-bg, big headline, VideoGate component
4.  Ticker              → bg-ink, scrolling industry names + yellow stars
5.  Problem             → bg-white dotted-bg, 3 stat cards
6.  Features            → bg-white, 2x2 feature cards grid
7.  Comparison          → bg-white, 2-col: generic vs branded
8.  Who Its For         → bg-dark dotted-bg-dark, large card + smaller grid
9.  How It Works        → bg-white, 4-step horizontal cards
10. Pricing             → bg-dark, left checklist + right price card
11. Testimonials        → bg-white, stats row + 3 testimonial cards
12. Guarantee           → bg-white, card with yellow border
13. FAQ                 → bg-white, accordion
14. Final CTA           → bg-ink dotted-bg-dark, big headline + yellow CTA
15. Footer              → bg-ink, logo + links + disclaimer
```

---

## 📄 PAGE 2 — THANK YOU

### Section order:

```
1. Navbar (same as page 1, no CTA button)
2. Thank You Hero:
   - Headline: "You're In. Here's What Happens Next."
   - Auto-playing YouTube video (no lock, no form)
   - Video URL: https://youtu.be/XMhokOlouIE
3. Book a Call CTA:
   - Button text: "📅 Book Your Strategy Call →"
   - Button style: bg-yellow text-ink font-black rounded-full px-10 py-5
   - href: [CALENDLY_LINK] ← placeholder until client sends
4. Footer (same as page 1)
```

---

## 🔒 VIDEO GATE LOGIC (Core Feature)

### Flow:
```
Page loads
  → Form is VISIBLE (Name, Email, Phone + Unlock button)
  → Video is HIDDEN
  → Stripe button is HIDDEN

User fills form + clicks "Unlock Video"
  → JS validates all fields are filled
  → POST to GHL webhook with { name, email, phone, tag: "Lead" }
  → On success:
      → Hide form (#video-gate)
      → Show video (#video-player)
      → Show Stripe button (#stripe-cta)
```

### HTML Structure:
```html
<!-- Gate (shown by default) -->
<div id="video-gate" data-testid="video-gate">
  <input type="text"  id="lead-name"  placeholder="Full Name" />
  <input type="email" id="lead-email" placeholder="Email Address" />
  <input type="tel"   id="lead-phone" placeholder="Phone Number" />
  <button onclick="unlockVideo()" data-testid="unlock-btn">
    🔓 Unlock Free Video
  </button>
</div>

<!-- Video (hidden by default) -->
<div id="video-player" class="hidden" data-testid="video-player">
  <iframe
    src="https://www.youtube.com/embed/QHYDLm-renI?controls=1&modestbranding=1&rel=0&fs=0"
    class="w-full aspect-video rounded-2xl"
    allow="autoplay"
    allowfullscreen>
  </iframe>
</div>

<!-- Stripe CTA (hidden by default) -->
<div id="stripe-cta" class="hidden text-center mt-8" data-testid="stripe-cta">
  <a href="https://buy.stripe.com/8x2bIUgauclZglv5Uv7bW08"
     class="inline-flex items-center gap-2 bg-blue text-white font-black
            text-lg px-10 py-5 rounded-full hover:bg-blue-hover
            transition-transform active:scale-95 animate-pulse-soft">
    Claim My $99 Spot →
  </a>
  <p class="text-muted text-xs mt-2">✓ Secure checkout · ✓ Only 10 spots left</p>
</div>
```

### JS Function:
```js
async function unlockVideo() {
  const name  = document.getElementById('lead-name').value.trim();
  const email = document.getElementById('lead-email').value.trim();
  const phone = document.getElementById('lead-phone').value.trim();

  if (!name || !email || !phone) {
    alert('Please fill in all fields to unlock the video.');
    return;
  }

  try {
    await fetch('GHL_WEBHOOK_URL_HERE', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, tag: 'Lead', source: 'VSL Form' }),
    });
  } catch (err) {
    console.error('Webhook error:', err);
    // Still unlock video even if webhook fails
  }

  document.getElementById('video-gate').classList.add('hidden');
  document.getElementById('video-player').classList.remove('hidden');
  document.getElementById('stripe-cta').classList.remove('hidden');
}
```

---

## 🔗 EXTERNAL LINKS & KEYS

| Item             | Value                                              |
|------------------|----------------------------------------------------|
| VSL Video        | https://youtu.be/QHYDLm-renI                       |
| Thank You Video  | https://youtu.be/XMhokOlouIE                       |
| Stripe Link      | https://buy.stripe.com/8x2bIUgauclZglv5Uv7bW08    |
| GHL Webhook      | `GHL_WEBHOOK_URL_HERE` ← replace when client sends |
| Calendar Link    | `CALENDLY_LINK_HERE` ← replace when client sends  |

---

## 🧩 REUSABLE COMPONENT SNIPPETS

### Pill Badge
```html
<span class="inline-flex items-center bg-yellow text-ink text-xs font-bold
             uppercase tracking-[0.15em] px-4 py-1.5 rounded-full">
  BADGE TEXT
</span>
```

### Section Header (always centered)
```html
<div class="text-center mb-14">
  <!-- Badge -->
  <span class="inline-flex items-center bg-yellow text-ink text-xs font-bold
               uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-4">
    SECTION LABEL
  </span>
  <!-- Headline -->
  <h2 class="text-4xl md:text-5xl font-black tracking-tight leading-tight
             text-ink max-w-3xl mx-auto">
    Your headline here
  </h2>
  <!-- Subtitle -->
  <p class="text-muted text-lg mt-4 max-w-xl mx-auto leading-relaxed">
    Supporting text here
  </p>
</div>
```

### Stat Card with Overlapping Badge
```html
<div class="relative bg-white border border-gray-200 rounded-2xl p-6 pt-8">
  <span class="absolute -top-3 left-4 bg-yellow text-ink text-xs font-bold
               uppercase tracking-widest px-3 py-1 rounded-full">
    STAT 01
  </span>
  <div class="w-10 h-10 bg-yellow/20 rounded-xl flex items-center justify-center mb-4">
    <!-- Lucide icon here -->
  </div>
  <div class="text-4xl font-black text-ink mb-1">40–60%</div>
  <p class="text-muted text-sm leading-relaxed">Stat description</p>
</div>
```

### Dotted Backgrounds
```html
<!-- White section with dots -->
<section class="bg-white dotted-bg py-20">

<!-- Dark section with yellow dots -->
<section class="bg-dark dotted-bg-dark py-20">
```

### Strikethrough Pricing
```html
<span class="line-through text-muted font-semibold text-xl">$3,797</span>
<span class="hl-yellow-full text-2xl font-black ml-2">$99 today</span>
```

---

## ⚙️ GLOBAL CSS CLASSES

```css
/* Yellow underline marker highlight */
.hl-yellow {
  background: linear-gradient(180deg, transparent 55%, #FFD900 55%);
  padding: 0 4px;
  color: #000000;
}

/* Yellow full background highlight */
.hl-yellow-full {
  background-color: #FFD900;
  color: #000000;
  padding: 2px 8px;
  border-radius: 4px;
}

/* Dotted backgrounds */
.dotted-bg {
  background-image: radial-gradient(rgba(0,0,0,0.08) 1.2px, transparent 1.2px);
  background-size: 22px 22px;
}
.dotted-bg-dark {
  background-image: radial-gradient(rgba(255,217,0,0.12) 1px, transparent 1px);
  background-size: 22px 22px;
}

/* Animations */
.animate-marquee    { animation: marquee 30s linear infinite; }
.animate-float      { animation: float 6s ease-in-out infinite; }
.animate-pulse-soft { animation: pulse-soft 2.4s ease-in-out infinite; }
```

---

## 🔍 SEO — EVERY PAGE

```astro
<BaseLayout
  title="We Build You a Custom AI That Books Calls — AppoinText"
  description="Turn every lead into a booked appointment. Custom AI setters built in 3–7 days. Only $99 for the next 10 businesses."
  canonical="https://yourdomain.com"
/>
```

---

## 📦 DEPENDENCIES

```json
{
  "astro": "latest",
  "@astrojs/tailwind": "latest",
  "tailwindcss": "latest",
  "lucide-astro": "latest"
}
```

No other packages needed. Keep it lean.

---
