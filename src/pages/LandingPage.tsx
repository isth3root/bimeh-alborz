import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const LandingPage = () => {
  const featureVariants = (delay: number) => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay
      }
    }
  });

  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-10 p-4 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-700">بیمه البرز</h1>
          <Link
            to="/login"
            className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors duration-300 font-semibold"
          >
            ورود / ثبت نام
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex items-center justify-center h-screen bg-primary-50">
        <div className="text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-primary-900 mb-4"
          >
            <TypeAnimation
              sequence={[
                'آرامش شما، هدف ما',
                2000,
                'مدیریت هوشمند بیمه',
                2000,
                'پرداخت آسان اقساط',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            به پلتفرم آنلاین بیمه البرز خوش آمدید. به راحتی وضعیت اقساط خود را مشاهده کنید، رسیدها را دریافت کنید و سوابق بیمه‌نامه‌های خود را مدیریت کنید.
          </motion.p>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">ویژگی‌های ما</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={featureVariants(0)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 bg-gray-50 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary-700">مدیریت اقساط</h3>
              <p>وضعیت پرداخت اقساط بیمه‌نامه‌های خود را به سادگی مشاهده و پیگیری کنید.</p>
            </motion.div>
            <motion.div variants={featureVariants(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 bg-gray-50 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary-700">دریافت رسید</h3>
              <p>رسیدهای پرداخت خود را در هر زمان و به راحتی به صورت PDF دریافت کنید.</p>
            </motion.div>
            <motion.div variants={featureVariants(0.4)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 bg-gray-50 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary-700">سوابق بیمه</h3>
              <p>به تاریخچه کامل بیمه‌نامه‌های خود دسترسی داشته باشید و آن‌ها را مدیریت کنید.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-primary-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">مشتریان ما چه می‌گویند؟</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div variants={featureVariants(0)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 bg-white rounded-xl shadow-lg text-right">
              <p className="text-gray-600 mb-4">"این سایت فوق‌العاده است! دیگر نگران فراموش کردن اقساطم نیستم و همه چیز به راحتی در دسترس است."</p>
              <h4 className="font-bold text-primary-800">- علی رضایی</h4>
            </motion.div>
            <motion.div variants={featureVariants(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-8 bg-white rounded-xl shadow-lg text-right">
              <p className="text-gray-600 mb-4">"طراحی ساده و کاربرپسند این پلتفرم، مدیریت بیمه‌هایم را بسیار آسان کرده است. از شما متشکرم!"</p>
              <h4 className="font-bold text-primary-800">- مریم حسینی</h4>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; ۱۴۰۳ - تمام حقوق برای پورتال بیمه البرز محفوظ است.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
