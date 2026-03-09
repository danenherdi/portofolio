<script lang="ts">
  export let category: string;
  export let items: string[];
</script>

<div
  class="glass-card p-6 rounded-2xl hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(168,85,247,0.1)] transition-all duration-300 h-full flex flex-col"
>
  <div class="flex items-center gap-3 mb-6">
    <div
      class="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg
      >
    </div>
    <h4 class="text-xl font-bold text-slate-800 dark:text-slate-200">
      {category}
    </h4>
  </div>

  <div class="flex flex-wrap gap-2 mt-auto">
    {#each items as item}
      <span
        class="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800/50 rounded-lg text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
      >
        {item}
      </span>
    {/each}
  </div>
</div>
