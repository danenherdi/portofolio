<script lang="ts">
    import { onMount } from "svelte";
    import { ref, getDownloadURL } from "firebase/storage";
    import { storage } from "../lib/firebase";

    // Component Props
    export let imagePath: string = "public/FB_IMG_1677228588506_waifu2x_art_noise3_scale.png";
    export let altText: string = "My Profile Picture";
    export let className: string = "";

    let imageUrl: string | null = null;
    let loading: boolean = true;
    let error: boolean = false;

    onMount(async () => {
        try {
            const imageRef = ref(storage, imagePath);
            imageUrl = await getDownloadURL(imageRef);
        } catch (e) {
            console.error("Error fetching profile image from Firebase Storage:", e);
            error = true;
        } finally {
            loading = false;
        }
    });
</script>

<div class={`relative flex items-center justify-center shrink-0 ${className}`}>
    {#if loading}
        <!-- Skeleton Loading State -->
        <div
        class="w-full h-full rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse border-4 border-white dark:border-slate-800 overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.2)]"
        ></div>
    {:else if error || !imageUrl}
        <!-- Fallback/Error State -->
        <div
        class="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-700 shadow-xl overflow-hidden flex items-center justify-center text-slate-400"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle
            cx="9"
            cy="9"
            r="2"
            /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg
        >
        </div>
    {:else}
        <!-- Image Render State -->
        <div
        class="relative w-full h-full rounded-full border-4 border-white dark:border-slate-800 overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.25)] group"
        >
        <img
            src={imageUrl}
            alt={altText}
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <!-- Inner subtle glow effect -->
        <div
            class="absolute inset-0 rounded-full border border-white/20 dark:border-white/10 pointer-events-none"
        ></div>
        </div>
    {/if}
</div>
