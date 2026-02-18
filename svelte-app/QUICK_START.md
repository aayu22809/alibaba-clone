# Svelte App Quick Start

## Installation

```bash
cd svelte-app
pnpm install
```

## Development

```bash
pnpm run dev
```

The site will be available at `http://localhost:5173`

## Build for Production

```bash
pnpm run build
```

The built files will be in the `build/` directory.

## Preview Production Build

```bash
pnpm run preview
```

## Project Structure

- `src/routes/` - Page components (file-based routing)
- `src/lib/components/` - Reusable UI components
- `src/lib/stores/` - Global state management
- `src/app.css` - Global styles
- `static/` - Static assets

## Adding a New Page

1. Create a new directory in `src/routes/` (e.g., `new-page/`)
2. Add `+page.svelte` file in that directory
3. The page will automatically be available at `/new-page`

## Adding a New Component

1. Create a new `.svelte` file in `src/lib/components/`
2. Import and use it in your pages:
   ```svelte
   <script>
     import MyComponent from '$lib/components/MyComponent.svelte';
   </script>
   
   <MyComponent />
   ```

## Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run check` - Run TypeScript type checking
- `pnpm run check:watch` - Run type checking in watch mode

## Tech Stack

- **SvelteKit** - Framework
- **Svelte 5** - UI library (with runes: $state, $derived, etc.)
- **TypeScript** - Type safety
- **Vite** - Build tool
- **pnpm** - Package manager

## Tips

- Components are reactive by default
- Use `$state()` for reactive variables (Svelte 5)
- Use `$derived()` for computed values
- Styles in `<style>` blocks are scoped to the component
- Global styles go in `src/app.css`

