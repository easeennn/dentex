"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="bg-white py-28 lg:py-36">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="lg:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            {about.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display font-bold leading-[1.05] text-ink text-[clamp(2rem,4vw,3.2rem)]"
          >
            {about.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h2>
        </div>

        <div className="lg:col-span-5 lg:col-start-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-md text-[17px] leading-relaxed text-ink/70"
          >
            {about.body}
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            href="#services"
            className="btn-secondary mt-8 inline-block"
          >
            {about.cta} →
          </motion.a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.9 }}
        className="relative mx-auto mt-16 aspect-[16/8] w-full max-w-content overflow-hidden px-0 lg:mt-20"
      >
        <div className="relative h-full w-full overflow-hidden rounded-[2px]">
          <Image
            src={about.image.src}
            alt={about.image.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
