import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Quote, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import testimonialsData from "../data/Testimonials.json";

const VIDEO_TESTIMONIALS = [
  {
    id: "video1",
    embedId: "1SF1pCvJJnM", // Replace with actual YouTube video ID
    name: "John Smith",
    procedure: "Laparoscopic Surgery",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    id: "video2",
    embedId: "Bo6Q0liuOgc", // Replace with actual YouTube video ID
    name: "Mary Johnson",
    procedure: "Robotic Surgery",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
];

// Map testimonials from JSON to component format
const TESTIMONIALS = testimonialsData.slice(0, 3).map((testimonial, index) => {
  const tones = ["lightBlue", "white", "mint"];
  const avatars = [
    "/user.png"
  ];
  
  return {
    name: testimonial.name,
    role: "Patient",
    avatar: avatars[index % avatars.length],
    quote: testimonial.text,
    rating: testimonial.rating,
    procedure: "Surgical Care",
    tone: tones[index % tones.length],
  };
});

const popUp = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      type: "spring",
      stiffness: 200,
      damping: 25,
    },
  }),
};

function YouTubeEmbed({ embedId }) {
  return (
    <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden bg-stone-100">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

function TestimonialCard({ t, index, onReadMore }) {
  const base =
    "rounded-3xl p-8 shadow-lg ring-1 text-gray-700 leading-relaxed backdrop-blur-sm h-full flex flex-col";
  const tones = {
    lightBlue:
      "bg-white/90 backdrop-blur-sm ring-1 ring-turquoise-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300",
    white:
      "bg-gradient-to-br from-turquoise-50 to-blue-50/50 ring-1 ring-turquoise-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300",
    mint: "bg-white/90 backdrop-blur-sm ring-1 ring-stone-200/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300",
  };
  return (
    <motion.article
      variants={popUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className={`${base} ${tones[t.tone]}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={t.avatar}
            alt={t.name}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow-lg"
          />
          <div>
            <div className="font-semibold text-stone-900">{t.name}</div>
            <div className="text-sm text-stone-600">{t.procedure}</div>
          </div>
        </div>
        <div className="flex gap-1">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>
      <div className="mt-6 relative flex-1">
        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-turquoise-300/60" />
        <p className="text-stone-700 relative z-10 leading-relaxed font-light line-clamp-5">
          {t.quote}
        </p>
        {t.quote.length > 350 && (
          <button
            onClick={() => onReadMore(t)}
            className="mt-3 text-turquoise-600 hover:text-turquoise-700 font-medium text-sm inline-flex items-center gap-1 transition-colors"
          >
            Read more
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      <div className="mt-4 text-sm text-stone-600 font-medium">{t.role}</div>
    </motion.article>
  );
}

function TestimonialModal({ testimonial, onClose }) {
  if (!testimonial) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 bg-stone-100 hover:bg-stone-200 rounded-full p-2 transition-colors"
          >
            <X className="w-5 h-5 text-stone-700" />
          </button>

          {/* Content */}
          <div className="p-8 sm:p-10">
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="h-16 w-16 rounded-full object-cover ring-4 ring-turquoise-50 shadow-lg"
              />
              <div className="flex-1">
                <div className="font-semibold text-xl text-stone-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-stone-600 mt-1">
                  {testimonial.procedure}
                </div>
                <div className="flex gap-1 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial text */}
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-10 h-10 text-turquoise-200/60" />
              <div className="relative z-10 text-stone-700 leading-relaxed text-base font-light pl-6">
                {testimonial.quote}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-stone-100">
              <div className="text-sm text-stone-600 font-medium">
                {testimonial.role}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const handleReadMore = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const handleCloseModal = () => {
    setSelectedTestimonial(null);
  };
  return (
    <section
      id="testimonials"
      className="relative isolate py-20 sm:py-28 bg-gradient-to-b from-white to-slate-50/30 overflow-hidden"
    >
      {/* Testimonial Modal */}
      {selectedTestimonial && (
        <TestimonialModal
          testimonial={selectedTestimonial}
          onClose={handleCloseModal}
        />
      )}

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-turquoise-50 to-sky-50/70 blur-3xl opacity-80" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-turquoise-50/70 blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-turquoise-50/40 to-transparent blur-3xl opacity-60" />
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="inline-flex items-center gap-2.5 rounded-full bg-turquoise-50 px-5 py-2.5 text-sm font-medium text-turquoise-700 mb-6 shadow-sm shadow-turquoise-100/50 ring-1 ring-turquoise-100">
            <span className="h-1.5 w-1.5 rounded-full bg-turquoise-500"></span>
            Patient Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-6">
            Trust in our <span className="font-medium">Expertise</span>
          </h2>
          <p className="text-lg text-stone-600/90 max-w-3xl mx-auto leading-relaxed font-light">
            Hear directly from our patients about their experiences and
            successful recoveries with our advanced surgical care
          </p>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top header and hero image */}
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between text-gray-500 text-sm">
              <span>Patient Stories</span>
            </div>
            <h2 className="mt-3 text-stone-900 text-3xl sm:text-4xl font-light tracking-tight">
              Patients Gave
              <br />
              <span className="font-medium">Lots of Love</span>
            </h2>

            {/* First row cards (visible as soon as section is in view) */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2 h-full">
              <TestimonialCard t={TESTIMONIALS[0]} index={0} onReadMore={handleReadMore} />
              <TestimonialCard t={TESTIMONIALS[1]} index={0.2} onReadMore={handleReadMore} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            viewport={{ once: true, amount: 0.4 }}
            className="lg:col-span-5 h-full"
          >
            <div className="rounded-[2rem] ring-1 ring-turquoise-100/80 shadow-xl overflow-hidden bg-white/90 backdrop-blur-sm p-6 h-full flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-4">
                <div className="text-lg font-semibold text-stone-900 mb-1">
                  {VIDEO_TESTIMONIALS[0].name}
                </div>
                <div className="text-sm text-stone-600">
                  {VIDEO_TESTIMONIALS[0].procedure}
                </div>
              </div>
              <div className="flex-1">
                <YouTubeEmbed embedId={VIDEO_TESTIMONIALS[0].embedId} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second wave on scroll: pop up from below */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <motion.div
            variants={popUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0}
            className="lg:col-span-7 rounded-[2rem] ring-1 ring-turquoise-100/80 shadow-xl overflow-hidden bg-white/90 backdrop-blur-sm p-6 h-full flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="mb-4">
              <div className="text-lg font-semibold text-stone-900 mb-1">
                {VIDEO_TESTIMONIALS[1].name}
              </div>
              <div className="text-sm text-stone-600">
                {VIDEO_TESTIMONIALS[1].procedure}
              </div>
            </div>
            <div className="flex-1">
              <YouTubeEmbed embedId={VIDEO_TESTIMONIALS[1].embedId} />
            </div>
          </motion.div>

          <div className="lg:col-span-5">
            <TestimonialCard t={TESTIMONIALS[2]} index={0.15} onReadMore={handleReadMore} />
          </div>
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          className="mt-10 flex justify-end"
        >
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 rounded-full bg-turquoise-400 hover:bg-turquoise-300 text-stone-900 px-6 py-3 text-sm font-semibold shadow-md shadow-turquoise-900/10 transition-colors"
          >
            View all testimonials <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
