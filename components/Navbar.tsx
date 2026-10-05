
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { nav } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = !scrolled; // true while floating over the hero photo

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,98,99,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 lg:px-10">
          <a href="#home" className="flex items-center gap-2.5">
            {/* LOGO — drop the client's logo file at public/images/dentex/logo.svg
                (or .png). No circular frame here on purpose: the image is sized
                by height only (h-9 = 36px, matching the old badge height) and
                its width scales automatically, so it fills exactly the space
                its own artwork uses instead of sitting inside empty padding.
                If the file has its own transparent margins, trim those in the
                asset itself rather than compensating here. */}
            <Image
              src="/logo.jpg"
              alt="M&Z's Dental Clinic logo"
              width={140}
              height={36}
              priority
              className="h-9 w-auto object-contain"
            />

            {/* Original inline tooth-mark SVG in its circular badge — uncomment
                and remove the Image above if the logo file isn't ready yet.
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-aqua/70">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                <path
                  d="M8 1c-1.4 0-2.2.7-3 .7S3.4 1 2.2 1C1 1 .3 2.2.5 4c.2 1.9.9 3 1.2 5 .3 2 .5 8 2 8 1.2 0 1-4.3 1.4-5.6.3-1 .5-1.4.9-1.4s.6.4.9 1.4C7.3 12.7 7.1 17 8.3 17c1.5 0 1.7-6 2-8 .3-2 1-3.1 1.2-5C11.7 2.2 11 1 9.8 1 8.6 1 9.4 1 8 1Z"
                  stroke="#21A9A5"
                  strokeWidth="1.1"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            */}

            <span
              className={`font-display text-[16px] font-bold tracking-[0.14em] transition-colors duration-500 ${
                dark ? "text-white" : "text-ink"
              }`}
            >
              Dental Point
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative pb-1 text-[14px] font-medium transition-colors duration-500 ${
                  dark ? "text-white/90 hover:text-white" : "text-ink/80 hover:text-deep"
                }`}
              >
                {link.label}
                {link.label === "Home" && (
                  <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-full bg-aqua" />
                )}
              </a>
            ))}
          </nav>

          <a
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-teal px-6 py-3 text-[11px] font-semibold uppercase tracking-widest2 text-white transition-colors duration-300 hover:bg-dark lg:inline-flex"
          >
            Book Appointment
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

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span className={`h-[1.5px] w-6 transition-colors duration-500 ${dark ? "bg-white" : "bg-ink"}`} />
            <span className={`h-[1.5px] w-6 transition-colors duration-500 ${dark ? "bg-white" : "bg-ink"}`} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex flex-col bg-black"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-[15px] font-bold tracking-[0.14em] text-white">
                Dental Point
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="relative h-9 w-9"
              >
                <span className="absolute left-1/2 top-1/2 h-[1.5px] w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                <span className="absolute left-1/2 top-1/2 h-[1.5px] w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-6 px-8">
              {nav.links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5, ease: "easeOut" }}
                  className="font-display text-4xl font-semibold text-white"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="px-8 pb-10">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-4 text-[12px] font-semibold uppercase tracking-widest2 text-white"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}