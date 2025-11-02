import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import blogs from '../data/blogsData.json';
import { Calendar, User, ArrowLeft } from 'lucide-react';

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
  const blog = blogs.find(b => b.id === blogId);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen text-center bg-slate-50/30">
        <Blur />
        <div>
          <h1 className="text-4xl font-medium text-stone-900">404</h1>
          <p className="text-lg text-stone-600 mt-2 font-light">Blog post not found.</p>
          <Link to="/blogs" className="mt-6 inline-flex items-center gap-2 text-turquoise-600 font-semibold hover:text-turquoise-700">
            <ArrowLeft className="w-4 h-4" /> Back to all blogs
          </Link>
        </div>
      </div>
    );
  }

  const relatedBlogs = blogs.filter(b => b.id !== blogId).slice(0, 2);

  const renderContent = (contentItem, index) => {
    switch (contentItem.type) {
      case 'heading':
        return <h2 key={index} className="text-2xl md:text-3xl font-light text-stone-900 mt-10 mb-4"><span className="font-medium">{contentItem.text.split(' ')[0]}</span> {contentItem.text.split(' ').slice(1).join(' ')}</h2>;
      case 'paragraph':
        return <p key={index} className="mb-6 text-lg leading-relaxed text-stone-600/90 font-light">{contentItem.text}</p>;
      case 'list':
        return (
          <ul key={index} className="space-y-4 list-disc list-inside pl-2 mb-6 text-stone-600/90">
            {contentItem.items.map((item, i) => (
              <li key={i} className="text-lg leading-relaxed font-light marker:text-turquoise-500">{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-slate-50/30 relative overflow-hidden">
      <Blur />
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <motion.img 
          src={blog.images[0]} 
          alt={blog.title} 
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0.8 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Article Content */}
      <div className="relative -mt-32 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.7, delay: 0.2, type: 'spring' }}
            className="bg-white/90 backdrop-blur-sm rounded-t-[2rem] p-8 md:p-12 shadow-2xl ring-1 ring-turquoise-100/80"
          >
            <h1 className="text-3xl md:text-5xl font-light text-stone-900 mb-6"><span className="font-medium">{blog.title.split(' ').slice(0, 2).join(' ')}</span> {blog.title.split(' ').slice(2).join(' ')}</h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-stone-500 mb-8 border-b border-stone-200/80 pb-6">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-turquoise-600" />
                <span className="font-medium text-stone-700">{blog.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-turquoise-600" />
                <span className="font-medium text-stone-700">{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
            <div className="prose-lg max-w-none">
              {blog.content.map(renderContent)}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="bg-slate-50/30 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-stone-900 mb-8 text-center"><span className="font-medium">Continue</span> Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedBlogs.map(related => (
              <Link to={`/blogs/${related.id}`} key={related.id} className="bg-white/90 backdrop-blur-sm rounded-[2rem] shadow-xl overflow-hidden group ring-1 ring-turquoise-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <img src={related.images[0]} alt={related.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-light text-stone-800 mb-2 group-hover:text-turquoise-700 transition-colors duration-300"><span className="font-medium">{related.title.split(' ')[0]}</span> {related.title.split(' ').slice(1).join(' ')}</h3>
                  <p className="text-sm text-stone-600/90 line-clamp-2 font-light">{related.summary}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-turquoise-600 font-semibold hover:text-turquoise-700 transition-colors duration-300">
              <ArrowLeft className="w-4 h-4" /> Back to All Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
