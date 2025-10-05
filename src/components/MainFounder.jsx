import { motion } from 'framer-motion';
import { Award, Stethoscope, Zap, ArrowRight } from 'lucide-react';

const STATS = [
  { icon: <Award className="h-5 w-5 text-teal-500" />, label: "10+ Years of Experience" },
  { icon: <Stethoscope className="h-5 w-5 text-teal-500" />, label: "Board-Certified Surgeon" },
  { icon: <Zap className="h-5 w-5 text-teal-500" />, label: "Robotic & Laser Specialist" },
];

const SPECIALITIES = [
  "Hernia Repair",
  "Gallbladder Surgery",
  "Advanced Laparoscopy",
  "Laser Proctology",
  "Diabetic Foot Care",
  "Benign & Cancer Surgeries",
];

const MainFounder = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { type: 'spring', stiffness: 50, delay: 0.5 } },
  };

  return (
    <section className="bg-white py-20 sm:py-24">
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="bg-sky-50/40 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center shadow-lg ring-1 ring-sky-100/80"
        >
        {/* Text Content */}
        <div className="p-8 lg:p-10">
          <motion.div variants={itemVariants}>
            <span className="text-base font-semibold text-teal-600 tracking-wide uppercase">Meet Our Founder</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-sky-900">
              Dr. Pramod Kadam
            </h2>
            <p className="mt-4 text-base text-sky-900/80 leading-relaxed">
              A distinguished and board-certified general surgeon with over a decade of experience, dedicated to pioneering advanced surgical procedures with a commitment to exceptional patient care.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 space-y-3">
            {STATS.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                {stat.icon}
                <span className="font-medium text-sky-800">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8">
            <h4 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Key Specialities</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {SPECIALITIES.map((spec, index) => (
                <span key={index} className="bg-sky-100/70 text-sky-800 text-xs font-medium px-3 py-1.5 rounded-full">
                  {spec}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10">
            <a href="/about-founder" className="group inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-sky-800 transition-colors duration-300">
              Learn More About Dr. Kadam
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div variants={imageVariants} className="relative w-full h-[600px] sm:h-[750px] lg:h-[650px] self-end">
            <img
              src="/pramod3.png"
              alt="Dr. Pramod Kadam"
              className="absolute bottom-16 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 w-full h-full max-w-xl object-contain object-bottom drop-shadow-2xl"
            />
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
};

export default MainFounder;
