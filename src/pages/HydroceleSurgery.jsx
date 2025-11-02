import React from 'react';
import { Droplets } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';




const HydroceleSurgeryPage = () => {
  const serviceData = {
    title: "Hydrocele Surgery",
    subtitle: "Modern, minimally invasive correction for lasting comfort.",
    image: "/hydrocele.jpg",
    Icon: Droplets,
    overview: [
      "A hydrocele is a painless swelling around the testicle caused by fluid buildup. It’s common in adult men and can cause heaviness or discomfort. While harmless in most cases, a large hydrocele may require surgical correction.",
    ],
    whenToConsult: [
      "Swelling or heaviness in the scrotum",
      "Discomfort while walking or sitting",
      "Increase in scrotal size over time",
    ],
    treatmentOptions: [
      "Hydrocelectomy is a simple surgical procedure performed under anaesthesia to drain the fluid and remove the sac that causes the swelling.",
      "The surgery usually takes 30–40 minutes and is done as a day‑care procedure.",
    ],
    recovery: [
      "Patients can go home the same day and return to routine work in 3–5 days.",
      "Complete healing occurs within 2 weeks.",
    ],
    whyChooseUs: [
      "We use modern, minimally invasive techniques to ensure quick recovery, minimal scarring, and lasting comfort.",
    ],
    timeline: [
      { title: "Evaluation & Ultrasound", description: "Clinical exam and scrotal ultrasound to confirm hydrocele and assess size." },
      { title: "Day‑care Scheduling", description: "Plan a short procedure under anaesthesia with same‑day discharge." },
      { title: "Hydrocelectomy (30–40 min)", description: "Drain fluid and remove/reshape the sac through a small incision." },
      { title: "Recovery & Instructions", description: "Supportive scrotal care, pain control, and hygiene guidance." },
      { title: "Follow‑up & Return to Routine", description: "Review in 1–2 weeks; most resume normal activities within days." },
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default HydroceleSurgeryPage;
