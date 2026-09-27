// // "use client";

// // import { useState } from "react";
// // import Image from "next/image";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { services } from "@/lib/content";

// // export default function Services() {
// //   const [active, setActive] = useState<number | null>(null);

// //   return (
// //     <section id="services" className="bg-mint py-28 lg:py-36">
// //       <div className="mx-auto max-w-content px-6 lg:px-10">
// //         <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
// //           <div className="lg:col-span-5">
// //             <p className="eyebrow">Services</p>
// //             <h2 className="mt-5 font-display font-bold leading-[1.05] text-ink text-[clamp(2rem,4vw,3rem)]">
// //               Care for every stage of your smile.
// //             </h2>
// //           </div>
// //         </div>

// //         <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-12">
// //           <div className="lg:col-span-7">
// //             <ul onMouseLeave={() => setActive(null)}>
// //               {services.map((service, i) => (
// //                 <li key={service.name} className="border-b border-deep/12 first:border-t">
// //                   <a
// //                     href="#contact"
// //                     onMouseEnter={() => setActive(i)}
// //                     className="group flex items-center justify-between gap-6 py-7"
// //                   >
// //                     <span className="flex items-baseline gap-6">
// //                       <span
// //                         className={`font-display text-sm font-semibold transition-colors ${
// //                           active === i ? "text-deep" : "text-ink/30"
// //                         }`}
// //                       >
// //                         {service.index}
// //                       </span>
// //                       <span className="font-display text-2xl font-semibold text-ink transition-transform duration-300 group-hover:translate-x-2 lg:text-[2rem]">
// //                         {service.name}
// //                       </span>
// //                     </span>
// //                     <span className="hidden max-w-[220px] text-right text-sm text-ink/55 lg:block">
// //                       {service.description}
// //                     </span>
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Desktop: image follows the hovered service */}
// //           <div className="relative hidden lg:col-span-5 lg:block">
// //             <div className="sticky top-32 aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-light">
// //               <AnimatePresence mode="wait">
// //                 {active !== null && (
// //                   <motion.div
// //                     key={active}
// //                     initial={{ opacity: 0, scale: 1.04 }}
// //                     animate={{ opacity: 1, scale: 1 }}
// //                     exit={{ opacity: 0 }}
// //                     transition={{ duration: 0.4, ease: "easeOut" }}
// //                     className="relative h-full w-full"
// //                   >
// //                     <Image
// //                       src={services[active].image}
// //                       alt={services[active].name}
// //                       fill
// //                       sizes="40vw"
// //                       className="object-cover"
// //                     />
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //               {active === null && (
// //                 <div className="flex h-full items-center justify-center">
// //                   <span className="text-[12px] uppercase tracking-widest2 text-deep/50">
// //                     Hover a treatment
// //                   </span>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { services } from "@/lib/content";

// export default function Services() {
//   const [active, setActive] = useState<number | null>(null);

//   return (
//     <section id="services" className="bg-mint py-28 lg:py-36">
//       <div className="mx-auto max-w-content px-6 lg:px-10">
//         <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
//           <div className="lg:col-span-5">
//             <p className="eyebrow">Services</p>
//             <h2 className="mt-5 font-display font-bold leading-[1.05] text-ink text-[clamp(2rem,4vw,3rem)]">
//               Care for every stage of your smile.
//             </h2>
//           </div>
//         </div>

//         <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-12">
//           <div className="lg:col-span-7">
//             <ul onMouseLeave={() => setActive(null)}>
//               {services.map((service, i) => (
//                 <li key={service.name} className="border-b border-deep/12 first:border-t">
//                   <a
//                     href="#contact"
//                     onMouseEnter={() => setActive(i)}
//                     className="group flex items-center justify-between gap-6 py-7"
//                   >
//                     <span className="flex items-baseline gap-6">
//                       <span
//                         className={`font-display text-sm font-semibold transition-colors ${
//                           active === i ? "text-deep" : "text-ink/30"
//                         }`}
//                       >
//                         {service.index}
//                       </span>
//                       <span className="font-display text-2xl font-semibold text-ink transition-transform duration-300 group-hover:translate-x-2 lg:text-[2rem]">
//                         {service.name}
//                       </span>
//                     </span>
//                     <span className="hidden max-w-[220px] text-right text-sm text-ink/55 lg:block">
//                       {service.description}
//                     </span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Desktop: image follows the hovered service */}
//           <div className="relative hidden lg:col-span-5 lg:block">
//             <div className="sticky top-32 aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-light">
//               {/* All service images stay mounted — swapping is a pure opacity
//                   crossfade, so nothing unmounts/refetches and nothing flashes. */}
//               {services.map((service, i) => (
//                 <div
//                   key={service.name}
//                   className={`absolute inset-0 transition-opacity duration-500 ease-out ${
//                     active === i ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   <Image
//                     src={service.image}
//                     alt={service.name}
//                     fill
//                     sizes="40vw"
//                     className="object-cover"
//                   />
//                 </div>
//               ))}

//               <div
//                 className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-out ${
//                   active === null ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 <span className="text-[12px] uppercase tracking-widest2 text-deep/50">
//                   Hover a treatment
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "@/lib/content";

export default function Services() {
  // Defaults to the first service so a photo is always visible, even before
  // any hover. Hovering a row crossfades to that row's photo; leaving the
  // list falls back to this same default rather than an empty state.
  const [active, setActive] = useState<number>(0);

  return (
    <section id="services" className="bg-mint py-28 lg:py-36">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Services</p>
            <h2 className="mt-5 font-display font-bold leading-[1.05] text-ink text-[clamp(2rem,4vw,3rem)]">
              Care for every stage of your smile.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ul onMouseLeave={() => setActive(0)}>
              {services.map((service, i) => (
                <li key={service.name} className="border-b border-deep/12 first:border-t">
                  <a
                    href="#contact"
                    onMouseEnter={() => setActive(i)}
                    className="group flex items-center justify-between gap-6 py-7"
                  >
                    <span className="flex items-baseline gap-6">
                      <span
                        className={`font-display text-sm font-semibold transition-colors ${
                          active === i ? "text-deep" : "text-ink/30"
                        }`}
                      >
                        {service.index}
                      </span>
                      <span className="font-display text-2xl font-semibold text-ink transition-transform duration-300 group-hover:translate-x-2 lg:text-[2rem]">
                        {service.name}
                      </span>
                    </span>
                    <span className="hidden max-w-[220px] text-right text-sm text-ink/55 lg:block">
                      {service.description}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop: image follows the hovered service */}
          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="sticky top-32 aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-light">
              {/* All service images stay mounted — swapping is a pure opacity
                  crossfade, so nothing unmounts/refetches and nothing flashes. */}
              {services.map((service, i) => (
                <div
                  key={service.name}
                  className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="40vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}