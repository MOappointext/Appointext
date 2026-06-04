# 🎨 Master Design System — AppoinText Funnel
> Astro + Tailwind CSS | Built better, faster, SEO-ready

---

## 1. FONTS

```html
<!-- Paste in <head> of every Astro layout -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
```

| Role     | Font          | Weights Used        |
|----------|---------------|---------------------|
| Headings | **Urbanist**  | 700, 800, 900       |
| Body     | **Urbanist**  | 400, 500, 600       |
| Code     | **JetBrains Mono** | 400, 500, 700  |

---

## 2. COLOR PALETTE

```css
:root {
  /* Backgrounds */
  --bg-white:   #FFFFFF;   /* Main white sections */
  --bg-dark:    #0A0A0A;   /* Dark sections */
  --bg-black:   #000000;   /* Footer, navbar */
  --bg-surface: #111111;   /* Cards on dark bg */

  /* Brand */
  --yellow:     #FFD900;   /* PRIMARY — highlights, badges, CTAs */
  --yellow-soft:#FFE970;   /* Hover states */
  --blue:       #1849D6;   /* Primary buttons, links */
  --blue-hover: #1339B5;
  --red:        #E63946;   /* Urgency only */

  /* Text */
  --ink:        #000000;   /* Headings on white */
  --white:      #FFFFFF;   /* Text on dark */
  --muted:      #5B6480;   /* Body text, captions */
}
```

### Tailwind Config:
```js
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow:  '#FFD900',
        'yellow-soft': '#FFE970',
        blue:    '#1849D6',
        'blue-hover': '#1339B5',
        red:     '#E63946',
        dark:    '#0A0A0A',
        ink:     '#000000',
        muted:   '#5B6480',
        surface: '#111111',
      },
      fontFamily: {
        sans:    ['Urbanist', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      animation: {
        marquee:     'marquee 30s linear infinite',
        float:       'float 6s ease-in-out infinite',
        blink:       'blink 1.6s ease-in-out infinite',
        'pulse-soft':'pulse-soft 2.4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%':      { transform: 'translateY(-12px) rotate(1deg)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.35' },
        },
        'pulse-soft': {
          '0%, 100%': { boxShadow: '0 8px 24px rgba(24,73,214,0.22), 0 0 0 0 rgba(24,73,214,0.5)' },
          '50%':      { boxShadow: '0 8px 24px rgba(24,73,214,0.35), 0 0 0 12px rgba(24,73,214,0)' },
        },
      },
    },
  },
}
```

---

## 3. GLOBAL CSS (src/styles/global.css)

```css
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  background-color: #FFFFFF;
}

body {
  font-family: 'Urbanist', sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #FFFFFF;
  color: #000000;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Urbanist', sans-serif;
  letter-spacing: -0.02em;
}

::selection {
  background: #FFD900;
  color: #000000;
}

/* Yellow text highlight marker (underline style) */
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

/* Dotted background (white sections) */
.dotted-bg {
  background-image: radial-gradient(rgba(0,0,0,0.08) 1.2px, transparent 1.2px);
  background-size: 22px 22px;
}

/* Dotted background (dark sections) */
.dotted-bg-dark {
  background-image: radial-gradient(rgba(255,217,0,0.12) 1px, transparent 1px);
  background-size: 22px 22px;
}

/* Thick underline emphasis */
.underline-thick {
  text-decoration: underline;
  text-decoration-color: #000000;
  text-decoration-thickness: 4px;
  text-underline-offset: 6px;
}

/* Keyframes */
@keyframes marquee {
  0%   { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0); }
  50%       { transform: translateY(-12px) rotate(1deg); }
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.35; }
}
@keyframes pulse-soft {
  0%, 100% { box-shadow: 0 8px 24px rgba(24,73,214,0.22), 0 0 0 0 rgba(24,73,214,0.5); }
  50%       { box-shadow: 0 8px 24px rgba(24,73,214,0.35), 0 0 0 12px rgba(24,73,214,0); }
}

.animate-marquee    { animation: marquee 30s linear infinite; }
.animate-float      { animation: float 6s ease-in-out infinite; }
.animate-blink      { animation: blink 1.6s ease-in-out infinite; }
.animate-pulse-soft { animation: pulse-soft 2.4s ease-in-out infinite; }
```

---

## 4. COMPONENTS

