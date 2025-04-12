<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { Button } from "$lib/components/ui/button";
  import { Menu } from "lucide-svelte";
  import { browser } from '$app/environment';

  let isOpen = false;
  let dropdownRef: HTMLElement | null = null;
  let handleClickOutside: ((event: MouseEvent) => void) | undefined;

  onMount(() => {
    if (browser) {
      handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
          isOpen = false;
        }
      };

      document.addEventListener('click', handleClickOutside);
    }
  });

  onDestroy(() => {
    if (browser && handleClickOutside) {
      document.removeEventListener('click', handleClickOutside);
    }
  });
</script>

<header class="fixed top-0 left-0 right-0 h-16 bg-background border-b z-50 flex items-center px-4">
  <div class="w-full max-w-7xl mx-auto flex justify-between items-center">
    <!-- Left-aligned dropdown menu -->
    <div class="relative" bind:this={dropdownRef}>
      <Button variant="ghost" size="icon" on:click={() => isOpen = !isOpen}>
        <Menu class="h-5 w-5" />
        <span class="sr-only">Navigation menu</span>
      </Button>

      {#if isOpen}
        <div class="absolute mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg border rounded z-50">
          <a href="/" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Home</a>
          <a href="/settings" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</a>
        </div>
      {/if}
    </div>

    <!-- Right-aligned title -->
    <div>
      <h1 class="text-xl font-bold">MyDash</h1>
    </div>
  </div>
</header>

<div class="h-16"></div>
