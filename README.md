# Personal Portfolio

A modern, high-performance personal portfolio website built with Astro, showcasing a dual-identity theme system for Engineering and Photography.

## Tech Stack

- **Framework**: [Astro](https://astro.build) (v5)
- **UI Framework**: [Svelte](https://svelte.dev)
- **Styling**:
  - [Tailwind CSS](https://tailwindcss.com) (v4)
  - [DaisyUI](https://daisyui.com) (v5)
- **State Management**: [Nanostores](https://github.com/nanostores/nanostores) (for theme management)
- **Language**: TypeScript
- **Runtime/Package Manager**: [Bun](https://bun.sh) (recommended)

## Features

- **Dual Theme System**: Seamless switching between "Engineering" (Dark/Professional) and "Photography" (clean/gallery-focused) modes.
- **Glassmorphism Design**: Custom utility classes for premium glass-like UI elements (`.glass-dark`, `.glass-light`).
- **Responsive Layout**: Mobile-first design using Tailwind CSS.
- **Type-Safe**: Full TypeScript integration for components and stores.

## Getting Started

### Prerequisites

- Node.js or [Bun](https://bun.sh) installed.

### Installation

1. Clone the repository (if initialized).
2. Install dependencies:

```bash
bun install
# or
npm install
```

### Development

Start the development server:

```bash
bun run dev
# or
npm run dev
```

Visit `http://localhost:4321` to view the site.

### Build

Build the project for production:

```bash
bun run build
# or
npm run build
```

## Project Structure

```
src/
├── components/   # Reusable UI components
├── layouts/      # Page layouts (Layout.astro)
├── pages/        # Route definitions (index.astro, projects/, photography/)
├── store/        # Global state (Nanostores theme.ts)
├── styles/       # Global styles (Tailwind imports & custom CSS)
└── env.d.ts      # TypeScript environment definitions
```

## Theming

The project uses a sophisticated theming strategy:

- **Engineering Theme**: Dark mode, technical aesthetic, primary color Magenta/Dark Magenta.
- **Photography Theme**: Light mode, gallery aesthetic, primary color Cloud Dancer.

Themes are applied via `data-theme` attribute on the `<html>` tag and managed via `src/store/theme.ts`.
