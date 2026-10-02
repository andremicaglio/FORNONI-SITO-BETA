export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fornoni.it";

// Versione beta: niente indicizzazione finché non si imposta ALLOW_INDEXING=1 (evita contenuti duplicati con fornoni.it)
export const allowIndexing = process.env.ALLOW_INDEXING === "1";
