# Fornoni Rental Solutions — nuovo sito (beta)

Redesign di [fornoni.it](https://www.fornoni.it) con gli stessi contenuti (noleggio, servizi, gallery, contatti),
riorganizzati in un sito più moderno e animato. Deploy su Vercel.

## Stack

- **Next.js 16** (App Router, pagine statiche) + **React 19**
- **Tailwind CSS 4** per lo stile
- **Motion** per le animazioni, **Lenis** per lo scroll fluido
- Font self-hosted via Fontsource (Archivo per i titoli, Inter Tight per il testo)

## Sviluppo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build di produzione
npm run lint     # controllo TypeScript
npm run format   # Prettier
```

## Struttura

- `lib/content.ts` — tutti i testi, i contatti e le immagini ripresi da fornoni.it: è il file da modificare per
  aggiornare i contenuti.
- `app/` — pagine: `/`, `/noleggio`, `/servizi`, `/gallery`, `/contatti` (stessi percorsi del sito attuale).
- `components/` — componenti condivisi (`site/`), animazioni (`motion.tsx`) e sezioni per pagina.

## Note

- Le foto e il catalogo PDF sono caricati dal CDN già usato da fornoni.it (`d3e7ilti5q92ri.cloudfront.net`), passando
  per l'ottimizzazione immagini di Next.js.
- Il modulo contatti apre il programma di posta con la richiesta già compilata verso `info@fornoni.it` (nessun backend).
- Essendo una beta, il sito è `noindex`. Per il lancio impostare su Vercel `ALLOW_INDEXING=1` e, se serve,
  `NEXT_PUBLIC_SITE_URL` con il dominio definitivo.
- Le animazioni rispettano l'impostazione di sistema "riduci movimento".
