import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import api from '../utils/api';

// Decorative background elements from the design system
const Blur = () => (
  <>
    <div className="absolute top-0 right-0 -z-10 h-[700px] w-[600px] rounded-full bg-gradient-to-br from-turquoise-50 to-sky-50/70 blur-3xl opacity-80" />
    <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-turquoise-50/70 blur-3xl opacity-60" />
  </>
);

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 0.8, bounce: 0.4 },
  },
};

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await api.get('/api/blogs');
      // Filter only published blogs
      const publishedBlogs = response.data.filter(blog => blog.status === 'published');
      setBlogs(publishedBlogs);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError('Failed to load blogs. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-b from-white to-slate-50/30 relative overflow-hidden -mt-20 min-h-screen flex items-center justify-center">
        <div className="text-stone-600">Loading blogs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-b from-white to-slate-50/30 relative overflow-hidden -mt-20 min-h-screen flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white to-slate-50/30  relative overflow-hidden -mt-20">
      <Blur />
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-turquoise-600 via-turquoise-700 to-turquoise-900  text-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-turquoise-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-turquoise-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-turquoise-600/10 to-transparent mix-blend-overlay" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2, type: 'spring' }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight"
          >
            <span className="font-medium">K-Care</span> Health Insights
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.4, type: 'spring' }}
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-white/90 font-light leading-relaxed px-2"
          >
            Expert articles on surgical advancements, patient care, and wellness from Dr. Pramod Kadam.
          </motion.p>
        </div>
      </motion.div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-stone-600">No blogs available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-[2rem] shadow-xl overflow-hidden group flex flex-col ring-1 ring-turquoise-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative">
                <img src={blog.featuredImage || '/placeholder-blog.jpg'} alt={blog.title} className="w-full h-40 sm:h-48 md:h-56 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-2 md:space-x-4 text-white text-xs sm:text-sm">
                    <div className="flex items-center space-x-1 sm:space-x-1.5">
                      <User className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="line-clamp-1">{blog.author?.name || 'K Care Clinic'}</span>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-1.5">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-[10px] sm:text-xs md:text-sm line-clamp-1">
                        {blog.publishedAt 
                          ? new Date(blog.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                          : new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
                <h2 className="text-base sm:text-lg md:text-xl font-light text-stone-900 mb-2 sm:mb-3 flex-grow"><span className="font-medium">{blog.title.split(' ').slice(0, 2).join(' ')}</span> {blog.title.split(' ').slice(2).join(' ')}</h2>
                <p className="text-xs sm:text-sm md:text-base text-stone-600/90 leading-relaxed mb-4 sm:mb-5 md:mb-6 line-clamp-3 font-light">{blog.excerpt || blog.metaDescription || ''}</p>
                <Link 
                  to={`/blogs/${blog.slug}`}
                  className="mt-auto inline-flex items-center gap-1.5 sm:gap-2 text-turquoise-600 font-semibold text-xs sm:text-sm md:text-base group-hover:text-turquoise-700 transition-colors duration-300"
                >
                  Read More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
