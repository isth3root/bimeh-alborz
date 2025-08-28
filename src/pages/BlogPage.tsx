import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const BlogPage = () => {
  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">بلاگ آموزشی</h1>
      <div className="space-y-8">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              <Link to={`/blog/${post.id}`} className="hover:text-indigo-600">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.summary}</p>
            <Link to={`/blog/${post.id}`} className="text-indigo-600 hover:text-indigo-800 font-semibold">
              ادامه مطلب &larr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
