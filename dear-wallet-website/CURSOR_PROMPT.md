# Cursor prompt · Dear Wallet website in Next.js + Tailwind

Paste the prompt below into Cursor's Agent chat with this folder open (or copied into the new repo as `design/`). It rebuilds the static site in this folder as a Next.js app with Tailwind CSS, keeping the design, copy and behaviour identical.

The phases at the end are for when you want to go step by step: paste one phase per chat, check it in the browser, then commit.

---

## The prompt

```
You're rebuilding the Dear Wallet marketing website as a Next.js app with Tailwind CSS. The finished design already exists as a static site in this folder: index.html, support.html, privacy.html, terms.html, 404.html, assets/css/site.css, assets/js/site.js, the favicon files, og-image.png, site.webmanifest, robots.txt and sitemap.xml. Treat those files as the source of truth for layout, spacing, colours, type, copy and behaviour. The result must look and behave the same at every width, in light and dark mode. Read README.md in this folder too.

Dear Wallet is a soft Y2K money diary app for iPhone and Android. The site's look comes from the app: grid-paper background, retro windows with checker title bars, hard offset shadows (no blur), Pacifico for headings, Nunito for text, Pixelify Sans for labels and numbers.

## Stack
- Next.js (latest stable, App Router, TypeScript strict, src/ directory). Create it with create-next-app and the Tailwind option.
- Tailwind CSS v4 with the CSS-first config (@theme in globals.css). No tailwind.config.js unless something truly needs it.
- next/font/google for Pacifico, Nunito (600, 700, 800, 900) and Pixelify Sans (500, 600), exposed as CSS variables and Tailwind font families (font-script, font-sans, font-pixel).
- next-themes for light/dark, with attribute="data-theme", defaultTheme="system", enableSystem, storageKey="dw-theme", disableTransitionOnChange.
- No other UI libraries. No analytics, no cookies, no tracking scripts.
- Fully static: every page is statically rendered. Add `output: "export"` only if I ask for a static export; otherwise keep the default so it deploys to Vercel.

## Design tokens
Port the CSS custom properties from assets/css/site.css exactly. Light values on :root (Cloud Candy palette), dark values on [data-theme="dark"] (Midnight CD palette). Register them in @theme so they work as Tailwind utilities:
- colors: bg1, bg2, c1, c2, c3, c4, c5, surface, outline, ink, ink-soft, btn, btn-ink, grid, shadow, check, todo
- radius: window 20px, card 22px
- shadow: window 0 5px 0 var(--shadow), button 0 4px 0 var(--shadow), small 0 3px 0 var(--shadow)
- container: 1120px content column with the same side padding (16px on phones, 32px from 720px, both respecting safe-area insets)
Add a custom variant so `dark:` follows the attribute: @custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));
Never hard-code a hex colour in a component. The only exceptions are the phone mockup screen, the recap CD card, the faceplate swatches and the holo gradient, which show the app's own fixed colours in both themes (they're fixed in site.css too).
Port the grid-paper body background, the checker title bar (repeating-conic-gradient), the diary page lines and the pixel bullet as utilities or small @layer components classes. Keep everything else as Tailwind utilities in the JSX.

## Structure
src/app/
  layout.tsx            fonts, ThemeProvider, Header, Footer, metadata defaults, viewport themeColor for light and dark
  page.tsx              landing page
  support/page.tsx
  privacy/page.tsx
  terms/page.tsx
  not-found.tsx         the 404 design
  sitemap.ts, robots.ts, manifest.ts   generated from one site config (replace the static files)
  icon.svg, favicon.ico, apple-icon.png, opengraph-image.png   copied from this folder using Next's file conventions
src/components/
  Header.tsx            sticky pill nav, brand, section links (hidden under 860px), "get the app", ThemeToggle
  ThemeToggle.tsx       client component, see Behaviour
  Footer.tsx
  RetroWindow.tsx       props: title, tint (a colour token name), dots (0 to 3), holo, children
  Button.tsx            variants: primary, ghost; renders a Next Link for internal links and an <a> for external ones
  StoreButtons.tsx      App Store + Google Play buttons
  Chip.tsx, SectionHead.tsx, Step.tsx, PhoneMockup.tsx, DiaryPage.tsx, Faceplates.tsx, RecapCard.tsx, GoalBar.tsx, StickerShelf.tsx, Faq.tsx, PrivacyList.tsx, DocLayout.tsx (sticky table of contents + document window for the legal and support pages), Todo.tsx (the yellow placeholder highlight), CopyButton.tsx (client component)
src/content/
  site.ts               SITE_URL, SUPPORT_EMAIL, COMPANY, APP_STORE_URL, PLAY_STORE_URL, LAST_UPDATED. Every page reads these; nothing is repeated in JSX.
  faq.ts, privacy.tsx, terms.tsx, support.tsx   page copy, so text edits don't touch layout
public/stickers/        the sticker SVGs from assets/img/stickers
public/logo-mark.svg

Copy every word from the HTML files exactly, including lowercase headings, "nvm", "u" and "ur", the ♡ characters, and the placeholder highlights (render them with <Todo>). Don't rewrite, shorten or "improve" the copy. Use the same section ids (how, features, privacy, faq, download) so the header links keep working, and the same heading ids on the legal pages.

## Behaviour
- ThemeToggle: a 44 x 44 round button at the top right of the header. In light mode it shows the moon icon (switch to dark); in dark mode it shows the sun icon (switch to light). Use the two SVGs from index.html. aria-label and title read "Switch to dark mode" / "Switch to light mode". Avoid the hydration mismatch: render a same-size placeholder until mounted, or show/hide both icons with CSS using the data-theme attribute.
- The theme follows the system until the visitor taps the toggle, then their choice persists (next-themes handles this with storageKey dw-theme). No flash of the wrong theme on load.
- Header is sticky with top: env(safe-area-inset-top), and a fixed band painted above it on notched phones, as in site.css.
- FAQ uses <details>/<summary> with the + / – marker.
- CopyButton copies the support email, shows "copied ♡" for 1.6 s, and falls back to selecting the address if the clipboard is unavailable.
- Footer year comes from the build date.
- Sticker shelf scrolls slowly in a loop and pauses on hover; floating hero stickers bob gently. Both stop under prefers-reduced-motion (the shelf becomes horizontally scrollable instead).
- Buttons lift on hover and press down on click; no transforms under prefers-reduced-motion.

## Metadata and SEO
- Per-page title and description exactly as in each HTML <head>. Title template "%s · Dear Wallet", with the home page title "Dear Wallet".
- metadataBase from SITE_URL, canonical URLs without .html, Open Graph and Twitter card using opengraph-image.png (1200 x 630).
- themeColor in the viewport export: #F6CDEB for light, #1C1838 for dark.
- sitemap.ts lists /, /support, /privacy, /terms. robots.ts allows everything and points to the sitemap.
- manifest.ts matches site.webmanifest.

## Images and accessibility
- Use next/image for stickers and the logo, with explicit width and height and alt="" for decorative ones (as in the HTML). The phone mockup and floating stickers are aria-hidden.
- Keep every aria-label, every heading level and the skip-free reading order from the HTML.
- Visible focus ring: 3px outline in the outline colour, 3px offset.
- All tap targets at least 44 x 44 px.

## Quality
- ESLint (next/core-web-vitals) and Prettier with prettier-plugin-tailwindcss. Scripts: dev, build, start, lint, typecheck, format.
- npm run build must pass with no type or lint errors and no hydration warnings in the console.
- Lighthouse on the home page: Performance 95+, Accessibility 100, Best Practices 100, SEO 100.
- No horizontal scroll at 320, 375, 390, 768, 1024 and 1280 px.

## Done when
- Side by side with the static site at 390 px and 1280 px, in light and dark mode, every page matches: same sections, copy, colours, spacing, fonts, shadows and placeholder highlights.
- The theme toggle shows the moon in light mode and the sun in dark mode, switches instantly, persists across pages and reloads, and starts from the system setting on a first visit.
- /does-not-exist shows the 404 design with the header and footer.
- Changing SUPPORT_EMAIL or SITE_URL in src/content/site.ts updates every page, the sitemap and the metadata.

Work in phases (scaffold and tokens, layout and components, landing page, legal and support pages, metadata, QA). Show me your plan first and wait for my go. After each phase, run lint, typecheck and build, fix every error properly, and commit with a Conventional Commit message (for example "feat(site): add landing page"). Don't commit .env files or build output.
```

