"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SplitText } from "@/components/motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  index,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  index: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="bg-ink relative flex min-h-[78svh] items-end overflow-hidden pt-32 pb-16 md:pb-24">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: EASE }}
          className="absolute inset-0"
        >
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
        </motion.div>
      </motion.div>
      <div className="from-ink via-ink/70 to-ink/30 absolute inset-0 bg-gradient-to-t" aria-hidden />
      <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden />

      <motion.div style={{ opacity: fade }} className="relative mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          className="eyebrow text-signal mb-6 flex items-center gap-3"
        >
          <span className="text-concrete/50">{index}</span>
          <span className="bg-signal h-px w-10" />
          {eyebrow}
        </motion.p>
        <SplitText
          as="h1"
          text={title}
          animateOnMount
          delay={0.35}
          className="display text-concrete max-w-5xl text-[clamp(3.25rem,10vw,9rem)]"
        />
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.8 }}
            className="text-concrete/75 mt-8 max-w-xl text-lg leading-relaxed"
          >
            {intro}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
