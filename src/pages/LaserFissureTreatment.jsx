import React from 'react';
import { Zap } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';



const LaserFissureTreatmentPage = () => {
  const serviceData = {
    title: "Laser Fissure Treatment",
    subtitle: "Precise, minimally invasive relief for chronic anal fissures.",
    image: "/fissure.jpg",
    Icon: Zap,
    overview: [
      "An anal fissure is a small tear in the lining of the anus that can cause sharp pain and fresh bleeding during bowel movements. Many heal with conservative care, but long‑standing or recurrent fissures may need a definitive procedure.",
      "Our laser‑assisted Lateral Internal Sphincterotomy (LIS) and fissurectomy offer targeted relief with minimal tissue trauma, faster healing, and excellent pain control."
    ],
    whenToConsult: [
      "Severe pain or burning while or after passing stool",
      "Fresh bleeding on the toilet paper or in the pan",
      "A visible cut or skin tag (sentinel pile) near the anus",
      "Anal spasm or fear of passing stool despite laxatives",
    ],
    treatmentOptions: [
      "Initial management includes a fibre‑rich diet, hydration, stool softeners, sitz baths, and topical medications (local anaesthetic and vasodilator creams). Some patients may benefit from a Botox injection to reduce spasm.",
      "If symptoms persist or the fissure becomes chronic, laser LIS with fissurectomy provides a modern, precise solution. The day‑care procedure typically takes 15–20 minutes under anaesthesia, releasing the over‑tight internal sphincter to allow healing—without large cuts or stitches."
    ],
    recovery: [
      "Most patients go home the same day and notice rapid pain relief within 24–48 hours.",
      "You can resume light activities in 2–3 days; complete healing generally takes 1–2 weeks with regular sitz baths and soft stools.",
    ],
    whyChooseUs: [
      "Advanced diode laser technique for precise sphincterotomy with minimal bleeding.",
      "Day‑care procedure with quick recovery and very low risk of incontinence.",
      "Personalised diet and bowel regimen to help prevent recurrence.",
      "Experienced surgical team offering compassionate, private care.",
    ],
    timeline: [
      {
        title: "Consultation and Diagnosis",
        description: "Gentle examination to confirm fissure, assess chronicity, and rule out other causes of anal pain."
      },
      {
        title: "Conservative Care Trial",
        description: "Dietary fibre, sitz baths, topical medications; if persistent or recurrent, we plan definitive laser treatment."
      },
      {
        title: "Pre‑procedure Assessment",
        description: "Brief fitness check and anaesthesia clearance for the day‑care procedure."
      },
      {
        title: "Laser LIS and Fissurectomy",
        description: "A precise, minimally invasive release of the over‑tight sphincter; usually completed in 15–20 minutes."
      },
      {
        title: "Same‑day Discharge",
        description: "Go home after short observation with guidance on pain control, sitz baths, and softeners."
      },
      {
        title: "Follow‑up and Prevention",
        description: "A quick review to ensure healing and tailor a long‑term bowel plan to avoid recurrence."
      }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default LaserFissureTreatmentPage;