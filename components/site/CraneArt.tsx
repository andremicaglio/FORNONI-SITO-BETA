"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.65, 0, 0.35, 1] as const;

/** Line-art tower crane: draws itself on view, then the trolley travels and the load sways. */
export function CraneArt({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  const draw = (delay: number) => ({
    hidden: { pathLength: 0, opacity: 0 },
    show: { pathLength: 1, opacity: 1, transition: { duration: 1.4, ease: EASE, delay } },
  });

  const lattice = (x1: number, x2: number, yTop: number, yBot: number, step: number) => {
    let d = "";
    for (let x = x1, up = true; x < x2; x += step, up = !up) {
      d += `M${x} ${up ? yBot : yTop} L${Math.min(x + step, x2)} ${up ? yTop : yBot} `;
    }
    return d;
  };

  const mastLattice = (() => {
    let d = "";
    for (let y = 92, left = true; y < 400; y += 22, left = !left) {
      d += `M${left ? 120 : 150} ${y} L${left ? 150 : 120} ${Math.min(y + 22, 400)} `;
    }
    return d;
  })();

  return (
    <motion.svg
      viewBox="0 0 400 420"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      aria-hidden
    >
      {/* base + mast */}
      <motion.path variants={draw(0)} d="M96 410 H174 M104 400 H166" />
      <motion.path variants={draw(0.1)} d="M120 400 V92 M150 400 V92" />
      <motion.path variants={draw(0.4)} d={mastLattice} strokeWidth={1.25} opacity={0.7} />
      {/* cab + peak */}
      <motion.path variants={draw(0.7)} d="M112 92 V70 H158 V92 Z M118 76 H132 V86 H118 Z" />
      <motion.path variants={draw(0.8)} d="M120 70 L135 18 L150 70" />
      {/* jib */}
      <motion.path variants={draw(0.9)} d="M158 72 H392 M158 92 H392 L392 72" />
      <motion.path variants={draw(1.2)} d={lattice(158, 392, 72, 92, 20)} strokeWidth={1.25} opacity={0.7} />
      {/* counter-jib + counterweight */}
      <motion.path variants={draw(1)} d="M112 72 H30 M112 86 H30 L30 72" />
      <motion.path variants={draw(1.2)} d="M36 86 V116 H72 V86" className="text-signal" stroke="currentColor" />
      {/* tie cables */}
      <motion.path variants={draw(1.3)} d="M135 18 L392 72 M135 18 L30 72" strokeWidth={1} opacity={0.55} />

      {/* trolley + hook + load */}
      <motion.g variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 1.8, duration: 0.6 } } }}>
        <motion.g
          animate={reduce ? undefined : { x: [0, 150, 150, 0, 0] }}
          transition={{ duration: 12, ease: EASE, repeat: Infinity, times: [0, 0.35, 0.5, 0.85, 1], delay: 2.2 }}
        >
          <rect x={200} y={92} width={22} height={8} className="fill-signal" stroke="none" />
          <motion.g
            style={{ originX: "211px", originY: "100px" }}
            animate={reduce ? undefined : { rotate: [0, 3, -2.5, 1.5, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          >
            <path d="M206 100 V230 M216 100 V230" strokeWidth={1.25} />
            <path d="M211 230 v10 a6 6 0 1 1 -6 6" className="text-signal" stroke="currentColor" strokeWidth={2.5} />
            <path d="M205 252 L186 272 M217 252 L236 272" strokeWidth={1.25} opacity={0.8} />
            <rect x={180} y={272} width={62} height={30} className="text-signal" stroke="currentColor" />
            <path
              d="M180 287 H242 M201 272 V302 M221 272 V302"
              className="text-signal"
              stroke="currentColor"
              strokeWidth={1}
            />
          </motion.g>
        </motion.g>
      </motion.g>
    </motion.svg>
  );
}
