import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import api from '../utils/api';

// Decorative background elements from the design system
const Blur = () => (
  <>
    <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-turquoise-50 to-sky-50/70 blur-3xl opacity-80" />
    <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-turquoise-50/70 blur-3xl opacity-60" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-turquoise-50/40 to-transparent blur-3xl opacity-60" />
  </>
);

const BlogDetailPage = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlog();
  }, [blogId]);

  const fetchBlog = async () => {
    try {
      // First, try to fetch all blogs to find the one with matching slug
      const response = await api.get('/api/blogs');
      const allBlogs = response.data.filter(b => b.status === 'published');
      
      // Try to find by slug first, then by _id as fallback
      const foundBlog = allBlogs.find(b => b.slug === blogId) || allBlogs.find(b => b._id === blogId);
      
      if (!foundBlog) {
        setError('Blog not found');
        setLoading(false);
        return;
      }

      setBlog(foundBlog);
      
      // Get related blogs (exclude current blog)
      const related = allBlogs
        .filter(b => b._id !== foundBlog._id)
        .slice(0, 2);
      setRelatedBlogs(related);
    } catch (err) {
      console.error('Error fetching blog:', err);
      setError('Failed to load blog. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-center bg-slate-50/30 px-4">
        <Blur />
        <div className="text-stone-600">Loading blog...</div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex items-center justify-center h-screen text-center bg-slate-50/30 px-4">
        <Blur />
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-stone-900">404</h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-600 mt-2 font-light">Blog post not found.</p>
          <Link to="/blogs" className="mt-4 sm:mt-6 inline-flex items-center gap-1.5 sm:gap-2 text-turquoise-600 font-semibold text-sm sm:text-base hover:text-turquoise-700">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" /> Back to all blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white to-slate-50/30 relative overflow-hidden">
      <Blur />
      {/* Hero Section */}
      <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] w-full overflow-hidden">
        <motion.img 
          src={blog.featuredImage || '/placeholder-blog.jpg'} 
          alt={blog.title} 
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0.8 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Article Content */}
      <div className="relative -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.7, delay: 0.2, type: 'spring' }}
            className="bg-white/90 backdrop-blur-sm rounded-t-xl sm:rounded-t-2xl lg:rounded-t-[2rem] p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-2xl ring-1 ring-turquoise-100/80"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-stone-900 mb-4 sm:mb-5 md:mb-6"><span className="font-medium">{blog.title.split(' ').slice(0, 2).join(' ')}</span> {blog.title.split(' ').slice(2).join(' ')}</h1>
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-stone-500 mb-6 sm:mb-7 md:mb-8 border-b border-stone-200/80 pb-4 sm:pb-5 md:pb-6">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-turquoise-600" />
                <span className="font-medium text-stone-700 text-xs sm:text-sm md:text-base">{blog.author?.name || 'K Care Clinic'}</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-turquoise-600" />
                <span className="font-medium text-stone-700 text-xs sm:text-sm md:text-base">
                  {blog.publishedAt 
                    ? new Date(blog.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                    : new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                  }
                </span>
              </div>
            </div>
            {blog.excerpt && (
              <p className="text-lg text-stone-600/90 mb-6 sm:mb-7 md:mb-8 italic">{blog.excerpt}</p>
            )}
            <div 
              className="prose prose-sm sm:prose-base md:prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </motion.div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="bg-slate-50/30 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-stone-900 mb-6 sm:mb-7 md:mb-8 text-center"><span className="font-medium">Continue</span> Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {relatedBlogs.map(related => (
              <Link to={`/blogs/${related.slug}`} key={related._id} className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-[2rem] shadow-xl overflow-hidden group ring-1 ring-turquoise-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-40 sm:h-44 md:h-48 w-full overflow-hidden">
                  <img src={related.featuredImage || '/placeholder-blog.jpg'} alt={related.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg font-light text-stone-800 mb-2 group-hover:text-turquoise-700 transition-colors duration-300"><span className="font-medium">{related.title.split(' ')[0]}</span> {related.title.split(' ').slice(1).join(' ')}</h3>
                  <p className="text-xs sm:text-sm text-stone-600/90 line-clamp-2 font-light">{related.excerpt || related.metaDescription || ''}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Link to="/blogs" className="inline-flex items-center gap-1.5 sm:gap-2 text-turquoise-600 font-semibold text-sm sm:text-base hover:text-turquoise-700 transition-colors duration-300">
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" /> Back to All Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;

