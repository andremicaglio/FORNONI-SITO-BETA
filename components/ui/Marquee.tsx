import type { ReactNode } from "react";

export function Marquee({
  items,
  className,
  duration = 40,
  separator,
  reverse = false,
}: {
  items: ReactNode[];
  className?: string;
  duration?: number;
  separator?: ReactNode;
  reverse?: boolean;
}) {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 whitespace-nowrap md:px-10">{item}</span>
          {separator}
        </span>
      ))}
    </div>
  );

  return (
    <div className={`group flex overflow-hidden ${className ?? ""}`}>
      <div
        className="animate-marquee flex w-max group-hover:[animation-play-state:paused]"
        style={{
          ["--marquee-duration" as string]: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
