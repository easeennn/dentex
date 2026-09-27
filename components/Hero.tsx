// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { hero } from "@/lib/content";

// const ease = [0.16, 1, 0.3, 1] as const;

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden bg-offwhite pt-32 pb-20 lg:pt-40 lg:pb-28"
//     >
//       {/* subtle decorative line — dental crosshair, almost invisible */}
//       <div className="pointer-events-none absolute right-[6%] top-28 hidden lg:block">
//         <svg width="86" height="86" viewBox="0 0 86 86" fill="none">
//           <circle cx="43" cy="43" r="42" stroke="#087F80" strokeOpacity="0.18" />
//           <line x1="43" y1="8" x2="43" y2="24" stroke="#087F80" strokeOpacity="0.3" />
//           <line x1="43" y1="62" x2="43" y2="78" stroke="#087F80" strokeOpacity="0.3" />
//         </svg>
//       </div>

//       <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
//         <div>
//           <motion.p
//             initial={{ opacity: 0, y: 14 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease }}
//             className="eyebrow"
//           >
//             {hero.eyebrow}
//           </motion.p>

//           <h1 className="mt-5 font-display font-extrabold leading-[0.98] text-ink text-[clamp(2.6rem,6vw,4.6rem)]">
//             {hero.headlineLines.map((line, i) => (
//               <span key={line} className="block overflow-hidden">
//                 <motion.span
//                   initial={{ y: "110%" }}
//                   animate={{ y: "0%" }}
//                   transition={{ duration: 0.8, ease, delay: 0.15 + i * 0.12 }}
//                   className="block"
//                 >
//                   {line}
//                 </motion.span>
//               </span>
//             ))}
//           </h1>

//           <motion.p
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease, delay: 0.55 }}
//             className="mt-6 max-w-md text-[17px] leading-relaxed text-ink/70"
//           >
//             {hero.subhead}
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease, delay: 0.7 }}
//             className="mt-9 flex flex-wrap items-center gap-6"
//           >
//             <a href="#contact" className="btn-primary">
//               {hero.primaryCta}
//             </a>
//             <a href="#services" className="btn-secondary">
//               {hero.secondaryCta}
//             </a>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0.4 }}
//           animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
//           transition={{ duration: 1.1, ease, delay: 0.2 }}
//           className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] lg:aspect-[5/6]"
//         >
//           <Image
//             src={hero.image.src}
//             alt={hero.image.alt}
//             fill
//             priority
//             sizes="(min-width: 1024px) 40vw, 90vw"
//             className="object-cover"
//           />
//           <div className="absolute bottom-6 left-6 rounded-[2px] bg-white/90 px-4 py-2 backdrop-blur-sm">
//             <span className="text-[11px] font-semibold uppercase tracking-widest2 text-deep">
//               Dentex
//             </span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hero } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

// Edit this whenever the client wants different hero copy.
const headlineLines = ["Don't wait until", "you lose it all."];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[92vh] min-h-[640px] w-full items-end overflow-hidden bg-black lg:h-screen"
    >
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* readability gradient — dark top for the nav, darker base for the text */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/85" /> */}

      {/* faint decorative arcs, cropped at the corners like the brand mark */}
      <svg
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 opacity-40"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="99" stroke="#21A9A5" strokeWidth="1" />
      </svg>
      <svg
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 opacity-30"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="99" stroke="#21A9A5" strokeWidth="1" />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-16 lg:px-10 lg:pb-24">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-[11px] font-semibold uppercase tracking-widest2 text-aqua"
          >
            {hero.eyebrow}
          </motion.p>

          <h1 className="mt-5 font-display font-extrabold leading-[0.98] text-white text-[clamp(2.4rem,6vw,4.4rem)]">
            {headlineLines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, ease, delay: 0.15 + i * 0.12 }}
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.55 }}
            className="mt-6 max-w-md text-[16px] leading-relaxed text-white/70"
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-6"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-4 text-[12px] font-semibold uppercase tracking-widest2 text-white transition-colors duration-300 hover:bg-dark"
            >
              {hero.primaryCta}
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path
                  d="M0 5h12.5M8 1l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#services"
              className="border-b border-white/30 py-4 text-[12px] font-semibold uppercase tracking-widest2 text-white transition-colors duration-300 hover:border-white"
            >
              {hero.secondaryCta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}