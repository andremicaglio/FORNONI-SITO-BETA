"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { MotionConfig } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();
  useEffect(() => {
    if (!window.location.hash) lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);
  return null;
}

export function Providers({ children }: { children: ReactNode }) {
  const [smooth, setSmooth] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setSmooth(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      {/* Lenis sits beside the page, so toggling it never remounts the content */}
      {smooth && (
        <ReactLenis root options={{ lerp: 0.1, anchors: { offset: -96 } }}>
          <ScrollReset />
        </ReactLenis>
      )}
      {children}
    </MotionConfig>
  );
}
