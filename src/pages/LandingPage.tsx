import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-10 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">بیمه البرز</h1>
          <Link
            to="/login"
            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
          >
            ورود
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex items-center justify-center h-screen">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-gray-900 mb-4"
          >
            آرامش شما، هدف ما
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            به پلتفرم آنلاین بیمه البرز خوش آمدید. به راحتی وضعیت اقساط خود را مشاهده کنید، رسیدها را دریافت کنید و سوابق بیمه‌نامه‌های خود را مدیریت کنید.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/dashboard" // This should ideally go to login first, but for now it's a placeholder
              className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition"
            >
              ورود به پنل کاربری
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
