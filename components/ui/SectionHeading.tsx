import { Reveal, SplitText } from "@/components/motion";

export function SectionHeading({
  eyebrow,
  title,
  index,
  className,
  tone = "dark",
  align = "left",
}: {
  eyebrow: string;
  title: string;
  index?: string;
  className?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} ${className ?? ""}`}>
      <Reveal
        className={`eyebrow mb-5 flex items-center gap-3 ${align === "center" ? "justify-center" : ""} ${
          tone === "dark" ? "text-signal" : "text-ink/60"
        }`}
      >
        {index && <span className={tone === "dark" ? "text-concrete/40" : "text-ink/40"}>{index}</span>}
        <span className={`h-px w-8 ${tone === "dark" ? "bg-signal" : "bg-ink/40"}`} />
        {eyebrow}
      </Reveal>
      <SplitText
        text={title}
        className={`display text-[clamp(2.5rem,6vw,5.5rem)] ${tone === "dark" ? "text-concrete" : "text-ink"}`}
      />
    </div>
  );
}
