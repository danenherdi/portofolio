# Visual Strategy & Theming Architecture

## Overview
This document outlines the technical strategy for "Automatic Theme Switching" and the visual identity implementation for the personal portfolio. The core goal is to support a "Dual-Mode" aesthetic that dynamically adapts based on the user's journey (Engineering vs. Photography) while ensuring accessibility and performance.

## Visual Identity System

### Color Palette
| Token Name | Color Value | Usage |
| :--- | :--- | :--- |
| **Jet Black** | `#242424` (or #343434) | Primary Background (Engineering/Deep Dark) |
| **Cloud Dancer** | `#F0EEE9` (or approx) | Primary Background (Photography/Light) |
| **Dark Magenta** | `#8B008B` | Accent / Primary Action (Dark Mode) |
| **Magenta** | `#FF00FF` | Accent / Highlights (Cyberpunk/Terminal hints) |

### Typography
- **Headings**: Playfair Display (Serif, High Contrast) - *Elegant, Editorial.*
- **Body**: Inter (Sans-serif, Neutral) - *Clean, Legible, Technical.*

## Automatic Theme Switching Strategy

The theme switching logic will be **Route-Based** with a persistent user override/preference.

### State Logic (Svelte Store / Nano Store)
We will use a lightweight global store to manage the theme state.

1.  **Default Logic**:
    *   `/` (Landing): **Dynamic/Hybrid** (Scroll-dependent or time-dependent).
    *   `/projects` (Engineering): **Deep Dark** (Jet Black).
    *   `/photography` (Gallery): **Light** (Cloud Dancer).
    *   `/blog`: **System Preference** or previous route context.

2.  **Override Mechanism**:
    *   A manual toggle implies "User Preference".
    *   If `localStorage` has a 'theme' key, it takes precedence over route defaults.
    *   A "Reset Experience" button can clear the override to restore the intended route-based storytelling.

### Implementation Setup (Astro + View Transitions)

**Middleware / Layout Script:**
On route change (using Astro View Transitions `astro:after-swap`), we check the route path and update the `data-theme` attribute on `<html>`.

```javascript
// Pseudo-code implementation strategy
function updateThemeOnNavigation(path) {
    const userPref = localStorage.getItem('theme');
    if (userPref) {
        setTheme(userPref);
        return;
    }

    if (path.startsWith('/photography')) {
        setTheme('light'); // Cloud Dancer
    } else if (path.startsWith('/projects')) {
        setTheme('dark'); // Jet Black
    } else {
        // Landing page logic (controlled by specific landing page components)
    }
}
```

## Accessibility & Transitions

### Transition Mechanics
*   **Smooth Interpolation**: Avoid jarring white flashes. Use CSS `transition: background-color 0.5s ease-in-out, color 0.3s ease;`.
*   **Contrast Ratios**:
    *   **Dark Mode**: Ensure `Dark Magenta` text on `Jet Black` meets WCAG AA. May need a lighter tint of Magenta for text.
    *   **Light Mode**: Ensure `Cloud Dancer` background provides enough contrast for `Jet Black` text.

### Reduced Motion
Respect `prefers-reduced-motion`. Disable large background transitions or simplified fade-in/out if enabled.

## Tailwind 4 & DaisyUI 5 Configuration
*   Define custom themes in CSS variables as per Tailwind 4's new engine.
*   Extend DaisyUI themes:
    *   `[data-theme="engineering"]` -> Jet Black Base
    *   `[data-theme="photography"]` -> Cloud Dancer Base
