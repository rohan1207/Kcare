import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, HeartPulse, Stethoscope, ArrowRight, 
  Calendar, Clock, CheckCircle2, Phone, Mail, MapPin 
} from 'lucide-react';
import servicesData from '../data/servicesData.json';

const serviceImages = {
  "piles-treatment": "/Piles.jpg",
  "robotic-hernia-repair": "/Hernia.jpg",
  "gall-bladder-removal": "/Gall_Bladder_Stones.jpg",
  "laparoscopic-appendectomy": "/Appendicitis.jpg",
  "advanced-thyroid-surgery": "/Advance_Thyroid_Surgery.jpg",
  "breast-surgery": "/Breast_Surgery.jpg",
};

const Blur = () => (
  <>
    <div className="absolute top-0 right-0 -z-10 h-[700px] w-[600px] rounded-full bg-gradient-to-br from-turquoise-50 to-sky-50/70 blur-3xl opacity-80" />
    <div className="absolute bottom-1/2 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-turquoise-50/70 blur-3xl opacity-60" />
  </>
);

// Vertical Timeline Step Component
const TimelineStep = ({ step, index, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Vertical Line */}
      {index !== 4 && (
        <div className="absolute left-[15px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-turquoise-400 to-turquoise-200/50" />
      )}
      
      {/* Step Circle */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
        className={`absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm shadow-lg
          ${isActive 
            ? 'bg-gradient-to-br from-turquoise-500 to-turquoise-600 text-white ring-4 ring-turquoise-100' 
            : 'bg-white text-turquoise-600 ring-2 ring-turquoise-200'
          }`}
      >
        {step.step}
      </motion.div>

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02, x: 5 }}
        className={`bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border
          ${isActive 
            ? 'border-turquoise-300 ring-2 ring-turquoise-100' 
            : 'border-turquoise-100/50 hover:border-turquoise-200'
          }`}
      >
        <h4 className="text-lg font-semibold text-stone-900 mb-2 flex items-center gap-2">
          {step.title}
          {isActive && <CheckCircle2 className="w-4 h-4 text-turquoise-500" />}
        </h4>
        <p className="text-sm text-stone-600 leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const GeneralPhysicianPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const serviceData = {
    title: "General Physician",
    subtitle: "Comprehensive primary medical care for patients of all ages",
    image: "/General_Physician.jpg", // You may need to add this image
    Icon: Stethoscope,
    overview: [
      "Our General Physician services provide comprehensive primary medical care for patients of all ages. We focus on accurate diagnosis through detailed history-taking, thorough examination, and evidence-based decision-making. From common illnesses to chronic disease management, we ensure seamless care and guide you through every step of your treatment."
    ],
    whenToConsult: [
      "Stomach pain, vomiting, diarrhea, acidity",
      "Female doctor for piles",
      "Fever, infections, cough, cold, sore throat",
      "Urinary tract infection, Fungal Infection",
      "Headache, dizziness, weakness, fatigue",
      "Blood pressure or sugar fluctuations",
      "Joint or body pain",
      "Allergies, skin rashes, minor injuries",
      "Regular health check-ups and preventive care",
      "Any health concern where you are unsure which specialist to consult"
    ],
    treatmentPlan: [
      "Detailed Assessment – Complete medical history and physical examination.",
      "Accurate Diagnosis – Required blood tests, imaging, or specialist referral when needed.",
      "Personalized Treatment – Medicines, lifestyle guidance, counseling, and preventive care.",
      "Monitoring & Adjustment – Treatment updated based on your progress and test results."
    ],
    followUpSchedule: [
      "Follow-up within 2–5 days for acute illnesses.",
      "Routine review every 1–3 months for chronic diseases like diabetes, hypertension, thyroid disorders, etc.",
      "Immediate follow-up if symptoms worsen or new complaints appear.",
      "Long-term monitoring to ensure complete recovery and stable health."
    ],
    firstPointOfContact: [
      "We act as your primary care provider—the first doctor to consult for any health problem.",
      "We coordinate your care, guide you to the right specialist if needed, and ensure smooth communication throughout your treatment journey."
    ],
    whyChooseUs: [
      "10+ years of clinical experience with strong diagnostic skills",
      "Thorough examination & attentive listening to every patient",
      "One-point contact from first consultation to recovery",
      "Evidence-based treatment with clear explanations",
      "Compassionate, patient-friendly approach",
      "Seamless hospital coordination for tests, referrals, and procedures"
    ],
    timeline: [
      { 
        step: 1,
        title: "Initial Consultation", 
        description: "Detailed medical history, thorough physical examination, and assessment of your health concerns." 
      },
      { 
        step: 2,
        title: "Diagnostic Evaluation", 
        description: "Required blood tests, imaging studies, or specialist referrals based on your condition for accurate diagnosis." 
      },
      { 
        step: 3,
        title: "Personalized Treatment Plan", 
        description: "Evidence-based medications, lifestyle modifications, counseling, and preventive care tailored to your needs." 
      },
      { 
        step: 4,
        title: "Monitoring & Follow-Up", 
        description: "Regular follow-ups (2–5 days for acute issues, 1–3 months for chronic conditions) with treatment adjustments as needed." 
      },
      { 
        step: 5,
        title: "Ongoing Care Coordination", 
        description: "Continuous support, specialist referrals when needed, and seamless communication throughout your treatment journey." 
      }
    ]
  };

  // Get other services (first 4)
  const otherServices = servicesData
    .slice(0, 4)
    .map(s => ({
      name: s.name,
      slug: s.slug,
      image: serviceImages[s.slug] || "/placeholder-service.jpg",
      overview: s.overview
    }));

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", duration: 1, bounce: 0.4 },
    },
  };

  return (
    <div className="bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden -mt-20">
      <Blur />
      
      {/* Modern Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] min-h-[500px] bg-gradient-to-br from-turquoise-500 via-turquoise-600 to-sky-600 flex items-end"
      >
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full px-4 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-flex items-center gap-3 mb-6 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/30"
              >
                <Stethoscope className="w-6 h-6 text-white" />
                <span className="text-white/90 font-medium">Primary Care</span>
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.3, type: 'spring' }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4"
              >
                General Physician
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.4, type: 'spring' }}
                className="text-lg md:text-xl text-white/90 font-light leading-relaxed"
              >
                Comprehensive primary medical care for patients of all ages with accurate diagnosis and personalized treatment.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Info Cards (Overlapping Hero) */}
      <div className="relative -mt-20 z-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-turquoise-100/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-turquoise-100 rounded-xl">
                  <Clock className="w-6 h-6 text-turquoise-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">Quick Access</h3>
                  <p className="text-sm text-stone-600">First point of contact for all health concerns</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-turquoise-100/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-turquoise-100 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-turquoise-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">Expert Care</h3>
                  <p className="text-sm text-stone-600">10+ years of clinical experience</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-turquoise-100/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-turquoise-100 rounded-xl">
                  <HeartPulse className="w-6 h-6 text-turquoise-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">Comprehensive</h3>
                  <p className="text-sm text-stone-600">From diagnosis to recovery, we guide you</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column - Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Overview Section */}
              <motion.div 
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-gradient-to-br from-turquoise-50/80 to-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-turquoise-100/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-turquoise-500 to-turquoise-300 rounded-full"></div>
                  <h2 className="text-3xl font-bold text-stone-900">Overview</h2>
                </div>
                <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed">
                  {serviceData.overview.map((p, i) => (
                    <p key={i} className="mb-4 text-base">{p}</p>
                  ))}
                </div>
              </motion.div>

              {/* When to Contact Us */}
              <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-lg border border-stone-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-turquoise-500 to-turquoise-300 rounded-full"></div>
                  <h2 className="text-3xl font-bold text-stone-900">When to Contact Us</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceData.whenToConsult.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-stone-50/50 rounded-xl hover:bg-turquoise-50/30 transition-colors duration-200">
                      <CheckCircle2 className="w-5 h-5 text-turquoise-500 mt-0.5 flex-shrink-0" />
                      <span className="text-stone-700 text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Treatment Plan */}
              <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-lg border border-stone-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-turquoise-500 to-turquoise-300 rounded-full"></div>
                  <h2 className="text-3xl font-bold text-stone-900">Treatment Plan</h2>
                </div>
                <div className="space-y-4">
                  {serviceData.treatmentPlan.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-5 bg-gradient-to-r from-turquoise-50/50 to-white rounded-2xl hover:shadow-md transition-all duration-200 border border-turquoise-100/50">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-turquoise-500 to-turquoise-600 text-white flex items-center justify-center font-semibold text-sm shadow-md">
                        {idx + 1}
                      </div>
                      <span className="text-stone-700 text-base leading-relaxed pt-1">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Follow-Up Schedule */}
              <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-lg border border-stone-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-turquoise-500 to-turquoise-300 rounded-full"></div>
                  <h2 className="text-3xl font-bold text-stone-900">Follow-Up Schedule</h2>
                </div>
                <div className="space-y-3">
                  {serviceData.followUpSchedule.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-stone-50/50 rounded-xl hover:bg-turquoise-50/30 transition-colors duration-200">
                      <div className="w-2 h-2 rounded-full bg-turquoise-500 mt-2 flex-shrink-0"></div>
                      <span className="text-stone-700 text-base leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* First Point of Contact */}
              <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-gradient-to-br from-turquoise-50/80 to-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-turquoise-100/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-turquoise-500 to-turquoise-300 rounded-full"></div>
                  <h2 className="text-3xl font-bold text-stone-900">First Point of Contact</h2>
                </div>
                <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed space-y-4">
                  {serviceData.firstPointOfContact.map((p, i) => (
                    <p key={i} className="text-base">{p}</p>
                  ))}
                </div>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-gradient-to-br from-white to-turquoise-50/30 p-10 rounded-3xl shadow-lg border border-turquoise-100/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-turquoise-500 to-turquoise-300 rounded-full"></div>
                  <h2 className="text-3xl font-bold text-stone-900">Why Choose Us</h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {serviceData.whyChooseUs.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-5 bg-white/70 rounded-2xl hover:shadow-md transition-all duration-200">
                      <div className="p-2 bg-turquoise-100 rounded-lg">
                        <ShieldCheck className="w-5 h-5 text-turquoise-600" />
                      </div>
                      <span className="text-stone-700 text-base flex-1 pt-1">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Book Consultation CTA */}
              <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-gradient-to-br from-turquoise-600 to-turquoise-700 p-10 rounded-3xl shadow-lg border border-turquoise-100/50 text-white overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-8 -translate-x-8 blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="w-8 h-8 text-white" />
                    <h2 className="text-3xl font-bold text-white">Book Your Consultation</h2>
                  </div>
                  
                  <p className="text-white/90 mb-6 text-base">Start your journey to better health today</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Link 
                      to="/contact"
                      className="flex items-center justify-center gap-2 bg-white text-turquoise-600 px-8 py-4 rounded-full text-base font-bold hover:bg-turquoise-50 transform transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Contact Us <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/20">
                    <a href="tel:9373619006" className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                      <span className="text-base font-medium">93736 19006</span>
                    </a>
                    <a href="mailto:kcareclinic777@gmail.com" className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                      <span className="text-base font-medium">kcareclinic777@gmail.com</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sticky Timeline (4 cols) */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-8">
                
                {/* Vertical Timeline */}
                <motion.div 
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                  className="p-8 rounded-3xl"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-turquoise-100 rounded-lg">
                      <MapPin className="w-5 h-5 text-turquoise-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900">Your Journey</h3>
                  </div>
                  
                  <div className="space-y-0">
                    {serviceData.timeline.map((step, index) => (
                      <TimelineStep 
                        key={index} 
                        step={step} 
                        index={index}
                        isActive={index === activeStep}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* More Services to Explore Section */}
      <div className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">
              More Services to <span className="text-turquoise-600">Explore</span>
            </h2>
            <p className="text-stone-600 text-lg">
              Discover our comprehensive range of advanced surgical treatments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((otherService, index) => (
              <motion.div
                key={otherService.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Link
                  to={`/services/${otherService.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                    <img
                      src={otherService.image}
                      alt={otherService.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-turquoise-600 transition-colors line-clamp-1 min-h-[3.5rem]">
                      {otherService.name}
                    </h3>
                    <p className="text-sm text-stone-600 line-clamp-2 mb-4 flex-grow min-h-[4rem]">
                      {otherService.overview}
                    </p>
                    <div className="flex items-center gap-2 text-turquoise-600 font-semibold text-sm group-hover:gap-3 transition-all mt-auto">
                      Learn More 
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-turquoise-500 to-turquoise-600 text-white px-8 py-4 rounded-full font-semibold hover:from-turquoise-600 hover:to-turquoise-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GeneralPhysicianPage;
