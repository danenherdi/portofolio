<script lang="ts">
  import { onMount } from 'svelte';

  let theme = 'dark';
  let mounted = false;

  onMount(() => {
    // Read the current theme from the document root which was set by Layout.astro
    theme = document.documentElement.getAttribute('data-theme') || 'dark';
    mounted = true;
  });

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
</script>

{#if mounted}
  <button
    on:click={toggleTheme}
    class="p-2 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center opacity-80 hover:opacity-100"
    aria-label="Toggle Theme"
  >
    {#if theme === 'dark'}
      <!-- Sun Icon for switching to light mode -->
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>
    {:else}
      <!-- Moon Icon for switching to dark mode -->
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
    {/if}
  </button>
{:else}
  <!-- Placeholder to prevent layout shift before mount -->
  <div class="w-[34px] h-[34px] p-2"></div>
{/if}
