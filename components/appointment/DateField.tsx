"use client";

import { useRef } from "react";
import { fieldBase, fieldState } from "./ui";

type Props = {
  id: string;
  value: string;
  onChange: (v: string) => void;
  min?: string;
  error?: string;
};

// Native date input (best a11y + mobile pickers) with a "Select a date"
// placeholder overlay, since <input type="date"> can't show a real placeholder.
export function DateField({ id, value, onChange, min, error }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="relative">
      <input
        ref={ref}
        id={id}
        type="date"
        min={min}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onClick={() => {
          try {
            ref.current?.showPicker?.();
          } catch {
            /* showPicker unsupported or blocked — native behaviour still works */
          }
        }}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${fieldBase} ${fieldState(!!error)} relative cursor-pointer appearance-none pr-11 ${
          value ? "" : "text-transparent"
        } [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0`}
      />
      {!value && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-[#0E2A2D]/40 sm:text-[15px]"
        >
          Select a date
        </span>
      )}
      <svg
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0E2A2D]/50"
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <rect x="3" y="4.5" width="14" height="12.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 8.5h14M7 2.75v3.5M13 2.75v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}
