import React from 'react';
import { ActivitySquare } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

const LaparoscopicAppendectomyPage = () => {
  const serviceData = {
    title: "Laparoscopic Appendectomy",
    subtitle: "Keyhole removal of the appendix for faster, safer recovery.",
    image: "/appendix.jpg",
    Icon: ActivitySquare,
    overview: [
      "Appendicitis occurs when the appendix — a small pouch attached to the large intestine — becomes inflamed or infected. It causes sharp pain in the lower right abdomen, fever, and nausea. If left untreated, it can burst and lead to serious infection.",
    ],
    whenToConsult: [
      "Sudden pain in the right lower abdomen",
      "Loss of appetite, nausea, or vomiting",
      "Fever or tenderness in the abdomen",
    ],
    treatmentOptions: [
      "The best treatment is surgical removal of the appendix. Laparoscopic Appendectomy is a keyhole surgery performed through 3 tiny incisions using a camera and fine instruments.",
      "The procedure takes around 30 minutes and is done under general anaesthesia.",
    ],
    recovery: [
      "Patients are usually discharged within 24 hours and can return to light activity in 2–3 days.",
      "Complete recovery takes about 1–2 weeks.",
    ],
    whyChooseUs: [
      "Our laparoscopic approach ensures minimal pain, negligible scarring, and quicker healing — allowing you to resume normal life sooner.",
    ],
    timeline: [
      { title: "Clinical Evaluation", description: "History, exam, and ultrasound/CT to confirm appendicitis and rule out other causes of pain." },
      { title: "Pre‑operative Preparation", description: "Blood tests, anaesthesia clearance, and pre‑op antibiotics if required." },
      { title: "Laparoscopic Appendectomy (≈30 min)", description: "3 keyhole incisions; camera‑guided removal of the inflamed appendix under general anaesthesia." },
      { title: "Recovery & Discharge", description: "Observation and pain control; most patients go home within 24 hours with diet/activity guidance." },
      { title: "Follow‑up & Return to Routine", description: "Review within a week; resume normal activities gradually over 1–2 weeks." },
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default LaparoscopicAppendectomyPage;