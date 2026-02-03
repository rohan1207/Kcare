import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Stethoscope, Zap, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useAppointmentModal } from "../contexts/AppointmentModalContext";
import { useState } from "react";

const STATS = [
  {
    icon: <Award className="h-5 w-5 text-turquoise-500" />,
    label: "12+ Years Experience",
  },
  {
    icon: <Stethoscope className="h-5 w-5 text-turquoise-500" />,
    label: "Consultant Surgeon at K Care Clinic",
  },
  {
    icon: <Zap className="h-5 w-5 text-turquoise-500" />,
    label: "Senior Robotic & Laparoscopic Surgeon at Ruby Hall Clinic",
  },
  {
    icon: <Stethoscope className="h-5 w-5 text-turquoise-500" />,
    label: "Surgeon at MediNext Multispeciality Hospital, Baner",
  },
  
];

const SPECIALITIES = [
  "Robotic Surgery",
  " Laparoscopic Surgery",
  "Hernia Repair",
  "Gallbladder Surgery",
  "Appendix Surgery",
  "Laser Piles, Fissure & Fistula",
  "Proctoscopy",
  "Pilonidal Sinus",
  " Rectal Prolapse Surgery",
  "Intestinal Surgeries",
  "Diabetic Foot Care",
  "Breast Surgery",
  "Thyroid Surgery",
  "Burn Injuries & Skin Grafting",
  "Stapler Circumcision",
  "Rafaelo Surgeries",
  "Hydrocele",
  " Torsion Testis & Ovaries",
  "Lymph Nodes, Lipoma, Cyst",
  "Abscess Treatment",
  "Benign & Cancer Surgeries",
  "Wart Removal, Ingrown Toe Removal, Corn Removal"
];

const MainFounder = () => {
  const { openModal } = useAppointmentModal();
  const [showAllSpecialities, setShowAllSpecialities] = useState(false);
  
  const INITIAL_DISPLAY_COUNT = 5;
  const MOBILE_DISPLAY_COUNT = 3;
  // Use CSS classes to control display, show fewer on mobile by default
  const displayedSpecialities = showAllSpecialities 
    ? SPECIALITIES 
    : SPECIALITIES.slice(0, INITIAL_DISPLAY_COUNT);
  
  // Show all stats by default
  const displayedStats = STATS;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        delay: 0.3,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-turquoise-50/20 to-white py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_var(--tw-gradient-stops))] from-turquoise-100/20 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <span className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full bg-turquoise-50 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm font-medium text-turquoise-700 mb-3 sm:mb-4 md:mb-6 shadow-sm shadow-turquoise-100/50">
            <span className="h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-turquoise-500"></span>
            Meet Our Doctors
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-0 items-center shadow-xl sm:shadow-2xl shadow-turquoise-900/10 ring-1 ring-turquoise-100/50"
        >
          {/* Image Content - 2 columns - Show first on mobile */}
          <motion.div
            variants={imageVariants}
            className="order-1 lg:order-none lg:col-span-2 relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-turquoise-100/20 via-transparent to-transparent z-10" />
            <img
              src="/pramod4.jpg"
              alt="Dr. Pramod Kadam"
              className="absolute bottom-0 right-0 w-full h-full object-contain object-bottom lg:object-right-bottom scale-110 lg:scale-100"
            />
            
          </motion.div>

          {/* Text Content - 3 columns - Show second on mobile */}
          <div className="order-2 lg:order-none lg:col-span-3 p-4 sm:p-6 md:p-8 lg:p-12">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-turquoise-50 to-sky-50 rounded-full text-turquoise-700 font-medium text-xs sm:text-sm border border-turquoise-100">
              Meet our Surgeon
              </span>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-stone-900 leading-tight">
                Dr. Pramod Janardhan{" "}
                <span className="font-semibold bg-gradient-to-r from-turquoise-600 to-turquoise-500 bg-clip-text text-transparent">
                  Kadam
                </span>
              </h2>
              
              <p className="mt-1 sm:mt-2 text-sm sm:text-base text-bold font-semibold md:text-lg text-turquoise-600 leading-relaxed">
              Advanced Robotic, Laparoscopic & Laser Surgeon
              </p>
              <p className="mt-2 text-sm sm:text-base md:text-lg text-turquoise-600 font-medium">
                MBBS, DNB General Surgery
              </p>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-stone-600">
                MMC Registration No. – 2007124223
              </p>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
              Leading Robotic & Laparoscopic Surgeon in Pune, with 12+ years of experience in advanced surgical procedures.
              </p>
            </motion.div>

            {/* Stats in horizontal layout - Compact on mobile */}
            <motion.div
              variants={itemVariants}
              className="mt-3 sm:mt-4 md:mt-6"
            >
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                {displayedStats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 sm:gap-2.5 bg-gradient-to-br from-turquoise-50/80 to-sky-50/50 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-lg sm:rounded-xl border border-turquoise-100/60 group hover:border-turquoise-200 transition-all flex-1 sm:flex-initial min-w-0"
                  >
                    <div className="flex-shrink-0">{stat.icon}</div>
                    <span className="font-medium text-stone-700 text-[10px] sm:text-xs md:text-sm truncate sm:whitespace-nowrap">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Specialities - Compact with Show More/Less */}
            <motion.div variants={itemVariants} className="mt-3 sm:mt-4 md:mt-6">
              <h4 className="text-[10px] sm:text-xs font-semibold text-turquoise-700 uppercase tracking-wider mb-1.5 sm:mb-2 md:mb-3">
                Key Specialities
              </h4>
              <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                {displayedSpecialities.map((spec, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                    className="bg-white/80 text-stone-700 text-[9px] sm:text-[10px] md:text-xs font-medium px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 rounded-md sm:rounded-lg border border-stone-200/60 hover:border-turquoise-300 hover:bg-turquoise-50/50 transition-all"
                  >
                    {spec}
                  </motion.span>
                ))}
                <button
                  onClick={() => setShowAllSpecialities(!showAllSpecialities)}
                  className="inline-flex items-center gap-1 bg-gradient-to-r from-turquoise-50 to-sky-50 text-turquoise-700 text-[9px] sm:text-[10px] md:text-xs font-semibold px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 rounded-md sm:rounded-lg border border-turquoise-200 hover:border-turquoise-300 hover:from-turquoise-100 hover:to-sky-100 transition-all group"
                >
                  {showAllSpecialities ? (
                    <>
                      Show Less
                      <ChevronUp className="h-2.5 sm:h-3 w-2.5 sm:w-3 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  ) : (
                    <>
                      +{SPECIALITIES.length - INITIAL_DISPLAY_COUNT} More
                      <ChevronDown className="h-2.5 sm:h-3 w-2.5 sm:w-3 group-hover:translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* CTA Buttons - Compact */}
            <motion.div
              variants={itemVariants}
              className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 flex flex-wrap gap-2 sm:gap-3"
            >
              <Link
                to="/founders/pramod-kadam"
                className="group inline-flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-turquoise-400 to-turquoise-600 hover:from-turquoise-500 hover:to-turquoise-700 text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg shadow-turquoise-500/30 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="h-3 sm:h-4 w-3 sm:w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainFounder;
