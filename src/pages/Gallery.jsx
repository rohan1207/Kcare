import React from "react";
import { motion } from "framer-motion";

const Blur = () => (
  <>
    <div className="absolute top-0 right-0 -z-10 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-[400px] sm:w-[500px] md:w-[600px] rounded-full bg-gradient-to-br from-turquoise-50 to-sky-50/70 blur-3xl opacity-80" />
    <div className="absolute bottom-0 left-0 -z-10 h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] w-[350px] sm:w-[450px] md:w-[550px] lg:w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-turquoise-50/70 blur-3xl opacity-60" />
  </>
);

const galleryImages = [
  { id: 1, src: "/gallery9.jpeg", alt: "Clinic facility photo" },
  { id: 2, src: "/gallery10.jpeg", alt: "Clinic facility photo" },
  { id: 3, src: "/gallery11.jpeg", alt: "Clinic facility photo" },
  { id: 4, src: "/gallery12.jpeg", alt: "Clinic facility photo" },
  {
    id: 5,
    src: "/gallery1.webp",
    alt: "Surgeons performing a robotic-assisted surgery in a modern operating room.",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    id: 6,
    src: "/gallery2.webp",
    alt: "Close-up of a surgeon's hands in sterile gloves during an operation.",
  },
  {
    id: 7,
    src: "/gallery3.png",
    alt: "Advanced medical imaging display showing a human organ.",
  },
  {
    id: 8,
    src: "/gallery4.png",
    alt: "A modern, well-lit hospital corridor.",
    colSpan: "md:col-span-2",
  },
  {
    id: 9,
    src: "/gallery5.png",
    alt: "A team of medical professionals in discussion.",
    colSpan: "md:col-span-2",
  },
  {
    id: 10,
    src: "/gallery6.png",
    alt: "Detailed view of a surgical robot arm.",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  { id: 11, src: "/gallery7.jpg", alt: "Patient resting comfortably in a hospital bed post-surgery." },
  { id: 12, src: "/gallery8.png", alt: "Sterile surgical instruments laid out on a tray." },
];

const GalleryPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50/30 relative overflow-hidden -mt-20">
      <Blur />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[60vh] text-white overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-32"
        style={{
          backgroundImage: 'url(/clinic_photo.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/20"></div>
        
        {/* Additional subtle overlay for better text contrast */}
        <div className="absolute inset-0 bg-turquoise-900/0"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight"
          >
            Our Advanced <span className="font-medium">Surgical Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-white/90 font-light leading-relaxed"
          >
            A glimpse into the precision, technology, and care that define our
            practice.
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[250px] gap-3 sm:gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`rounded-2xl sm:rounded-[1.75rem] md:rounded-[2rem] overflow-hidden shadow-lg group relative ${
                image.colSpan || ""
              } ${image.rowSpan || ""}`}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-3 sm:p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs sm:text-sm font-light">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
