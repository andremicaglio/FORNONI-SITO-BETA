import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contatti/ContactForm";
import { Reveal, SplitText, Stagger, StaggerItem } from "@/components/motion";
import { company, images } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contatti",
  description: `Fornoni Rental Solutions — ${company.street}, ${company.postalCode} ${company.city} (${company.province}). Tel. ${company.phoneDisplay}, ${company.email}.`,
  alternates: { canonical: "/contatti" },
};

const cards = [
  { label: "Telefono", value: company.phoneDisplay, href: company.phoneHref, Icon: Phone, hint: "Chiama ora" },
  { label: "Email", value: company.email, href: `mailto:${company.email}`, Icon: Mail, hint: "Scrivici" },
  {
    label: "Indirizzo",
    value: `${company.street} — ${company.postalCode} ${company.city} (${company.province})`,
    href: company.mapsUrl,
    Icon: MapPin,
    hint: "Indicazioni stradali",
  },
];

export default function ContattiPage() {
  return (
    <>
      <PageHero
        index="04"
        eyebrow="Contatti"
        title="Hai domande? Siamo a tua disposizione"
        intro="Contattaci per ogni tua esigenza: troveremo insieme la soluzione giusta per il tuo cantiere."
        image={images.slider2}
      />

      <section className="bg-graphite border-b border-white/10">
        <Stagger className="mx-auto grid max-w-[1400px] md:grid-cols-3">
          {cards.map(({ label, value, href, Icon, hint }) => (
            <StaggerItem key={label}>
              <a
                href={href}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group relative flex h-full flex-col gap-8 overflow-hidden border-white/10 px-5 py-10 md:border-r md:px-8 md:py-14 md:last:border-r-0"
              >
                <span
                  aria-hidden
                  className="bg-signal absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
                />
                <span className="border-signal/50 text-signal group-hover:border-ink group-hover:text-ink relative grid size-14 place-items-center border transition-colors">
                  <Icon size={24} />
                </span>
                <span className="relative">
                  <span className="text-concrete/50 group-hover:text-ink/60 block text-xs font-semibold tracking-[0.2em] uppercase transition-colors">
                    {label}
                  </span>
                  <span className="display text-concrete group-hover:text-ink mt-2 block text-2xl break-words transition-colors md:text-3xl">
                    {value}
                  </span>
                  <span className="text-signal group-hover:text-ink mt-4 inline-block text-sm transition-colors">
                    {hint} →
                  </span>
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-16 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <div>
          <Reveal className="eyebrow text-signal mb-5 flex items-center gap-3">
            <span className="bg-signal h-px w-8" />
            Compila il modulo
          </Reveal>
          <SplitText text="Inviaci la tua richiesta" className="display text-concrete text-[clamp(2.5rem,6vw,5rem)]" />
          <Reveal delay={0.15}>
            <p className="text-concrete/65 mt-8 max-w-md text-lg leading-relaxed">
              Raccontaci di cosa ha bisogno il tuo cantiere: un consulente tecnico del noleggio ti ricontatterà per
              individuare la soluzione più adatta e una mirata offerta economica.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>

      <section className="relative h-[60svh] min-h-[420px] overflow-hidden border-t border-white/10">
        <iframe
          title={`Mappa — ${company.name}, ${company.street}, ${company.city}`}
          src={`https://www.google.com/maps?q=${company.geo.lat},${company.geo.lng}&z=15&output=embed`}
          className="absolute inset-0 h-full w-full [filter:grayscale(1)_invert(0.92)_contrast(0.9)]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div
          className="from-ink/60 pointer-events-none absolute inset-0 bg-gradient-to-b via-transparent to-transparent"
          aria-hidden
        />
        <Reveal className="bg-ink absolute top-8 left-5 max-w-sm p-6 md:left-8">
          <p className="eyebrow text-signal mb-3">Dove siamo</p>
          <p className="display text-concrete text-3xl">{company.legalName}</p>
          <p className="text-concrete/70 mt-2">
            {company.street}
            <br />
            {company.postalCode} {company.city} ({company.province})
          </p>
          <a
            href={company.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="text-signal pointer-events-auto mt-4 inline-block text-sm underline underline-offset-4"
          >
            Apri in Google Maps
          </a>
        </Reveal>
      </section>
    </>
  );
}
