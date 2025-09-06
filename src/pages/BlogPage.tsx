import { Link } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';
import { motion } from 'framer-motion';

const BlogPage = () => {
  const { blogPosts } = useAppContext();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">بلاگ آموزشی</h1>
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogPosts.map(post => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link to={`/blog/${post.id}`} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold mb-2 text-gray-800 hover:text-indigo-600">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.summary}</p>
                <span className="text-indigo-600 font-semibold">
                  ادامه مطلب &larr;
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
