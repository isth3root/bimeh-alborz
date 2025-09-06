import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/dashboard" className="text-white text-lg font-bold">بیمه البرز</Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/dashboard" className="text-gray-300 hover:text-white">داشبورد</Link>
            <Link to="/blog" className="text-gray-300 hover:text-white">بلاگ</Link>
            <Link to="/info" className="text-gray-300 hover:text-white">اطلاعات و قوانین</Link>
            <Link to="/downloads" className="text-gray-300 hover:text-white">دانلود فرم‌ها</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">تماس با ما</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link to="/dashboard" className="block text-gray-300 hover:text-white py-2">داشبورد</Link>
            <Link to="/blog" className="block text-gray-300 hover:text-white py-2">بلاگ</Link>
            <Link to="/info" className="block text-gray-300 hover:text-white py-2">اطلاعات و قوانین</Link>
            <Link to="/downloads" className="block text-gray-300 hover:text-white py-2">دانلود فرم‌ها</Link>
            <Link to="/contact" className="block text-gray-300 hover:text-white py-2">تماس با ما</Link>
          </div>
        )}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
