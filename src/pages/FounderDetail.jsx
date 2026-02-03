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
  Clock,
  Radio
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
    title: "Advanced Robotic, Laparoscopic & Laser Surgeon",
    role: "MBBS, DNB General Surgery",
    image: "/pramod4.jpg",
    summary:
      "Leading Robotic & Laparoscopic Surgeon in Pune, with over a decade of experience in General, Gastrointestinal & Trauma surgeries. He is dedicated to pioneering advanced surgical procedures with a commitment to exceptional patient care, resulting in countless successful surgeries & thousands of happy patients. He is passionate, always ready to take challenges for patient's faster and appropriate recovery and strict to the ethical practices.",
    details: [
      "12+ Years of Experience",
      "Consultant Surgeon at K Care Clinic",
      "Senior Robotic & Laparoscopic Surgeon at Ruby Hall Clinic",
      "Surgeon at MediNext Multispeciality Hospital, Baner"
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
          "Pilonidal Sinus",
          " Rectal Prolapse Surgery",
          "Intestinal Surgeries",
          "Diabetic Foot Care",
          "Breast Surgery",
          "Thyroid Surgery",
          "Burn Injuries & Skin Grafting",
          "Stapler Circumcision",
          "Rafaelo surgeries",
          "Torsion testis & ovaries",
          " Hydrocele",
          "Lymph nodes, Lipoma, Cyst",
           "Abscess Treatment",
          "Benign & Cancer Surgeries",
          "Wart Removal, Ingrown Toe Removal, Corn Removal"
        ],
      },
      {
        title: "Educational Qualifications",
        items: [
          "D. Y. Patil Medical College, Kolhapur – M.B.B.S. (Jun 2001 - Jun 2007)",
          "National board of examination – DNB General Surgery, Ruby Hall Clinic, Pune (Jan 2009 – Jan 2012)",
          "Diploma of Laparoscopic Surgery, Ruby Hall clinic Pune (2012)",
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
          "Diploma of Laparoscopic Surgery, Ruby Hall clinic Pune (2012)",
          "Robotic Surgery – Certified Robotic surgeon from Amrita Institute, Kochi (Kerala) - 2019 "

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
    recognitions: [
      {
        id: 1,
        type: "Article Publication",
        title: "Preventive Measures to Promote Healthy Gut in 2024",
        description: "Published article focusing on preventive healthcare strategies and measures to maintain optimal gut health and digestive wellness.",
        date: "2024",
        image: "/blog2_2.jpg",
        source: "India TV",
        icon: FileText,
      },
      {
        id: 2,
        type: "Article Publication",
        title: "Red Flags in Constipation – How Early Detection and Treatment Can Aid in Good Bowel Care",
        description: "Comprehensive article discussing warning signs of serious constipation, emphasizing the importance of early detection and timely treatment for maintaining bowel health.",
        date: "2024",
        image: "recognition2.png",
        source: "India TV",
        icon: FileText,
      },
      {
        id: 3,
        type: "Article Publication",
        title: "Navigating Red Flags – Recognizing Common Symptoms and Signs of Crohn's and Colitis",
        description: "In-depth article providing insights into identifying critical symptoms and warning signs of inflammatory bowel diseases including Crohn's disease and ulcerative colitis.",
        date: "2024",
        image: "recognition3.png",
        source: "HealthSite.com",
        icon: FileText,
      },
      {
        id: 4,
        type: "Article Publication",
        title: "Causes of Abdominal Pain and Inflammation in Females",
        description: "Expert analysis of various causes of abdominal pain and inflammation specific to female patients, providing valuable diagnostic and treatment insights.",
        date: "2024",
        image: "recognition4.png",
        source: "HealthSite.com",
        icon: FileText,
      },
      {
        id: 5,
        type: "Radio Program",
        title: "Stomach Pain & Digestive Health",
        description: "Special phone-in program on Hello Doctor Radio, addressing patient queries and concerns about stomach pain, digestive health, and gastrointestinal wellness.",
        date: "2024",
        image: "/blog2_2.jpg",
        source: "Hello Doctor Radio",
        icon: Radio,
      },
    ],
    photoGallery: [
      "/rec1.jpeg",
      "/rec2.jpeg",
      "/rec3.jpeg",
      "/rec4.jpeg",
      "/rec5.jpeg",
      "/rec6.jpeg",
      "/rec7.jpeg",
    ],
  },
 
};

