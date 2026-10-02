"use client";

import Image from "next/image";
import { motion, useMotionValue, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { gallery } from "@/lib/content";
import { Button } from "@/components/ui/Button";

/** Pinned section: vertical scrolling slides a strip of project photos sideways. */
export function GalleryTrack() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const track = useRef<HTMLDivElement>(null);
  const distance = useMotionValue(0);
  const x = useTransform(() => -scrollYProgress.get() * distance.get());

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const measure = () => distance.set(Math.max(0, el.scrollWidth - window.innerWidth + 32));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [distance]);

  const items = gallery.items.slice(0, 8);

  return (
    <section ref={ref} className="bg-ink relative h-[260vh]" aria-label="Gallery">
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-10 flex w-full max-w-[1400px] items-end justify-between gap-6 px-5 md:px-8">
          <div>
            <p className="eyebrow text-signal mb-5 flex items-center gap-3">
              <span className="text-concrete/40">05</span>
              <span className="bg-signal h-px w-8" />
              Gallery
            </p>
            <h2 className="display text-concrete max-w-3xl text-[clamp(2.25rem,5vw,4.5rem)]">{gallery.title}</h2>
          </div>
          <div className="hidden md:block">
            <Button href="/gallery" variant="outline">
              Vedi tutto
            </Button>
          </div>
        </div>

        <motion.div
          ref={track}
          style={{ x }}
          className="flex w-max gap-4 pl-5 md:gap-6 md:pl-8 lg:pl-[max(2rem,calc((100vw-1400px)/2+2rem))]"
        >
          {items.map((item, i) => (
            <figure
              key={item.src}
              className={`group bg-graphite relative shrink-0 overflow-hidden ${
                i % 3 === 1 ? "h-[52svh] w-[68vw] md:w-[30vw]" : "h-[44svh] w-[78vw] self-end md:w-[38vw]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 40vw, 80vw"
                className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              <figcaption className="from-ink text-concrete absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t to-transparent p-5 text-sm transition-transform duration-500 group-hover:translate-y-0">
                {item.alt}
              </figcaption>
            </figure>
          ))}
        </motion.div>

        <div className="mx-auto mt-10 w-full max-w-[1400px] px-5 md:px-8">
          <div className="h-px w-full bg-white/10">
            <motion.div style={{ scaleX: scrollYProgress }} className="bg-signal h-px origin-left" />
          </div>
        </div>
      </div>
    </section>
  );
}
