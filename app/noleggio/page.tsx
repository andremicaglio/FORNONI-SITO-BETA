import type { Metadata } from "next";
import Image from "next/image";
import { Download, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { CategoryExplorer } from "@/components/noleggio/CategoryExplorer";
import { Curtain, Parallax, Reveal, SplitText } from "@/components/motion";
import { Button } from "@/components/ui/Button";
import { company, images, rentalIntro } from "@/lib/content";

export const metadata: Metadata = {
  title: "Noleggio macchinari edili",
  description:
    "Gru a torre e per centri storici, ponteggi, casseformi, montacarichi, parapetti, moduli prefabbricati, sollevatori, gruppi elettrogeni e attrezzature da cantiere a noleggio a Chiari (BS).",
  alternates: { canonical: "/noleggio" },
};

export default function NoleggioPage() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="Noleggio"
        title="Il parco macchine per ogni cantiere"
        intro={rentalIntro.paragraphs[0]}
        image={images.testataNoleggio}
      />

      <section className="bg-concrete text-ink">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal className="eyebrow text-ink/60 mb-5 flex items-center gap-3">
              <span className="bg-ink/40 h-px w-8" />
              Perché noleggiare
            </Reveal>
            <SplitText text={rentalIntro.title} className="display text-[clamp(2.5rem,6vw,5.5rem)]" />
            <div className="text-ink/75 mt-10 space-y-6 text-lg leading-relaxed">
              {rentalIntro.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2} className="border-signal mt-10 border-l-4 pl-6">
              <p className="display text-2xl md:text-3xl">{rentalIntro.claim}</p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Curtain className="aspect-[3/4]">
              <Parallax className="h-full w-full" distance={40}>
                <Image
                  src={images.noleggio2}
                  alt="Macchinario a noleggio in cantiere"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </Parallax>
            </Curtain>
            <Curtain className="mt-16 aspect-[3/4]" delay={0.2}>
              <Parallax className="h-full w-full" distance={40}>
                <Image
                  src={images.noleggio1b}
                  alt="Attrezzature pronte per il cantiere"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </Parallax>
            </Curtain>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <CategoryExplorer />
      </section>

      <section className="bg-graphite border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-5 py-20 md:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow text-signal mb-4">Catalogo 2024</p>
            <SplitText
              text="Scarica il catalogo e scopri tanti altri prodotti"
              className="display text-concrete max-w-3xl text-[clamp(2rem,4.5vw,4rem)]"
            />
          </div>
          <Reveal delay={0.15} className="flex flex-wrap gap-3">
            <Button href={company.catalogUrl} icon={<Download size={16} />}>
              Scarica il catalogo
            </Button>
            <Button href={company.phoneHref} variant="outline" icon={<Phone size={16} />}>
              Chiama ora
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
