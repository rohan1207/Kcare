import React from 'react';
import { HeartPulse } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

const AbscessDrainagePage = () => {
  const serviceData = {
    title: "Abscess Drainage",
    subtitle: "Prompt drainage relieves pain and prevents complications from spreading infection.",
    image: "/Abscess.jpg",
    Icon: HeartPulse,
    overview: [
      "An abscess is a painful, pus-filled swelling that forms under the skin due to infection. If not treated early, it can spread to nearby tissues or cause fever.",
      "Prompt, professional drainage helps relieve pain quickly and prevents further complications."
    ],
    whenToConsult: [
      "Painful lump with redness, warmth, or swelling",
      "Fever or fatigue",
      "Pus or foul-smelling discharge"
    ],
    treatmentOptions: [
      "Abscess drainage is a simple surgical procedure done under local or, in some cases, general anaesthesia. The infected area is opened, pus is drained, and the cavity is cleaned. A small dressing or drain may be placed to allow further discharge to escape.",
      "The procedure usually takes 20–30 minutes and is commonly performed as a day-care surgery."
    ],
    recovery: [
      "Most patients experience immediate relief and can resume light activities the next day.",
      "Complete healing typically takes 7–10 days with regular dressing and follow-up."
    ],
    whyChooseUs: [
      "Safe, sterile, and gentle abscess management with minimal scarring and complete infection control."
    ],
    timeline: [
      {
        title: "Consultation & Assessment",
        description: "Clinical evaluation to confirm abscess, assess depth, and plan safe drainage."
      },
      {
        title: "Anaesthesia & Preparation",
        description: "Area cleaned under sterile conditions; local anaesthesia ensures a comfortable procedure."
      },
      {
        title: "Incision & Drainage",
        description: "A small opening is made to evacuate pus fully; the cavity is irrigated and cleaned."
      },
      {
        title: "Dressing / Drain Placement",
        description: "A light dressing or small drain may be placed to allow continued drainage and heal from within."
      },
      {
        title: "Home Care & Follow‑up",
        description: "You receive dressing guidance and a follow-up schedule; most feel better immediately and heal over 7–10 days."
      }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default AbscessDrainagePage;