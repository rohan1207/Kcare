import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, HeartPulse, Stethoscope, ArrowRight } from 'lucide-react';
import ProcedureTimeline from './Timeline';

const Blur = () => (
  <>
    <div className="absolute top-0 right-0 -z-10 h-[700px] w-[600px] rounded-full bg-gradient-to-br from-turquoise-50 to-sky-50/70 blur-3xl opacity-80" />
    <div className="absolute bottom-1/2 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-turquoise-50/70 blur-3xl opacity-60" />
  </>
);

const ServicePageLayout = ({ service }) => {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", duration: 1, bounce: 0.4 },
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
        className="relative h-[60vh] min-h-[450px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#041f1c] via-[#041f1c]/80 to-transparent"></div>
        <div className="relative z-10 text-center px-4">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-4"
          >
            <service.Icon className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.4, type: 'spring' }}
            className="text-4xl md:text-6xl font-light tracking-tight"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.6, type: 'spring' }}
            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90 font-light"
          >
            {service.subtitle}
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column (Main Details) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview Section */}
            <motion.div 
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-lg ring-1 ring-turquoise-100/80"
            >
              <h2 className="text-3xl font-light text-stone-900 mb-4">Overview</h2>
              <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed">
                {service.overview.map((p, i) => <p key={i} className="mb-4 text-base">{p}</p>)}
              </div>
            </motion.div>

            {/* When to Consult */}
            {service.whenToConsult && service.whenToConsult.length > 0 && (
              <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-lg ring-1 ring-turquoise-100/80"
              >
                <h2 className="text-3xl font-light text-stone-900 mb-4">When to <span className="font-medium">consult</span></h2>
                <ul className="list-disc pl-6 space-y-3 text-stone-700 text-base">
                  {service.whenToConsult.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Treatment Options */}
            {service.treatmentOptions && (
              <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-lg ring-1 ring-turquoise-100/80"
              >
                <h2 className="text-3xl font-light text-stone-900 mb-4">Treatment <span className="font-medium">options</span></h2>
                <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed">
                  {Array.isArray(service.treatmentOptions)
                    ? service.treatmentOptions.map((p, i) => <p key={i} className="mb-4 text-base">{p}</p>)
                    : <p className="mb-4 text-base">{service.treatmentOptions}</p>
                  }
                </div>
              </motion.div>
            )}

            {/* Recovery */}
            {service.recovery && (
              <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-lg ring-1 ring-turquoise-100/80"
              >
                <h2 className="text-3xl font-light text-stone-900 mb-4">Recovery</h2>
                <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed">
                  {Array.isArray(service.recovery)
                    ? service.recovery.map((p, i) => <p key={i} className="mb-4 text-base">{p}</p>)
                    : <p className="mb-4 text-base">{service.recovery}</p>
                  }
                </div>
              </motion.div>
            )}

            {/* Why Choose Us - page specific */}
            {service.whyChooseUs && service.whyChooseUs.length > 0 && (
              <motion.div
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-lg ring-1 ring-turquoise-100/80"
              >
                <h2 className="text-3xl font-light text-stone-900 mb-4">Why <span className="font-medium">choose us</span></h2>
                <ul className="list-disc pl-6 space-y-3 text-stone-700 text-base">
                  {service.whyChooseUs.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Benefits Section */}
            {service.benefits && (
              <motion.div 
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-lg ring-1 ring-turquoise-100/80"
              >
                <h2 className="text-3xl font-light text-stone-900 mb-6">Key <span className="font-medium">Benefits</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-turquoise-100/70 rounded-full">
                        <ShieldCheck className="w-6 h-6 text-turquoise-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-stone-800 mb-1">{benefit.title}</h3>
                        <p className="text-stone-700 text-base">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Technology Section */}
            {service.technology && (
              <motion.div 
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-lg ring-1 ring-turquoise-100/80"
              >
                <h2 className="text-3xl font-light text-stone-900 mb-4">Advanced <span className="font-medium">Technology</span></h2>
                <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed">
                  <p className="text-base">{service.technology.description}</p>
                </div>
              </motion.div>
            )}

            {/* Image Gallery Section */}
            {service.images && service.images.length > 1 && (
              <motion.div 
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-lg ring-1 ring-turquoise-100/80"
              >
                <h2 className="text-3xl font-light text-stone-900 mb-6">Facility & <span className="font-medium">Equipment</span></h2>
                <div className="grid grid-cols-2 gap-4">
                  {service.images.slice(1, 5).map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                    >
                      <img 
                        src={img} 
                        alt={`${service.title} - Image ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column (CTA & Info) */}
          <aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-28 h-fit">
            <motion.div 
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-[2rem] shadow-xl ring-1 ring-turquoise-100/90"
            >
              <h3 className="text-2xl font-light text-stone-900 mb-4 text-center">Book a <span className="font-medium">Consultation</span></h3>
              <p className="text-center text-stone-600/90 mb-6 font-light">Take the first step towards better health. Our team is here to help.</p>
              <Link 
                to="/contact"
                className="w-full flex items-center justify-center gap-2 bg-turquoise-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-turquoise-600 transform transition-all duration-300 hover:scale-105 shadow-lg shadow-turquoise-500/20"
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-turquoise-50/50 backdrop-blur-sm p-8 rounded-[2rem] ring-1 ring-turquoise-100/80 overflow-hidden relative"
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-turquoise-200/20 rounded-full -translate-y-8 translate-x-8 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-turquoise-300/20 rounded-full translate-y-8 -translate-x-8 blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-medium text-stone-900 mb-2">Why Choose K-Care?</h3>
                <p className="text-sm text-stone-600 mb-6">Choose us for expert care and advanced treatment</p>
                
                {service.whyChooseUs && service.whyChooseUs.length > 0 ? (
                  <ul className="space-y-4 text-stone-800">
                    {service.whyChooseUs.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-turquoise-600 mt-1 flex-shrink-0" />
                        <span className="text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="space-y-4 text-stone-800">
                    <li className="flex items-start gap-3">
                      <Stethoscope className="w-5 h-5 text-turquoise-600 mt-1 flex-shrink-0" />
                      <span className="text-base leading-relaxed">Expert surgical team with years of experience.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HeartPulse className="w-5 h-5 text-turquoise-600 mt-1 flex-shrink-0" />
                      <span className="text-base leading-relaxed">Patient-centric approach with compassionate care.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-turquoise-600 mt-1 flex-shrink-0" />
                      <span className="text-base leading-relaxed">State-of-the-art technology for better outcomes.</span>
                    </li>
                  </ul>
                )}
              </div>
            </motion.div>
          </aside>
        </div>
      </div>

      {/* Timeline Section */}
      {service.timeline && <ProcedureTimeline steps={service.timeline} />}
    </div>
  );
};

export default ServicePageLayout;
