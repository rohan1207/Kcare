import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Stethoscope, Zap, ArrowRight } from "lucide-react";
import { useAppointmentModal } from "../contexts/AppointmentModalContext";

const STATS = [
  {
    icon: <Award className="h-5 w-5 text-turquoise-500" />,
    label: "12+ Years Experience",
  },
  {
    icon: <Stethoscope className="h-5 w-5 text-turquoise-500" />,
    label: "MBBS, DNB General Surgery",
  },
  {
    icon: <Zap className="h-5 w-5 text-turquoise-500" />,
    label: "Senior Surgeon at Ruby Hall Clinic",
  },
];

const SPECIALITIES = [
  "Hernia Repair",
  "Gallbladder Surgery",
  "Appendix Surgery",
  "Laser Piles, Fissure & Fistula",
  "Proctoscopy",
  "Pilonidal Sinus, Rectal Prolapse Surgery",
  "Intestinal Surgeries",
  "Diabetic Foot Care",
  "Breast Surgery",
  "Thyroid Surgery",
  "Burn Injuries & Skin Grafting",
  "Stapler Circumcision",
  "Rafaelo Surgeries",
  "Hydrocele, Torsion Testis & Ovaries",
  "Lymph Nodes, Lipoma, Cyst, Abscess",
  "Benign & Cancer Surgeries",
];

const MainFounder = () => {
  const { openModal } = useAppointmentModal();
  
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
    <section className="relative bg-gradient-to-b from-white via-turquoise-50/20 to-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_var(--tw-gradient-stops))] from-turquoise-100/20 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0 items-center shadow-2xl shadow-turquoise-900/10 ring-1 ring-turquoise-100/50"
        >
          {/* Text Content - 3 columns */}
          <div className="lg:col-span-3 p-8 sm:p-10 lg:p-12">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-turquoise-50 to-sky-50 rounded-full text-turquoise-700 font-medium text-sm border border-turquoise-100">
                Meet Our Founder
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-stone-900 leading-tight">
                Dr. Pramod Janardhan{" "}
                <span className="font-semibold bg-gradient-to-r from-turquoise-600 to-turquoise-500 bg-clip-text text-transparent">
                  Kadam
                </span>
              </h2>
              <p className="mt-2 text-base sm:text-lg text-turquoise-600 font-medium">
                MBBS, DNB General Surgery
              </p>
              <p className="mt-2 text-base sm:text-lg text-stone-700 leading-relaxed">
                Advanced Robotic, Laparoscopic & Laser Surgery
              </p>
              <p className="mt-2 text-sm text-stone-600">
                MMC Registration No. – 2007124223
              </p>
              <p className="mt-3 text-base text-stone-600 leading-relaxed max-w-2xl">
                Senior Surgeon at Ruby Hall Clinic, Pune with 12+ years of experience in advanced surgical procedures.
              </p>
            </motion.div>

            {/* Stats in horizontal layout */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap gap-4"
            >
              {STATS.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 bg-gradient-to-br from-turquoise-50/80 to-sky-50/50 px-4 py-2.5 rounded-xl border border-turquoise-100/60 group hover:border-turquoise-200 transition-all"
                >
                  <div className="flex-shrink-0">{stat.icon}</div>
                  <span className="font-medium text-stone-700 text-sm whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Specialities - Compact */}
            <motion.div variants={itemVariants} className="mt-6">
              <h4 className="text-xs font-semibold text-turquoise-700 uppercase tracking-wider mb-3">
                Key Specialities
              </h4>
              <div className="flex flex-wrap gap-2">
                {SPECIALITIES.map((spec, index) => (
                  <span
                    key={index}
                    className="bg-white/80 text-stone-700 text-xs font-medium px-3 py-1.5 rounded-lg border border-stone-200/60 hover:border-turquoise-300 hover:bg-turquoise-50/50 transition-all"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons - Compact */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/founders/pramod-kadam"
                className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-turquoise-400 to-turquoise-600 hover:from-turquoise-500 hover:to-turquoise-700 text-white text-sm font-semibold rounded-full shadow-lg shadow-turquoise-500/30 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Image Content - 2 columns */}
          <motion.div
            variants={imageVariants}
            className="lg:col-span-2 relative h-[400px] sm:h-[450px] lg:h-[500px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-turquoise-100/20 via-transparent to-transparent z-10" />
            <img
              src="/pramod4.jpg"
              alt="Dr. Pramod Kadam"
              className="absolute bottom-0 right-0 w-full h-full object-contain object-bottom lg:object-right-bottom  scale-110 lg:scale-100"
            />
            <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-turquoise-600 font-semibold text-sm">
                Expert Surgeon
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainFounder;
