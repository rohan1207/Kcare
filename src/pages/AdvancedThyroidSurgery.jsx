import React from 'react';
import { ShieldPlus } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';



const AdvancedThyroidSurgeryPage = () => {
  const serviceData = {
    title: "Advanced Thyroid Surgery",
    subtitle: "Modern, precise thyroid surgery with a focus on safety, voice, and cosmetic outcome.",
    image: "/thyroid1.jpg",
    Icon: ShieldPlus,
    overview: [
      "Thyroid disorders such as goitre, nodules, or thyroid cancer may require surgical removal of part or all of the thyroid gland. With modern techniques, thyroid surgery is now safer and more precise than ever before.",
    ],
    whenToConsult: [
      "Visible swelling in the front of the neck",
      "Difficulty swallowing or breathing",
      "Hoarseness of voice or thyroid test abnormalities",
    ],
    treatmentOptions: [
      "We perform Minimally Invasive Thyroidectomy and Endoscopic/Robotic Thyroid Surgery, which use small incisions and cameras for high precision.",
      "The procedure takes about 1–2 hours under general anaesthesia.",
    ],
    recovery: [
      "Most patients are discharged within 24 hours and resume normal activities in 3–5 days.",
      "Mild voice changes or neck stiffness, if any, usually resolve within a few days.",
    ],
    whyChooseUs: [
      "Our advanced approach ensures minimal scarring, reduced pain, and preservation of voice and calcium levels — ensuring both safety and confidence after surgery.",
    ],
    images:[
      "/blog1_1.jpg",
      "/blog1_2.jpg",
      "/blog1_3.jpg",
      "/blog1_1.jpg",
    ],

    timeline: [
      { title: "Evaluation & Diagnostics", description: "Neck exam, ultrasound, and FNAC/biopsy if indicated." },
      { title: "Surgical Planning", description: "Choose lobectomy vs total thyroidectomy; plan minimally invasive/endoscopic approach." },
      { title: "Anaesthesia & Nerve Monitoring", description: "General anaesthesia; nerve monitoring to protect voice; calcium preservation plan." },
      { title: "Surgery (1–2 hours)", description: "Small, well‑placed incision; careful dissection preserving nerves and parathyroids." },
      { title: "Recovery & Follow‑up", description: "Home within 24 hours; voice and calcium checks; return to routine in 3–5 days." },
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default AdvancedThyroidSurgeryPage;