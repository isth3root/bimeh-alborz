import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const BlogPostPage = () => {
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
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">{post.title}</h1>
        <p className="text-gray-600 whitespace-pre-wrap">{post.content}</p>
        <div className="mt-8">
          <Link to="/blog" className="text-indigo-600 hover:text-indigo-800">
            &larr; بازگشت به لیست پست‌ها
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
