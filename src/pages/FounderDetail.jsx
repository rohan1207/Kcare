import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Award, 
  GraduationCap, 
  Briefcase, 
  Users, 
  FileText, 
  Lightbulb,
  Calendar,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Heart,
  Shield,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock
} from "lucide-react";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
  hover: {
    y: -5,
    transition: { duration: 0.2 },
  },
};

const FOUNDERS = {
  "pramod-kadam": {
    name: "Dr. Pramod Janardhan Kadam",
    role: "MBBS, DNB General Surgery",
    image: "/pramod4.jpg",
    summary:
      "Advanced Robotic, Laparoscopic & Laser Surgery. Leading Robotic & Laparoscopic Surgeon in Pune, with over a decade of experience in General, Gastrointestinal & Trauma surgeries. He is dedicated to pioneering advanced surgical procedures with a commitment to exceptional patient care, resulting in countless successful surgeries & thousands of happy patients. He is passionate, always ready to take challenges for patient's faster and appropriate recovery and strict to the ethical practices.",
    details: [
      "MMC Registration No. – 2007124223",
      "12+ Years of Experience",
      "Senior Surgeon at Ruby Hall Clinic, Pune",
    ],
    sections: [
      {
        title: "Key Specialities",
        items: [
          "Hernia Repair",
          "Gallbladder Surgery",
          "Appendix Surgery",
          "Laser Piles, Fissure & Fistula & other anorectal Surgeries",
          "Proctoscopy",
          "Pilonidal Sinus, Rectal Prolapse Surgery",
          "Intestinal Surgeries",
          "Diabetic Foot Care",
          "Breast Surgery",
          "Thyroid Surgery",
          "Burn Injuries & Skin Grafting",
          "Stapler Circumcision",
          "Rafaelo surgeries",
          "Torsion testis & ovaries, Hydrocele",
          "Lymph nodes, Lipoma, Cyst, Abscess, Corn, Wart, Toe nail removal",
          "Benign & Cancer Surgeries",
        ],
      },
      {
        title: "Educational Qualifications",
        items: [
          "D. Y. Patil Medical College, Kolhapur – M.B.B.S. (Jun 2001 - Jun 2007)",
          "National board of examination – DNB General Surgery, Ruby Hall Clinic, Pune (Jan 2009 – Jan 2012)",
          "Robotic Surgery – Certified Robotic surgeon from Amrita Institute, Kochi (Kerala) - 2019",
        ],
      },
      {
        title: "Skills",
        items: [
          "Laparoscopic Surgery",
          "Robotic Surgery",
          "Laser and stapler surgeries",
          "Rafaelo surgeries",
        ],
      },
      {
        title: "National Workshops",
        items: [
          "National Workshop by Coloplast Academy on 'Wound Care' at Hotel Sheraton Grand, Mahabalipuram, Tamil Nadu – on 6/5/2023",
          "Live Surgery Demonstration on Anorectal Disorders by Abbott on 21/9/2023",
          "National Surgical Gastroenterology Advanced Animal Lab Workshop – at AIG Hospital - Hyderabad – on 8/12/2023",
          "Live Operative Workshops on Piles at Zen Hospital, Chembur Mumbai – on 7/01/2024",
          "Live Operative Workshop of Rafaelo Procedure – A new age treatment for Haemorrhoids - at Global Hospital, Parel, Mumbai – on 9/1/2024",
          "Young Surgeon Achiever Program - Asian Institute of Gastroenterology, Hyderabad – on 13/9/2025",
        ],
      },
      {
        title: "Facebook Live Sessions / Interview",
        items: [
          "Understanding and Misunderstanding - 'Piles' on 23/1/24",
          "Gall Bladder Stones - on 7/3/2024",
        ],
      },
      {
        title: "Online Topic Presentation / Zoom Meetings",
        items: [
          "Acute Lymphoblastic Leukemia",
          "Guidelines for Prevention of Surgical Sites Infection",
          "Antibiotics Role in Surgical Care",
          "Drug Interaction",
          "Advancement of Robotic Surgery",
          "Torsion of Testis",
          "Sleeve Gastrectomy as a weight loss surgery and in resolution of metabolic syndrome related disorder",
        ],
      },
      {
        title: "Research",
        items: [
          "Bariatric surgery – Sleeve Gastrectomy",
          "Seal Study",
          "Diverticulitis Research work",
          "Participated in Drug trial in Diabetic Foot – Inj. Daptomycin",
        ],
      },
      {
        title: "Major Incident Training",
        items: [
          "Trainee In Diploma of Laparoscopic Surgery, Ruby Hall clinic Pune",
        ],
      },
      {
        title: "Clinical Research Experience",
        items: [
          "Sub – Investigator for A Phase 3 Randomised, double Blind, Dose Response Stratified, Placebo – Controlled study Evaluation the safety and efficacy of SPD-476 Versus Placebo over 104 weeks in the prevention of Recurrence of Diverticulitis from 2009-2012",
        ],
      },
      {
        title: "National Conference",
        items: [
          "ASICON, 2009",
          "META Search, Mumbai, 2010",
          "MASICON, 2011",
        ],
      },
      {
        title: "Membership",
        items: [
          "Member of Pune Surgical Society",
        ],
      },
    ],
  },
  "shital-sharma": {
    name: "Dr. Shital Satish Sharma",
    role: "BAMS, PGD Emergency Medical Services",
    image: "/sharma4.png",
    summary:
      "Dr. Shital Sharma is an experienced Physician with over a decade of expertise in patient care and hospital administration. As an Associate Doctor to a senior surgeon, she plays a key role in accurate diagnosis, preoperative assessment, and postoperative management. Dr. Shital has assisted in hundreds of surgical procedures and ensures that every patient receives continuous support—from the first consultation through discharge and recovery. She is a trained female doctor for anorectal diseases like fissure, piles etc. with a skillful digital proctoscopy tool. Her commitment to clear communication, compassionate listening, and efficient coordination makes her a trusted point of contact for patients, ensuring a smooth and reassuring healthcare experience. Experienced and dedicated healthcare professional with over 13 years of experience in managing Accident and Emergency department at Ruby Hall Clinic, Pune. A certified Advanced Cardiovascular Life Support (ACLS) and Basic Life Support (BLS) instructor accredited by the American Heart Association (AHA). Demonstrated leadership in critical care environments, patient safety, and hospital administration. Skilled in emergency response coordination, healthcare operations, and training medical staff for optimal clinical outcomes.",
    details: [
      "MMC Registration No. – I-70646-A",
      "MBA Hospital Administration & Healthcare Management",
      "AHA Certified BLS & ACLS Instructor",
      "Associate doctor to Senior Surgeon-Dr. Pramod Kadam since 10+ years",
      "13 years of experience at Ruby Hall Clinic, Pune as Emergency Physician & Assistant Manager of Accident & Emergency Department",
    ],
    sections: [
      {
        title: "Education",
        items: [
          "BAMS – Bachelor of Ayurvedic Medicine & Surgery, Tilak Aayurved College, Pune (2007-2012)",
          "PGDEMS – Post Graduate Diploma in Emergency Medical Services, Symbiosis College, Senapati Bapat Road, Pune (2014)",
          "ISO Certified Diploma in Aesthetics & Clinical Diet, Indian Institute of Cosmetology, Trichology & Nutrition (IICTN), Pune (2019)",
          "MBA – Hospital Administration & Healthcare Management, D.Y. Patil College, Pune (2023)",
        ],
      },
      {
        title: "Professional Development",
        items: [
          "Conducted regular training workshops on emergency response and life-saving interventions & First aids education",
          "Participated in seminars and conferences on hospital management and patient care protocols",
          "Continuous learning in healthcare technologies and critical care systems",
          "Core committee member of emergency response team during Marathon",
          "Conduct ACLS and BLS training sessions as an AHA-certified instructor for Public awareness",
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
  const [activeSection, setActiveSection] = useState(0);

  if (!data) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">Founder not found</h1>
        <p className="text-stone-600 mt-2">Please check the URL.</p>
      </div>
    );
  }

  // Icon mapping for different section titles
  const getSectionIcon = (title) => {
    const iconMap = {
      "Key Specialities": <Heart className="h-5 w-5" />,
      "Educational Qualifications": <GraduationCap className="h-5 w-5" />,
      "Education": <GraduationCap className="h-5 w-5" />,
      "Skills": <Sparkles className="h-5 w-5" />,
      "National Workshops": <Users className="h-5 w-5" />,
      "Facebook Live Sessions / Interview": <FileText className="h-5 w-5" />,
      "Online Topic Presentation / Zoom Meetings": <Lightbulb className="h-5 w-5" />,
      "Research": <TrendingUp className="h-5 w-5" />,
      "Major Incident Training": <Shield className="h-5 w-5" />,
      "Clinical Research Experience": <FileText className="h-5 w-5" />,
      "National Conference": <Calendar className="h-5 w-5" />,
      "Membership": <Award className="h-5 w-5" />,
      "Professional Development": <Briefcase className="h-5 w-5" />,
      "Languages": <Users className="h-5 w-5" />,
    };
    return iconMap[title] || <CheckCircle2 className="h-5 w-5" />;
  };

  return (
    <section className="relative bg-gradient-to-br from-white via-turquoise-50/30 to-sky-50/20 py-16 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-turquoise-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div 
          className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start mb-16"
          variants={itemVariants}
        >
          {/* Left: Image Column */}
          <div className="lg:col-span-2">
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-turquoise-400/20 to-sky-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              {/* Image container */}
              <div className="relative bg-white rounded-2xl p-6 shadow-xl ring-1 ring-turquoise-100/50 overflow-hidden">
                <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-turquoise-50 to-sky-50">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Floating badge */}
                <motion.div 
                  className="absolute top-10 right-10 bg-white rounded-full px-4 py-2 shadow-lg ring-1 ring-turquoise-100"
                  initial={{ rotate: -5 }}
                  animate={{ rotate: 5 }}
                  transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
                >
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-turquoise-600" />
                    <span className="text-xs font-semibold text-turquoise-700">Expert</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right: Info Column */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <motion.div 
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-turquoise-50 to-sky-50 px-5 py-2 text-sm font-semibold text-turquoise-700 mb-4 ring-1 ring-turquoise-200/50 shadow-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="h-4 w-4" />
                Meet Our Expert
              </motion.div>
              
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 mb-3 bg-gradient-to-r from-stone-900 to-stone-700 bg-clip-text text-transparent">
                {data.name}
              </h1>
              
              <p className="text-xl text-turquoise-600 font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                {data.role}
              </p>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-stone-600 leading-relaxed">
                  {data.summary}
                </p>
              </div>
            </div>

            {/* Quick Stats/Details Cards */}
            {data.details?.length > 0 && (
              <motion.div 
                className="grid sm:grid-cols-2 gap-4"
                variants={containerVariants}
              >
                {data.details.map((item, i) => (
                  <motion.div
                    key={i}
                    className="group bg-white/80 backdrop-blur-sm ring-1 ring-turquoise-100/60 rounded-xl p-4 hover:ring-turquoise-300 hover:shadow-lg transition-all duration-300"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 h-2 w-2 rounded-full bg-turquoise-500 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                      <p className="text-sm text-stone-700 leading-relaxed font-medium">
                        {item}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Sections Grid */}
        {data.sections?.length > 0 && (
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
          >
            {data.sections.map((section, idx) => (
              <motion.div
                key={idx}
                className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg ring-1 ring-turquoise-100/60 hover:ring-turquoise-200 hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Decorative gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-turquoise-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative">
                  {/* Section Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-turquoise-100">
                    <motion.div 
                      className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-turquoise-400 to-turquoise-600 text-white shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {getSectionIcon(section.title)}
                    </motion.div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-stone-900">
                      {section.title}
                    </h2>
                  </div>

                  {/* Section Items */}
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {section.items.map((li, i) => (
                      <motion.li
                        key={i}
                        className="flex gap-3 group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-turquoise-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <span className="text-stone-700 leading-relaxed group-hover/item:text-stone-900 transition-colors">
                          {li}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-block bg-gradient-to-r from-turquoise-50 to-sky-50 rounded-2xl p-8 ring-1 ring-turquoise-100 shadow-xl">
            <h3 className="text-2xl font-bold text-stone-900 mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-stone-600 mb-6 max-w-md mx-auto">
              Book your consultation today and experience exceptional care.
            </p>
            <motion.button
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-turquoise-500 to-turquoise-600 hover:from-turquoise-600 hover:to-turquoise-700 text-white font-semibold rounded-full shadow-lg shadow-turquoise-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Appointment
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
