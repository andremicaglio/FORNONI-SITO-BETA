import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { gallery, images } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery — progetti e macchinari in azione",
  description:
    "Esperienza e innovazione nei nostri lavori: gru, ponteggi e attrezzature Fornoni al servizio del tuo cantiere.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero index="03" eyebrow="Gallery" title={gallery.title} intro={gallery.subtitle} image={images.gallery9} />
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <GalleryGrid />
      </section>
    </>
  );
}
