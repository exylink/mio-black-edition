// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static export (GitHub Pages) is opt-in: STATIC_EXPORT=1 npm run build
const isStaticExport = process.env.STATIC_EXPORT === "1";
// For project pages (user.github.io/repo) set PAGES_BASE=/repo/
const base = process.env.PAGES_BASE ?? "/";

export default defineConfig({
  vite: {
    base,
  },
  ...(isStaticExport ? { nitro: { preset: "static" as const } } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this (skipped for the static export).
    ...(isStaticExport ? {} : { server: { entry: "server" } }),
    ...(isStaticExport
      ? {
          prerender: { enabled: true, crawlLinks: true },
          pages: [{ path: "/" }, { path: "/sitemap.xml" }],
        }
      : {}),
  },
});
