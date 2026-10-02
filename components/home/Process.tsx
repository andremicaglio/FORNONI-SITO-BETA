"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { process } from "@/lib/content";
import { Reveal, SplitText } from "@/components/motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
      <div className="lg:sticky lg:top-32 lg:self-start">
        <Reveal className="eyebrow text-signal mb-5 flex items-center gap-3">
          <span className="text-concrete/40">04</span>
          <span className="bg-signal h-px w-8" />
          Metodo
        </Reveal>
        <SplitText text={process.title} className="display text-concrete text-[clamp(2.5rem,6vw,5.5rem)]" />
        <Reveal delay={0.15}>
          <p className="text-concrete/70 mt-8 max-w-md text-lg leading-relaxed">{process.intro}</p>
        </Reveal>
      </div>

      <div ref={ref} className="relative pl-14 md:pl-20">
        <span aria-hidden className="absolute top-2 bottom-2 left-5 w-px bg-white/10 md:left-7" />
        <motion.span
          aria-hidden
          style={{ scaleY: line }}
          className="bg-signal absolute top-2 bottom-2 left-5 w-px origin-top md:left-7"
        />
        <ol className="space-y-16">
          {process.steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{ duration: 0.9, ease: EASE }}
              className="relative"
            >
              <motion.span
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
                className="bg-signal text-ink absolute top-0 -left-14 grid size-10 place-items-center text-sm font-bold md:-left-20 md:size-14 md:text-base"
              >
                0{i + 1}
              </motion.span>
              <h3 className="display text-concrete text-4xl md:text-6xl">{step.title}</h3>
              <p className="text-concrete/65 mt-4 max-w-lg text-lg leading-relaxed">{step.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}
