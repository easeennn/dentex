// Single source of truth for the appointment feature.
// When the backend arrives: swap TIME_SLOTS for an availability fetch and
// point AppointmentForm's onSubmit at your API — nothing else needs to change.

export type AppointmentFormValues = {
  fullName: string;
  phone: string;
  email: string;
  date: string; // ISO "YYYY-MM-DD"
  time: string;
  service: string;
  message: string;
};

export type AppointmentErrors = Partial<
  Record<Exclude<keyof AppointmentFormValues, "message">, string>
>;

export const initialValues: AppointmentFormValues = {
  fullName: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  service: "",
  message: "",
};

// Visual demo options only — no real availability yet.
export const TIME_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

export const SERVICES = [
  "General Dental Consultation",
  "Teeth Cleaning",
  "Teeth Whitening",
  "Dental Filling",
  "Root Canal Treatment",
  "Dental Crown",
  "Braces Consultation",
  "Cosmetic Dentistry",
  "Other",
];

// Placeholder only. Set `tel` (e.g. "+8801XXXXXXXXX") once the real number exists
// and the row becomes a tappable link automatically.
export const CLINIC_PHONE = { display: "+880 1XXX-XXXXXX", tel: "" };

// Field order = focus order when validation fails.
export const FIELD_ORDER: (keyof AppointmentErrors)[] = [
  "fullName",
  "phone",
  "email",
  "date",
  "time",
  "service",
];

export function validateAppointment(
  v: AppointmentFormValues,
  todayISO: string
): AppointmentErrors {
  const e: AppointmentErrors = {};

  if (v.fullName.trim().length < 2) e.fullName = "Please enter your name.";

  const phone = v.phone.replace(/[\s-]/g, "");
  if (!phone) e.phone = "Please enter your phone number.";
  else if (!/^(?:\+?88)?01[3-9]\d{8}$/.test(phone))
    e.phone = "Please enter a valid phone number, e.g. 01XXXXXXXXX.";

  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    e.email = "Please enter a valid email address.";

  if (!v.date) e.date = "Please select a preferred date.";
  else if (todayISO && v.date < todayISO)
    e.date = "Please choose today or a later date.";

  if (!v.time) e.time = "Please select a preferred time.";
  if (!v.service) e.service = "Please select a service.";

  return e;
}

export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
