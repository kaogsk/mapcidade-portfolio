# MapCidade — Systems Portfolio

Portfolio site (Next.js, bilingual EN/PT) presenting 6 anonymized system reconstructions and 3 generalized production-AI case studies. Fictional data throughout — "MapCidade" is not a real place, and no employer, client, or city is named.

## Stack

Next.js 16 (App Router), React 19, TypeScript. No CSS framework — hand-written design system in `app/globals.css` (dark, terminal/systems-status aesthetic: JetBrains Mono for UI chrome, Newsreader serif for editorial copy, amber/green accent pair).

## Structure

- `lib/content.ts` — all copy and project data, both languages, one object
- `app/page.tsx` — single page, client-side language toggle (no routing needed)
- `app/globals.css` — design system (tokens, HUD-style cards, layout)

## How to run

```bash
npm install
npm run dev
# open http://localhost:3000
```

## License

MIT
