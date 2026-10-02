import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "signal" | "light" | "outline" | "outline-dark";

const styles: Record<Variant, string> = {
  signal: "bg-signal text-ink hover:bg-concrete",
  light: "bg-concrete text-ink hover:bg-signal",
  outline: "border border-white/25 text-concrete hover:border-signal hover:text-signal",
  "outline-dark": "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-concrete",
};

export function Button({
  href,
  children,
  variant = "signal",
  icon = true,
  className,
  external,
  download,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: boolean | ReactNode;
  className?: string;
  external?: boolean;
  download?: boolean;
}) {
  const cls = `group/btn relative inline-flex items-center gap-3 overflow-hidden px-6 py-4 text-sm font-semibold tracking-wide uppercase transition-colors duration-300 ${styles[variant]} ${className ?? ""}`;
  const content = (
    <>
      <span>{children}</span>
      {icon === true ? (
        <span className="relative grid size-5 place-items-center overflow-hidden">
          <ArrowUpRight
            size={18}
            className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-5 group-hover/btn:-translate-y-5"
          />
          <ArrowUpRight
            size={18}
            className="absolute -translate-x-5 translate-y-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-0 group-hover/btn:translate-y-0"
          />
        </span>
      ) : (
        icon || null
      )}
    </>
  );

  const isExternal = external || /^(https?:|tel:|mailto:)/.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
        {...(download ? { download: "" } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
