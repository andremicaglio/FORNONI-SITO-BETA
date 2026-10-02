"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, nav } from "@/lib/content";
import { Logo } from "./Logo";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/icons";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Header() {
  const pathname = usePathname();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 320 && y > prev && !open);
  });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || open
            ? "bg-ink/80 border-b border-white/10 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 md:px-8">
          <Link href="/" aria-label="Fornoni Rental Solutions — Home" className="relative z-10">
            <Logo />
          </Link>

          <nav aria-label="Principale" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive(item.href) ? "text-concrete" : "text-concrete/60 hover:text-concrete"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="bg-signal absolute inset-x-4 -bottom-0.5 h-0.5"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={company.phoneHref}
              className="group bg-signal text-ink hover:bg-concrete hidden items-center gap-2 px-5 py-3 text-sm font-semibold transition-colors sm:flex"
            >
              <Phone size={16} className="transition-transform duration-500 group-hover:rotate-[20deg]" />
              {company.phoneDisplay}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Chiudi menu" : "Apri menu"}
              className="text-concrete relative z-10 grid size-12 place-items-center border border-white/15 lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {open ? <X size={22} /> : <Menu size={22} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
        <motion.div aria-hidden style={{ scaleX: progress }} className="bg-signal h-[2px] origin-left" />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="blueprint-grid bg-graphite fixed inset-0 z-40 flex flex-col px-5 pt-28 pb-10 lg:hidden"
            data-lenis-prevent
          >
            <nav aria-label="Menu mobile" className="flex flex-col">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: EASE }}
                  className="border-b border-white/10"
                >
                  <Link
                    href={item.href}
                    className={`display flex items-baseline justify-between py-4 text-5xl ${
                      isActive(item.href) ? "text-signal" : "text-concrete"
                    }`}
                  >
                    {item.label}
                    <span className="text-fog font-sans text-sm font-normal">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="text-concrete/70 mt-auto space-y-4 text-sm"
            >
              <a
                href={company.phoneHref}
                className="bg-signal text-ink flex items-center gap-3 px-5 py-4 font-semibold"
              >
                <Phone size={18} /> Chiama ora · {company.phoneDisplay}
              </a>
              <p>
                {company.street} — {company.postalCode} {company.city} ({company.province})
              </p>
              <div className="flex gap-4">
                <a href={company.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FacebookIcon size={20} />
                </a>
                <a href={company.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <InstagramIcon size={20} />
                </a>
                <a href={company.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
