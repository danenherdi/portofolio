# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio for Danendra Herdiansyah (CS UI '26) showcasing a **"Dual-Identity"** concept:
- **Engineer/Logic**: Systems programming, DevOps, Backend (Deep Dark Mode)
- **Photographer/Emotion**: Motorsport, Documentary photography (Light Mode)

**Current Status**: Design-complete, implementation pending. All architectural decisions documented in `/docs`.

## Tech Stack

**This is a lightweight static portfolio site. No backend or testing framework needed.**

### Frontend Stack
- **Astro 5**: Static site generator with content collections
- **Svelte 5**: Interactive components (islands architecture)
- **Tailwind CSS 4 + DaisyUI 5**: Styling system with custom theme configurations (`engineering` and `photography` themes)
- **Nano Stores**: Minimal client-side state (theme preference)
- **TypeScript 5**: Type safety and better developer experience
- **Fontsource**: Self-hosted fonts (Inter, Playfair Display)

### Showcased Technologies (Content Only)
The portfolio will **showcase** past work involving Go, Rust, Kubernetes, Docker, etc. through:
- Project descriptions in content collections
- Code snippets in blog posts
- Links to external repos and demos

These technologies are **not** part of the portfolio's tech stack—they're featured in the content.

## Architecture Principles

### 1. Route-Based Theme Switching
Theme automatically adapts based on route with persistent user override:
- `/` (Landing): Dynamic/Hybrid (scroll-dependent)
- `/projects`: Deep Dark Mode (Jet Black `#242424`)
- `/photography`: Light Mode (Cloud Dancer `#F0EEE9`)
- `/blog`: System preference or route context

**Implementation**: Use `astro:after-swap` event to update `data-theme` attribute on `<html>`. Check `localStorage` for user preference first, then fall back to route-based logic.

### 2. Glassmorphism Design Language
All components use backdrop-blur, semi-transparent backgrounds, and subtle drop-shadows. Avoid rigid 12-column grids—favor asymmetric, organic layouts with overlapping layers.

### 3. Content Collections (Type-Safe)
Use Astro's `src/content/` for structured data:

**`projects`**: Engineering work
```typescript
{
  title: string,
  tagline: string,
  tags: string[], // ["K8s", "Go", "DevOps"]
  heroImage: string,
  repoUrl?: string,
  demoUrl?: string,
  featured: boolean,
  themeOverride?: 'dark' | 'light'
}
```

**`photography`**: Visual work with EXIF data
```typescript
{
  title: string,
  date: Date,
  location: string,
  category: 'Motorsport' | 'Documentary' | 'Portrait',
  src: string,
  exif?: {
    camera: string,
    lens: string,
    aperture: string,
    shutterSpeed: string,
    iso: number
  }
}
```

**`blog`**: Technical write-ups with calculated `readTime` and `relatedProjects` references.

## Core Components (To Be Implemented)

### `GlassCard.svelte`
Foundational container with glassmorphism effect.
- Props: `intensity` ('low'|'medium'|'high'), `border` (boolean), `hoverEffect` (boolean)

### `Orbiter.svelte`
Decorative animated background blobs.
- Props: `color` ('magenta'|'cyan'|'white'), `size`, `speed`

### `MagneticButton.svelte`
Button that gravitates toward cursor using `MouseEvent` translation within bounded radius.

### `PhotoGrid.svelte`
Masonry layout using CSS Grid `grid-auto-flow: dense` with irregular spanning (`col-span-2`, `row-span-2`).

### `ThemeToggle.svelte`
Toggle switch updating global store and `localStorage`.

### `CmdPalette.svelte`
VS Code-like command menu (Cmd+K style) for search, navigation, and theme switching.

## Visual System

### Color Palette
| Token | Value | Tailwind Class | CSS Variable | Context |
|-------|-------|----------------|--------------|---------|
| Jet Black | `#242424` | `bg-jet-black` / `text-jet-black` | `--color-jet-black` | Engineering/Dark background |
| Cloud Dancer | `#F0EEE9` | `bg-cloud-dancer` / `text-cloud-dancer` | `--color-cloud-dancer` | Photography/Light background |
| Dark Magenta | `#8B008B` | `bg-dark-magenta` / `text-dark-magenta` | `--color-dark-magenta` | Dark mode accent |
| Magenta | `#FF00FF` | `bg-magenta` / `text-magenta` | `--color-magenta` | Highlights/Cyberpunk hints |

**Usage**: Custom colors are available as Tailwind utilities (defined in `tailwind.config.mjs`) and CSS variables (defined in `src/styles/global.css`).

### Typography
- **Headings**: Playfair Display (Serif, editorial) - Use `font-display` class
- **Body**: Inter (Sans-serif, technical clarity) - Use `font-body` class or default body font

**Typography Classes**:
```html
<h1 class="font-display">Editorial Heading</h1>
<p class="font-body">Body text with technical clarity</p>
```

### DaisyUI Theme System

Two custom themes are configured in `tailwind.config.mjs` and applied via `data-theme` attribute on `<html>`:

#### Engineering Theme (Dark Mode)
```javascript
{
  primary: "#8B008B",      // Dark Magenta
  secondary: "#FF00FF",    // Magenta
  accent: "#FF00FF",
  neutral: "#242424",      // Jet Black
  "base-100": "#242424",   // Background
  "base-200": "#1a1a1a",
  "base-300": "#0f0f0f",
  "base-content": "#F0EEE9" // Text color
}
```

