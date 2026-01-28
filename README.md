# Portfolio Website

A premium, interactive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Features smooth scrolling, parallax effects, and agency-level animations.

## Features

- **Smooth Page Scrolling** - Seamless navigation between sections
- **Bilingual Support** - English/Dutch language toggle
- **Parallax Effects** - Multi-layered depth on scroll
- **Cursor Glow** - Interactive cursor following effect (desktop only)
- **Animated Timeline** - Interactive career journey visualization
- **Tech Stack Filter** - Filterable technology showcase
- **Responsive Design** - Optimized for all devices
- **Glass Morphism** - Modern translucent UI elements
- **Scroll Progress Indicator** - Visual progress bar

## Tech Stack

- Next.js 16
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static files will be generated in the `out` folder.

## Project Structure

```
app/
├── globals.css      # Global styles & Tailwind
├── layout.tsx       # Root layout
└── page.tsx         # Main page component

components/
├── sections/        # Page sections
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── TechStack.tsx
│   ├── Work.tsx
│   ├── Experience.tsx
│   └── Contact.tsx
└── ui/              # UI components
    ├── CursorGlow.tsx
    └── ScrollProgress.tsx

hooks/               # Custom React hooks
├── useScrollProgress.ts
└── useMousePosition.ts

lib/                 # Utilities
└── i18n.tsx         # Internationalization (EN/NL)
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  background: '#0a0a0a',
  foreground: '#ffffff',
  accent: '#3b82f6',
  // ...
}
```

### Content
Update the content in each section component:
- `Hero.tsx` - Main headline and stats
- `About.tsx` - Personal description
- `TechStack.tsx` - Technology list
- `Work.tsx` - Project showcase
- `Experience.tsx` - Career timeline
- `Contact.tsx` - Contact information

## Performance

- Static site export for optimal loading
- Lazy loading of animations
- Reduced motion support for accessibility
- Optimized images and fonts
