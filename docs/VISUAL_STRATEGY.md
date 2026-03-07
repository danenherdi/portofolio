# Visual Strategy & Theming Architecture

## Overview
This document outlines the visual identity implementation for the personal portfolio. The core goal is to support a "Tech Cloud Minimalism" aesthetic that reflects a professional Cloud Computing & Distributed Systems Engineer persona. The design prioritizes readability, clean lines, and a modern technical feel.

## Visual Identity System

### Color Palette
The color palette mixes deep blues and purples with clean, high-contrast text to create a minimal yet futuristic "cloud tech" atmosphere.

| Token Name | Color Value | Usage |
| :--- | :--- | :--- |
| **Deep Space** | `#0f172a` | Primary Background (Dark Mode Base) |
| **Nebula Purple** | `#2e1065` | Background Gradient / Soft glow effects |
| **Slate Gray** | `#64748b` | Secondary Text / Borders |
| **Cloud White** | `#f8fafc` | Primary Text (Dark Mode) / Background (Light Mode) |
| **Neon Cyan** | `#22d3ee` | Accents / Active states / Highlights |
| **Neon Purple** | `#c084fc` | Secondary accents / Gradient stops |

### Typography
The project relies on clean, modern sans-serif fonts to evoke a technical and legible feel.
- **Headings**: Inter or Geist (Sans-serif, Bold) - *Clean, Technical, Assertive.*
- **Body**: Inter or SF Pro (Sans-serif, Neutral) - *Highly legible, Professional.*
- **Monospace**: JetBrains Mono or Fira Code - *For code snippets and technical callouts.*

## Theming Strategy

The theme logic will be **System-Preference Based** with a persistent user override/toggle.

### State Logic (Svelte Store / Nano Store)
We will use a lightweight global store to manage the Light/Dark theme state.

1.  **Default Logic**: Read `prefers-color-scheme` from the user's OS.
2.  **Override Mechanism**:
    *   A manual toggle allows switching between Light and Dark mode.
    *   `localStorage` saves the user's preference, overriding the OS default on subsequent visits.

### Implementation Setup (Astro + View Transitions)

**Middleware / Layout Script:**
On initial load and route changes (using Astro View Transitions), we check the store and update the `data-theme` attribute on the `<html>` root.

```javascript
// Pseudo-code implementation strategy
function applyTheme() {
    const userPref = localStorage.getItem('theme');
    const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = userPref || systemPref;
    
    document.documentElement.setAttribute('data-theme', theme);
}
```

## Accessibility & Transitions

### Transition Mechanics
*   **Smooth Interpolation**: Use CSS `transition: background-color 0.4s ease, color 0.3s ease;` to avoid jarring flashes.
*   **Glassmorphism**: Use `backdrop-filter: blur(12px)` with semi-transparent backgrounds (`rgba(15, 23, 42, 0.7)`) to create a "tech cloud" depth without sacrificing legibility.

### Reduced Motion
Respect `prefers-reduced-motion`. Disable large background gradients animations or simplify transitions if enabled.

## Tailwind 4 Configuration
*   Define custom themes using CSS variables within Tailwind 4's theme engine.
*   Setup gradients using `bg-gradient-to-br from-[#0f172a] to-[#2e1065]`.
