import { Button } from "@/components/ui/Button";
import { CraneArt } from "@/components/site/CraneArt";

export default function NotFound() {
  return (
    <section className="blueprint-grid mx-auto flex min-h-svh max-w-[1400px] flex-col items-center justify-center gap-10 px-5 pt-28 pb-20 text-center md:px-8">
      <CraneArt className="text-concrete/70 w-56" />
      <div>
        <p className="eyebrow text-signal mb-4">Errore 404</p>
        <h1 className="display text-concrete text-[clamp(3rem,9vw,7rem)]">Cantiere non trovato</h1>
        <p className="text-concrete/60 mx-auto mt-6 max-w-md">
          La pagina che cerchi è stata spostata o non esiste più.
        </p>
      </div>
      <Button href="/">Torna alla home</Button>
    </section>
  );
}
