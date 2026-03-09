<script lang="ts">
  export let title: string;
  export let organization: string;
  export let dateRange: string;
  export let active: boolean = false;
</script>

<div class="relative pl-8 md:pl-0">
  <!-- Timeline Line (Mobile) -->
  <div
    class="md:hidden absolute left-[15px] top-4 bottom-0 w-px bg-slate-200 dark:bg-slate-700/50"
  ></div>

  <div class="md:flex items-center justify-between w-full mb-8">
    <!-- Center Dot/Line (Desktop) -->
    <div
      class="hidden md:absolute left-1/2 top-4 bottom-0 w-px bg-slate-200 dark:bg-slate-700/50 -translate-x-1/2 z-0"
    ></div>

    <!-- Left Side: Date (Desktop) -->
    <div class="hidden md:w-5/12 md:flex justify-end pr-8">
      <span
        class="text-sm font-mono opacity-60 dark:text-white text-slate-900 {active
          ? 'text-cyan-600 dark:text-cyan-400 opacity-100'
          : ''}"
      >
        {dateRange}
      </span>
    </div>

    <!-- Timeline Node (Dot) -->
    <div
      class="absolute left-0 md:static md:w-2/12 flex justify-center z-10 top-1.5 md:top-auto"
    >
      <div
        class="w-8 h-8 rounded-full border-4 border-white dark:border-deep-space flex items-center justify-center {active
          ? 'bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]'
          : 'bg-slate-200 dark:bg-slate-700'} transition-all duration-300"
      >
        <div
          class="w-2 h-2 rounded-full {active ? 'bg-white' : 'bg-transparent'}"
        ></div>
      </div>
    </div>

    <!-- Right/Content Side -->
    <div class="md:w-5/12 md:pl-8">
      <!-- Date (Mobile) -->
      <div class="md:hidden mb-1">
        <span
          class="text-xs font-mono opacity-60 dark:text-white text-slate-900 {active
            ? 'text-cyan-600 dark:text-cyan-400 opacity-100'
            : ''}"
        >
          {dateRange}
        </span>
      </div>

      <div class="glass-card p-6 hover:-translate-y-1 group">
        <h4
          class="text-xl font-bold text-slate-800 dark:text-cloud-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors"
        >
          {title}
        </h4>
        <h5 class="text-sm text-slate-500 dark:text-slate-400 font-medium mb-4">
          {organization}
        </h5>

        <div
          class="text-sm opacity-80 leading-relaxed text-slate-700 dark:text-slate-300 prose prose-invert prose-p:my-1 prose-ul:my-1 prose-li:my-0"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</div>
