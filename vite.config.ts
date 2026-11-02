import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Statische Ausgabe: alle Seiten werden beim Build als fertiges HTML vorgerendert
// (Netlify braucht dann keinen Server).
export default defineConfig({
  nitro: false,
  tanstackStart: {
    prerender: { enabled: true, crawlLinks: true },
    pages: [{ path: "/" }, { path: "/impressum" }, { path: "/datenschutz" }],
  },
});
