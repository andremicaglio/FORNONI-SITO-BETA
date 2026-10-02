"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { company, heroSlides } from "@/lib/content";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;
const DURATION = 7000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const go = useCallback((i: number) => setIndex((i + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => go(index + 1), DURATION);
    return () => clearTimeout(t);
  }, [index, paused, reduce, go]);

  const slide = heroSlides[index];

  return (
    <section
      ref={ref}
      className="bg-ink relative h-svh min-h-[640px] overflow-hidden"
      aria-roledescription="carousel"
      aria-label="In evidenza"
      onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <motion.div style={{ y: mediaY }} className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.image}
            className="absolute inset-0"
            initial={{ clipPath: "inset(0 0 0 100%)" }}
            animate={{ clipPath: "inset(0 0 0 0%)" }}
            exit={{ opacity: 0.4, transition: { duration: 1.2, delay: 0.4 } }}
            transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.25 }}
              animate={{ scale: 1.04 }}
              transition={{ duration: DURATION / 1000 + 2, ease: "linear" }}
            >
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                quality={75}
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="from-ink/90 via-ink/55 to-ink/10 absolute inset-0 bg-gradient-to-r" aria-hidden />
      <div className="from-ink to-ink/50 absolute inset-0 bg-gradient-to-t via-transparent" aria-hidden />
      <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-36 md:px-8 md:pb-40"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
          className="eyebrow text-signal mb-6 flex items-center gap-3"
        >
          <span className="bg-signal h-px w-10" />
          Chiari (BS) · da oltre 60 anni
        </motion.p>

        <h1 className="sr-only">Fornoni Rental Solutions — noleggio e consulenza tecnica per l&apos;edilizia</h1>
        <div className="relative min-h-[2.2em] text-[clamp(3rem,9vw,8.5rem)]">
          <AnimatePresence mode="wait">
            <motion.p
              key={slide.title}
              className="display text-concrete max-w-[14ch]"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
                exit: { transition: { staggerChildren: 0.03 } },
              }}
            >
              {slide.title.split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[0.06em] align-bottom">
                  <motion.span
                    className="inline-block"
                    variants={{
                      hidden: { y: "105%" },
                      show: { y: "0%", transition: { duration: 0.9, ease: EASE } },
                      exit: { y: "-105%", transition: { duration: 0.45, ease: [0.7, 0, 0.84, 0] } },
                    }}
                  >
                    {word}&nbsp;
                  </motion.span>
                </span>
              ))}
            </motion.p>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={slide.subtitle}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.7, ease: EASE } }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.3 } }}
            className="text-concrete/80 mt-6 max-w-lg text-lg md:text-xl"
          >
            {slide.subtitle}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Button href={slide.href}>Scopri di più</Button>
          <Button href={company.catalogUrl} variant="outline" icon={<Download size={16} />}>
            Scarica il catalogo
          </Button>
        </motion.div>
      </motion.div>

      {/* slide controls */}
      <div className="bg-ink/40 absolute inset-x-0 bottom-0 border-t border-white/10 backdrop-blur-md">
        <div className="mx-auto grid max-w-[1400px] grid-cols-3 md:grid-cols-[1fr_1fr_1fr_auto]">
          {heroSlides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => go(i)}
              aria-label={`Vai alla slide ${i + 1}: ${s.title}`}
              aria-current={i === index}
              className="group relative px-5 py-5 text-left md:px-8"
            >
              <span className="absolute inset-x-0 top-0 h-[2px] bg-white/10">
                {i === index && (
                  <motion.span
                    key={`${index}-${paused}`}
                    className="bg-signal absolute inset-y-0 left-0"
                    initial={{ width: paused || reduce ? "100%" : "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: paused || reduce ? 0 : DURATION / 1000, ease: "linear" }}
                  />
                )}
              </span>
              <span
                className={`block text-xs font-semibold tracking-[0.2em] transition-colors ${
                  i === index ? "text-signal" : "text-concrete/40 group-hover:text-concrete/70"
                }`}
              >
                0{i + 1}
              </span>
              <span
                className={`mt-1 hidden text-sm transition-colors md:block ${
                  i === index ? "text-concrete" : "text-concrete/40 group-hover:text-concrete/70"
                }`}
              >
                {s.title}
              </span>
            </button>
          ))}
          <a
            href="#scopri"
            className="text-concrete/60 hover:text-signal hidden items-center gap-3 border-l border-white/10 px-8 text-xs tracking-[0.2em] uppercase transition-colors md:flex"
          >
            Scorri
            <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
              <ArrowDown size={16} />
            </motion.span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function HeroAnchor() {
  return <span id="scopri" className="block scroll-mt-20" />;
}
