# PiceConsole

A modern SvelteKit application with TypeScript, Tailwind CSS, and Azure Static Web Apps deployment configuration.

## Features

- ⚡ **SvelteKit** - Fast, modern web framework
- 🏷️ **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- ☁️ **Azure Static Web Apps** - Ready for deployment
- 🧩 **Component-based** - Modular architecture
- 📱 **Responsive** - Mobile-first design

## Project Structure

```
PiceConsole/
├── src/
│   ├── lib/
│   │   ├── components/     # Reusable Svelte components
│   │   ├── types/         # TypeScript type definitions
│   │   └── utils/         # Utility functions
│   ├── routes/            # SvelteKit routes
│   ├── app.css           # Global styles with Tailwind
│   └── app.d.ts          # TypeScript declarations
├── static/               # Static assets
├── .github/workflows/    # GitHub Actions for Azure deployment
├── tailwind.config.js    # Tailwind CSS configuration
├── svelte.config.js      # SvelteKit configuration
└── vite.config.js        # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PiceConsole
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run TypeScript and Svelte checks
- `npm run check:watch` - Run checks in watch mode

## Deployment

### Azure Static Web Apps

This project is configured for Azure Static Web Apps deployment:

1. Fork this repository to your GitHub account
2. Create a new Azure Static Web App resource
3. Connect it to your GitHub repository
4. The GitHub Action will automatically deploy on push to main branch

The deployment configuration is in `.github/workflows/azure-static-web-apps.yml`.

### Manual Deployment

For other deployment targets:

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` directory to your hosting provider

## Configuration

### Tailwind CSS

Tailwind is configured in `tailwind.config.js` with:
- Content paths for purging unused styles
- Custom theme extensions
- Plugin integrations (@tailwindcss/forms, @tailwindcss/typography)

### SvelteKit

SvelteKit is configured in `svelte.config.js` with:
- Static adapter for static site generation
- Vite preprocessing for enhanced development experience

## Development

### Adding Components

Create new components in `src/lib/components/`:

```svelte
<!-- src/lib/components/MyComponent.svelte -->
<script lang="ts">
  export let title: string;
</script>

<div class="p-4 bg-blue-100 rounded">
  <h2 class="text-xl font-bold">{title}</h2>
</div>
```

### Adding Routes

Create new routes in `src/routes/`:

```svelte
<!-- src/routes/contact/+page.svelte -->
<svelte:head>
  <title>Contact - PiceConsole</title>
</svelte:head>

<h1>Contact Us</h1>
```

### TypeScript Types

Add type definitions in `src/lib/types/`:

```typescript
// src/lib/types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run type checking: `npm run check`
5. Build the project: `npm run build`
6. Submit a pull request

## License

This project is licensed under the ISC License.