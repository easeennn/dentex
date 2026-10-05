import { CLINIC_PHONE } from "./appointment.data";

function Block({ label, children }: { label: string; children: string }) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[#0B6B72]">{label}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-[#0E2A2D]/80">{children}</p>
    </div>
  );
}

function PhoneIcon() {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#0B4F55]/15 bg-white text-[#0B4F55]">
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M5.2 3h2.3l1.3 3.4-1.6 1.1a8.6 8.6 0 0 0 4.3 4.3l1.1-1.6L16 11.5v2.3a1.7 1.7 0 0 1-1.8 1.7A11.9 11.9 0 0 1 3.5 4.8 1.7 1.7 0 0 1 5.2 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function AppointmentInfo() {
  const phoneRow = (
    <>
      <PhoneIcon />
      <span>
        <span className="block text-[15px] font-medium text-[#0E2A2D]">Call DENTAL</span>
        <span className="mt-0.5 block text-sm text-[#0E2A2D]/65">{CLINIC_PHONE.display}</span>
      </span>
    </>
  );

  return (
    <aside className="rounded-xl border border-[#0E2A2D]/[0.08] bg-[#EAF4F2]/60 p-6 sm:p-8 lg:sticky lg:top-28">
      <h2 className="text-2xl font-medium tracking-[-0.01em] text-[#0E2A2D]">Your Visit</h2>

      <div className="mt-8 space-y-7">
        <Block label="Consultation">A professional consultation with our dental team.</Block>
        <Block label="Duration">Approximately 30–45 minutes</Block>
        <Block label="Confirmation">Your appointment request will be reviewed by our team.</Block>
      </div>

      <div className="my-8 h-px bg-[#0E2A2D]/[0.1]" />

      <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[#0B6B72]">Need Help?</h3>
      <p className="mt-2 text-[15px] text-[#0E2A2D]/80">Have questions before booking?</p>

      {CLINIC_PHONE.tel ? (
        <a
          href={`tel:${CLINIC_PHONE.tel}`}
          className="mt-5 flex items-center gap-4 rounded-lg transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2BA6A6]/30"
        >
          {phoneRow}
        </a>
      ) : (
        <div className="mt-5 flex items-center gap-4">{phoneRow}</div>
      )}
    </aside>
  );
}
