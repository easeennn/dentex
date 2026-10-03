import type { Metadata } from "next";
import { AppointmentPage } from "@/components/appointment/AppointmentPage";

export const metadata: Metadata = {
  title: "Book Your Appointment | DENTEX",
  description: "Request an appointment with the DENTEX dental team.",
};

export default function Page() {
  return <AppointmentPage />;
}
