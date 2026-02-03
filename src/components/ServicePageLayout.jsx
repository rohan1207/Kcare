import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, HeartPulse, Stethoscope, ArrowRight, 
  Calendar, Clock, CheckCircle2, Phone, Mail, MapPin, ChevronLeft, ChevronRight
} from 'lucide-react';
import servicesData from '../data/servicesData.json';

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
      className="relative pl-6 sm:pl-7 lg:pl-8 pb-8 sm:pb-10 lg:pb-12 last:pb-0"
    >
      {/* Vertical Line */}
      {index !== 5 && (
        <div className="absolute left-[11px] sm:left-[13px] lg:left-[15px] top-6 sm:top-7 lg:top-8 bottom-0 w-[2px] bg-gradient-to-b from-turquoise-400 to-turquoise-200/50" />
      )}
      
      {/* Step Circle */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
        className={`absolute left-0 top-0 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm shadow-lg
          ${isActive 
            ? 'bg-gradient-to-br from-turquoise-500 to-turquoise-600 text-white ring-2 sm:ring-3 lg:ring-4 ring-turquoise-100' 
            : 'bg-white text-turquoise-600 ring-1 sm:ring-2 ring-turquoise-200'
          }`}
      >
        {step.step}
      </motion.div>

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02, x: 5 }}
        className={`bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 shadow-md hover:shadow-xl transition-all duration-300 border
          ${isActive 
            ? 'border-turquoise-300 ring-1 sm:ring-2 ring-turquoise-100' 
            : 'border-turquoise-100/50 hover:border-turquoise-200'
          }`}
      >
        <h4 className="text-base sm:text-lg font-semibold text-stone-900 mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
          {step.title}
          {isActive && <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-turquoise-500" />}
        </h4>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const ServicePageLayout = ({ service }) => {
  const [activeStep, setActiveStep] = useState(0);
  const scrollContainerRef = useRef(null);

  // Get other services excluding the current one (first 4)
  // Using cardimage directly from servicesData.json
  const otherServices = servicesData
    .filter(s => s.slug !== service.slug)
    .slice(0, 4)
    .map(s => ({
      name: s.name,
      slug: s.slug,
      image: s.cardimage || "/placeholder-service.jpg",
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
    <div className=" relative overflow-hidden -mt-20">
      <Blur />
      
      {/* Modern Hero Section with Overlay Info Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] min-h-[350px] sm:min-h-[400px] lg:min-h-[500px] bg-contain bg-center flex items-end"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full px-4 pb-8 sm:pb-12 lg:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-6 bg-white/20 backdrop-blur-md px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full border border-white/30"
              >
                <service.Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                <span className="text-white/90 font-medium text-xs sm:text-sm lg:text-base">Advanced Treatment</span>
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.3, type: 'spring' }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-6 lg:mb-8"
              >
                {service.title}
              </motion.h1>
              
              {/* <motion.p 
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.4, type: 'spring' }}
                className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-8"
              >
                {service.subtitle}
              </motion.p> */}

              {/* <motion.div
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-turquoise-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-turquoise-600 transform transition-all duration-300 hover:scale-105 shadow-2xl shadow-turquoise-500/30"
                >
                  Book Consultation <ArrowRight className="w-5 h-5" />
                </Link>
                <a 
                  href="tel:9890777456"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 border border-white/30 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" /> Call Now
                </a>
              </motion.div> */}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Info Cards (Overlapping Hero) */}
      <div className="relative -mt-12 sm:-mt-16 lg:-mt-20 z-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
          >
            <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-turquoise-100/50">
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <div className="p-2 sm:p-2.5 lg:p-3 bg-turquoise-100 rounded-lg sm:rounded-xl">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-turquoise-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1 text-sm sm:text-base">Quick Recovery</h3>
                  <p className="text-xs sm:text-sm text-stone-600">Minimally invasive procedures for faster healing</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-turquoise-100/50">
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <div className="p-2 sm:p-2.5 lg:p-3 bg-turquoise-100 rounded-lg sm:rounded-xl">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-turquoise-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1 text-sm sm:text-base">Expert Care</h3>
                  <p className="text-xs sm:text-sm text-stone-600">Experienced surgeons with proven results</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-turquoise-100/50">
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                <div className="p-2 sm:p-2.5 lg:p-3 bg-turquoise-100 rounded-lg sm:rounded-xl">
                  <HeartPulse className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-turquoise-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1 text-sm sm:text-base">Patient First</h3>
                  <p className="text-xs sm:text-sm text-stone-600">Compassionate care tailored to you</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content with Vertical Timeline */}
      <div className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Left Column - Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8 lg:space-y-10">
              
              {/* Overview Section - Featured Style */}
              <motion.div 
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-gradient-to-br from-turquoise-50/80 to-white/90 backdrop-blur-sm p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-turquoise-100/50"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 lg:mb-6">
                  <div className="w-1 h-6 sm:h-7 lg:h-8 bg-gradient-to-b from-turquoise-500 to-turquoise-300 rounded-full"></div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900">What You Need to Know</h2>
                </div>
                <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-stone-700 leading-relaxed">
                  {service.overview.map((p, i) => <p key={i} className="mb-3 sm:mb-4 text-sm sm:text-base">{p}</p>)}
                </div>
              </motion.div>

              {/* When to Consult - Icon List Style */}
              {service.whenToConsult && service.whenToConsult.length > 0 && (
                <motion.div
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                  className="bg-white/90 backdrop-blur-sm p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-stone-100"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 lg:mb-6">
                    <div className="w-1 h-6 sm:h-7 lg:h-8 bg-gradient-to-b from-turquoise-500 to-turquoise-300 rounded-full"></div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900">When to Consult</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {service.whenToConsult.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-stone-50/50 rounded-lg sm:rounded-xl hover:bg-turquoise-50/30 transition-colors duration-200">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-turquoise-500 mt-0.5 flex-shrink-0" />
                        <span className="text-stone-700 text-sm sm:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Treatment Options */}
              {service.treatmentOptions && (
                <motion.div
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                  className="bg-white/90 backdrop-blur-sm p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-stone-100"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 lg:mb-6">
                    <div className="w-1 h-6 sm:h-7 lg:h-8 bg-gradient-to-b from-turquoise-500 to-turquoise-300 rounded-full"></div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900">Treatment Approach</h2>
                  </div>
                  <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-stone-700 leading-relaxed">
                    {Array.isArray(service.treatmentOptions)
                      ? service.treatmentOptions.map((p, i) => <p key={i} className="mb-3 sm:mb-4 text-sm sm:text-base">{p}</p>)
                      : <p className="mb-3 sm:mb-4 text-sm sm:text-base">{service.treatmentOptions}</p>
                    }
                  </div>
                </motion.div>
              )}

              {/* Why Choose Us - Card Grid */}
              {service.whyChooseUs && service.whyChooseUs.length > 0 && (
                <motion.div
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                  className="bg-gradient-to-br from-white to-turquoise-50/30 p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-turquoise-100/50"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 lg:mb-6">
                    <div className="w-1 h-6 sm:h-7 lg:h-8 bg-gradient-to-b from-turquoise-500 to-turquoise-300 rounded-full"></div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900">Why Choose K Care Clinic</h2>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    {service.whyChooseUs.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white/70 rounded-xl sm:rounded-2xl hover:shadow-md transition-all duration-200">
                        <div className="p-1.5 sm:p-2 bg-turquoise-100 rounded-lg">
                          <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-turquoise-600" />
                        </div>
                        <span className="text-stone-700 text-sm sm:text-base flex-1 pt-0.5 sm:pt-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Timeline - Mobile Only (shown before CTA) */}
              {service.timeline && service.timeline.length > 0 && (
                <motion.div 
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                  className="lg:hidden p-5 sm:p-6 rounded-2xl sm:rounded-3xl"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-7">
                    <div className="p-1.5 sm:p-2 bg-turquoise-100 rounded-lg">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-turquoise-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900">Your Journey</h3>
                  </div>
                  
                  <div className="space-y-0">
                    {service.timeline.map((step, index) => (
                      <TimelineStep 
                        key={index} 
                        step={step} 
                        index={index}
                        isActive={index === activeStep}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Book Consultation CTA */}
              <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-gradient-to-br from-turquoise-600 to-turquoise-700 p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-turquoise-100/50 text-white overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-8 -translate-x-8 blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 lg:mb-6">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Book Your Consultation</h2>
                  </div>
                  
                  <p className="text-white/90 mb-4 sm:mb-5 lg:mb-6 text-sm sm:text-base">Start your journey to better health today</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6">
                    <Link 
                      to="/contact"
                      className="flex items-center justify-center gap-2 bg-white text-turquoise-600 px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-full text-sm sm:text-base font-bold hover:bg-turquoise-50 transform transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Contact Us <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-5 lg:pt-6 border-t border-white/20">
                    <a href="tel:9373619006" className="flex items-center gap-2 sm:gap-3 text-white/90 hover:text-white transition-colors text-sm sm:text-base">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-medium">93736 19006</span>
                    </a>
                    <a href="mailto:kcareclinic777@gmail.com" className="flex items-center gap-2 sm:gap-3 text-white/90 hover:text-white transition-colors text-sm sm:text-base">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-medium">kcareclinic777@gmail.com</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sticky Timeline (4 cols) - Desktop Only */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-6 sm:space-y-8">
                
                {/* Vertical Timeline */}
                {service.timeline && service.timeline.length > 0 && (
                  <motion.div 
                    variants={cardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                    className="p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-7 lg:mb-8">
                      <div className="p-1.5 sm:p-2 bg-turquoise-100 rounded-lg">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-turquoise-600" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900">Your Journey</h3>
                    </div>
                    
                    <div className="space-y-0">
                      {service.timeline.map((step, index) => (
                        <TimelineStep 
                          key={index} 
                          step={step} 
                          index={index}
                          isActive={index === activeStep}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* More Services to Explore Section */}
      <div className="py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 lg:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-2 sm:mb-3">
              More Services to <span className="text-turquoise-600">Explore</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base lg:text-lg">
              Discover our comprehensive range of advanced surgical treatments
            </p>
          </motion.div>

          {/* Mobile: Horizontal Scroll with Arrows, Desktop: Grid */}
          <div className="relative">
            <style>{`
              .services-scroll::-webkit-scrollbar {
                display: none;
              }
              .services-scroll {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
            {/* Mobile Horizontal Scroll Container */}
            <div 
              ref={scrollContainerRef}
              className="services-scroll lg:hidden overflow-x-auto scroll-smooth pb-4"
            >
              <div className="flex gap-4" style={{ width: 'max-content' }}>
                {otherServices.map((otherService, index) => (
                  <motion.div
                    key={otherService.slug}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-shrink-0 w-[280px] sm:w-[320px]"
                  >
                    <Link
                      to={`/services/${otherService.slug}`}
                      className="group flex flex-col h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                        <img
                          src={otherService.image}
                          alt={otherService.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
                      </div>
                      
                      <div className="p-4 sm:p-5 flex flex-col flex-grow">
                        <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 group-hover:text-turquoise-600 transition-colors line-clamp-1">
                          {otherService.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 mb-3 sm:mb-4 flex-grow">
                          {otherService.overview}
                        </p>
                        <div className="flex items-center gap-2 text-turquoise-600 font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all mt-auto">
                          Learn More 
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Arrows */}
            <div className="lg:hidden flex justify-between items-center mt-4 px-2">
              <button
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
                  }
                }}
                className="p-2 rounded-full bg-white shadow-lg border border-turquoise-100 hover:bg-turquoise-50 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 text-turquoise-600" />
              </button>
              <button
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
                  }
                }}
                className="p-2 rounded-full bg-white shadow-lg border border-turquoise-100 hover:bg-turquoise-50 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 text-turquoise-600" />
              </button>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8 sm:mt-10 lg:mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-turquoise-500 to-turquoise-600 text-white px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-full text-sm sm:text-base font-semibold hover:from-turquoise-600 hover:to-turquoise-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View All Services
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageLayout;