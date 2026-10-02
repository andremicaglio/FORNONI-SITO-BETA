import { CraneIcon } from "@/components/icons";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <span className="bg-signal text-ink grid size-10 place-items-center">
        <CraneIcon size={24} strokeWidth={2} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.45rem] font-extrabold tracking-tight uppercase [font-stretch:80%]">
          Fornoni
        </span>
        <span className="text-[0.6rem] font-semibold tracking-[0.32em] text-current/60 uppercase">
          Rental Solutions
        </span>
      </span>
    </span>
  );
}
