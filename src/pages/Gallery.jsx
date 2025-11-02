import React from "react";
import { motion } from "framer-motion";

const Blur = () => (
  <>
    <div className="absolute top-0 right-0 -z-10 h-[700px] w-[600px] rounded-full bg-gradient-to-br from-turquoise-50 to-sky-50/70 blur-3xl opacity-80" />
    <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-turquoise-50/70 blur-3xl opacity-60" />
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
  { id: 11, src: "/gallery7.png", alt: "Patient resting comfortably in a hospital bed post-surgery." },
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
        className="relative bg-gradient-to-br from-turquoise-600 via-turquoise-700 to-turquoise-900  text-white overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
      >
  {/* Decorative elements */}
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
            Our Advanced <span className="font-medium">Surgical Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90 font-light leading-relaxed"
          >
            A glimpse into the precision, technology, and care that define our
            practice.
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`rounded-[2rem] overflow-hidden shadow-lg group relative ${
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
              <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-light">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