#### Photography Theme (Light Mode)
```javascript
{
  primary: "#8B008B",
  secondary: "#FF00FF",
  accent: "#8B008B",
  neutral: "#F0EEE9",      // Cloud Dancer
  "base-100": "#F0EEE9",   // Background
  "base-200": "#e5e3de",
  "base-300": "#dad8d3",
  "base-content": "#242424" // Text color
}
```

**Using DaisyUI Theme Colors**:
```html
<!-- Use DaisyUI semantic color classes -->
<button class="btn btn-primary">Primary Button</button>
<div class="bg-base-100 text-base-content">Themed content</div>
```

### Glassmorphism Utilities

Two custom utility classes defined in `src/styles/global.css` using `@layer utilities`:

#### `.glass-dark`
```css
background: var(--glass-bg-dark);           /* rgba(36, 36, 36, 0.6) */
backdrop-filter: blur(10px);
border: 1px solid var(--glass-border-dark); /* rgba(255, 255, 255, 0.1) */
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
```

#### `.glass-light`
```css
background: var(--glass-bg-light);           /* rgba(240, 238, 233, 0.6) */
backdrop-filter: blur(10px);
border: 1px solid var(--glass-border-light); /* rgba(36, 36, 36, 0.1) */
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
```

**Usage**:
```html
<!-- Dark glassmorphism for engineering theme -->
<div class="glass-dark p-6 rounded-lg">Content</div>

<!-- Light glassmorphism for photography theme -->
<div class="glass-light p-6 rounded-lg">Content</div>
```

### Styling Best Practices

**CRITICAL - Maintaining Compatibility**:

1. **Always use Tailwind v4 syntax**:
   - Import Tailwind using `@import "tailwindcss"` (NOT `@tailwind base/components/utilities`)
   - Load DaisyUI with `@plugin "daisyui"` in CSS file

2. **Respect the layer system**:
   - Use `@layer base {}` for base styles (already configured in `global.css`)
   - Use `@layer utilities {}` for custom utility classes (glassmorphism classes)
   - Use `@layer components {}` for reusable component styles if needed

3. **Custom colors - Two methods**:
   - **Method 1**: Tailwind classes from `tailwind.config.mjs` → `bg-jet-black`, `text-cloud-dancer`
   - **Method 2**: CSS variables from `global.css` → `background-color: var(--color-jet-black)`

4. **Theme-aware styling**:
   ```css
   /* Use data-theme attribute for theme-specific styles */
   html[data-theme="engineering"] { /* dark mode styles */ }
   html[data-theme="photography"] { /* light mode styles */ }
   ```

5. **DaisyUI components**:
   - Use semantic DaisyUI classes: `btn`, `card`, `navbar`, `modal`, etc.
   - Leverage theme tokens: `bg-base-100`, `text-base-content`, `btn-primary`
   - Combine with Tailwind utilities: `btn btn-primary hover:scale-105 transition-transform`

6. **Never override**:
   - Don't modify `tailwind.config.mjs` theme colors without updating `global.css` CSS variables
   - Don't add inline Tailwind directives (`@tailwind`) in component files
   - Don't create duplicate color definitions

### Accessibility
- Ensure WCAG AA contrast ratios (Dark Magenta may need lighter tint for text on Jet Black)
- Respect `prefers-reduced-motion`: disable/simplify scroll animations (handled in `global.css`)
- Provide "Skip Intro" button on landing page for repeat visitors
- Use scroll-linked (scrubbing) animations, not aggressive scroll-jacking

## Landing Page UX Flow

Scroll storytelling sequence (documented in `/docs/UX_STORYBOARD.md`):

1. **Scene 1 (Terminal)**: Deep dark mode with blinking terminal prompt: `whoami > Danendra Herdiansyah | CS UI '26`
2. **Scene 2 (Transition)**: Diagonal split with code snippets (left) and film strip borders (right), background shifts from `#000000` to deep gray
3. **Scene 3 (Gallery)**: Light mode shift with parallax horizontal scroll of photography work
4. **Scene 4 (Convergence)**: Glassmorphic navigation cards to Projects and Gallery

**Animation Strategy**: Use GSAP ScrollTrigger for timeline-based animations. Avoid jarring flashes with `transition: background-color 0.5s ease-in-out`.

## Development Philosophy

### Anti-Grid Layouts
Break away from rigid column structures. Use:
- Overlapping layers
- Asymmetric positioning
- Organic flow with `grid-auto-flow: dense`
- Random or prop-based column/row spanning

### Performance & Simplicity
- Astro 5 generates static HTML by default (zero JavaScript on pages that don't need it)
- Use Svelte islands sparingly—only for interactive components (theme toggle, command palette, magnetic buttons, scroll animations)
- Optimize images with Astro's built-in image optimization
- No build complexity: Keep it simple, static, and fast

### State Management
Minimal state with Nano Stores:
- Theme preference (persisted to `localStorage`)
- Command palette open/closed state

Leverage Svelte's built-in reactivity for component-level state.

## Documentation References

All architectural decisions, component specs, and visual strategies are documented in `/docs`:
- `UX_STORYBOARD.md`: Landing page scroll journey and animation specs
- `COMPONENT_SPEC.md`: Svelte component architecture and content collection schemas
- `TECH_STACK_MAPPING.md`: Technology roles and usage within the portfolio
- `VISUAL_STRATEGY.md`: Theme switching logic, color system, and accessibility guidelines

**Always consult these documents before implementing features to maintain consistency with the original Antigravity design vision.**
