"use client";

import { useEffect, useState } from "react";
import { FormField } from "./FormField";
import { DateField } from "./DateField";
import { TimeSelect } from "./TimeSelect";
import { ServiceSelect } from "./ServiceSelect";
import { fieldBase, fieldState } from "./ui";
import {
  FIELD_ORDER,
  initialValues,
  validateAppointment,
  type AppointmentErrors,
  type AppointmentFormValues,
} from "./appointment.data";

type Props = {
  // Frontend-only today. Later: make this async and POST to your API.
  onSubmit: (values: AppointmentFormValues) => void;
};

const todayISO = () => {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
};

function SectionTitle({ children }: { children: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-[#0B6B72]">
        {children}
      </h2>
      <span className="h-px flex-1 bg-[#0E2A2D]/[0.08]" />
    </div>
  );
}

export function AppointmentForm({ onSubmit }: Props) {
  const [values, setValues] = useState<AppointmentFormValues>(initialValues);
  const [errors, setErrors] = useState<AppointmentErrors>({});
  const [today, setToday] = useState("");

  // Set on the client to avoid SSR/hydration date mismatches.
  useEffect(() => setToday(todayISO()), []);

  const set = <K extends keyof AppointmentFormValues>(
    key: K,
    value: AppointmentFormValues[K]
  ) => {
    setValues((p) => ({ ...p, [key]: value }));
    if (key in errors) {
      setErrors((p) => {
        const next = { ...p };
        delete next[key as keyof AppointmentErrors];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validateAppointment(values, today);
    setErrors(found);

    const first = FIELD_ORDER.find((k) => found[k]);
    if (first) {
      document.getElementById(`appt-${first}`)?.focus();
      return;
    }
    onSubmit(values);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-xl border border-[#0E2A2D]/[0.08] bg-white p-6 shadow-[0_1px_2px_rgba(14,42,45,0.04),0_28px_56px_-28px_rgba(14,42,45,0.14)] sm:p-10"
    >
      <SectionTitle>Patient Information</SectionTitle>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="appt-fullName" label="Full Name" required error={errors.fullName} className="sm:col-span-2">
          <input
            id="appt-fullName"
            type="text"
            autoComplete="name"
            placeholder="Enter your full name"
            value={values.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "appt-fullName-error" : undefined}
            className={`${fieldBase} ${fieldState(!!errors.fullName)}`}
          />
        </FormField>

        <FormField id="appt-phone" label="Phone Number" required error={errors.phone}>
          <input
            id="appt-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="01XXXXXXXXX"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "appt-phone-error" : undefined}
            className={`${fieldBase} ${fieldState(!!errors.phone)}`}
          />
        </FormField>

        <FormField id="appt-email" label="Email Address" optional error={errors.email}>
          <input
            id="appt-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "appt-email-error" : undefined}
            className={`${fieldBase} ${fieldState(!!errors.email)}`}
          />
        </FormField>
      </div>

      <div className="mt-10">
        <SectionTitle>Appointment Details</SectionTitle>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField id="appt-date" label="Preferred Date" required error={errors.date}>
            <DateField
              id="appt-date"
              value={values.date}
              min={today || undefined}
              onChange={(v) => set("date", v)}
              error={errors.date}
            />
          </FormField>

          <FormField id="appt-time" label="Preferred Time" required error={errors.time}>
            <TimeSelect id="appt-time" value={values.time} onChange={(v) => set("time", v)} error={errors.time} />
          </FormField>

          <FormField id="appt-service" label="Select a Service" required error={errors.service} className="sm:col-span-2">
            <ServiceSelect id="appt-service" value={values.service} onChange={(v) => set("service", v)} error={errors.service} />
          </FormField>

          <FormField id="appt-message" label="Anything you'd like us to know?" optional className="sm:col-span-2">
            <textarea
              id="appt-message"
              rows={4}
              placeholder="Tell us briefly about your dental concern..."
              value={values.message}
              onChange={(e) => set("message", e.target.value)}
              className={`${fieldBase} ${fieldState(false)} h-auto min-h-[120px] resize-y py-3.5 leading-relaxed`}
            />
          </FormField>
        </div>
      </div>

      <div className="mt-10 border-t border-[#0E2A2D]/[0.08] pt-8">
        <button
          type="submit"
          className="h-14 w-full rounded-lg bg-[#0B4F55] text-[15px] font-medium tracking-wide text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#0A444A] hover:shadow-[0_12px_24px_-12px_rgba(11,79,85,0.6)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2BA6A6]/30 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          Request Appointment
        </button>
        <p className="mt-4 text-center text-xs leading-relaxed text-[#0E2A2D]/55">
          By submitting this form, you agree to be contacted by DENTEX regarding your appointment.
        </p>
      </div>
    </form>
  );
}
