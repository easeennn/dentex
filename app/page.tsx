import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import SignatureSection from "@/components/SignatureSection";
import WhyDentex from "@/components/WhyDentex";
import BeforeAfter from "@/components/BeforeAfter";
import PatientJourney from "@/components/PatientJourney";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <SignatureSection />
      <WhyDentex />
      <BeforeAfter />
      <PatientJourney />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
