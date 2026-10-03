"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/Navbar"; // ← adjust to your existing navbar path/export
import { AppointmentForm } from "./AppointmentForm";
import { AppointmentInfo } from "./AppointmentInfo";
import { AppointmentSuccess } from "./AppointmentSuccess";
import type { AppointmentFormValues } from "./appointment.data";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AppointmentPage() {
  const reduce = useReducedMotion();
  const [submitted, setSubmitted] = useState<AppointmentFormValues | null>(null);

  const reveal = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F7FAF9] pb-20 pt-28 sm:pb-28 sm:pt-36">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <motion.header {...reveal()} className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#0B6B72]">
              DENTEX Appointment
            </p>
            <h1 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-[#0E2A2D] sm:text-5xl">
              Book Your Appointment
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#0E2A2D]/70 sm:text-lg">
              Take the first step toward a healthier, more confident smile.
            </p>
          </motion.header>

          <div className="mt-10 grid items-start gap-6 sm:mt-14 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:gap-8">
            <motion.div {...reveal(0.1)}>
              {submitted ? (
                <AppointmentSuccess values={submitted} onReset={() => setSubmitted(null)} />
              ) : (
                <AppointmentForm onSubmit={setSubmitted} />
              )}
            </motion.div>
            <motion.div {...reveal(0.2)}>
              <AppointmentInfo />
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
