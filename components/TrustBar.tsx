"use client";

import { motion } from "framer-motion";
import { trustStrip } from "@/lib/content";

export default function TrustBar() {
  return (
    <section className="border-y border-deep/10 bg-white">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-7 lg:justify-between lg:px-10">
        {trustStrip.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-[12px] font-medium uppercase tracking-widest2 text-ink/55"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