### Buttons
```html
<!-- Primary Blue (main CTA) -->
<button class="bg-blue text-white font-bold px-8 py-4 rounded-full
               hover:bg-blue-hover transition-transform active:scale-95
               animate-pulse-soft">
  Claim My $99 Spot →
</button>

<!-- Secondary Yellow -->
<button class="bg-yellow text-black font-bold px-8 py-4 rounded-full
               hover:bg-yellow-soft transition-colors">
  See How It Works
</button>

<!-- Ghost/Outline -->
<button class="border-2 border-white/20 text-white font-bold px-8 py-4 rounded-full
               hover:border-yellow hover:text-yellow transition-colors">
  Learn More
</button>
```

### Pill Badges
```html
<!-- Yellow (most sections) -->
<span class="inline-flex items-center bg-yellow text-black text-xs font-bold
             uppercase tracking-[0.15em] px-4 py-1.5 rounded-full">
  THE REAL PROBLEM
</span>

<!-- Blue -->
<span class="inline-flex items-center bg-blue text-white text-xs font-bold
             uppercase tracking-[0.15em] px-4 py-1.5 rounded-full">
  THE DIFFERENCE
</span>

<!-- Dark -->
<span class="inline-flex items-center bg-ink text-white text-xs font-bold
             uppercase tracking-[0.15em] px-4 py-1.5 rounded-full">
  HOW IT WORKS
</span>

<!-- Red urgency -->
<span class="inline-flex items-center bg-red text-white text-xs font-bold
             uppercase tracking-[0.15em] px-4 py-1.5 rounded-full">
  ⚡ ONLY 10 SPOTS LEFT
</span>
```

### Cards (White section)
```html
<div class="relative bg-white border border-gray-200 rounded-2xl p-6 pt-8">
  <!-- Overlapping badge -->
  <span class="absolute -top-3 left-4 bg-yellow text-black text-xs font-bold
               uppercase tracking-widest px-3 py-1 rounded-full">
    STAT 01
  </span>
  <!-- Icon -->
  <div class="w-10 h-10 bg-yellow/20 rounded-xl flex items-center justify-center mb-4">
    <!-- icon -->
  </div>
  <div class="text-4xl font-black">40–60%</div>
  <p class="text-muted text-sm mt-1 leading-relaxed">of leads lost from slow follow-up</p>
</div>
```

### Cards (Dark section)
```html
<div class="bg-surface border border-white/10 rounded-2xl p-6
            hover:border-white/20 transition-colors">
  <!-- content -->
</div>
```

### Headline with Yellow Highlight
```html
<!-- Style 1: Yellow background box behind phrase -->
<h2 class="text-5xl font-black leading-tight">
  A Custom AI Setter That
  <span class="hl-yellow-full">Never Sleeps.</span>
</h2>

<!-- Style 2: Underline marker effect -->
<h2 class="text-5xl font-black leading-tight">
  You're losing leads —
  <span class="hl-yellow">and you don't even know it.</span>
</h2>

<!-- Style 3: Blue colored accent word -->
<h1 class="text-6xl font-black leading-none">
  Books Calls For You —
  <span class="text-blue">in 3 to 7 Days</span>
</h1>
```

### Announcement Bar
```html
<div class="bg-ink text-white text-sm text-center py-2.5 px-4 font-medium">
  200+ Businesses Already Booking Calls on Autopilot ·
  <span class="hl-yellow-full font-bold">$99</span>
  (normally $3,797) ·
  <span class="text-yellow font-semibold">Only 10 spots this month</span>
</div>
```

### Scrolling Ticker
```html
<div class="bg-ink py-4 overflow-hidden">
  <div class="flex gap-10 animate-marquee whitespace-nowrap w-max">
    <!-- Duplicate list twice for seamless loop -->
    <span class="text-white font-semibold">Coaches</span>
    <span class="text-yellow">★</span>
    <span class="text-white font-semibold">Consultants</span>
    <span class="text-yellow">★</span>
    <span class="text-white font-semibold">Med Spas</span>
    <span class="text-yellow">★</span>
    <!-- ...repeat... -->
  </div>
</div>
```

### Strikethrough Pricing
```html
<span class="line-through text-muted font-semibold">$3,797</span>
<span class="hl-yellow-full text-2xl font-black ml-2">$99 today</span>
```

---

## 5. LAYOUT RULES

```
Max content width:  max-w-5xl mx-auto px-6   (1024px)
Section padding:    py-20 md:py-28
Section structure:  [Badge] → [H2] → [Subtitle] → [Content]
All badges + headlines: text-center
Card grids:         grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
```

---

## 6. BACKGROUND PATTERNS

