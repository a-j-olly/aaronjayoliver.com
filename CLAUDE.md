# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a SvelteKit-based portfolio website for Aaron Jay Oliver (aaronjayoliver.com) built as a pnpm monorepo workspace. The project is fully pre-rendered for static hosting on Cloudflare, with no backend infrastructure required. The site features project filtering by tags, fast loading times, and a clean, professional design.

## Development Commands

All commands should be run from the repository root unless specified otherwise:

### Frontend Development
- `pnpm --filter fe run dev` - Start development server
- `pnpm --filter fe run build` - Build for production
- `pnpm --filter fe run preview` - Preview production build
- `pnpm --filter fe run test` - Run tests with Vitest
- `pnpm --filter fe run lint` - Lint code with ESLint and Prettier
- `pnpm --filter fe run format` - Format code with Prettier
- `pnpm --filter fe run check` - Type check with svelte-check
- `pnpm --filter fe run check:watch` - Type check in watch mode

### Root Level
- `pnpm build-fe` - Build frontend from root (convenience script)

## Architecture Overview

### Workspace Structure
- **`fe/`** - SvelteKit frontend application using Svelte 5
- **`pkgs/shared_types/`** - Shared TypeScript types used across packages
- Root `pnpm-workspace.yaml` manages the monorepo structure

### Frontend Architecture (`fe/`)

**Data Management:**
- Static JSON files in `src/lib/data/` (projects.json, tags.json)
- Service layer in `src/lib/services/` for data transformation
- Type-safe interfaces via shared_types package
- No runtime API calls - all data is statically imported

**Key Services:**
- `projectService.ts` - Pure functions for project/tag data transformation
- `imageService.ts` - Handles optimized image imports
- `projectStore.ts` - Svelte 5 runes-based state management for filtering
- `uiStore.ts` - UI state management

**Component Structure:**
- `src/lib/components/ui/` - Reusable UI components (Card, Pill, icons)
- `src/routes/` - SvelteKit pages and layouts
- Uses Svelte 5 runes (`$state`, `$derived`, `$effect`) for reactivity

**Styling:**
- TailwindCSS for utility-first styling
- Custom fonts (Roboto, Roboto Serif) self-hosted in `static/fonts/`
- Responsive design with mobile-first approach

### Build Configuration
- **SvelteKit** with `@sveltejs/adapter-static` for full pre-rendering
- **Vite** for build tooling and development server
- **TypeScript** with strict type checking
- **Vitest** for unit testing
- **ESLint + Prettier** for code quality

## Development Guidelines

### Code Style (from .cursor/rules/)
- Use Svelte 5 runes for reactivity: `$state`, `$derived`, `$effect`
- Standard HTML event attributes instead of Svelte directives (e.g., `onclick={}`)
- TSDoc comments above all functions
- Use `shared_types` package for type definitions
- Files should not exceed 500 lines - refactor if approaching this limit
- Use const for variables that don't need reassignment
- Prefer template literals over string concatenation

### Data Management Patterns
- All data is static JSON transformed through service functions
- Use pure functions in services for data transformation
- Type transformations: `ProjectJson` → `ProjectItem`/`ProjectDetail`
- Tag filtering uses array intersection logic
- Images are optimized via `@sveltejs/enhanced-img`

### State Management
- Use Svelte 5 runes for component state
- Class-based stores for complex state machines
- Reactive filtering implemented in `projectStore.ts`
- UI state separate from data state

## Testing
- Unit tests in `fe/tests/` mirror `src/` structure
- Test services and stores with Vitest
- Focus on data transformation logic and filtering functions

## Important Files
- `fe/src/lib/data/projects.json` - Project data
- `fe/src/lib/data/tags.json` - Technology tag data  
- `fe/src/lib/services/projectService.ts` - Core data transformation logic
- `pkgs/shared_types/index.ts` - TypeScript type definitions
- `fe/svelte.config.js` - SvelteKit configuration with static adapter