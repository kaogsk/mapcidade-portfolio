# MapCidade — Systems Portfolio

> Portfolio site (Next.js, bilingual EN/PT) presenting 6 anonymized system reconstructions and 3 generalized production-AI case studies. Fictional data throughout — "MapCidade" is not a real place, and no employer, client, or city is named.

## English

### Stack

Next.js 16 (App Router), React 19, TypeScript. No CSS framework — hand-written design system in `app/globals.css` (dark, terminal/systems-status aesthetic: JetBrains Mono for UI chrome, Newsreader serif for editorial copy, amber/green accent pair).

### Structure

- `lib/content.ts` — all copy and project data, both languages, one object
- `app/page.tsx` — single page, client-side language toggle (no routing needed)
- `app/globals.css` — design system (tokens, HUD-style cards, layout)

### How to run

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Português

### Stack

Next.js 16 (App Router), React 19, TypeScript. Sem framework CSS — design system escrito à mão em `app/globals.css` (estética escura, terminal/status de sistema: JetBrains Mono pro chrome da UI, Newsreader serifada pro texto editorial, par de cores âmbar/verde).

### Estrutura

- `lib/content.ts` — todo o conteúdo e os dados dos projetos, nos dois idiomas, num objeto só
- `app/page.tsx` — página única, alternância de idioma no client (sem necessidade de roteamento)
- `app/globals.css` — design system (tokens, cards estilo HUD, layout)

### Como rodar

```bash
npm install
npm run dev
# abrir http://localhost:3000
```

## License

MIT