---

## Phase by phase (optional)

Paste the main prompt first and tell Cursor to only plan. Then send these one at a time. After each, check the page in the browser, then ask Cursor to commit.

1. **Scaffold and tokens:** "Do phase 1: create the Next.js app, Tailwind v4 theme with every token in light and dark, the fonts, next-themes with the ThemeToggle, and the body background. Show me a test page with a few token swatches, the three fonts and the toggle working."
2. **Layout and shared components:** "Do phase 2: Header, Footer, RetroWindow, Button, StoreButtons, Chip, SectionHead, Todo, CopyButton and DocLayout, matching site.css. Add them to the test page."
3. **Landing page:** "Do phase 3: build the landing page section by section from index.html: hero with PhoneMockup and floating stickers, how it works, features bento, sticker shelf, promises, privacy window, FAQ, download. Compare it with index.html at 390 and 1280 px in both themes and fix every difference."
4. **Support, privacy, terms and 404:** "Do phase 4: build support, privacy and terms with DocLayout and the content files, and not-found.tsx. Keep every heading id and placeholder highlight."
5. **Metadata:** "Do phase 5: metadata for every page, sitemap.ts, robots.ts, manifest.ts and the icon and opengraph files. Delete the test page."
6. **QA:** "Do phase 6: check every page at 320, 375, 390, 768, 1024 and 1280 px in light and dark, run Lighthouse on the home page, check keyboard navigation and reduced motion, and fix what you find. Then give me a short list of what's left to fill in before launch, from README.md."

Commit after each phase: "Run lint, typecheck and build. Fix any errors properly. Then stage this phase's files and commit with a Conventional Commit message, and push."
