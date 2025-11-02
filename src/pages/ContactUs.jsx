import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Calendar } from "lucide-react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const Blur = () => (
  <>
    <div className="absolute top-0 right-0 -z-10 h-[700px] w-[600px] rounded-full bg-gradient-to-br from-turquoise-50 to-sky-50/70 blur-3xl opacity-80" />
    <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-turquoise-50/70 blur-3xl opacity-60" />
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
        className="relative bg-[#019e9e] text-white overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-turquoise-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-turquoise-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-turquoise-600/10 to-transparent mix-blend-overlay" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-4xl md:text-6xl font-light tracking-tight"
          >
            Get in <span className="font-medium">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90 font-light leading-relaxed"
          >
            We're here to help. Reach out to us for appointments, inquiries, or
            any support you may need.
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-white/90 backdrop-blur-sm rounded-[2rem] shadow-xl ring-1 ring-turquoise-100/80 p-6 sm:p-8"
        >
          <ContactInfo />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-3 bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 shadow-lg ring-1 ring-turquoise-100/80"
          >
            <h2 className="text-3xl font-light text-stone-900 mb-1">
              Schedule an <span className="font-medium">Appointment</span>
            </h2>
            <p className="text-stone-600/90 mb-6 font-light">
              Fill out the form below to book your consultation.
            </p>
            <ContactForm />
          </motion.div>

          {/* Map and Hours */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 shadow-lg ring-1 ring-emerald-100/80">
              <h3 className="text-2xl font-light text-stone-900 mb-4 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-emerald-500" />
                Our Location
              </h3>
              <div
                className="relative w-full h-64 rounded-xl overflow-hidden group cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Camp,+Pune,+Maharashtra",
                    "_blank"
                  )
                }
              >
                {isMapLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-100 z-10">
                    <div className="w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                <iframe
                  className="w-full h-full filter grayscale-[70%] contrast-125"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15132.89122212101!2d73.863997!3d18.519568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06546666667%3A0x43a3d367b3a9ac19!2sCamp%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620201394019!5m2!1sen!2sin"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setIsMapLoading(false)}
                ></iframe>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 shadow-lg ring-1 ring-emerald-100/80">
              <h3 className="text-2xl font-light text-stone-900 mb-4 flex items-center gap-3">
                <Clock className="w-6 h-6 text-emerald-500" />
                Opening Hours
              </h3>
              <div className="space-y-3 text-stone-600 font-light">
                <div className="flex justify-between items-center border-b border-stone-200/70 pb-2">
                  <span>Mon - Fri</span>
                  <span className="font-medium text-stone-800">
                    11:00 am – 7:00 pm
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-200/70 pb-2">
                  <span>Saturday</span>
                  <span className="font-medium text-stone-800">
                    11:00 am – 3:00 pm
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="font-medium text-red-500 bg-red-50 px-2 py-1 rounded-full text-xs">
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
