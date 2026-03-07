# Component Specifications & Architecture

## Design Philosophy: "Tech Cloud Minimalism"
The design language focuses on clean lines, subtle gradients, and functional depth. It breaks away from generic grid layouts by using asymmetrical floating elements ("GlassCards") layered over deep blue and purple gradient backgrounds.

## 1. Core Svelte Components

### `GlassCard.svelte`
A foundational container for content, providing a frosted glass effect that sits above the background.
*   **Props**:
    *   `intensity`: 'low', 'medium', 'high' (blur amount).
    *   `border`: boolean (subtle slate gray or cyan neon border on hover).
    *   `hoverEffect`: boolean (scale up slightly and enhance glow on hover).
*   **Style**: Backdrop-blur (`backdrop-filter: blur(12px)`), semi-transparent background (e.g., `rgba(15, 23, 42, 0.7)`), subtle drop-shadow.

### `Orbiter.svelte` (Background Element)
Purely decorative, animated background highlights that create a sense of deep space and cloud technology.
*   **Props**:
    *   `variant`: 'cyan', 'purple'.
    *   `size`: pixel/rem value.
    *   `speed`: animation duration.
*   **Behavior**: Slowly floats or pulses in the background using CSS keyframes, with large blur radii to create soft gradients.

### `MetricCard.svelte`
A focused component to highlight specific engineering achievements.
*   **Props**:
    *   `value`: e.g., "69%".
    *   `label`: e.g., "Faster Response Time".
    *   `icon`: Optional SVG identifier.
*   **Style**: Highly contrasted, perhaps using Neon Cyan for the value to draw the eye to the impact.

### `TimelineItem.svelte`
Used to display items in the Experience and Education sections.
*   **Props**:
    *   `title`: Role or Program Name.
    *   `subtitle`: Company or Institution.
    *   `dateRange`: String indicating duration.
    *   `active`: Boolean (highlights node point in cyan).

## 2. Content Collections (Astro)

We will use Astro's `src/content/` for type-safe data management.

### Collection: `projects`
*   **Schema**:
    ```typescript
    import { z, defineCollection } from 'astro:content';
    const projects = defineCollection({
      schema: z.object({
        title: z.string(),
        tagline: z.string(),
        tags: z.array(z.string()), // e.g., ["K8s", "Go", "GCP"]
        metrics: z.array(z.string()).optional(), // specific performance wins
        repoUrl: z.string().url().optional(),
        demoUrl: z.string().url().optional(),
        featured: z.boolean().default(false),
      })
    });
    ```

### Collection: `experience`
Categorized into Professional Work Experience and Non-formal Education.
*   **Schema**:
    ```typescript
    import { z, defineCollection } from 'astro:content';
    const experience = defineCollection({
      schema: z.object({
        title: z.string(), // e.g., "Research Assistant" or "Cloud Computing Cohort"
        organization: z.string(), // e.g., "CSL UI" or "Bangkit Academy"
        startDate: z.date(),
        endDate: z.date().optional(), // Null implies "Present"
        category: z.enum(['Professional Work', 'Non-Formal Education']),
      }) // Markdown body contains the bullet points
    });
    ```

### Collection: `skills`
*   **Schema**:
    ```typescript
    import { z, defineCollection } from 'astro:content';
    const skills = defineCollection({
      schema: z.object({
        category: z.string(), // e.g., "Cloud & Infrastructure"
        items: z.array(z.string()), // e.g., ["GCP", "AWS", "Kubernetes"]
        order: z.number().default(99),
      })
    });
    ```

## 3. Global Components

### `ThemeToggle.svelte`
*   **Function**: Allows user to override the system theme preference (Light <-> Dark), updating the global store and `localStorage`.

### `CmdPalette.svelte` (Command K)
*   Professional/Developer shortcut menu.
*   Opens search, navigation, and quick links via keyboard shortcuts (`Cmd+K`).
*   **Feel**: Like VS Code, Raycast, or Spotlight.

