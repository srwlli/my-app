<script lang="ts">
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Moon, Sun } from "lucide-svelte";
  import { theme, toggleTheme } from "@/utils/theme";
</script>

<div class="container mx-auto py-10">
  <h1 class="text-3xl font-bold mb-6">Settings</h1>
  
  <Card class="w-full max-w-md">
    <CardHeader>
      <CardTitle>Appearance</CardTitle>
      <CardDescription>Customize how the app looks and feels</CardDescription>
    </CardHeader>
    <CardContent>
      <div class="flex items-center justify-between">
        <span>Dark Mode</span>
        <Button variant="outline" size="icon" on:click={toggleTheme}>
          {#if $theme === "dark"}
            <Sun class="h-5 w-5" />
          {:else}
            <Moon class="h-5 w-5" />
          {/if}
          <span class="sr-only">Toggle theme</span>
        </Button>
      </div>
    </CardContent>
  </Card>
</div>