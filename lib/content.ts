// ---------------------------------------------------------------------------
// DENTEX — landing page content
// All copy, stats and image sources live here so they are easy for the
// client / Zen-C Solutions to swap out later without touching layout code.
// Anything marked PLACEHOLDER must be replaced with real, client-approved
// information before this goes live — nothing here is a real claim.
// ---------------------------------------------------------------------------

export const nav = {
  links: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Dentex", href: "#why-dentex" },
    { label: "Contact", href: "#contact" },
  ],
  cta: "Book Appointment",
};

export const hero = {
  eyebrow: "Dentex Dental Care",
  headlineLines: ["Your smile.", "Your confidence."],
  subhead:
    "Modern dentistry focused on healthy smiles, natural results, and care you can trust.",
  primaryCta: "Book an Appointment",
  secondaryCta: "Explore Our Services",
  image: {
    src: "/dath.png",
    alt: "Close, natural portrait of a patient smiling confidently",
  },
};

// PLACEHOLDER — replace with real Dentex figures once provided by the client.
export const trustStrip = [
  "Modern Dental Care",
  "Patient-First Approach",
  "Advanced Technology",
  "Personalized Treatment",
];

export const about = {
  eyebrow: "About Dentex",
  heading: ["Dentistry built", "around your confidence."],
  body: "At Dentex, modern dental care goes beyond treatment. We combine clinical precision, advanced technology, and thoughtful care to help every patient feel confident in their smile.",
  cta: "Discover Dentex",
  image: {
    src: "/teeth.jpg",
    alt: "Bright, calm dental treatment room",
  },
};

export const services = [
  {
    index: "01",
    name: "Dental Implant",
    description: "Permanent, natural-feeling replacements for missing teeth.",
    image:
      "/tith.jpg",
  },
  {
    index: "02",
    name: "Root Canal",
    description: "Careful treatment that saves the tooth and eases discomfort.",
    image:
      "/tooth.jpg",
  },
  {
    index: "03",
    name: "Teeth Whitening",
    description: "Brighter, even-toned results with a gentle, guided process.",
    image:
      "/tongue.jpg",
  },
  {
    index: "04",
    name: "Dental Crown",
    description: "Restoring strength and shape with a precise, lasting fit.",
    image:
      "/teeth.jpg",
  },
  {
    index: "05",
    name: "Zirconium Veneer",
    description: "Refined, durable veneers designed to look entirely natural.",
    image:
      "/mooth.jpg",
  },
  {
    index: "06",
    name: "Orthodontic Treatment",
    description: "Gradual, guided alignment for a healthier long-term bite.",
    image:
      "/teeth.jpg",
  },
];

export const signature = {
  image: {
    src: "/doc.jpg",
    alt: "Close, editorial portrait — quiet, confident expression",
  },
  lines: ["Natural results.", "Thoughtful care.", "Confidence that lasts."],
};

export const whyDentex = [
  {
    index: "01",
    title: "Precision",
    description: "Modern treatment carried out with close attention to detail.",
  },
  {
    index: "02",
    title: "Comfort",
    description: "A calm environment, designed around the patient, not the procedure.",
  },
  {
    index: "03",
    title: "Technology",
    description: "Modern dental technology in service of better, faster treatment.",
  },
  {
    index: "04",
    title: "Personal Care",
    description: "Every smile is different — treatment plans are built around yours.",
  },
];

// PLACEHOLDER — demo interaction only. Replace with real, patient-consented
// imagery before this section goes live. No outcomes are implied or claimed.
export const beforeAfter = {
  eyebrow: "See the Difference",
  heading: "A demonstration of the before / after experience.",
  before: {
    src: "/before.jpg",
    label: "Before",
  },
  after: {
    src: "/after.jpg",
    label: "After",
  },
  disclaimer: "Placeholder imagery for demonstration purposes only.",
};

export const journey = [
  {
    index: "01",
    title: "Consultation",
    description: "We start by understanding your smile, concerns, and goals.",
  },
  {
    index: "02",
    title: "Personalized Plan",
    description: "Together, we choose the treatment path that fits you best.",
  },
  {
    index: "03",
    title: "Confident Smile",
    description: "You move forward with clarity, care, and a plan you trust.",
  },
];

// PLACEHOLDER — replace with real patient testimonials and consent before launch.
export const testimonials = [
  {
    quote:
      "Finally, a dental experience that felt comfortable from the moment I walked in.",
    name: "Patient Name",
    treatment: "Teeth Whitening",
  },
  {
    quote:
      "Every step was explained clearly. I knew exactly what to expect and why.",
    name: "Patient Name",
    treatment: "Dental Implant",
  },
  {
    quote: "The whole space feels calm — it changed how I think about visiting the dentist.",
    name: "Patient Name",
    treatment: "Orthodontic Treatment",
  },
];

export const finalCta = {
  heading: ["Ready to feel", "confident in your smile?"],
  body: "Take the first step toward healthier, more confident dental care.",
  primaryCta: "Book an Appointment",
  secondaryCta: "Contact Dentex",
};

// PLACEHOLDER — replace with the client's real details before launch.
export const footer = {
  statement: "Modern dental care, built around your confidence.",
  links: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  contact: {
    address: "Address placeholder — to be confirmed with client",
    phone: "+880 00 0000 0000",
    email: "hello@dentex.example",
  },
  hours: [
    { day: "Sat – Thu", time: "10:00 AM – 8:00 PM" },
    { day: "Friday", time: "Closed" },
  ],
  social: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};
