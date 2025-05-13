# Svelte LLMs Documentation

This is a condensed version of the Svelte documentation for LLM reference.

## Svelte Basics

Svelte is a framework for building user interfaces on the web. It uses a compiler to turn declarative components written in HTML, CSS and JavaScript into lean, optimized JavaScript.

### Components

Components are the building blocks of Svelte applications, written in `.svelte` files with three optional sections:
- script (JavaScript/TypeScript)
- styles (CSS)
- markup (HTML)

### Reactivity in Svelte 5

Svelte 5 introduces runes for reactivity:

#### $state

```svelte
<script>
  let count = $state(0);
  
  function increment() {
    count++;
  }
</script>

<button on:click={increment}>
  clicks: {count}
</button>
```

Deep state with arrays and objects:
```js
let todos = $state([
  { done: false, text: 'add more todos' }
]);

// Modifying properties triggers updates
todos[0].done = !todos[0].done;

// Adding items to the array
todos.push({ done: false, text: 'eat lunch' });
```

#### $derived

```svelte
<script>
  let count = $state(0);
  let doubled = $derived(count * 2);
</script>

<button on:click={() => count++}>
  {count} doubled is {doubled}
</button>
```

For complex derivations:
```svelte
<script>
  let numbers = $state([1, 2, 3]);
  let total = $derived.by(() => {
    return numbers.reduce((a, b) => a + b, 0);
  });
</script>
```

#### $effect

Effects run when state updates and can be used for side effects:

```svelte
<script>
  let count = $state(0);
  
  $effect(() => {
    console.log(`The count is ${count}`);
  });
</script>
```

Effects run after the component is mounted and in a microtask after state changes.

#### $props

```svelte
<script>
  let { adjective = 'happy' } = $props();
</script>

<p>This component is {adjective}</p>
```

#### $bindable

```svelte
<script>
  let value = $bindable('');
</script>

<input bind:value />
```

## SvelteKit

SvelteKit is Svelte's application framework for building full-stack web applications.

### Routing

SvelteKit uses file-based routing:
- `+page.svelte` - Page component
- `+layout.svelte` - Layout component
- `+page.js` or `+page.server.js` - Page data loading
- `+server.js` - API endpoints

### Loading Data

```js
// +page.js or +page.server.js
export function load({ params, fetch }) {
  return {
    post: fetch(`/api/posts/${params.slug}`).then(r => r.json())
  };
}
```

### Forms

SvelteKit provides progressive enhancement for forms:

```svelte
<form method="POST" action="?/login">
  <input name="email">
  <input name="password" type="password">
  <button>Log in</button>
</form>
```

With the corresponding action in `+page.server.js`:

```js
export const actions = {
  login: async ({ request, cookies }) => {
    const data = await request.formData();
    // Process login...
  }
};
```

### API Routes

```js
// +server.js
export function GET({ url }) {
  return new Response(JSON.stringify({ message: 'Hello' }), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
```

## Deployment

SvelteKit uses adapters for deployment to different platforms:
- `@sveltejs/adapter-auto` - Auto-detects platform
- `@sveltejs/adapter-node` - Node.js server
- `@sveltejs/adapter-static` - Static site generation
- `@sveltejs/adapter-vercel` - Vercel
- `@sveltejs/adapter-netlify` - Netlify
- `@sveltejs/adapter-cloudflare` - Cloudflare
