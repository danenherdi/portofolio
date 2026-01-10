# UX Storyboard: Landing Page Journey

## Concept: "The Dual Persona"
The landing page serves as a cinematic introduction to the two core pillars of the identity: **Engineering (Logic/Structure)** and **Photography (Emotion/Capture)**.

**Metaphor**: A lens focusing. We start with raw code/structure and transition into the captured world, or vice-versa.

## Scroll Storytelling Sequence

### Scene 1: The Terminal (Above the Fold)
*   **Visual**: Deep Dark Mode (Jet Black). Minimalist.
*   **UI Elements**:
    *   A simulated terminal prompt blinking or typing out `whoami`.
    *   Output: `> Danendra Herdiansyah | CS UI '26`.
    *   Subtext: "Architecting Systems."
*   **Interaction**: User scrolls down. The terminal text "compiles" or "decompiles" into the next scene.

### Scene 2: The Transition (The "Split")
*   **Mechanism**: Scroll-scrubbing animation.
*   **Visual**: The screen begins to split diagonally or fades into a glassmorphism overlay.
*   **Narrative**: "Bridging the gap between strict logic and captured moments."
*   **Animation**:
    *   Code snippets (Go/Rust syntax) float on the left.
    *   Faint contact sheet borders / film strips fade in on the right.
    *   **Color Shift**: Background transitions from `#000000` to a deep gray, preparing for the light mode shift.

### Scene 3: The Gallery (Photography Focus)
*   **Visual**: Shift to Light Mode / Cloud Dancer (or high contrast dark with large imagery).
*   **UI Elements**:
    *   Full-width parallax horizontal scroll of latest photography work (Motorsport/Documentary).
    *   Typography switches to *Playfair Display* (Large, editorial style).
    *   Floating caption: "Capturing Adrenaline."
*   **Interaction**: Horizontal scroll interrupts the vertical flow temporarily (Pinning strategy), or standard vertical masonry layout.

### Scene 4: The Convergence (Call to Action)
*   **Visual**: Glassmorphism blend.
*   **Content**: Navigation cards to "Projects" (Deep Dark) and "Gallery" (Light).
*   **Footer**: Simple, clean, links to social/contact.

## Technical Implementation (Svelte)

### Libraries
*   **GSAP (GreenSock)** or **Motion One**: For timeline-based scroll animations (ScrollTrigger).
*   **Svelte Spring/Tweened**: For micro-interactions.

### Storyboard States
1.  **State A (Hero)**: `opacity: 1`, `scale: 1`, `theme: dark`
2.  **State B (Transition)**: `split: 50%`, `blur: 10px`, `theme: transition`
3.  **State C (Gallery)**: `opacity: 1`, `scale: 1`, `theme: light`

### Accessibility Note
*   **Scroll-Jacking**: AVOID aggressive scroll-jacking. The scroll should feel natural. Use *scroll-linked* animations (scrubbing) rather than *scroll-locking* where possible, unless outlining a specific "pinned" section.
*   Provide a "Skip Intro" button to jump straight to standard navigation for repeat visitors.
