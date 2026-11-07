# Dear Wallet · website

Marketing site for Dear Wallet, rebuilt as a Next.js App Router app with Tailwind CSS v4. The original static HTML lives in `dear-wallet-website/` as the design source of truth.

## Develop

```bash
npm install
npm run dev
```

## Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |
| `npm run format` | Prettier |

## Fill in before launch

Placeholders are highlighted with yellow dashed `<Todo>` marks on the pages, and central values live in `src/content/site.ts`.

1. **Domain:** `SITE_URL` (currently `https://dearwallet.app`)
2. **Support email:** `SUPPORT_EMAIL`
3. **Company details** in privacy and terms: legal form, KvK, address, court city
4. **Supabase region** and backup retention days in the privacy policy
5. **Store links:** `APP_STORE_URL` and `PLAY_STORE_URL`
6. **Store badges:** swap styled text buttons for official badges at launch
7. **Pricing:** add to the FAQ once decided
8. **Remove Todo highlights** when every placeholder is filled
