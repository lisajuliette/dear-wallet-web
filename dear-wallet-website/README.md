# Dear Wallet · website

A static marketing site for Dear Wallet (iPhone and Android): plain HTML and CSS with a few lines of JavaScript. No build step and no framework, so it can be hosted anywhere (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## Pages

| File | URL | What it is |
|---|---|---|
| `index.html` | `/` | Landing page: hero with a Home screen preview, how it works, features, sticker shelf, the no-shame promise, privacy summary, FAQ, download |
| `support.html` | `/support` | Contact, getting started, moving to a new phone, export and delete, app lock, rewards. Use this as the **Support URL** in App Store Connect and the Google Play Console |
| `privacy.html` | `/privacy` | Privacy policy (GDPR). Use this as the **Privacy Policy URL** in both stores. Google Play also asks for an account deletion URL: use `/support#data` |
| `terms.html` | `/terms` | Terms of use |
| `404.html` | any missing page | "this page said nvm" |

## Files

| Path | What it is |
|---|---|
| `assets/css/site.css` | All styles. Light mode uses the Cloud Candy palette, dark mode uses Midnight CD |
| `assets/js/site.js` | Footer year, the copy-email button and the light/dark switch |
| `assets/img/` | Logo mark and the sticker SVGs used on the pages |
| `favicon.svg`, `favicon.ico` | Coin-with-heart favicon. The SVG switches its outline for dark browser tabs; the ICO holds 16, 32 and 48 px |
| `apple-touch-icon.png` | 180 px, from the Cloud Candy app icon |
| `icon-192.png`, `icon-512.png`, `site.webmanifest` | Android and PWA icons |
| `og-image.png` | 1200 × 630 share image for links in messages and social posts |
| `robots.txt`, `sitemap.xml` | Search engine files |

## Fill in before launch

Everything below is marked on the pages with a yellow dashed highlight (class `todo`), or set at the top of the generator.

1. **Domain:** `https://dearwallet.app` is a placeholder. It appears in canonical links, Open Graph tags, `robots.txt` and `sitemap.xml`.
2. **Support email:** `hello@dearwallet.app` is a placeholder (privacy, terms, support pages).
3. **Company details** in privacy and terms: legal name (currently Arcane Encode, please confirm), legal form, KvK number, registered address, and the court city in terms.
4. **Supabase region** in the privacy policy (choose an EU region, such as Frankfurt) and the backup retention days.
5. **Store links:** the App Store and Google Play buttons point to `#download` (`APP_STORE` and `PLAY_STORE` at the top of the generator). Replace them with the real store URLs at launch.
6. **Store badges:** the store buttons are styled text. Apple and Google both require their official badges ("Download on the App Store", "Get it on Google Play") when you link to their stores, so swap them in from Apple's and Google's marketing resources at launch.
7. **Pricing:** the site doesn't mention price. Add it to the FAQ once decided.
8. **Remove the highlight:** when every placeholder is filled, delete the `.todo` rule styling or the spans.

Have the privacy policy and terms checked by someone qualified before launch. They're written for the app as specced (no analytics, Supabase sync, Sign in with Apple, local notifications), so update them if the app changes, for example if you add analytics or crash reporting.

## Light and dark mode

The site follows the visitor's system setting until they tap the switch in the top right (a moon in light mode, a sun in dark mode). Their choice is saved in the browser (`localStorage` key `dw-theme`) and applied before the page paints, so there's no flash on the next visit.

## Hosting notes

- **Clean URLs:** links use `privacy.html` so the site works anywhere, including opened from disk. Netlify, Vercel and Cloudflare Pages also serve `/privacy`, which is what the sitemap and canonical tags use.
- **404:** Netlify, Cloudflare Pages and GitHub Pages use `404.html` automatically. On Vercel add `"cleanUrls": true` to `vercel.json`; it picks up `404.html` as well.
- **Fonts** load from Google Fonts. To self-host instead, download Pacifico, Nunito (600 to 900) and Pixelify Sans (500, 600) and replace the `<link>` in each page head.

## Editing

Pages share one header, footer and head. They were generated from a small template, so if you edit by hand, change the header and footer in all five pages. To rebuild the site in Next.js with Tailwind, use the prompt in `CURSOR_PROMPT.md`.
