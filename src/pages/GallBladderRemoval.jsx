import React from 'react';
import { HeartCrack } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import ProcedureTimeline from '../components/Timeline';



const GallBladderRemovalPage = () => {
  const serviceData = {
    title: "Gall Bladder Removal (Laparoscopic Cholecystectomy)",
    subtitle: "Advanced keyhole surgery for gallstones with quick recovery and minimal scars.",
    image: "/gall_bladder.jpg",
    Icon: HeartCrack,
    overview: [
      "Gallstones are hardened deposits that form in the gall bladder and can cause severe abdominal pain, nausea, or vomiting after meals. When symptoms are frequent or complications arise, removal of the gall bladder is the safest and most effective treatment.",
    ],
    whenToConsult: [
      "Recurrent pain in the upper right abdomen or after fatty meals",
      "Nausea, vomiting, or indigestion",
      "History of gallstone attacks or infection (cholecystitis)",
    ],
    treatmentOptions: [
      "In Laparoscopic Gall Bladder Removal, the surgeon makes 3–4 tiny keyhole incisions to insert a camera and instruments. The gall bladder is safely removed through one of these small cuts.",
      "The surgery takes about 30–45 minutes under general anaesthesia.",
    ],
    recovery: [
      "Most patients can go home within 24 hours and return to normal activities in 3–5 days.",
      "A light diet is started the same day. Once healed, you can lead a normal life without any dietary restrictions.",
    ],
    whyChooseUs: [
      "We perform all gall bladder surgeries using advanced laparoscopic techniques for minimal pain, faster recovery, and almost invisible scars.",
    ],
    timeline: [
      { title: "Diagnosis & Ultrasound", description: "History, exam, and ultrasound to confirm gallstones and assess inflammation." },
      { title: "Consultation & Planning", description: "Discuss symptoms and plan laparoscopic cholecystectomy as definitive treatment." },
      { title: "Pre‑operative Assessment", description: "Routine blood tests and anaesthesia check to ensure fitness for surgery." },
      { title: "Laparoscopic Removal (30–45 min)", description: "3–4 keyhole incisions; camera‑guided dissection and safe removal of the gall bladder." },
      { title: "Recovery & Discharge", description: "Observation post‑op; most patients go home within 24 hours with diet and activity guidance." },
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default GallBladderRemovalPage;