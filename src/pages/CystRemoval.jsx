import React from 'react';
import { ShieldHalf } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

const CystRemovalPage = () => {
  const serviceData = {
    title: "Cyst Removal",
    subtitle: "Permanent cure with precise, scar‑minimizing removal.",
    image: "/cyst.jpg",
    Icon: ShieldHalf,
    overview: [
      "Cysts are non-cancerous lumps that can form anywhere on the body — commonly on the scalp, face, or back. While usually harmless, they may grow, get infected, or cause cosmetic concern.",
      "Surgical removal provides a permanent cure."
    ],
    whenToConsult: [
      "Visible or growing lump under the skin",
      "Pain, redness, or discharge",
      "Cosmetic concern or repeated infection"
    ],
    treatmentOptions: [
      "Under local anaesthesia, the cyst and its sac are completely removed through a small incision. For deeper cysts or cosmetic areas, laser or minimally invasive removal is used to avoid scarring.",
      "The procedure takes 20–40 minutes, depending on the size and site."
    ],
    recovery: [
      "Patients can go home immediately after the procedure and resume work the next day.",
      "Healing occurs within 5–7 days, leaving minimal to no mark."
    ],
    whyChooseUs: [
      "Precise, scar‑minimizing cyst removal using modern surgical and laser techniques — ensuring safety, hygiene, and excellent cosmetic results."
    ],
    timeline: [
      { title: "Consultation & Assessment", description: "Clinical evaluation to confirm cyst and plan complete, safe removal." },
      { title: "Anaesthesia & Preparation", description: "Local anaesthesia and sterile prep; marking along natural skin lines for best cosmetic outcome." },
      { title: "Cyst Excision", description: "The cyst and its sac are removed intact through a small incision; laser/minimally invasive techniques used in cosmetic areas." },
      { title: "Fine Closure & Dressing", description: "Skin closed with fine sutures; a light dressing applied to protect the site." },
      { title: "Home Care & Follow‑up", description: "Return to routine next day; review in ~5–7 days for healing and suture removal if needed." }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default CystRemovalPage;