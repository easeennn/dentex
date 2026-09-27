"use client";

import { motion } from "framer-motion";
import { finalCta } from "@/lib/content";

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-dark py-28 text-white lg:py-36">
      <div className="mx-auto max-w-content px-6 text-center lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl font-display font-bold leading-[1.05] text-[clamp(2.2rem,5vw,3.6rem)]"
        >
          {finalCta.heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-md text-[16px] text-white/70"
        >
          {finalCta.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[2px] bg-white px-8 py-4 text-[12px] font-semibold uppercase tracking-widest2 text-deep transition-colors hover:bg-mint"
          >
            {finalCta.primaryCta}
          </a>
          <a
            href="mailto:hello@dentex.example"
            className="inline-flex items-center gap-2 border-b border-white/30 py-4 text-[12px] font-semibold uppercase tracking-widest2 text-white transition-colors hover:border-white"
          >
            {finalCta.secondaryCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
