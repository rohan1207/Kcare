import React from 'react';
import { Spline } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import ProcedureTimeline from '../components/Timeline';



const FistulaTreatmentPage = () => {
  const serviceData = {
    title: "Fistula Treatment",
    subtitle: "Sphincter‑preserving laser and endoscopic options for lasting relief.",
  // hero image used by ServicePageLayout (place actual files in /public/images/services/)
  image: "/blog1_1.jpg",
    Icon: Spline,
    overview: [
      "An anal fistula is a small tunnel that forms between the anal canal and the skin near the anus, often after an infection or abscess. It can cause pain, discharge, or swelling around the anal area.",
    ],
    whenToConsult: [
      "Recurrent pus discharge near the anus",
      "Pain or swelling that worsens on sitting",
      "History of an untreated abscess",
    ],
    treatmentOptions: [
      "The best solution is Laser Fistula Treatment (FiLaC technique) or Video‑Assisted Anal Fistula Treatment (VAAFT). These minimally invasive procedures remove the infected tract without cutting the sphincter muscle, reducing the risk of incontinence.",
      "The surgery usually takes 30–45 minutes and is performed under anaesthesia.",
    ],
    recovery: [
      "Most patients are discharged the same day and can get back to light work in 2–3 days.",
      "Complete healing takes around 2–4 weeks, depending on the tract size.",
    ],
    whyChooseUs: [
      "Advanced laser techniques ensure minimal pain, faster healing, and a low recurrence rate.",
      "Muscle‑sparing approach preserves normal bowel control and continence.",
      "Comprehensive imaging and planning for complex tracts.",
    ],
    // Gallery images will be displayed in the ServicePageLayout gallery section.
    // Add real images to /public/images/services/ matching these filenames.
    images: [
      "/blog1_1.jpg",
      "/blog1_2.jpg",
      "/blog1_3.jpg",
      "/blog1_1.jpg",
    ],
    timeline: [
      {
        title: "Consultation and Mapping",
        description: "Clinical exam with MRI/fistulogram to map the tract, identify internal opening, and classify complexity."
      },
      {
        title: "Plan Sphincter‑sparing Procedure",
        description: "We discuss FiLaC or VAAFT based on anatomy, aiming to clear infection while preserving continence."
      },
      {
        title: "Day‑care Surgery (30–45 min)",
        description: "Laser closure of the tract (FiLaC) or endoscopic cleaning/closure (VAAFT) under anaesthesia."
      },
      {
        title: "Same‑day Discharge",
        description: "Go home after observation with instructions on hygiene, dressings, and pain control."
      },
      {
        title: "Healing and Review",
        description: "Resume light activities in 2–3 days; follow‑up ensures closure and addresses any branching tracts if needed." 
      }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default FistulaTreatmentPage;