<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { ref, getDownloadURL } from "firebase/storage";
  import { storage } from "../lib/firebase";

  export let title: string;
  export let tagline: string;
  export let subtitle: string = "";
  export let tags: string[];
  export let metrics: string[] = [];
  export let repoUrl: string | undefined = undefined;
  export let demoUrl: string | undefined = undefined;
  export let screenshots: string[] = [];

  let isModalOpen = false;
  let resolvedScreenshots: string[] = [];

  onMount(async () => {
    if (screenshots && screenshots.length > 0) {
      resolvedScreenshots = await Promise.all(
        screenshots.map(async (path) => {
          try {
            const imageRef = ref(storage, path);
            return await getDownloadURL(imageRef);
          } catch (e) {
            console.warn(`Failed to retrieve image: ${path}`, e);
            return path;
          }
        }),
      );
    }
  });

  function openModal() {
    isModalOpen = true;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    isModalOpen = false;
    document.body.style.overflow = "";
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape" && isModalOpen) {
      closeModal();
    }
  }

  function portal(node: HTMLElement) {
    document.body.appendChild(node);
    return {
      destroy() {
        if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
      },
    };
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<button
  type="button"
  on:click={openModal}
  class="w-full text-left glass-card rounded-2xl p-6 sm:p-8 flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)] transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500 max-w-full"
>
  <div class="flex justify-between items-start mb-4">
    <h3
      class="text-2xl font-bold text-slate-800 dark:text-cloud-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors"
    >
      {title}
    </h3>
    <div
      class="flex gap-3 relative z-10 opacity-70 group-hover:opacity-100 transition-opacity"
    >
      {#if repoUrl}
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          on:click|stopPropagation
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
          on:click|stopPropagation
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

  {#if metrics && metrics.length > 0}
    <div class="grid grid-cols-2 gap-3 mb-6 w-full">
      {#each metrics as metric}
        <div
          class="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-500/20 rounded-lg p-3 text-center"
        >
          <span
            class="text-xs font-bold text-cyan-700 dark:text-cyan-300 block min-w-0 wrap-break-word"
            >{metric}</span
          >
        </div>
      {/each}
    </div>
  {/if}

  <div
    class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-200 dark:border-white/5 w-full"
  >
    {#each tags as tag}
      <span
        class="text-xs font-mono px-2 py-1 bg-slate-100 dark:bg-white/5 rounded text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5 whitespace-nowrap"
      >
        {tag}
      </span>
    {/each}
  </div>
</button>

{#if isModalOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
    on:click={closeModal}
    use:portal
  >
    <!-- Backdrop Blur -->
    <div
      class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      aria-hidden="true"
      transition:fade={{ duration: 200 }}
    ></div>

    <!-- Modal Content -->
    <div
      class="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl shadow-2xl z-10 p-6 sm:p-10"
      on:click|stopPropagation
      transition:fly={{ y: 20, duration: 300 }}
    >
      <button
        type="button"
        class="absolute top-4 right-4 p-2 rounded-full bg-slate-200/50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors focus:outline-none"
        on:click={closeModal}
        aria-label="Close modal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><line x1="18" y1="6" x2="6" y2="18" /><line
            x1="6"
            y1="6"
            x2="18"
            y2="18"
          /></svg
        >
      </button>

      <div class="mb-8 pr-12">
        <h3
          class="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-cloud-white mb-2"
        >
          {title}
        </h3>
        <p class="text-lg text-slate-500 dark:text-slate-400 font-medium">
          {subtitle || tagline}
        </p>
      </div>

      {#if resolvedScreenshots && resolvedScreenshots.length > 0}
        <div class="mb-8 w-full flex justify-center">
          <div
            class="flex gap-4 overflow-x-auto pb-4 snap-x justify-center w-full max-w-3xl"
          >
            {#each resolvedScreenshots as screenshot}
              <div
                class="snap-center shrink-0 w-full sm:w-[80%] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800"
              >
                <img
                  src={screenshot}
                  alt={`${title} screenshot`}
                  class="w-full h-auto max-h-[400px] object-cover"
                />
              </div>
            {/each}
          </div>
        </div>
      {/if}

      <div
        class="prose prose-slate dark:prose-invert max-w-none mb-10 text-slate-700 dark:text-slate-300 leading-relaxed [&_ul]:list-disc [&_ul]:ml-4 [&_ul]:space-y-1 [&_li]:pl-1"
      >
        <slot />
      </div>

      <div
        class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-6 border-t border-slate-200 dark:border-white/10"
      >
        <div class="flex flex-wrap gap-2">
          {#each tags as tag}
            <span
              class="text-xs font-mono px-3 py-1.5 bg-cyan-100/50 dark:bg-cyan-900/30 rounded-md text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/50"
            >
              {tag}
            </span>
          {/each}
        </div>

        <div class="flex gap-4">
          {#if repoUrl}
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors font-medium text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
              GitHub
            </a>
          {/if}
          {#if demoUrl}
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 transition-colors font-medium text-sm shadow-lg shadow-cyan-500/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
              Live Demo
            </a>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}
