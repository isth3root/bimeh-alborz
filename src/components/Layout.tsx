import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

interface LayoutProps {
  variant?: 'app' | 'landing';
}

const Layout = ({ variant = 'app' }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = {
    app: [
      { name: 'داشبورد', path: '/dashboard' },
      { name: 'بلاگ', path: '/blog' },
      { name: 'اطلاعات و قوانین', path: '/info' },
      { name: 'دانلود فرم‌ها', path: '/downloads' },
      { name: 'تماس با ما', path: '/contact' },
    ],
    landing: [
      { name: 'ویژگی‌ها', path: '#features' },
      { name: 'نظرات', path: '#testimonials' },
      { name: 'بلاگ', path: '/blog' },
      { name: 'تماس با ما', path: '/contact' },
    ]
  };

  const links = variant === 'app' ? navLinks.app : navLinks.landing;

  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const targetId = path.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="sticky top-0 z-50 p-4 bg-white/80 backdrop-blur-sm shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-700">بیمه البرز</Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map(link => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleScrollLink(e, link.path)}
                className="font-semibold text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            {variant === 'landing' && (
                <Link to="/login" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-300 font-semibold">
                    ورود / ثبت نام
                </Link>
            )}
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {links.map(link => (
              <Link key={link.name} to={link.path} onClick={() => setIsMenuOpen(false)} className="block py-2 text-center text-gray-700 hover:bg-indigo-50 rounded-md">
                {link.name}
              </Link>
            ))}
            {variant === 'landing' && (
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block w-full mt-2 py-2 text-center bg-indigo-600 text-white rounded-full hover:bg-indigo-700">
                    ورود / ثبت نام
                </Link>
            )}
          </div>
        )}
      </nav>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
            <p>&copy; ۱۴۰۳ - تمام حقوق برای پورتال بیمه البرز محفوظ است.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
