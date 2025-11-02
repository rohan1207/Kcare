import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import teamData from '../data/teamData.json';

const OurTeam = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {teamData.map((member, index) => (
        <motion.div
          key={member.id}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white/90 backdrop-blur-sm rounded-[2rem] shadow-xl shadow-turquoise-900/20 overflow-hidden ring-1 ring-turquoise-100/80 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-turquoise-400/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-turquoise-500/5 rounded-full blur-2xl" />
          
          <div className="relative h-80 bg-gradient-to-br from-turquoise-50/50 to-blue-50/30">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-contain object-bottom p-4 drop-shadow-lg relative z-10"
            />
          </div>
          <div className="p-6 lg:p-8 flex-grow flex flex-col relative z-10">
            <h3 className="text-2xl font-light text-stone-900 mb-2 leading-tight">
              <span className="font-medium">{member.name}</span>
            </h3>
            <p className="text-sm font-medium text-turquoise-600 mb-4 tracking-wide">{member.title}</p>
            <p className="text-stone-600/90 leading-relaxed flex-grow font-light">{member.summary}</p>
            <div className="mt-6">
              <a href={`/founders/${member.id}`} className="group inline-flex items-center gap-2 text-sm font-medium text-turquoise-700 hover:text-turquoise-800 transition-colors">
                Learn More
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default OurTeam;
