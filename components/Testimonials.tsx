"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  return (
    <section className="bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <p className="eyebrow text-center">Patient Voices</p>

        <div className="mx-auto mt-10 min-h-[220px] max-w-2xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
            >
              <p className="font-display text-2xl font-medium leading-snug text-ink lg:text-[2rem]">
                "{current.quote}"
              </p>
              <p className="mt-6 text-[13px] uppercase tracking-widest2 text-ink/45">
                {current.name} — {current.treatment}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-deep" : "w-1.5 bg-deep/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
