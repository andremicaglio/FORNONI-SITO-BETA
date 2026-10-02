"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, CircleCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { company } from "@/lib/content";

const topics = ["Noleggio", "Consulenza tecnica", "Progettazione e installazione", "Assistenza tecnica", "Altro"];

const field =
  "peer w-full border-0 border-b border-white/20 bg-transparent px-0 pt-6 pb-3 text-lg text-concrete placeholder-transparent transition-colors focus:border-signal focus:ring-0 focus:outline-none";
const label =
  "pointer-events-none absolute top-0 left-0 text-xs font-semibold tracking-[0.15em] text-concrete/50 uppercase transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:tracking-[0.15em] peer-focus:text-signal peer-focus:uppercase";

/**
 * Il sito originale non espone un endpoint per il modulo: la richiesta viene
 * composta e aperta nel client di posta dell'utente, indirizzata a info@fornoni.it.
 */
export function ContactForm() {
  const [topic, setTopic] = useState(topics[0]);
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const lines = [
      `Nome: ${get("nome")}`,
      get("azienda") ? `Azienda: ${get("azienda")}` : null,
      `Email: ${get("email")}`,
      get("telefono") ? `Telefono: ${get("telefono")}` : null,
      `Richiesta: ${topic}`,
    ].filter(Boolean);
    const body = `${lines.join("\n")}\n\n${get("messaggio")}`;
    const subject = `Richiesta ${topic} — ${get("nome")}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="border-signal/40 bg-graphite flex flex-col items-start gap-6 border p-10"
          >
            <CircleCheck size={48} className="text-signal" />
            <p className="display text-concrete text-4xl">Ci siamo quasi!</p>
            <p className="text-concrete/70 max-w-md">
              Abbiamo preparato la tua richiesta nel programma di posta: inviala e ti ricontatteremo al più presto. Se
              non si è aperto nulla, scrivici a{" "}
              <a href={`mailto:${company.email}`} className="text-signal underline underline-offset-4">
                {company.email}
              </a>{" "}
              o chiama il{" "}
              <a href={company.phoneHref} className="text-signal underline underline-offset-4">
                {company.phoneDisplay}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="text-concrete/60 hover:text-concrete text-sm underline underline-offset-4"
            >
              Compila una nuova richiesta
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <fieldset>
              <legend className="text-concrete/50 mb-4 text-xs font-semibold tracking-[0.15em] uppercase">
                Di cosa hai bisogno?
              </legend>
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => (
                  <label key={t} className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="argomento"
                      value={t}
                      checked={topic === t}
                      onChange={() => setTopic(t)}
                      className="peer sr-only"
                    />
                    <span className="peer-checked:border-signal peer-checked:text-ink peer-focus-visible:outline-signal relative z-10 block border border-white/20 px-4 py-2.5 text-sm transition-colors peer-focus-visible:outline-2 hover:border-white/50">
                      {topic === t && (
                        <motion.span
                          layoutId="topic-pill"
                          className="bg-signal absolute inset-0 -z-10"
                          transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        />
                      )}
                      {t}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-8 sm:grid-cols-2">
              {[
                { name: "nome", label: "Nome e cognome", type: "text", required: true, auto: "name" },
                { name: "azienda", label: "Azienda", type: "text", required: false, auto: "organization" },
                { name: "email", label: "Email", type: "email", required: true, auto: "email" },
                { name: "telefono", label: "Telefono", type: "tel", required: false, auto: "tel" },
              ].map((f) => (
                <div key={f.name} className="relative">
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    required={f.required}
                    autoComplete={f.auto}
                    placeholder={f.label}
                    className={field}
                  />
                  <label htmlFor={f.name} className={label}>
                    {f.label}
                    {f.required && " *"}
                  </label>
                </div>
              ))}
            </div>

            <div className="relative">
              <textarea
                id="messaggio"
                name="messaggio"
                required
                rows={4}
                placeholder="Messaggio"
                className={`${field} resize-none`}
              />
              <label htmlFor="messaggio" className={label}>
                Descrivi il tuo cantiere *
              </label>
            </div>

            <label className="text-concrete/60 flex items-start gap-3 text-sm">
              <input type="checkbox" required className="accent-signal mt-1 size-4" />
              <span>
                Ho letto l&apos;
                <a
                  href={company.privacyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-concrete underline underline-offset-4"
                >
                  informativa privacy
                </a>{" "}
                e acconsento al trattamento dei dati per essere ricontattato.
              </span>
            </label>

            <button
              type="submit"
              className="group bg-signal text-ink hover:bg-concrete inline-flex items-center gap-4 px-8 py-5 text-sm font-semibold tracking-wide uppercase transition-colors"
            >
              Invia la richiesta
              <ArrowUpRight
                size={18}
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