```html
<!-- White section with dots -->
<section class="bg-white dotted-bg py-20">...</section>

<!-- Dark section with yellow dots -->
<section class="bg-dark dotted-bg-dark py-20">...</section>

<!-- Clean white (hero, CTA) -->
<section class="bg-white py-20">...</section>

<!-- Pure black (footer, final CTA) -->
<section class="bg-ink py-20">...</section>
```

---

## 7. PAGE SECTIONS ORDER

| # | Section              | Background         |
|---|----------------------|--------------------|
| 1 | Announcement Bar     | Black              |
| 2 | Sticky Navbar        | Black / blur       |
| 3 | Hero + Video (locked)| White + dotted     |
| 4 | Ticker               | Black              |
| 5 | Problem / Stats      | White + dotted     |
| 6 | Features Grid        | White              |
| 7 | Comparison           | White              |
| 8 | Who It's For         | Dark + yellow dots |
| 9 | How It Works         | White              |
| 10| Pricing              | Dark               |
| 11| Testimonials         | White              |
| 12| Guarantee            | White + yellow border card |
| 13| FAQ                  | White              |
| 14| Final CTA            | Black + dotted     |
| 15| Footer               | Black              |

---

## 8. FORM (Lead Capture — Video Gate)

```html
<!-- Shown BEFORE video unlocks -->
<div id="video-gate" class="bg-white border border-gray-200 rounded-2xl p-8 max-w-md mx-auto">
  <h3 class="text-2xl font-black mb-1">Watch the Full Video</h3>
  <p class="text-muted text-sm mb-6">Enter your details to unlock the video</p>

  <div class="space-y-3">
    <input type="text"        placeholder="Full Name"     class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-blue" />
    <input type="email"       placeholder="Email Address" class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-blue" />
    <input type="tel"         placeholder="Phone Number"  class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-blue" />
    <button onclick="unlockVideo()" class="w-full bg-blue text-white font-bold py-4 rounded-full hover:bg-blue-hover transition animate-pulse-soft">
      🔓 Unlock Video
    </button>
  </div>
</div>

<!-- Video shown AFTER form submit -->
<div id="video-player" class="hidden">
  <iframe src="https://www.youtube.com/embed/QHYDLm-renI?autoplay=1&controls=1&modestbranding=1&rel=0&fs=0"
    class="w-full aspect-video rounded-2xl"
    allowfullscreen allow="autoplay">
  </iframe>

  <!-- Stripe CTA below video -->
  <div class="text-center mt-6">
    <a href="https://buy.stripe.com/8x2bIUgauclZglv5Uv7bW08"
       class="inline-flex items-center gap-2 bg-blue text-white font-black
              text-lg px-10 py-5 rounded-full hover:bg-blue-hover
              transition-transform active:scale-95 animate-pulse-soft">
      Claim My $99 Spot →
    </a>
    <p class="text-muted text-xs mt-2">Secure checkout · Only 10 spots</p>
  </div>
</div>
```

### JS Logic (unlock on form submit)
```js
async function unlockVideo() {
  const name  = document.querySelector('input[type=text]').value;
  const email = document.querySelector('input[type=email]').value;
  const phone = document.querySelector('input[type=tel]').value;

  if (!name || !email || !phone) {
    alert('Please fill in all fields.');
    return;
  }

  // Send to GHL webhook
  await fetch('YOUR_GHL_WEBHOOK_URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, phone, tag: 'Lead' }),
  });

  // Unlock video
  document.getElementById('video-gate').classList.add('hidden');
  document.getElementById('video-player').classList.remove('hidden');
}
```

---

## 9. THANK YOU PAGE

```html
<!-- /thank-you.astro -->

<!-- Thank You Video (auto-plays, no lock) -->
<iframe src="https://www.youtube.com/embed/XMhokOlouIE?autoplay=1&controls=1&rel=0"
  class="w-full aspect-video rounded-2xl max-w-3xl mx-auto"
  allowfullscreen allow="autoplay">
</iframe>

<!-- Book a Call Button -->
<div class="text-center mt-8">
  <a href="CALENDLY_LINK_HERE"
     class="inline-flex items-center gap-2 bg-yellow text-black font-black
            text-lg px-10 py-5 rounded-full hover:bg-yellow-soft transition">
    📅 Book Your Strategy Call →
  </a>
</div>
```

---

## 10. SEO META (Every Page)

```astro
---
// In every .astro page
const title = "We Build You a Custom AI That Books Calls — AppoinText"
const description = "Turn every lead into a booked appointment. Custom AI setters built in 3–7 days. Only $99 for the next 10 businesses."
---
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <link rel="canonical" href="https://yourdomain.com" />
</head>
```

---

*AK Digital House — Built for Mohammed's funnel*
