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

const data = {
  name: "Dr. Shital Satish Sharma",
  role: "MBA Hospital Administration & Healthcare Management",
  subrole: "Clinical Associate to Senior Surgeon",
  tag1: "BAMS, PGD Emergency Medical Services",
  tag2: "MMC Registration No. – I‑70646‑A",
  tag3: "AHA Certified BLS & ACLS Instructor",
  image: "/sharma4.jpg",
  summary:
    " Dr. Shital Sharma is an experienced Physician and clinical associate to senior surgeon with over a decade of expertise in patient care and hospital administration. As an Associate Doctor to a senior surgeon, she plays a key role in accurate diagnosis, preoperative assessment, and postoperative management. Dr. Shital has assisted in hundreds of surgical procedures and ensures that every patient receives continuous support—from the first consultation through discharge and recovery. She is a trained female doctor for anorectal diseases like fissure, piles etc. with a skillful digital proctoscopy tool. Her commitment to clear communication, compassionate listening, and efficient coordination makes her a trusted point of contact for patients, ensuring a smooth and reassuring healthcare experience. Experienced and dedicated healthcare professional with over 13 years of experience in managing Accident and Emergency department at Ruby Hall Clinic, Pune. A certified Advanced Cardiovascular Life Support (ACLS) and Basic Life Support (BLS) instructor accredited by the American Heart Association (AHA). Demonstrated leadership in critical care environments, patient safety, and hospital administration. Skilled in emergency response coordination, healthcare operations, and training medical staff for optimal clinical outcomes.",
  details: [
    "10+ Years Experience",
    "Associate doctor to Senior Surgeon-Dr. Pramod Kadam since 10+ years",
    "13 years of experience at Ruby Hall Clinic, Pune as Emergency Physician & Assistant Manager of Accident & Emergency Department",
    "MBA Hospital Administration & Healthcare Management",
    "AHA Certified BLS & ACLS Instructor",
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
};

export default function ShitalSharmaDetail() {
  const [showAllSpecialities, setShowAllSpecialities] = useState(false);

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
                Meet Our Co-founder
              </motion.div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 mb-2 sm:mb-3 bg-gradient-to-r from-stone-900 to-stone-700 bg-clip-text text-transparent">
                {data.name}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-turquoise-600 font-semibold mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                <GraduationCap className="h-4 sm:h-5 w-4 sm:w-5" />
                {data.role}
              </p>
              <p className="text-base sm:text-lg md:text-xl text-turquoise-600 font-semibold mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
              <GraduationCap className="h-4 sm:h-5 w-4 sm:w-5" />
                {data.subrole}
              </p>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-stone-600">
               
                {data.tag1}
              </p>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-stone-600">
               
                {data.tag2}
              </p>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-stone-600 mb-3 sm:mb-4">
                
                {data.tag3}
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
            className="mt-12 sm:mt-16 md:mt-20"
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
              <p className="text-sm sm:text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
                Our expertise and insights featured in leading publications and media platforms.
              </p>
            </motion.div>

            {/* Recognitions Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {data.recognitions.map((recognition) => (
                <motion.div
                  key={recognition.id}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden shadow-lg ring-1 ring-turquoise-100/60 hover:ring-turquoise-200 hover:shadow-xl transition-all duration-300"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover="hover"
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={recognition.image}
                      alt={recognition.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-turquoise-500/95 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white ring-1 ring-turquoise-400/30 shadow-lg">
                        {recognition.type === "Article Publication" ? (
                          <FileText className="w-3.5 h-3.5" />
                        ) : (
                          <Radio className="w-3.5 h-3.5" />
                        )}
                        {recognition.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 md:p-8">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs sm:text-sm font-semibold text-turquoise-600">
                        {recognition.source}
                      </p>
                      <p className="text-[10px] sm:text-xs text-stone-500 font-medium">
                        {recognition.date}
                      </p>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl md:text-2xl font-light text-stone-900 mb-3 leading-tight">
                      <span className="font-medium">{recognition.title}</span>
                    </h3>
                    
                    <p className="text-xs sm:text-sm md:text-base text-stone-600/90 leading-relaxed font-light">
                      {recognition.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
