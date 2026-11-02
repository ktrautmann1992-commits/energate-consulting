# egc-energie.de

Website von EGC Energie (Karsten Trautmann, Waldmohr).

- Inhalte: `src/lib/content.ts`, Impressum/Datenschutz: `src/routes/`
- Build: `npm ci && npm run build` → statische Seiten in `dist/client`
- Jeder Push auf `main` veröffentlicht automatisch auf Netlify (Workflow `.github/workflows/deploy.yml`, Secret `NETLIFY_AUTH_TOKEN`).
- Alte Website (vor dem Redesign): Netlify-Deploy `6a6cb519f1643e4d57b1d450` – bei Bedarf in Netlify unter Deploys wieder veröffentlichen.
