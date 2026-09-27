"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { beforeAfter } from "@/lib/content";

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <section className="bg-offwhite py-28 lg:py-36">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <p className="eyebrow">{beforeAfter.eyebrow}</p>
        <h2 className="mt-5 max-w-lg font-display font-bold leading-[1.1] text-ink text-[clamp(1.8rem,3.4vw,2.6rem)]">
          {beforeAfter.heading}
        </h2>

        <div
          ref={containerRef}
          className="relative mx-auto mt-14 aspect-[16/10] w-full max-w-3xl touch-none select-none overflow-hidden rounded-[2px]"
          onMouseDown={() => (dragging.current = true)}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
          onTouchStart={() => (dragging.current = true)}
          onTouchEnd={() => (dragging.current = false)}
          onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
        >
          <Image
            src={beforeAfter.after.src}
            alt={beforeAfter.after.label}
            fill
            sizes="(min-width: 1024px) 60vw, 90vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <Image
              src={beforeAfter.before.src}
              alt={beforeAfter.before.label}
              fill
              sizes="(min-width: 1024px) 60vw, 90vw"
              className="object-cover"
            />
          </div>

          <div
            className="absolute top-0 h-full w-[2px] bg-white"
            style={{ left: `${position}%` }}
          >
            <motion.div
              animate={{ scale: dragging.current ? 1.1 : 1 }}
              className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
            >
              <span className="text-[11px] font-semibold text-deep">↔</span>
            </motion.div>
          </div>

          <span className="absolute left-4 top-4 rounded-[2px] bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest2 text-deep">
            {beforeAfter.before.label}
          </span>
          <span className="absolute right-4 top-4 rounded-[2px] bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest2 text-deep">
            {beforeAfter.after.label}
          </span>
        </div>

        <p className="mx-auto mt-4 max-w-3xl text-center text-xs text-ink/45">
          {beforeAfter.disclaimer}
        </p>
      </div>
    </section>
  );
}
