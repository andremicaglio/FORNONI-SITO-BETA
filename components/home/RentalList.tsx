"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { rentals } from "@/lib/content";
import { RentalGlyph } from "@/components/icons";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Index-style list of the rental lines; each row floods with signal yellow on hover. */
export function RentalList({ limit }: { limit?: number }) {
  const items = limit ? rentals.slice(0, limit) : rentals;
  return (
    <ul className="border-ink/15 border-t">
      {items.map((r, i) => (
        <motion.li
          key={r.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -5% 0px" }}
          transition={{ duration: 0.7, ease: EASE, delay: (i % 4) * 0.05 }}
          className="border-ink/15 border-b"
        >
          <Link
            href={`/noleggio#${r.slug}`}
            className="group relative grid grid-cols-[3rem_1fr_auto] items-center gap-4 overflow-hidden py-6 md:grid-cols-[4rem_3.5rem_1fr_14rem_auto] md:py-7"
          >
            <span
              aria-hidden
              className="bg-ink absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100"
            />
            <span className="text-ink/40 group-hover:text-signal relative pl-2 text-sm font-semibold transition-colors duration-300 md:pl-4">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-ink group-hover:text-signal relative hidden transition-all duration-500 group-hover:rotate-[-8deg] md:block">
              <RentalGlyph icon={r.icon} size={30} />
            </span>
            <span className="display text-ink group-hover:text-concrete relative text-[clamp(1.5rem,3.2vw,2.75rem)] transition-[color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3">
              {r.short}
            </span>
            <span className="text-ink/55 group-hover:text-concrete/70 relative hidden text-sm transition-colors duration-300 md:block">
              {r.spec}
            </span>
            <span className="border-ink/20 text-ink group-hover:border-signal group-hover:bg-signal relative mr-2 grid size-11 place-items-center border transition-all duration-500 md:mr-4">
              <ArrowRight size={18} className="transition-transform duration-500 group-hover:-rotate-45" />
            </span>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
