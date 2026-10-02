import Image from "next/image";
import { Download } from "lucide-react";
import { HeroAnchor, HeroSlider } from "@/components/home/HeroSlider";
import { Pillars } from "@/components/home/Pillars";
import { RentalList } from "@/components/home/RentalList";
import { Process } from "@/components/home/Process";
import { GalleryTrack } from "@/components/home/GalleryTrack";
import { Counter, Curtain, Parallax, Reveal, SplitText, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { about, company, images, offer, stats } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <HeroAnchor />

      {/* 01 — Servizi in breve */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-36">
        <div className="mb-14 grid items-end gap-8 md:mb-20 lg:grid-cols-[1.4fr_1fr]">
          <SectionHeading index="01" eyebrow="Cosa facciamo" title="Tutto per il tuo cantiere, in un unico partner" />
          <Reveal delay={0.1}>
            <p className="text-concrete/65 max-w-md text-lg leading-relaxed lg:ml-auto">
              Noleggio, consulenza tecnica, progettazione, installazione ed assistenza: un unico interlocutore che segue
              il cantiere dalla scelta del prodotto alla manutenzione.
            </p>
          </Reveal>
        </div>
        <Pillars />
      </section>

      {/* 02 — Chi siamo */}
      <section className="bg-concrete text-ink relative overflow-hidden">
        <div className="blueprint-grid-dark absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-[1400px] gap-16 px-5 py-24 md:px-8 md:py-36 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeading
              index="02"
              eyebrow={about.title}
              title="Sessant'anni di cantieri, energia giovane"
              tone="light"
            />
            <div className="text-ink/75 mt-10 space-y-6 text-lg leading-relaxed">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className={i === 0 ? "text-ink text-2xl leading-snug font-medium" : ""}>{p}</p>
                </Reveal>
              ))}
            </div>
            <Stagger className="mt-10 flex flex-wrap gap-2" stagger={0.06}>
              {about.values.map((v) => (
                <StaggerItem key={v}>
                  <span className="border-ink/20 inline-block border px-4 py-2 text-sm font-semibold tracking-wide uppercase">
                    {v}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div className="relative grid grid-cols-5 grid-rows-[auto_auto] gap-4">
            <Curtain className="col-span-5 aspect-[4/3] md:col-span-4">
              <Parallax className="h-full w-full" distance={50}>
                <Image
                  src={images.home3}
                  alt="Parco macchine Fornoni Rental Solutions"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </Parallax>
            </Curtain>
            <Curtain
              className="border-concrete col-span-3 col-start-3 -mt-24 aspect-square border-8 md:-mt-32"
              delay={0.25}
            >
              <Image
                src={images.home1}
                alt="Lavori realizzati da Fornoni Rental Solutions"
                fill
                sizes="(min-width: 1024px) 25vw, 60vw"
                className="object-cover"
              />
            </Curtain>
            <Reveal delay={0.4} className="col-span-2 col-start-1 row-start-2 self-center">
              <p className="display text-ink text-7xl md:text-8xl">
                <Counter value={60} suffix="+" />
              </p>
              <p className="text-ink/60 mt-2 text-sm font-semibold tracking-wide uppercase">anni di esperienza</p>
            </Reveal>
          </div>
        </div>

        <div className="border-ink/10 bg-sand relative border-y py-5">
          <Marquee
            duration={35}
            className="display text-ink/70 text-2xl md:text-3xl"
            items={["Noleggio", "Consulenza tecnica", "Progettazione", "Installazione", "Assistenza"]}
            separator={<span className="bg-signal size-2 rotate-45" aria-hidden />}
          />
        </div>

        {/* numeri */}
        <div className="bg-ink/10 relative mx-auto grid max-w-[1400px] grid-cols-2 gap-px lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-concrete px-5 py-12 md:px-8 md:py-16">
              <p className="display text-ink text-6xl md:text-7xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-ink/60 mt-3 max-w-[16rem] text-sm">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 03 — Noleggio */}
      <section className="bg-sand text-ink">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-36">
          <div className="mb-14 grid items-end gap-8 md:mb-20 lg:grid-cols-[1.4fr_1fr]">
            <SectionHeading
              index="03"
              eyebrow={offer.title}
              title="Un parco noleggio in continua evoluzione"
              tone="light"
            />
            <Reveal delay={0.1} className="text-ink/70 space-y-4 text-lg leading-relaxed lg:ml-auto lg:max-w-md">
              {offer.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
          </div>
          <RentalList limit={6} />
          <Reveal className="mt-12 flex flex-wrap gap-3">
            <Button href="/noleggio" variant="signal">
              Tutto il parco noleggio
            </Button>
            <Button href={company.catalogUrl} variant="outline-dark" icon={<Download size={16} />}>
              Scarica il catalogo
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 04 — Come lo facciamo */}
      <section className="bg-ink relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-36">
          <Process />
        </div>
      </section>

      {/* 05 — Gallery */}
      <GalleryTrack />

      {/* claim */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <SplitText
          text="Dalla scelta del prodotto, alla messa in opera, alla manutenzione."
          className="display text-concrete/90 max-w-5xl text-[clamp(2.25rem,5.5vw,5rem)]"
          stagger={0.04}
        />
      </section>
    </>
  );
}
