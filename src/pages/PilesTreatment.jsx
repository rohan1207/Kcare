import React from 'react';
import { Droplets } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import ProcedureTimeline from '../components/Timeline';



const PilesTreatmentPage = () => {
  const serviceData = {
    title: "Piles (Hemorrhoids) Treatment",
    subtitle: "Advanced laser solutions for a common and painful condition.",
    image: "/piles.webp",
    Icon: Droplets,
    overview: [
      "Piles are swollen veins around the anus or rectum that can cause bleeding, itching, or pain while passing stool. They’re very common and often linked to constipation, prolonged sitting, or straining during bowel movements.",
    ],
    whenToConsult: [
      "Bleeding during or after passing stool",
      "Pain, swelling, or itching in the anal region",
      "A lump or feeling of something ‘coming out’",
    ],
    treatmentOptions: [
      "Mild piles can often be managed with dietary changes, increased fibre, and medicines. For advanced cases, laser or stapler surgery offers a modern, painless solution.",
      "The laser piles procedure takes about 20–30 minutes under anaesthesia. It seals the swollen veins using focused laser energy without cuts or stitches.",
    ],
    recovery: [
      "Most patients go home the same day and resume normal activities within 2–3 days.",
      "Complete healing usually takes 1–2 weeks.",
    ],
    whyChooseUs: [
      "We use advanced laser and minimally invasive tools for a faster, safer, and more comfortable recovery.",
      "Minimal bleeding with almost no recurrence in most cases.",
    ],
    images:[
      "/blog1_1.jpg",
      "/blog1_2.jpg",
      "/blog1_3.jpg",
      "/blog1_1.jpg",
    ],
    timeline: [
      {
        title: "Consultation and Proctoscopy",
        description: "A careful examination and proctoscopy are performed to accurately grade the hemorrhoids and confirm the diagnosis."
      },
      {
        title: "Personalized Treatment Plan",
        description: "We discuss your options and determine if Laser Hemorrhoidoplasty (LHP) is the right choice for your specific condition."
      },
      {
        title: "Day-Care Procedure",
        description: "The LHP procedure is performed in a day-care setting under short anesthesia and is completed in about 20-30 minutes."
      },
      {
        title: "Post-Procedure Observation",
        description: "You will be monitored for a few hours before being discharged home with medication and dietary advice."
      },
      {
        title: "Quick Return to Normalcy",
        description: "Experience minimal discomfort and return to your work and regular life within 1-2 days."
      },
      {
        title: "Follow-Up for Complete Care",
        description: "A follow-up appointment ensures everything has healed perfectly and provides an opportunity to discuss long-term prevention."
      }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default PilesTreatmentPage;