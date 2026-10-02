import type { Metadata } from "next";
import { Headset, PencilRuler, Wrench } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ServicesScroller } from "@/components/servizi/ServicesScroller";
import { Stagger, StaggerItem } from "@/components/motion";
import { images, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Servizi per l'edilizia",
  description:
    "Consulenza tecnica, progettazione e installazione, assistenza tecnica con officine mobili: i servizi Fornoni Rental Solutions per le imprese edili.",
  alternates: { canonical: "/servizi" },
};

const icons = [Headset, PencilRuler, Wrench];

export default function ServiziPage() {
  return (
    <>
      <PageHero
        index="02"
        eyebrow="Servizi"
        title="Consulenza, progettazione, assistenza"
        intro="Dall'idea alla realizzazione con precisione e sicurezza: al tuo fianco prima, durante e dopo il noleggio."
        image={images.testata}
      />

      <section className="bg-graphite border-b border-white/10">
        <Stagger className="mx-auto grid max-w-[1400px] md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group relative flex h-full flex-col gap-6 overflow-hidden border-white/10 px-5 py-10 md:border-r md:px-8 md:last:border-r-0"
                >
                  <span
                    aria-hidden
                    className="bg-signal absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                  />
                  <span className="relative flex items-center justify-between">
                    <Icon size={32} strokeWidth={1.5} className="text-signal group-hover:text-ink transition-colors" />
                    <span className="text-concrete/40 group-hover:text-ink/60 text-xs font-semibold tracking-[0.2em]">
                      0{i + 1}
                    </span>
                  </span>
                  <span className="relative">
                    <span className="display text-concrete group-hover:text-ink block text-4xl transition-colors">
                      {s.kicker}
                    </span>
                    <span className="text-concrete/60 group-hover:text-ink/75 mt-2 block transition-colors">
                      {s.tagline}
                    </span>
                  </span>
                </a>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <ServicesScroller />
      </section>
    </>
  );
}
