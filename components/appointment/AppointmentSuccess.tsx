"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { formatDate, type AppointmentFormValues } from "./appointment.data";

type Props = { values: AppointmentFormValues; onReset: () => void };

export function AppointmentSuccess({ values, onReset }: Props) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Move focus to the confirmation for keyboard / screen-reader users.
  useEffect(() => headingRef.current?.focus(), []);

  const rows = [
    ["Patient", values.fullName.trim()],
    ["Preferred Date", formatDate(values.date)],
    ["Preferred Time", values.time],
    ["Service", values.service],
  ];

  return (
    <div className="rounded-xl border border-[#0E2A2D]/[0.08] bg-white p-8 text-center shadow-[0_1px_2px_rgba(14,42,45,0.04),0_28px_56px_-28px_rgba(14,42,45,0.14)] sm:p-12">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#EAF4F2] text-[#0B4F55]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m5.5 12.5 4.2 4.2L18.5 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      <h2
        ref={headingRef}
        tabIndex={-1}
        className="mt-6 text-3xl font-medium tracking-[-0.02em] text-[#0E2A2D] outline-none"
      >
        Appointment Request Received
      </h2>
      <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-[#0E2A2D]/70">
        Thank you. Our team will contact you shortly to confirm your appointment.
      </p>

      <dl className="mx-auto mt-9 max-w-md divide-y divide-[#0E2A2D]/[0.08] rounded-lg border border-[#0E2A2D]/[0.08] text-left">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-6 px-5 py-4">
            <dt className="text-xs font-medium uppercase tracking-[0.16em] text-[#0B6B72]">{k}</dt>
            <dd className="text-right text-[15px] text-[#0E2A2D]">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-lg border border-[#0B4F55]/25 px-7 text-[15px] font-medium text-[#0B4F55] transition duration-300 hover:-translate-y-0.5 hover:border-[#0B4F55] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2BA6A6]/30 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          Back to Home
        </Link>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex h-12 items-center justify-center rounded-lg bg-[#0B4F55] px-7 text-[15px] font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#0A444A] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2BA6A6]/30 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          Request Another Appointment
        </button>
      </div>
    </div>
  );
}
