import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Stethoscope, 
  ArrowRight, 
  CheckCircle2,
  Heart
} from "lucide-react";

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.4,
    },
  },
};

export default function GeneralPhysicianSection() {
  const highlights = [
    "Comprehensive primary care for all ages",
    "10+ years of clinical experience",
    "First point of contact for health concerns",
    "Seamless coordination & follow-up care"
  ];

  const keyServices = [
    "Stomach pain, vomiting, diarrhea",
    "Fever, infections, cough, cold",
    "Blood pressure & sugar management",
    "Health check-ups & preventive care"
  ];

  return (
    <section className="relative pt-0 pb-8 sm:pb-10 md:pb-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg border border-turquoise-100/50 overflow-hidden"
        >
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 p-6 sm:p-8 md:p-10">
            
            {/* Left Content */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-turquoise-500 to-turquoise-600 rounded-xl text-white flex-shrink-0">
                  <Stethoscope className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="flex-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-turquoise-50 px-3 py-1 text-xs font-medium text-turquoise-700 mb-2">
                    Primary Care
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-light text-stone-900 mb-2">
                    General <span className="font-medium">Physician</span>
                  </h2>
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
                    Comprehensive primary medical care for all ages with accurate diagnosis and personalized treatment.
                  </p>
                </div>
              </div>

              {/* Compact Highlights - Horizontal */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-2">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 sm:p-3 bg-turquoise-50/50 rounded-lg border border-turquoise-100/50"
                  >
                    <CheckCircle2 className="h-4 w-4 text-turquoise-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-stone-700 leading-tight">{item}</span>
                  </div>
                ))}
              </div>

              {/* Key Services - Compact Inline */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center gap-1.5">
                  <Heart className="h-4 w-4 text-turquoise-600" />
                  <span className="text-xs sm:text-sm font-medium text-stone-700">Common:</span>
                </div>
                {keyServices.slice(0, 3).map((service, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs sm:text-sm text-stone-600">
                    <div className="w-1 h-1 rounded-full bg-turquoise-500"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image & CTA */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div className="relative rounded-xl overflow-hidden mb-4 shadow-lg">
                <img
                  src="/generalp.jpg"
                  alt="General Physician"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="flex justify-end">
                <Link
                  to="/services/general-physician"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-turquoise-500 to-turquoise-600 text-white px-5 py-3 rounded-full text-sm font-semibold hover:from-turquoise-600 hover:to-turquoise-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-auto"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

