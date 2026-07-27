# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Publicar en GitHub Pages (estático)

El sitio puede exportarse como HTML estático (prerender de `/` y `sitemap.xml`):

```sh
npm run build:static          # salida en dist/client
PAGES_BASE=/mi-repo/ npm run build:static   # si es un "project page"
```

El workflow `.github/workflows/deploy-pages.yml` hace esto automáticamente en cada push a `main`
y publica `dist/client` en GitHub Pages. Activa Pages en Settings → Pages → Source: GitHub Actions.

Nota: en modo estático no hay servidor (sin server functions ni SSR dinámico).
