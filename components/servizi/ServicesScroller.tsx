"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { services } from "@/lib/content";
import { SplitText } from "@/components/motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Sticky image that swaps as each service block scrolls into focus. */
export function ServicesScroller() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = services.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(services.findIndex((s) => s.id === e.target.id));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
      <div className="hidden lg:block">
        <div className="bg-graphite sticky top-28 h-[calc(100svh-9rem)] overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={services[active].id}
              className="absolute inset-0"
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.5 } }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.3 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, ease: EASE }}
              >
                <Image src={services[active].image} alt="" fill sizes="50vw" className="object-cover" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <div className="from-ink/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" aria-hidden />
          <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={services[active].kicker}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="display text-concrete text-5xl"
              >
                {services[active].kicker}
              </motion.p>
            </AnimatePresence>
            <p className="font-display text-concrete/70 text-sm tracking-[0.2em]">
              <span className="text-signal">0{active + 1}</span> / 0{services.length}
            </p>
          </div>
        </div>
      </div>

      <div>
        {services.map((s, i) => (
          <article
            key={s.id}
            id={s.id}
            className="scroll-mt-28 border-t border-white/10 py-16 first:border-t-0 first:pt-0 lg:min-h-[80svh] lg:py-24"
          >
            <div className="relative mb-8 aspect-[16/10] overflow-hidden lg:hidden">
              <Image src={s.image} alt="" fill sizes="100vw" className="object-cover" />
            </div>
            <p className="eyebrow text-signal mb-5 flex items-center gap-3">
              <span className="text-concrete/40">0{i + 1}</span>
              <span className="bg-signal h-px w-8" />
              {s.tagline}
            </p>
            <SplitText text={s.title} className="display text-concrete text-[clamp(2.25rem,4.5vw,4.25rem)]" />
            <div className="text-concrete/70 mt-8 space-y-5 text-lg leading-relaxed">
              {s.paragraphs.map((p, j) => (
                <motion.p
                  key={j}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.8, ease: EASE, delay: j * 0.08 }}
                  className={j === 0 ? "text-concrete text-xl" : ""}
                >
                  {p}
                </motion.p>
              ))}
            </div>
            <ul className="mt-10 grid gap-3 sm:grid-cols-3">
              {s.points.map((pt, j) => (
                <motion.li
                  key={pt}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.1 + j * 0.08 }}
                  className="bg-graphite text-concrete/85 flex items-start gap-3 border border-white/10 p-4 text-sm"
                >
                  <Check size={18} className="text-signal mt-0.5 shrink-0" />
                  {pt}
                </motion.li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
