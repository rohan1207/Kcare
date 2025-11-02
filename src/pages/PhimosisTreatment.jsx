import React from 'react';
import { Droplets } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';




const PhimosisTreatmentPage = () => {
  const serviceData = {
    title: "Phimosis Treatment",
    subtitle: "Painless, precise circumcision and foreskin care with modern laser/stapler options.",
    image: "/Phymosis.png",
    Icon: Droplets,
    overview: [
      "Phimosis is a condition where the foreskin of the penis cannot be fully retracted, which may lead to pain, hygiene issues, or infection. It’s common in both children and adults and can be easily treated with modern surgical techniques.",
    ],
    whenToConsult: [
      "Difficulty or pain while retracting the foreskin",
      "Swelling, redness, or recurrent infections",
      "Pain during urination or sexual activity",
    ],
    treatmentOptions: [
      "Depending on severity, options include:",
      "• Topical medications (for mild cases)",
      "• Circumcision — surgical removal of the foreskin, done using conventional, laser, or stapler techniques.",
      "The procedure takes about 20–30 minutes under local or general anaesthesia and is completely safe.",
    ],
    recovery: [
      "Patients can go home the same day and resume routine activities in 2–3 days.",
      "Complete healing occurs within 1–2 weeks.",
    ],
    whyChooseUs: [
      "Our clinic offers painless, quick, and precise circumcision using the latest laser and stapler techniques, ensuring hygiene, comfort, and minimal scarring.",
    ],
    timeline: [
      { title: "Consultation & Assessment", description: "Clinical exam to confirm phimosis and discuss treatment options." },
      { title: "Plan the Procedure", description: "Choose topical therapy or laser/stapler circumcision based on severity and preference." },
      { title: "Day‑care Procedure (20–30 min)", description: "Local/general anaesthesia; quick, precise circumcision with minimal bleeding." },
      { title: "Recovery & Care", description: "Same‑day discharge; hygiene, dressing, and pain control guidance." },
      { title: "Follow‑up & Healing", description: "Review within a week; most resume normal routine in 2–3 days; full healing in 1–2 weeks." },
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default PhimosisTreatmentPage;
