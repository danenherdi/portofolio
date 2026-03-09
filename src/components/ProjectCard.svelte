<script lang="ts">
  export let title: string;
  export let tagline: string;
  export let tags: string[];
  export let metrics: string[] = [];
  export let repoUrl: string | undefined = undefined;
  export let demoUrl: string | undefined = undefined;
</script>

<div
  class="w-full glass-card rounded-2xl p-6 sm:p-8 flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)] transition-all duration-300 group"
>
  <div class="flex justify-between items-start mb-4">
    <h3
      class="text-2xl font-bold text-slate-800 dark:text-cloud-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors"
    >
      {title}
    </h3>
    <div class="flex gap-3">
      {#if repoUrl}
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="opacity-60 hover:opacity-100 text-slate-600 dark:text-cloud-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          aria-label="GitHub Repository"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path
              d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
            /><path d="M9 18c-4.51 2-5-2-7-2" /></svg
          >
        </a>
      {/if}
      {#if demoUrl}
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="opacity-60 hover:opacity-100 text-slate-600 dark:text-cloud-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          aria-label="Live Demo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path
              d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            /><polyline points="15 3 21 3 21 9" /><line
              x1="10"
              y1="14"
              x2="21"
              y2="3"
            /></svg
          >
        </a>
      {/if}
    </div>
  </div>

  <h4 class="text-sm text-slate-500 dark:text-slate-400 font-medium mb-4">
    {tagline}
  </h4>

  <div
    class="text-sm opacity-80 leading-relaxed text-slate-600 dark:text-slate-300 prose prose-invert prose-p:my-1 prose-ul:my-1 mb-6 grow"
  >
    <slot />
  </div>

  {#if metrics && metrics.length > 0}
    <div class="grid grid-cols-2 gap-3 mb-6">
      {#each metrics as metric}
        <div
          class="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-500/20 rounded-lg p-3 text-center"
        >
          <span class="text-xs font-bold text-cyan-700 dark:text-cyan-300 block"
            >{metric}</span
          >
        </div>
      {/each}
    </div>
  {/if}

  <div
    class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-200 dark:border-white/5"
  >
    {#each tags as tag}
      <span
        class="text-xs font-mono px-2 py-1 bg-slate-100 dark:bg-white/5 rounded text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5"
      >
        {tag}
      </span>
    {/each}
  </div>
</div>
