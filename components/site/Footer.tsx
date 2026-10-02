import Link from "next/link";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { company, nav, rentals } from "@/lib/content";
import { Logo } from "./Logo";
import { CraneArt } from "./CraneArt";
import { Magnetic, Reveal, SplitText } from "@/components/motion";
import { Marquee } from "@/components/ui/Marquee";
import { Button } from "@/components/ui/Button";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/icons";

function CtaBand() {
  return (
    <section className="bg-signal text-ink relative overflow-hidden">
      <div className="hazard-stripes animate-hazard h-3" aria-hidden />
      <div className="mx-auto grid max-w-[1400px] items-end gap-10 px-5 pt-16 pb-0 md:px-8 lg:grid-cols-[1.4fr_1fr] lg:pt-24">
        <div className="pb-16 lg:pb-24">
          <p className="eyebrow text-ink/70 mb-6">Parliamone</p>
          <SplitText
            as="h2"
            text="Trova la soluzione giusta per il tuo cantiere!"
            className="display text-[clamp(2.75rem,7vw,6.5rem)]"
          />
          <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-4">
            <Magnetic>
              <a
                href={company.phoneHref}
                className="group bg-ink text-concrete hover:bg-graphite inline-flex items-center gap-4 px-7 py-5 transition-colors"
              >
                <span className="bg-signal text-ink grid size-10 place-items-center transition-transform duration-500 group-hover:rotate-12">
                  <Phone size={18} />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-concrete/60 text-xs tracking-[0.2em] uppercase">Chiama ora</span>
                  <span className="display text-2xl">{company.phoneDisplay}</span>
                </span>
              </a>
            </Magnetic>
            <Button href="/contatti" variant="outline-dark" className="self-stretch">
              Scrivici
            </Button>
          </Reveal>
        </div>
        <CraneArt className="text-ink mx-auto -mb-2 w-full max-w-[420px]" />
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <CtaBand />
      <div className="bg-graphite text-concrete/40 border-y border-white/10 py-6">
        <Marquee
          duration={60}
          className="display text-3xl md:text-4xl"
          items={rentals.map((r) => r.short)}
          separator={<span className="bg-signal size-2 rotate-45" aria-hidden />}
        />
      </div>
      <div className="blueprint-grid bg-ink">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 md:grid-cols-2 md:px-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="space-y-6">
            <Logo />
            <p className="text-concrete/60 max-w-xs text-sm leading-relaxed">
              Da oltre sessant&apos;anni noleggio, consulenza tecnica, progettazione, installazione ed assistenza per
              l&apos;edilizia.
            </p>
            <Button href={company.catalogUrl} variant="outline" icon={<Download size={16} />}>
              Catalogo 2024
            </Button>
          </div>

          <div>
            <p className="eyebrow text-signal mb-6">Sitemap</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group text-concrete/70 hover:text-concrete inline-flex items-center transition-colors"
                  >
                    <span className="bg-signal mr-0 h-px w-0 transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-signal mb-6">Contatti</p>
            <ul className="text-concrete/70 space-y-4 text-sm">
              <li>
                <a href={company.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-concrete flex gap-3">
                  <MapPin size={18} className="text-signal mt-0.5 shrink-0" />
                  <span>
                    {company.street}
                    <br />
                    {company.postalCode} {company.city} ({company.province})
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-concrete flex gap-3">
                  <Mail size={18} className="text-signal shrink-0" />
                  {company.email}
                </a>
              </li>
              <li>
                <a href={company.phoneHref} className="hover:text-concrete flex gap-3">
                  <Phone size={18} className="text-signal shrink-0" />
                  {company.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-signal mb-6">Social</p>
            <div className="flex gap-3">
              {[
                { href: company.social.facebook, label: "Facebook", Icon: FacebookIcon },
                { href: company.social.instagram, label: "Instagram", Icon: InstagramIcon },
                { href: company.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-concrete/70 hover:border-signal hover:bg-signal hover:text-ink grid size-12 place-items-center border border-white/15 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="text-concrete/40 mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-6 text-xs md:flex-row md:items-center md:justify-between md:px-8">
            <p>
              © {year} FORNONI SRL · P.IVA {company.vat} · REA {company.rea} · Ufficio Registro Imprese di{" "}
              {company.registry} · Cap. Soc. {company.shareCapital}
            </p>
            <div className="flex gap-6">
              <a href={company.privacyUrl} target="_blank" rel="noreferrer" className="hover:text-concrete">
                Privacy Policy
              </a>
              <a href={company.cookieUrl} target="_blank" rel="noreferrer" className="hover:text-concrete">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
