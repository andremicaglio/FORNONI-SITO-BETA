"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { gallery } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function GalleryGrid() {
  const items = gallery.items;
  const [open, setOpen] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const step = useCallback(
    (dir: number) => setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, step]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {items.map((item, i) => (
          <motion.button
            key={item.src}
            type="button"
            onClick={() => setOpen(i)}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -5% 0px" }}
            transition={{ duration: 0.9, ease: EASE, delay: (i % 3) * 0.1 }}
            className="group bg-graphite relative block w-full break-inside-avoid overflow-hidden text-left"
            aria-label={`Apri immagine: ${item.alt}`}
          >
            <motion.div layoutId={`photo-${i}`} className="relative" style={{ aspectRatio: `${item.w} / ${item.h}` }}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
            </motion.div>
            <span
              className="bg-ink/0 group-hover:bg-ink/40 absolute inset-0 transition-colors duration-500"
              aria-hidden
            />
            <span className="bg-signal text-ink absolute top-4 right-4 grid size-11 scale-50 place-items-center opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
              <Expand size={18} />
            </span>
            <span className="text-concrete absolute inset-x-0 bottom-0 translate-y-4 p-5 text-sm opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {item.alt}
            </span>
          </motion.button>
        ))}
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open !== null && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={items[open].alt}
                className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                data-lenis-prevent
              >
                <button
                  type="button"
                  aria-label="Chiudi"
                  className="bg-ink/95 absolute inset-0 backdrop-blur-sm"
                  onClick={() => setOpen(null)}
                />
                <motion.div
                  layoutId={`photo-${open}`}
                  className="relative"
                  style={{
                    aspectRatio: `${items[open].w} / ${items[open].h}`,
                    width: `min(100%, 72rem, calc(85svh * ${items[open].w / items[open].h}))`,
                  }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <Image
                    src={items[open].src}
                    alt={items[open].alt}
                    fill
                    sizes="90vw"
                    className="object-contain"
                    priority
                  />
                </motion.div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-4 md:p-8">
                  <p className="text-concrete/70 text-sm">
                    <span className="text-signal">{String(open + 1).padStart(2, "0")}</span> / {items.length} —{" "}
                    {items[open].alt}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(null)}
                  aria-label="Chiudi"
                  className="bg-signal text-ink absolute top-4 right-4 grid size-12 place-items-center md:top-8 md:right-8"
                >
                  <X size={22} />
                </button>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Immagine precedente"
                  className="bg-ink/60 text-concrete hover:border-signal hover:text-signal absolute top-1/2 left-2 grid size-12 -translate-y-1/2 place-items-center border border-white/20 transition-colors md:left-8"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Immagine successiva"
                  className="bg-ink/60 text-concrete hover:border-signal hover:text-signal absolute top-1/2 right-2 grid size-12 -translate-y-1/2 place-items-center border border-white/20 transition-colors md:right-8"
                >
                  <ChevronRight size={22} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
