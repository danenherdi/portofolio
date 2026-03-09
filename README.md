# Danendra Herdiansyah | Personal Portfolio

A modern, high-performance personal portfolio website built with Astro, showcasing my experience and projects in Cloud Computing, Distributed Systems, and Backend Engineering.

## Tech Stack

- **Framework**: [Astro](https://astro.build) (v5)
- **UI Components**: [Svelte](https://svelte.dev)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) (v4) with [DaisyUI](https://daisyui.com) (v5)
- **Content Management**: Astro Content Collections (Markdown)
- **Deployment**: Firebase Hosting (Automated via GitHub Actions)
- **Language**: TypeScript
- **Package Manager**: [Bun](https://bun.sh) (Recommended)

## Features

- **Single-Page Architecture**: Smooth scrolling navigation across Hero, About, Experience, Projects, Skills, and Contact sections.
- **Type-Safe Content**: Experience, featured projects, and technical skills are managed securely using Astro's Content Collections API.
- **Dynamic Theme System**: Robust Dark/Light mode switching that preserves the modern glassmorphism aesthetic across both themes.
- **Fully Responsive**: Mobile-first design with a custom off-canvas/collapsible hamburger navigation for small screens.
- **CI/CD Pipeline**: Automated deployments to Firebase Hosting triggered by merges to the `main` branch via GitHub Actions.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (v1.0+) installed on your machine.
- Firebase Project setup (if you wish to deploy).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/danenherdi/portofolio.git
   cd portofolio
   ```
2. Install dependencies using Bun:
   ```bash
   bun install
   ```

### Development

Start the local development server:

```bash
bun run dev
```

Visit `http://localhost:4321` to view your site with hot-module replacement.

### Build & Deploy

Build the static site for production:

```bash
bun run build
```

To deploy to Firebase Hosting locally (assuming Firebase CLI is authenticated):

```bash
bun run deploy
```

> Note: Production deployments are handled automatically by GitHub Actions upon merging to the `main` branch.

## Project Structure

```
src/
├── components/   # UI components (Astro & Svelte)
│   └── sections/ # Individual page sections (Hero, Experience, etc.)
├── content/      # Markdown content collections
│   ├── experience/
│   ├── projects/
│   └── skills/
├── layouts/      # Base HTML layouts (Layout.astro)
├── lib/          # Global utilities and SDK initializations (e.g., Firebase)
├── pages/        # Route definitions (index.astro)
└── styles/       # Global CSS and Tailwind directives (global.css)
```

## Creating Content

To add a new project, experience, or skill, simply create a new Markdown (`.md`) file in the corresponding `src/content/` directory. Astro will automatically parse the frontmatter to validate data types and render it on the page.

---
&copy; 2026 Danendra Herdiansyah. Designed & Built with Astro.
