<script lang="ts">
  import { onMount } from "svelte";

  export let firstName = "Danendra";
  export let lastName = "Herdiansyah";

  let currentFirstName = "";
  let currentLastName = "";
  let isTypingLastName = false;

  onMount(() => {
    let index1 = 0;
    let index2 = 0;

    const typeFirstName = () => {
      if (index1 < firstName.length) {
        currentFirstName += firstName.charAt(index1);
        index1++;
        setTimeout(typeFirstName, 60 + Math.random() * 60);
      } else {
        isTypingLastName = true;
        setTimeout(typeLastName, 300); // short pause between names
      }
    };

    const typeLastName = () => {
      if (index2 < lastName.length) {
        currentLastName += lastName.charAt(index2);
        index2++;
        setTimeout(typeLastName, 60 + Math.random() * 60);
      }
    };

    // start typing after a small initial delay
    setTimeout(typeFirstName, 400);
  });
</script>

<h1
  class="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white w-full relative"
>
  <!-- Invisible placeholder to prevent layout shift during typing -->
  <div class="opacity-0 pointer-events-none select-none" aria-hidden="true">
    {firstName} <br class="hidden sm:block" />
    <span class="inline-block pb-2">{lastName}</span>
  </div>

  <!-- Absolute positioned dynamic typing container -->
  <div class="absolute top-0 left-0 w-full">
    {currentFirstName}{#if !isTypingLastName}<span
        class="animate-[pulse_1s_ease-in-out_infinite] font-light text-cyan-600 dark:text-cyan-400"
        >|</span
      >{/if}{" "}
    <br class="hidden sm:block" />
    <span
      class="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 inline-block pb-2"
    >
      {currentLastName}
    </span>{#if isTypingLastName}<span
        class="animate-[pulse_1s_ease-in-out_infinite] font-light text-purple-600 dark:text-purple-500"
        >|</span
      >{/if}
  </div>
</h1>
