"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { rentals } from "@/lib/content";
import { RentalGlyph } from "@/components/icons";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Sticky index (scroll-spy) on the left, detailed rental cards on the right. */
export function CategoryExplorer() {
  const [active, setActive] = useState(rentals[0].slug);

  useEffect(() => {
    const els = rentals.map((r) => document.getElementById(r.slug)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-20">
      <nav aria-label="Categorie a noleggio" className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
        <p className="eyebrow text-signal mb-6">Parco noleggio</p>
        <ul className="space-y-1">
          {rentals.map((r, i) => (
            <li key={r.slug}>
              <a
                href={`#${r.slug}`}
                className={`group relative flex items-center gap-3 py-2 pl-4 text-sm transition-colors ${
                  active === r.slug ? "text-concrete" : "text-concrete/45 hover:text-concrete/80"
                }`}
              >
                {active === r.slug && (
                  <motion.span
                    layoutId="rental-spy"
                    className="bg-signal absolute inset-y-1 left-0 w-[3px]"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="text-concrete/30 w-6 text-xs tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                {r.short}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-4">
        {rentals.map((r, i) => (
          <motion.article
            key={r.slug}
            id={r.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="group bg-graphite hover:border-signal/60 relative scroll-mt-28 overflow-hidden border border-white/10 p-7 transition-colors duration-500 md:p-10"
          >
            <div
              className="blueprint-grid absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              aria-hidden
            />
            <span
              aria-hidden
              className="display group-hover:text-signal/10 pointer-events-none absolute -top-6 -right-2 text-[9rem] leading-none text-white/[0.04] transition-colors duration-700 md:text-[12rem]"
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="relative grid gap-6 md:grid-cols-[auto_1fr] md:gap-10">
              <div className="bg-signal text-ink grid size-16 place-items-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:-rotate-6 md:size-20">
                <RentalGlyph icon={r.icon} size={36} />
              </div>
              <div>
                {r.spec && (
                  <p className="border-signal/40 text-signal mb-3 inline-block border px-3 py-1 text-xs font-semibold tracking-[0.15em] uppercase">
                    {r.spec}
                  </p>
                )}
                <h3 className="display text-concrete text-3xl md:text-5xl">{r.title}</h3>
                <p className="text-concrete/65 mt-5 max-w-2xl text-lg leading-relaxed">{r.text}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
