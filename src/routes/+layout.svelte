<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { updateDocumentClass, theme } from '$lib/utils/theme';
  import Header from '$lib/components/header.svelte';
  import { browser } from '$app/environment';

  let error: Error | null = null;

  onMount(() => {
    try {
      if (browser) {
        updateDocumentClass($theme);
      }
    } catch (e) {
      console.error('Error in layout:', e);
      error = e instanceof Error ? e : new Error('Unknown error');
    }
  });
</script>

{#if error}
  <div class="p-4 bg-red-100 text-red-700">
    An error occurred. Please try refreshing the page.
  </div>
{:else}
  <Header />
  <div class="h-16"></div>
  <slot />
{/if}
