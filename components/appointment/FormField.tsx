import type { ReactNode } from "react";
import { fieldBase, fieldState } from "./ui";

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
};

export function FormField({
  id,
  label,
  required,
  optional,
  error,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 flex items-baseline justify-between text-[13px] font-medium tracking-wide text-[#0E2A2D]"
      >
        <span>
          {label}
          {required && (
            <span aria-hidden="true" className="ml-0.5 text-[#0B6B72]">
              *
            </span>
          )}
        </span>
        {optional && (
          <span className="text-xs font-normal text-[#0E2A2D]/50">Optional</span>
        )}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-2 flex items-center gap-1.5 text-[13px] text-[#B4413A]"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 4.75v3.9M8 11v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

type SelectBaseProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
  error?: string;
  autoComplete?: string;
};

// Native <select> on purpose: best keyboard, screen-reader and mobile-picker behaviour.
export function SelectBase({
  id,
  value,
  onChange,
  placeholder,
  options,
  error,
}: SelectBaseProps) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${fieldBase} ${fieldState(!!error)} cursor-pointer appearance-none pr-11 ${
          value ? "" : "text-[#0E2A2D]/40"
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-[#0E2A2D]">
            {o}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0E2A2D]/50"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path d="M4 6.25 8 10l4-3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
