import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const FOUNDERS = {
  "pramod-kadam": {
    name: "Dr. Pramod Janardhan Kadam",
    role: "Founder & Lead General / Laparoscopic & Robotic Surgeon",
    image: "/pramod4.jpg",
    summary:
      "Highly experienced and board‑certified general surgeon with 10+ years in advanced laparoscopic, laser and robotic procedures; passionate about ethical practice, faster recovery and excellent patient outcomes.",
    details: [
      "MMC Registration No.: 2007124223",
      "Email: docpramodk@gmail.com",
      "Phone: 98907 77456",
      "Languages: English, Hindi, Marathi",
      "Leading Laparoscopic & Robotic Surgeon at Ruby Hall Clinic, Pune",
      "10+ years of experience; countless successful surgeries and thousands of happy patients",
      "Present Address: Shivneri Society, 33/2/22, Plot No.36, Behind Sky Gym, Off Pan Club Road, Baner, Pune – 411045",
      "Date of Birth: 07 June 1983",
    ],
    sections: [
      {
        title: "Educational Qualifications",
        items: [
          "MBBS – D. Y. Patil Medical College, Kolhapur (Jun 2001 – Jun 2007)",
          "DNB (General Surgery) – Ruby Hall Clinic, Pune; National Board of Examinations (Jan 2009 – Jan 2012)",
          "Certified Robotic Surgeon – Amrita Institute, Kochi, Kerala (2019)",
        ],
      },
      {
        title: "Specialities",
        items: [
          "Fissure, Piles, Fistula, Pilonidal Sinus, Rectal Prolapse",
          "Hernia, Appendix, Gallbladder & Intestinal Surgeries",
          "Benign & Cancer Surgeries",
          "Breast & Thyroid Surgeries",
          "Diabetic Foot Ulcers",
          "Torsion testis & ovaries, Stapler circumcision, Hydrocele",
          "Burn injuries & Skin grafting",
          "Lymph nodes, Lipoma, Cyst, Abscess, Corn, Wart removal",
        ],
      },
      {
        title: "Skills",
        items: [
          "Laparoscopic Surgery",
          "Robotic Surgery",
          "Laser and Stapler Surgeries",
          "Rafaelo Procedures",
        ],
      },
      {
        title: "Article Publications / Media",
        items: [
          "India TV – Preventive measures to promote a healthy gut in 2024",
          "India TV – Red flags in constipation: early detection and treatment for good bowel care",
          "Healthsite.com – Navigating red flags: recognizing common symptoms and signs of Crohn's and Colitis",
          "Healthsite.com – Causes of abdominal pain and inflammation in females",
        ],
      },
      {
        title: "National Workshops",
        items: [
          "Coloplast Academy National Workshop on Wound Care – Hotel Sheraton Grand, Mahabalipuram, Tamil Nadu (06/05/2023)",
          "Live surgery demonstration on anorectal disorders by Abbott (21/09/2023)",
          "National Surgical Gastroenterology Advanced Animal Lab Workshop – AIG Hospital, Hyderabad (08/12/2023)",
          "Live operative workshops on piles – Zen Hospital, Chembur, Mumbai (07/01/2024)",
          "Live operative workshop of Rafaelo procedure for haemorrhoids – Global Hospital, Parel, Mumbai (09/01/2024)",
        ],
      },
      {
        title: "Facebook Live Sessions / Interviews",
        items: [
          "Understanding and Misunderstanding: Piles (23/01/2024)",
          "Gallbladder Stones (07/03/2024)",
        ],
      },
      {
        title: "Online Presentations / Zoom Meetings",
        items: [
          "Acute Lymphoblastic Leukemia",
          "Guidelines for Prevention of Surgical Site Infection",
          "Role of Antibiotics in Surgical Care",
          "Drug Interactions",
          "Advancements in Robotic Surgery",
          "Torsion of Testis",
          "Sleeve Gastrectomy as a weight loss surgery and resolution of metabolic syndrome related disorders",
        ],
      },
      {
        title: "Research",
        items: [
          "Bariatric Surgery – Sleeve Gastrectomy",
          "SEAL Study",
          "Diverticulitis research work",
          "Participated in drug trial in Diabetic Foot – Inj. Daptomycin",
        ],
      },
      {
        title: "Training & Teaching",
        items: [
          "Major Incident Training – Trainee in Diploma of Laparoscopic Surgery, Ruby Hall Clinic, Pune",
          "Sub‑investigator: Phase 3 randomized, double‑blind, dose‑response, stratified, placebo‑controlled study evaluating SPD‑476 vs placebo over 104 weeks in prevention of recurrence of diverticulitis (2009–2012)",
        ],
      },
      {
        title: "Conferences & Memberships",
        items: [
          "ASICON (2009)",
          "META Search, Mumbai (2010)",
          "MASICON (2011)",
          "Member – Pune Surgical Society",
        ],
      },
      {
        title: "Present Appointment",
        items: [
          "Consultant General Surgeon – Ruby Hall Clinic, Pune (Panel Consultant)",
        ],
      },
      {
        title: "Practical Procedures (Assisted)",
        items: [
          "Sleeve Gastrectomy",
          "Roux‑en‑Y Gastric Bypass",
          "Thymectomy",
          "Adrenalectomy",
          "Anterior Resection of Rectum",
          "Kidney Transplant",
        ],
      },
      {
        title: "Associated Hospitals",
        items: [
          "Surya Hospital, Baner, Pune",
          "Chelaram Diabetic Hospital, Pashan, Pune",
        ],
      },
    ],
  },
  "shital-sharma": {
    name: "Dr. Shital Satish Sharma",
    role: "Co-founder & CEO",
    image: "/sharma4.png",
    summary:
      "BAMS, PGDEMS, MBA (Hospital Administration & Healthcare Management). AHA-certified BLS & ACLS Instructor with 13+ years in Emergency Medicine and hospital operations.",
    details: [
      "MMC Registration No. – I-70646-A",
      "Associate doctor to Senior Surgeon-Dr. Pramod Kadam since 10+ years",
      "13 years of experience at Ruby Hall Clinic, Pune as Emergency Physician & Assistant Manager of Accident & Emergency Department.",
      "Trained female doctor for anorectal diseases (fissure, piles, etc.) with skillful digital proctoscopy.",
    ],
    sections: [
      {
        title: "Education",
        items: [
          "BAMS – Bachelor of Ayurvedic Medicine & Surgery, Tilak Ayurved College, Pune (2007-2012)",
          "PGDEMS – Post Graduate Diploma in Emergency Medical Services, Symbiosis College, Pune (2014)",
          "ISO Certified Diploma in Aesthetics & Clinical Diet, IICTN Pune",
          "MBA – Hospital Administration & Healthcare Management, D.Y. Patil College, Pune (2023)",
        ],
      },
      {
        title: "Professional Development",
        items: [
          "Conducted regular training workshops on emergency response and life-saving interventions & first-aid education.",
          "Participated in seminars and conferences on hospital management and patient care protocols.",
          "Continuous learning in healthcare technologies and critical care systems.",
          "Core committee member of emergency response team during Marathon.",
          "Conducts ACLS and BLS training sessions as an AHA-certified instructor for public awareness.",
        ],
      },
      {
        title: "Languages",
        items: ["English", "Marathi", "Hindi", "Marwadi"],
      },
    ],
  },
};

