import type { SVGProps } from "react";
import {
  ArrowUpFromLine,
  BrickWall,
  Castle,
  Container,
  Drill,
  Fence,
  Forklift,
  Hammer,
  Truck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { RentalIcon } from "@/lib/content";

type IconProps = SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number };

function base({ size = 24, strokeWidth = 1.75, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...rest,
  };
}

export function CraneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 22V4" />
      <path d="M9 22V4" />
      <path d="M6 8l3-2M6 12l3-2M6 16l3-2M6 20l3-2" />
      <path d="M3 4h19" />
      <path d="M7.5 4L10 1.5 12.5 4" />
      <path d="M18 4v6" />
      <path d="M16.5 10h3l-1.5 2.5z" />
      <path d="M3 4v2.5h2" />
      <path d="M4 22h7" />
    </svg>
  );
}

export function ScaffoldIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 2v20M12 2v20M20 2v20" />
      <path d="M4 7h16M4 13h16M4 19h16" />
      <path d="M4 7l8 6M12 7l8 6M4 13l8 6M12 13l8 6" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base({ ...props, strokeWidth: 0 })} fill="currentColor">
      <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6H17V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.5v3.2h2.8V22h3.2z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...base({ ...props, strokeWidth: 0 })} fill="currentColor">
      <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3.25a1.96 1.96 0 100 3.92 1.96 1.96 0 000-3.92zM20.44 13.4c0-3.1-1.65-4.55-3.86-4.55-1.78 0-2.58.98-3.02 1.67V8.5h-3.38c.04.95 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.69.13-.93.27-.69.9-1.4 1.95-1.4 1.38 0 1.93 1.05 1.93 2.6V20h3.38l-.51-6.6z" />
    </svg>
  );
}

const lucideMap: Partial<Record<RentalIcon, LucideIcon>> = {
  castle: Castle,
  formwork: BrickWall,
  hoist: ArrowUpFromLine,
  fence: Fence,
  concrete: Truck,
  container: Container,
  forklift: Forklift,
  power: Zap,
  drill: Drill,
  tools: Hammer,
};

export function RentalGlyph({ icon, size = 28, className }: { icon: RentalIcon; size?: number; className?: string }) {
  if (icon === "crane") return <CraneIcon size={size} className={className} />;
  if (icon === "scaffold") return <ScaffoldIcon size={size} className={className} />;
  const Icon = lucideMap[icon] ?? Hammer;
  return <Icon size={size} strokeWidth={1.75} className={className} aria-hidden />;
}
