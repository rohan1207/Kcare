import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, X, ChevronDown, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import api from "../utils/api";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function TestimonialCard({ testimonial, index, onReadMore }) {
  const base =
    "rounded-3xl p-6 shadow-lg ring-1 text-gray-700 leading-relaxed backdrop-blur-sm h-full flex flex-col";
  const tones = {
    lightBlue:
      "bg-white/90 backdrop-blur-sm ring-1 ring-turquoise-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300",
    white:
      "bg-gradient-to-br from-turquoise-50 to-blue-50/50 ring-1 ring-turquoise-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300",
    mint: "bg-white/90 backdrop-blur-sm ring-1 ring-stone-200/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300",
  };

  return (
    <motion.article
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`${base} ${tones[testimonial.tone]}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow-lg"
          />
          <div>
            <div className="font-semibold text-stone-900">{testimonial.name}</div>
            <div className="text-xs text-stone-600">{testimonial.procedure}</div>
          </div>
        </div>
        <div className="flex gap-0.5">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="relative flex-1">
        <Quote className="absolute -top-1 -left-1 w-7 h-7 text-turquoise-300/50" />
        <p className="text-stone-700 relative z-10 leading-relaxed font-light text-sm line-clamp-5 pl-5">
          {testimonial.quote}
        </p>
      </div>

      {/* Read More Button */}
      {testimonial.quote.length > 250 && (
        <button
          onClick={() => onReadMore(testimonial)}
          className="mt-4 text-turquoise-600 hover:text-turquoise-700 font-medium text-sm inline-flex items-center gap-1 transition-colors"
        >
          Learn more
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      )}

      {/* Footer */}
      <div className="mt-3 pt-3 border-t border-stone-100">
        <div className="text-xs text-stone-600 font-medium">{testimonial.role}</div>
      </div>
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

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(9); // Show 9 initially (3 rows of 3)
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await api.get('/api/testimonials/active');
      // Map testimonials to component format
      const tones = ["lightBlue", "white", "mint"];
      const mappedTestimonials = response.data.map((testimonial, index) => ({
        id: testimonial._id,
        name: testimonial.name,
        role: testimonial.designation || "Patient",
        avatar: testimonial.image || "/user.png",
        quote: testimonial.content,
        rating: testimonial.rating || 5,
        procedure: testimonial.designation || "Surgical Care",
        tone: tones[index % tones.length],
      }));
      setTestimonials(mappedTestimonials);
    } catch (err) {
      console.error('Error fetching testimonials:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleReadMore = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const handleCloseModal = () => {
    setSelectedTestimonial(null);
  };

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6); // Add 2 more rows (6 cards)
  };

  const visibleTestimonials = testimonials.slice(0, visibleCount);
  const hasMore = visibleCount < testimonials.length;

  if (loading) {
    return (
      <div className="relative isolate min-h-screen bg-gradient-to-b from-white to-slate-50/30 overflow-hidden flex items-center justify-center">
        <div className="text-stone-600">Loading testimonials...</div>
      </div>
    );
  }

  return (
    <div className="relative isolate min-h-screen bg-gradient-to-b from-white to-slate-50/30 overflow-hidden">
      {/* Testimonial Modal */}
      {selectedTestimonial && (
        <TestimonialModal
          testimonial={selectedTestimonial}
          onClose={handleCloseModal}
        />
      )}

      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-turquoise-50 to-sky-50/70 blur-3xl opacity-80" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-turquoise-50/70 blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-turquoise-50/40 to-transparent blur-3xl opacity-60" />
      </div>

      {/* Header Section */}
      <div className="relative pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2.5 rounded-full bg-turquoise-50 px-5 py-2.5 text-sm font-medium text-turquoise-700 mb-6 shadow-sm shadow-turquoise-100/50 ring-1 ring-turquoise-100">
              <span className="h-1.5 w-1.5 rounded-full bg-turquoise-500"></span>
              Patient Stories
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-900 mb-6">
              What Our <span className="font-medium">Patients Say</span>
            </h1>
            <p className="text-sm sm:text-base md:text-md text-stone-600/90 max-w-3xl mx-auto leading-relaxed font-light">
            Hear directly from our patients about their experiences and
            successful recoveries with our advanced surgical care
          </p>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-stone-600">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-medium">5.0 Average Rating</span>
              </div>
              <span className="text-stone-400">•</span>
             
            </div>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index % 9} // Reset index for animation stagger every 9 cards
              onReadMore={handleReadMore}
            />
          ))}
        </div>

        {/* View More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={handleViewMore}
              className="inline-flex items-center gap-2 rounded-full bg-turquoise-500 hover:bg-turquoise-600 text-white px-8 py-4 text-base font-semibold shadow-lg shadow-turquoise-900/20 transition-all hover:shadow-xl hover:shadow-turquoise-900/30 hover:scale-105"
            >
              View More Testimonials
              <ChevronDown className="h-5 w-5" />
            </button>
          </motion.div>
        )}

        {/* End Message */}
        {!hasMore && visibleTestimonials.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-stone-600 font-light">
              You've reached the end of our testimonials. Thank you for reading! 💙
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
