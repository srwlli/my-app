<script lang="ts">
  import { Settings, Link } from 'lucide-svelte';
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
</script>

<div class="container mx-auto pt-2 pb-4">
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <!-- Settings Card -->
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

    <!-- Page 1 -->
    <Card class="w-full">
      <CardHeader>
        <CardTitle>Page 1</CardTitle>
        <CardDescription>Customize your application preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <Link class="h-12 w-12 mx-auto my-4 text-gray-500" />
        <p>Change appearance settings and more</p>
      </CardContent>
      <CardFooter>
        <a href="https://example.com" target="_blank" rel="noopener" class="w-full inline-block">
          <Button class="w-full">Open</Button>
        </a>
      </CardFooter>
    </Card>

    <!-- Page 2 -->
    <Card class="w-full">
      <CardHeader>
        <CardTitle>Page 2</CardTitle>
        <CardDescription>Customize your application preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <Link class="h-12 w-12 mx-auto my-4 text-gray-500" />
        <p>Change appearance settings and more</p>
      </CardContent>
      <CardFooter>
        <a href="https://example.com" target="_blank" rel="noopener" class="w-full inline-block">
          <Button class="w-full">Open</Button>
        </a>
      </CardFooter>
    </Card>

    <!-- Page 3 -->
    <Card class="w-full">
      <CardHeader>
        <CardTitle>Page 3</CardTitle>
        <CardDescription>Customize your application preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <Link class="h-12 w-12 mx-auto my-4 text-gray-500" />
        <p>Change appearance settings and more</p>
      </CardContent>
      <CardFooter>
        <a href="https://example.com" target="_blank" rel="noopener" class="w-full inline-block">
          <Button class="w-full">Open</Button>
        </a>
      </CardFooter>
    </Card>

    <!-- Page 4 -->
    <Card class="w-full">
      <CardHeader>
        <CardTitle>Page 4</CardTitle>
        <CardDescription>Customize your application preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <Link class="h-12 w-12 mx-auto my-4 text-gray-500" />
        <p>Change appearance settings and more</p>
      </CardContent>
      <CardFooter>
        <a href="https://example.com" target="_blank" rel="noopener" class="w-full inline-block">
          <Button class="w-full">Open</Button>
        </a>
      </CardFooter>
    </Card>

    <!-- Page 5 -->
    <Card class="w-full">
      <CardHeader>
        <CardTitle>Page 5</CardTitle>
        <CardDescription>Customize your application preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <Link class="h-12 w-12 mx-auto my-4 text-gray-500" />
        <p>Change appearance settings and more</p>
      </CardContent>
      <CardFooter>
        <a href="https://example.com" target="_blank" rel="noopener" class="w-full inline-block">
          <Button class="w-full">Open</Button>
        </a>
      </CardFooter>
    </Card>
  </div>
</div>
