import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Calendar } from "lucide-react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const Blur = () => (
  <>
    <div className="absolute top-0 right-0 -z-10 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-[400px] sm:w-[500px] md:w-[600px] rounded-full bg-gradient-to-br from-turquoise-50 to-sky-50/70 blur-3xl opacity-80" />
    <div className="absolute bottom-0 left-0 -z-10 h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] w-[350px] sm:w-[450px] md:w-[550px] lg:w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-turquoise-50/70 blur-3xl opacity-60" />
  </>
);

export default function ContactUs() {
  const [isMapLoading, setIsMapLoading] = useState(true);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="bg-gradient-to-b from-white to-slate-50/30 relative overflow-hidden -mt-20">
      <Blur />
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-[#019e9e] text-white overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-32"
      >
        <div className="absolute top-0 right-0 w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 bg-turquoise-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 bg-turquoise-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-turquoise-600/10 to-transparent mix-blend-overlay" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium "
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-white/90 font-light leading-relaxed"
          >
            We're here to help. Reach out to us for appointments, inquiries, or any support you may need.
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-14 md:-mt-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-[1.75rem] md:rounded-[2rem] shadow-xl ring-1 ring-turquoise-100/80 p-4 sm:p-6 md:p-8"
        >
          <ContactInfo />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Contact Forms */}
          <div className="lg:col-span-3 space-y-6 sm:space-y-8">
            {/* Enquiry Form */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-[1.75rem] md:rounded-[2rem] p-5 sm:p-6 md:p-8 shadow-lg ring-1 ring-turquoise-100/80"
            >
              <h2 className="text-2xl sm:text-3xl font-light text-stone-900 mb-1">
                General <span className="font-medium">Enquiry</span>
              </h2>
              <p className="text-sm sm:text-base text-stone-600/90 mb-4 sm:mb-6 font-light">
                Have a question? Send us your enquiry and we'll get back to you.
              </p>
              <ContactForm formType="enquiry" />
            </motion.div>

            {/* Appointment Form */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-[1.75rem] md:rounded-[2rem] p-5 sm:p-6 md:p-8 shadow-lg ring-1 ring-turquoise-100/80"
            >
              <h2 className="text-2xl sm:text-3xl font-light text-stone-900 mb-1">
                Schedule an <span className="font-medium">Appointment</span>
              </h2>
              <p className="text-sm sm:text-base text-stone-600/90 mb-4 sm:mb-6 font-light">
                Fill out the form below to book your consultation.
              </p>
              <ContactForm formType="appointment" />
            </motion.div>
          </div>

          {/* Map and Hours */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2 space-y-6 sm:space-y-8"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-[1.75rem] md:rounded-[2rem] p-5 sm:p-6 md:p-8 shadow-lg ring-1 ring-turquoise-100/80">
              <h3 className="text-xl sm:text-2xl font-light text-stone-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-turquoise-500" />
                Our Location
              </h3>
              <div
                className="relative w-full h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden group cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/hf7GZyREsrH8Yc3g9",
                    "_blank"
                  )
                }
              >
                {isMapLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-100 z-10">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 border-2 border-turquoise-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                <iframe
                  className="w-full h-full filter grayscale-[70%] contrast-125"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3781.418530950777!2d73.90642672496494!3d18.60023568250887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1skcare%20clinic%202ND%20Floor%2C%20Sai%20Aangan%2C%20283%2F3%2C%20Porwal%20Rd%2C%20opposite%202M%20Medico%2C%20Kotwal%20Colony%2C%20Dhanori%2C%20Pune!5e0!3m2!1sen!2sin!4v1764488821526!5m2!1sen!2sin"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setIsMapLoading(false)}
                ></iframe>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-[1.75rem] md:rounded-[2rem] p-5 sm:p-6 md:p-8 shadow-lg ring-1 ring-turquoise-100/80">
              <h3 className="text-xl sm:text-2xl font-light text-stone-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-turquoise-500" />
                Clinic Timings
              </h3>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-stone-600 font-light">
                <div className="flex justify-between items-center border-b border-stone-200/70 pb-2">
                  <span>Mon - Sat</span>
                  <div className="text-right">
                    <div className="font-medium text-stone-800 text-xs sm:text-sm">10:00 am – 3:00 pm</div>
                    <div className="font-medium text-stone-800 text-xs sm:text-sm">5:00 pm – 11:00 pm</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="font-medium text-stone-800 text-xs sm:text-sm">
                    4:00 pm – 8:00 pm
                  </span>
                </div>
                <div className="mt-2 text-[10px] sm:text-xs text-stone-500 italic">
                  (By prior appointments)
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
