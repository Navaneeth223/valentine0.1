# 💖 LoveLink 💘
Create a personalized Valentine surprise with a single link.

LoveLink is a playful Valentine web app that lets you generate a personalized invitation link for your partner. It is built with React, smooth animations, and a mobile-first UI.

Perfect for sharing on WhatsApp, Instagram, Telegram, and mobile browsers.

**Live Demo**
- `https://valentine0-1-9oyp.vercel.app/`

**Preview**
![LoveLink preview](public/preview.png)

**Features**
- Personalized Valentine links
- Playful YES / NO interaction
- Escaping NO button (limited area, always visible)
- Floating hearts and cursor/touch love effects
- Fully mobile-friendly (tap and touch optimized)
- Optional image upload (Base64, no backend)
- Multiple Valentine themes
- Shareable links using URL parameters
- Vercel-ready

**Tech Stack**
- React (Vite)
- Tailwind CSS
- React Router DOM
- Framer Motion
- No backend (URL params + localStorage)

**App Pages**
- `/` Generator Page
- `/valentine` Valentine Page
- `/accepted` Accepted Page

**Generator Page**
Inputs
- Your Name
- Partner Name
- Emoji selector
- Optional image upload
- Theme selector

Behavior
- Generates a shareable URL:

```text
/valentine?from=Navaneeth&to=Anu&emoji=💖&theme=pink
```

- Image stored using Base64
- Copy-to-clipboard with toast: `Link copied 💖`

**Valentine Page**
Display
- Floating hearts background
- Personalized text using URL params
- Big romantic question: `Will you be my Valentine? 💘`

Buttons
- YES 💖 (glowing & celebratory)
- NO 💔 (escapes cursor or tap)

NO Button Logic
- Moves randomly within a limited area
- Never exits the screen
- Smooth spring animation

Cursor & Touch Effects
- Desktop: hearts follow cursor
- Mobile: hearts appear on tap

**Accepted Page**
Includes
- Big heart / bloom animation
- Personalized success message
- Uploaded image preview
- Cute typing animation
- Share and replay buttons

**Design Philosophy**
- Mobile-first UI
- Soft shadows and rounded cards
- Valentine color palette
- Smooth transitions
- Touch-friendly interactions

**Technical Highlights**
- Clean folder structure

```text
/pages
/components
/hooks
/utils
```

- Reusable heart effects
- URLSearchParams for personalization
- Graceful fallback if params are missing

**SEO Optimization**
- Descriptive title and meta tags
- Open Graph preview for social sharing
- Clean URL structure
- Fast load time
- Mobile-first indexing ready

SEO Title
- `LoveLink 💖 | Create a Valentine Surprise`

SEO Description
- `Create a cute and romantic Valentine surprise link with playful animations and heart effects. Perfect for sharing on WhatsApp and Instagram.`

**Getting Started**

```bash
npm install
npm run dev
```

**Build**

```bash
npm run build
npm run preview
```

**Deployment**
Optimized for Vercel, Netlify, or GitHub Pages.

**Social Preview**
Add an Open Graph image:
- `public/og-image.png`

**License**
MIT

**Support**
- Star the repo
- Share it with friends
- Use it to make someone smile
