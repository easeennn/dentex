"use client";

import { motion } from "framer-motion";
import { journey } from "@/lib/content";

export default function PatientJourney() {
  return (
    <section className="bg-light py-28 lg:py-36">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <p className="eyebrow">The Experience</p>
        <h2 className="mt-5 max-w-lg font-display font-bold leading-[1.1] text-ink text-[clamp(1.9rem,3.6vw,2.8rem)]">
          From your first visit to your new smile.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-3">
          {journey.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative"
            >
              {i < journey.length - 1 && (
                <div className="absolute right-[-1.25rem] top-3 hidden h-px w-10 bg-deep/20 lg:block" />
              )}
              <span className="font-display text-sm font-semibold text-deep">
                {step.index}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink/60">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
