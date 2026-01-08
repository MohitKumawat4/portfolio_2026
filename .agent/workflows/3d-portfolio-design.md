---
description: 3D Portfolio Design Guidelines & Component Strategy
---

# 3D Portfolio Design System

## Design Philosophy

Build a **premium, immersive 3D portfolio** that showcases technical expertise through stunning visuals, smooth animations, and interactive 3D elements. The goal is to create a memorable experience that stands out from typical portfolio websites.

---

## Core Technology Stack

### 3D & Animation

| Library                  | Purpose                                                   |
| ------------------------ | --------------------------------------------------------- |
| **@react-three/fiber**   | React renderer for Three.js - core 3D engine              |
| **@react-three/drei**    | Useful helpers (OrbitControls, Text3D, Environment, etc.) |
| **Spline**               | Import complex 3D scenes from Spline.design               |
| **GSAP + ScrollTrigger** | Scroll-based animations, timelines                        |
| **Framer Motion**        | UI micro-interactions and page transitions                |

### UI Component Libraries (Priority Order)

1. **Aceternity UI** - Premium animated components (spotlight, aurora, meteors, grids)
2. **Magic UI** - Animated borders, text effects, backgrounds
3. **ReactBits.dev** - Modern animated components
4. **HeroUI** - Base components with good defaults
5. **shadcn/ui** - Customizable primitives when needed

---

## Recommended 3D Portfolio Sections

### 1. Hero Section (Immersive)

- **3D Model**: Floating geometric shapes, abstract sculpture, or tech-related object
- **Spline Scene**: Custom interactive scene with hover/click interactions
- **Text Effect**: Aceternity's `TextGenerateEffect` or `TypewriterEffect`
- **Background**: Aurora/Gradient mesh or particle field

### 2. About Section (Subtle 3D)

- **Element**: Rotating 3D avatar or abstract representation
- **Cards**: Magic UI's `MagicCard` with spotlight effect
- **Animation**: Parallax scrolling with GSAP ScrollTrigger

### 3. Skills/Tech Stack (Interactive)

- **3D Approach**: Floating tech icons in 3D space (orbit animation)
- **Alternative**: Aceternity's `InfiniteMovingCards` or `BentoGrid`
- **Hover Effects**: 3D tilt cards with depth

### 4. Projects Showcase (Showstopper)

- **3D Gallery**: Interactive 3D carousel or spatial layout
- **Cards**: Aceternity's `3DCardEffect` + `Spotlight`
- **Preview**: Device mockups with parallax depth
- **Modal**: Framer Motion animated modals

### 5. Experience Timeline (Elegant)

- **Visual**: Vertical timeline with 3D connectors
- **Animation**: Staggered reveal on scroll
- **Cards**: Glassmorphism with subtle 3D transforms

### 6. Contact Section (Memorable)

- **3D Element**: Interactive globe showing location
- **Form**: Styled with Magic UI effects
- **Background**: Particle network or aurora

---

## Must-Have Visual Effects

### Backgrounds

- [ ] Aurora/Northern lights effect (Aceternity)
- [ ] Animated gradient mesh
- [ ] Particle systems (drei/Three.js)
- [ ] Grid patterns with spotlight

### Micro-interactions

- [ ] Magnetic cursor effects
- [ ] Smooth scroll with Lenis
- [ ] 3D tilt on hover (react-tilt)
- [ ] Text scramble/reveal effects

### Transitions

- [ ] Page transitions with Framer Motion
- [ ] Section reveals with GSAP ScrollTrigger
- [ ] Loader with 3D animation

---

## Component Library Usage Guide

### Aceternity UI (Primary)

```bash
# Install individual components as needed from:
# https://ui.aceternity.com

# Key components to use:
- BackgroundBeams / BackgroundGradient
- SpotlightCard / 3DCardEffect
- TextGenerateEffect / TypewriterEffect
- BentoGrid
- InfiniteMovingCards
- Meteors / Aurora
- FloatingNav
```

### Magic UI

```bash
# https://magicui.design

# Key components:
- AnimatedBeam
- BorderBeam
- MagicCard
- ShimmerButton
- NumberTicker
- TextReveal
- Particles
```

### ReactBits.dev

```bash
# https://www.reactbits.dev

# Useful effects:
- Animated backgrounds
- Text animations
- Button effects
- Card animations
```

---

## Performance Considerations

### 3D Optimization

- Use `<Suspense>` for 3D scenes
- Implement level-of-detail (LOD) for complex models
- Use `useFrame` sparingly, prefer GSAP for animations
- Compress textures and models (gltf-pipeline, Draco)

### Loading Strategy

- Lazy load 3D sections
- Show engaging loader animation
- Progressive enhancement (fallback for low-end devices)

---

## Color Palette Recommendations

### Dark Theme (Recommended for 3D)

```css
--background: #030014    /* Deep space black */
--foreground: #ffffff
--primary: #8b5cf6       /* Purple accent */
--secondary: #06b6d4     /* Cyan accent */
--accent: #f43f5e        /* Rose for highlights */
--muted: #1e1e2e         /* Card backgrounds */
```

### Gradient Combinations

- Purple → Cyan (tech feel)
- Blue → Pink (creative)
- Emerald → Cyan (fresh)
- Orange → Pink (bold)

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/              # Base components (shadcn/heroui)
│   ├── sections/        # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── three/           # 3D components
│   │   ├── Scene.tsx
│   │   ├── FloatingShapes.tsx
│   │   └── TechOrbit.tsx
│   └── effects/         # Visual effects
│       ├── Aurora.tsx
│       ├── Particles.tsx
│       └── Cursor.tsx
├── data/
│   └── index.ts         # All portfolio content
└── lib/
    └── utils.ts
```

---

## Implementation Order

1. **Setup**: Install additional dependencies (Spline, Lenis, etc.)
2. **Hero**: Build immersive hero with 3D scene
3. **Navigation**: Floating nav with scroll detection
4. **Sections**: Build each section with appropriate effects
5. **Transitions**: Add scroll animations and page transitions
6. **Polish**: Cursor effects, loading states, performance
7. **Deploy**: Optimize and deploy

---

## Additional Dependencies to Install

```bash
# Smooth scroll
npm install @studio-freight/lenis

# 3D tilt effect
npm install react-parallax-tilt

# Spline for complex 3D scenes
npm install @splinetool/react-spline

# Icons
npm install react-icons

# Optional: Better animations
npm install react-intersection-observer
```

---

## Design Inspiration Sources

- [Awwwards](https://awwwards.com) - Award-winning designs
- [Dribbble](https://dribbble.com) - Portfolio concepts
- [Three.js Examples](https://threejs.org/examples) - 3D inspiration
- [Codrops](https://tympanus.net/codrops) - Creative effects
