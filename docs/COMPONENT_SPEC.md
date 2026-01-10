# Component Specifications & Architecture

## Design Philosophy: "Anti-Grid" & Glassmorphism
We aim to break the rigid 12-column grid structure common in bootstrap/tailwind defaults. Layouts should feel organic, using overlapping layers, asymmetrical positioning, and soft depth (Glassmorphism).

## 1. Core Svelte Components

### `GlassCard.svelte`
A foundational container for content.
*   **Props**:
    *   `intensity`: 'low', 'medium', 'high' (blur amount).
    *   `border`: boolean (subtle white/dark border).
    *   `hoverEffect`: boolean (scale/lift on hover).
*   **Style**: Backdrop-blur, semi-transparent background (white/black alpha), subtle drop-shadow.

### `Orbiter.svelte` (Background Element)
Purely decorative, animated background blobs.
*   **Props**:
    *   `color`: 'magenta', 'cyan', 'white'.
    *   `size`: pixel/rem value.
    *   `speed`: animation duration.
*   **Behavior**: Slowly floats around the screen using CSS keyframes or Svelte Spring.

### `MagneticButton.svelte`
A button that gravitates slightly towards the cursor.
*   **Logic**: Uses MouseEvent `clientXS/Y` to translate the button element slightly within a bounded radius.

### `PhotoGrid.svelte` (Masonry/Anti-Grid)
*   **Props**: `images[]`.
*   **Layout**: CSS Grid with `grid-auto-flow: dense` or a custom masonry logic using column spanning (`col-span-2`, `row-span-2`) assigned randomly or via props to create an irregular, organic mosaic.

## 2. Content Collections (Astro)

We will use Astro's `src/content/` for type-safe data management.

### Collection: `projects`
*   **Schema**:
    ```typescript
    const projects = defineCollection({
      schema: z.object({
        title: z.string(),
        tagline: z.string(),
        tags: z.array(z.string()), // e.g., ["K8s", "Go", "DevOps"]
        heroImage: z.string(),
        repoUrl: z.string().url().optional(),
        demoUrl: z.string().url().optional(),
        featured: z.boolean().default(false),
        themeOverride: z.enum(['dark', 'light']).optional(),
      })
    });
    ```

### Collection: `photography`
*   **Schema**:
    ```typescript
    const photography = defineCollection({
      schema: z.object({
        title: z.string(),
        date: z.date(),
        location: z.string(),
        category: z.enum(['Motorsport', 'Documentary', 'Portrait']),
        src: z.string(), // Path to image
        exif: z.object({
            camera: z.string(), // e.g., "Sony A7IV"
            lens: z.string(),
            aperture: z.string(),
            shutterSpeed: z.string(),
            iso: z.number(),
        }).optional(),
      })
    });
    ```

### Collection: `blog` (Technical Write-ups)
*   Standard Moveable Type / Markdown frontmatter.
*   Includes `readTime` (calculated) and `relatedProjects` (reference).

## 3. Global Components

### `ThemeToggle.svelte`
*   **Visual**: A toggle switch or icon morph (Sun <-> Moon).
*   **Function**: Updates the global store and `localStorage`.
*   **Placement**: Fixed bottom-right or top-right.

### `CmdPalette.svelte` (Command K)
*   Professional/Developer shortcut menu.
*   Opens search, navigation, and theme switching via keyboard shortcuts.
*   **Feel**: Like VS Code or Spotlight.
