"use client";

import { motion } from "framer-motion";
import { whyDentex } from "@/lib/content";

export default function WhyDentex() {
  return (
    <section id="why-dentex" className="bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Why Dentex</p>
            <h2 className="mt-5 font-display font-bold leading-[1.05] text-ink text-[clamp(2rem,4vw,3rem)]">
              A practice built on four principles.
            </h2>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-4">
          {whyDentex.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="border-t border-deep/15 pt-6"
            >
              <span className="font-display text-xs font-semibold text-aqua">
                {item.index}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