export default function FounderDetail() {
  const { slug } = useParams();
  const data = FOUNDERS[slug];

  if (!data) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">Founder not found</h1>
        <p className="text-stone-600 mt-2">Please check the URL.</p>
      </div>
    );
  }

  return (
    <section className="relative bg-gradient-to-b from-white via-turquoise-50/20 to-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-3 gap-10 items-center mb-10">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-turquoise-50 px-4 py-2 text-sm font-medium text-turquoise-700 mb-4 ring-1 ring-turquoise-100">
              Meet Our Leadership
            </div>
            <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-stone-900">
              {data.name}
            </h1>
            <p className="text-turquoise-700 mt-2 font-medium">{data.role}</p>
            <p className="mt-4 text-lg text-stone-600 max-w-2xl">{data.summary}</p>
          </div>
          <div className="relative h-64 lg:h-72 bg-white rounded-2xl ring-1 ring-turquoise-100 overflow-hidden">
            <img
              src={data.image}
              alt={data.name}
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Quick details */}
        {data.details?.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {data.details.map((item, i) => (
              <div
                key={i}
                className="bg-white/80 ring-1 ring-turquoise-100 rounded-xl p-5 text-stone-700"
              >
                {item}
              </div>
            ))}
          </div>
        )}

        {/* Sections */}
        {data.sections?.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-2xl font-medium text-stone-900 mb-4">
              {section.title}
            </h2>
            <ul className="space-y-2 text-stone-700">
              {section.items.map((li, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-turquoise-500"></span>
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
