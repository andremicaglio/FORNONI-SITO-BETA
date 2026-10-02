"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { pillars } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Four service pillars. Desktop: horizontal accordion that opens on hover/focus. */
export function Pillars() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3 lg:h-[560px] lg:flex-row">
      {pillars.map((p, i) => {
        const open = active === i;
        return (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.9, ease: EASE, delay: i * 0.08 }}
            onPointerEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            className={`bg-graphite relative min-h-[340px] overflow-hidden transition-[flex-grow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:min-h-0 ${
              open ? "lg:grow-[2.4]" : "lg:grow"
            } lg:basis-0`}
          >
            <Link href={p.href} className="group absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <Image
                src={p.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className={`object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "scale-100 opacity-70 lg:opacity-60" : "scale-110 opacity-70 lg:opacity-25 lg:grayscale"
                }`}
              />
              <div className="from-ink via-ink/40 absolute inset-0 bg-gradient-to-t to-transparent" aria-hidden />

              <span className="display text-concrete/15 absolute top-6 left-6 text-6xl md:top-8 md:left-8">
                0{i + 1}
              </span>
              <span
                className={`absolute top-6 right-6 grid size-12 place-items-center transition-colors duration-500 md:top-8 md:right-8 ${
                  open ? "bg-signal text-ink" : "text-concrete bg-white/10"
                }`}
              >
                <ArrowUpRight size={20} className={`transition-transform duration-500 ${open ? "" : "rotate-45"}`} />
              </span>

              <div className="relative">
                <h3
                  className={`display text-concrete text-4xl break-words transition-[font-size] duration-700 md:text-5xl ${
                    open ? "" : "lg:text-[1.6rem]"
                  }`}
                >
                  {p.title}
                </h3>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[1fr] opacity-100 lg:grid-rows-[0fr] lg:opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-concrete/75 mt-4 max-w-md">{p.text}</p>
                    <span className="text-signal mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                      Scopri di più
                      <span className="bg-signal h-px w-8 transition-all duration-500 group-hover:w-14" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
