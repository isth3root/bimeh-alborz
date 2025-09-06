import { useParams, Link } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';
import { motion } from 'framer-motion';

const BlogPostPage = () => {
  const { blogPosts } = useAppContext();
  const { postId } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(postId || ''));

  if (!post) {
    return (
      <div className="p-4 sm:p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600">پست مورد نظر یافت نشد!</h1>
        <Link to="/blog" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">
          &larr; بازگشت به لیست پست‌ها
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
        <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{post.content}</p>
        <div className="mt-12 border-t pt-4">
          <Link to="/blog" className="text-indigo-600 hover:text-indigo-800 font-semibold">
            &larr; بازگشت به لیست پست‌ها
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPostPage;
