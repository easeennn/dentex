"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { signature } from "@/lib/content";

export default function SignatureSection() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden lg:h-[85vh]">
      <Image
        src={signature.image.src}
        alt={signature.image.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />
      <div className="relative z-10 flex h-full items-end px-6 pb-16 lg:px-10 lg:pb-24">
        <div className="max-w-xl">
          {signature.lines.map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="font-display text-2xl font-semibold text-white lg:text-4xl"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
