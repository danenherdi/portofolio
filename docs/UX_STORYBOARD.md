# UX Storyboard: Portfolio Journey

## Concept: "Tech Cloud Minimalism"
The portfolio serves as a sleek, professional introduction to Danendra Herdiansyah as a Cloud Computing & Distributed Systems Engineer. The journey focuses on clarity, technical competence, and impact.

## Scroll Storytelling Sequence

### Scene 1: The Introduction (About Me)
*   **Visual**: Tech Cloud Minimalism. Deep blue/purple gradient background with frosted glass elements.
*   **UI Elements**:
    *   Clean, bold typography: "Danendra Herdiansyah".
    *   Subtext/Role: "Cloud Computing & Distributed Systems Engineer".
    *   Professional Summary: Highlighting expertise in Kubernetes, AWS, and system optimization based on the resume.
*   **Interaction**: Subtle fade-in of elements on load. Floating neon cyan/purple orbiter effects in the deep background.

### Scene 2: Professional Journey (Experience & Education)
*   **Visual**: A vertical, scrollable minimal timeline.
*   **UI Elements**:
    *   **Professional Work Experience**: 
        *   Research Assistant at CSL UI (Metrics: 69% faster, 58% less CPU).
        *   Freelance Backend Engineer at Iro Art.
    *   **Non-Formal Education & Programs**: 
        *   Bangkit Academy 2024 (Cloud Computing Cohort).
        *   Google Cloud Skills Boost, Dicoding, etc.
*   **Interaction**: Timeline nodes illuminate (Neon Cyan) as the user scrolls past them.

### Scene 3: Building at Scale (Projects Showcase)
*   **Visual**: Grid of sleek `GlassCard` components.
*   **UI Elements**:
    *   Card for **Intelligent Adaptive Caching**: Highlights the Go framework, Prometheus/Grafana, and 94% latency reduction.
    *   Card for **IsyaratKu (Capstone)**: Highlights cloud architecture and cross-functional leadership.
*   **Interaction**: Hovering over a project card slightly lifts it and enhances the border glow, revealing quick metrics (e.g., tech stack tags).

### Scene 4: The Engine Room (Tech Stack & Skills)
*   **Visual**: A dense but organized grid or marquee of technical skills.
*   **UI Elements**:
    *   Categories: Cloud & Infrastructure, CI/CD, Backend, Databases.
    *   Badges for specific technologies (Go, Kubernetes, AWS, Docker).

### Scene 5: Connection (Contact & Footer)
*   **Visual**: Clean, centered call-to-action.
*   **UI Elements**:
    *   "Let's Build Together" or similar CTA.
    *   Links to LinkedIn, GitHub, and Email.
    *   Minimal footer with copyright.

## Technical Implementation (Svelte + Astro)

### Libraries
*   **Motion (Framer Motion for Svelte / Motion One)**: For scroll-triggered reveal animations.

### Storyboard States
1.  **State A (Hero)**: `opacity: 1`, `translateY: 0`. Background ambient animation active.
2.  **State B (Scroll Reveal)**: Elements have `opacity: 0`, `translateY: 20px` initially, transitioning to State A when intersecting the viewport via `IntersectionObserver`.

### Accessibility Note
*   Ensure the contrast ratio between text and the deep gradient backgrounds exceeds WCAG AA standards.
*   Provide a "Skip to Content" link for keyboard navigation.
