import React from 'react';
import { Bandage } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

const PilonidalSinusCarePage = () => {
  const serviceData = {
    title: "Pilonidal Sinus Care",
    subtitle: "Laser‑assisted care for faster healing, minimal pain, and clean, scar‑free results.",
    image: "/pilonidal_sinus.jpg",
    Icon: Bandage,
    overview: [
      "A pilonidal sinus is a small cyst or tunnel under the skin near the tailbone, often caused by ingrown hair and infection. It can cause swelling, pain, or pus discharge. If not treated properly, it may keep recurring.",
    ],
    whenToConsult: [
      "Swelling or pain near the tailbone",
      "Recurrent pus or bloody discharge",
      "Difficulty sitting or walking comfortably",
    ],
    treatmentOptions: [
      "We use Laser Pilonidal Sinus Treatment or Minimally Invasive Excision, depending on the case. The infected tract is gently removed or sealed using a laser, with minimal tissue damage and no stitches.",
      "The surgery takes about 30–45 minutes and is done under anaesthesia as a daycare procedure.",
    ],
    recovery: [
      "Patients can go home the same day and resume work within 2–3 days.",
      "Complete healing occurs in 2–4 weeks, with very low chances of recurrence.",
    ],
    whyChooseUs: [
      "Our laser‑assisted care ensures faster healing, minimal pain, and a clean, scar‑free result — helping you return to normal life quickly and comfortably.",
    ],
    timeline: [
      { title: "Diagnosis & Planning", description: "Clinical exam to confirm sinus and plan laser/minimally invasive approach." },
      { title: "Prepare the Area", description: "If abscess present, drain first; then schedule definitive laser treatment." },
      { title: "Laser/Minimally Invasive Procedure (30–45 min)", description: "Gently clean and seal/remove tract with minimal tissue damage; usually no stitches." },
      { title: "Same‑day Discharge", description: "Simple wound care at home; no complex packing required." },
      { title: "Follow‑up & Prevention", description: "Review healing; advise hygiene and hair care to prevent recurrence." },
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default PilonidalSinusCarePage;