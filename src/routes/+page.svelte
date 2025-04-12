<script lang="ts">
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { Settings } from 'lucide-svelte';
</script>

<div class="container mx-auto py-10">
  <h1 class="text-3xl font-bold mb-6">Welcome to My App</h1>
  
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <Card class="w-full">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Customize your application preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <Settings class="h-12 w-12 mx-auto my-4 text-gray-500" />
        <p>Change appearance settings and more</p>
      </CardContent>
      <CardFooter>
        <a href="/settings" class="w-full inline-block">
          <Button class="w-full">Go to Settings</Button>
        </a>
      </CardFooter>
    </Card>
  </div>
</div>