export default function FounderDetail() {
  const { slug } = useParams();
  const data = FOUNDERS[slug];
  const [activeSection, setActiveSection] = useState(0);
  const [showAllSpecialities, setShowAllSpecialities] = useState(false);

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
    <section className="relative bg-gradient-to-br from-white via-turquoise-50/30 to-sky-50/20 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-16 md:top-20 right-5 sm:right-8 md:right-10 w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 bg-turquoise-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-5 sm:left-8 md:left-10 w-60 sm:w-72 md:w-80 lg:w-96 h-60 sm:h-72 md:h-80 lg:h-96 bg-sky-200/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-start mb-8 sm:mb-12 md:mb-16"
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
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-br from-turquoise-400/20 to-sky-400/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all duration-500"></div>
              
              {/* Image container */}
              <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg sm:shadow-xl ring-1 ring-turquoise-100/50 overflow-hidden">
                <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-turquoise-50 to-sky-50">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Floating badge */}
                <motion.div 
                  className="absolute top-6 sm:top-8 md:top-10 right-6 sm:right-8 md:right-10 bg-white rounded-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 shadow-md sm:shadow-lg ring-1 ring-turquoise-100"
                  initial={{ rotate: -5 }}
                  animate={{ rotate: 5 }}
                  transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Award className="h-3 sm:h-4 w-3 sm:w-4 text-turquoise-600" />
                    <span className="text-[10px] sm:text-xs font-semibold text-turquoise-700">Expert</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right: Info Column */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-5 md:space-y-6">
            <div>
              <motion.div 
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-turquoise-50 to-sky-50 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-turquoise-700 mb-3 sm:mb-4 ring-1 ring-turquoise-200/50 shadow-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="h-3 sm:h-4 w-3 sm:w-4" />
                Meet Our Founder
              </motion.div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 mb-2 sm:mb-3 bg-gradient-to-r from-stone-900 to-stone-700 bg-clip-text text-transparent">
                {data.name}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-turquoise-600 font-semibold mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                {data.title}
              </p>
              <p className="text-base sm:text-lg md:text-xl text-turquoise-600 font-semibold mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                <GraduationCap className="h-4 sm:h-5 w-4 sm:w-5" />
                {data.role}
              </p>
              
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-stone-600 mb-3 sm:mb-4">
                MMC Registration No. – 2007124223
              </p>
              
              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  {data.summary}
                </p>
              </div>
            </div>

            {/* Quick Stats/Details Cards */}
            {data.details?.length > 0 && (
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                variants={containerVariants}
              >
                {data.details.map((item, i) => (
                  <motion.div
                    key={i}
                    className="group bg-white/80 backdrop-blur-sm ring-1 ring-turquoise-100/60 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:ring-turquoise-300 hover:shadow-lg transition-all duration-300"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-0.5 sm:mt-1 h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-turquoise-500 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
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
            className="space-y-5 sm:space-y-6 md:space-y-8"
            variants={containerVariants}
          >
            {data.sections.map((section, idx) => (
              <motion.div
                key={idx}
                className="group relative bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg ring-1 ring-turquoise-100/60 hover:ring-turquoise-200 hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Decorative gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-turquoise-50/50 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative">
                  {/* Section Header */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6 pb-3 sm:pb-4 border-b border-turquoise-100">
                    <motion.div 
                      className="flex items-center justify-center h-10 sm:h-11 md:h-12 w-10 sm:w-11 md:w-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-turquoise-400 to-turquoise-600 text-white shadow-md sm:shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {getSectionIcon(section.title)}
                    </motion.div>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-stone-900">
                      {section.title}
                    </h2>
                  </div>

                  {/* Section Items */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {(() => {
                      // For the Key Specialities section show a limited list on small screens with a toggle
                      const isSpecialities = section.title && section.title.toLowerCase().includes("specialit");
                      const itemsToShow = isSpecialities && !showAllSpecialities ? section.items.slice(0, 6) : section.items;
                      return itemsToShow.map((li, i) => (
                      <motion.li
                        key={i}
                        className="flex gap-2 sm:gap-3 group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <CheckCircle2 className="h-4 sm:h-5 w-4 sm:w-5 text-turquoise-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <span className="text-xs sm:text-sm md:text-base text-stone-700 leading-relaxed group-hover/item:text-stone-900 transition-colors">
                          {li}
                        </span>
                      </motion.li>
                      ));
                    })()}
                  </ul>
                  {/* Toggle button for specialities on small screens */}
                  {section.title && section.title.toLowerCase().includes("specialit") && section.items.length > 6 && (
                    <div className="mt-3">
                      <button
                        onClick={() => setShowAllSpecialities((s) => !s)}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm text-turquoise-700 font-semibold px-2.5 py-1 rounded-md bg-turquoise-50/60 border border-turquoise-100 hover:bg-turquoise-100 transition"
                      >
                        {showAllSpecialities ? "Show less" : `+${section.items.length - 6} more`}
                        <ArrowRight className="w-3 h-3 transform" />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Recognitions Section - Only for Pramod Kadam */}
        {data.recognitions && data.recognitions.length > 0 && (
          <motion.div 
            id="recognitions"
            className="mt-12 sm:mt-16 md:mt-20 scroll-mt-24"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <motion.div 
              className="text-center mb-8 sm:mb-12 md:mb-16"
              variants={itemVariants}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-turquoise-50 to-sky-50 px-4 py-2 text-sm font-semibold text-turquoise-700 mb-4 ring-1 ring-turquoise-200/50 shadow-sm">
                <Award className="h-4 w-4" />
                <span>Recognitions & Publications</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-stone-900 mb-3 sm:mb-4">
                Media <span className="font-medium">Features</span> & <span className="font-serif italic text-turquoise-600">Publications</span>
              </h2>
            </motion.div>

            {/* Recognitions Bullet List */}
            <motion.div
              className="group relative bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg ring-1 ring-turquoise-100/60 hover:ring-turquoise-200 hover:shadow-xl transition-all duration-300 mb-8 sm:mb-12"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6 pb-3 sm:pb-4 border-b border-turquoise-100">
                <motion.div 
                  className="flex items-center justify-center h-10 sm:h-11 md:h-12 w-10 sm:w-11 md:w-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-turquoise-400 to-turquoise-600 text-white shadow-md sm:shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="h-5 w-5" />
                </motion.div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-stone-900">
                  Recognitions
                </h2>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {data.recognitions.map((recognition, i) => (
                  <motion.li
                    key={recognition.id}
                    className="flex gap-2 sm:gap-3 group/item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <CheckCircle2 className="h-4 sm:h-5 w-4 sm:w-5 text-turquoise-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm md:text-base text-stone-700 leading-relaxed group-hover/item:text-stone-900 transition-colors">
                      {recognition.title} ({recognition.source}, {recognition.date})
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Photo Gallery */}
            {data.photoGallery && data.photoGallery.length > 0 && (
              <motion.div
                className="group relative bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg ring-1 ring-turquoise-100/60 hover:ring-turquoise-200 hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6 pb-3 sm:pb-4 border-b border-turquoise-100">
                  <motion.div 
                    className="flex items-center justify-center h-10 sm:h-11 md:h-12 w-10 sm:w-11 md:w-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-turquoise-400 to-turquoise-600 text-white shadow-md sm:shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FileText className="h-5 w-5" />
                  </motion.div>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-stone-900">
                    Photo Gallery
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {data.photoGallery.map((imagePath, index) => (
                    <motion.div
                      key={index}
                      className="group relative overflow-hidden rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover="hover"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-turquoise-50 to-sky-50">
                        <img
                          src={imagePath}
                          alt={`Recognition Photo ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.target.src = '/placeholder-service.jpg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div 
          className="mt-8 sm:mt-12 md:mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
         
        </motion.div>
      </motion.div>
    </section>
  );
}
