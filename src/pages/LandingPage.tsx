import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    <div className="bg-white text-gray-800">
      {/* Hero Section with Carousel */}
      <main className="h-[calc(100vh-80px)] bg-primary-50">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="h-full"
        >
          <SwiperSlide className="flex items-center justify-center text-center">
            <div className="px-4">
              <h2 className="text-5xl md:text-6xl font-extrabold text-primary-900 mb-4">آرامش شما، هدف ما</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">به پلتفرم آنلاین بیمه البرز خوش آمدید.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-center">
            <div className="px-4">
              <h2 className="text-5xl md:text-6xl font-extrabold text-primary-900 mb-4">مدیریت هوشمند بیمه</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">به راحتی وضعیت اقساط خود را مشاهده کنید، رسیدها را دریافت کنید و سوابق بیمه‌نامه‌های خود را مدیریت کنید.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-center">
            <div className="px-4">
              <h2 className="text-5xl md:text-6xl font-extrabold text-primary-900 mb-4">پرداخت آسان اقساط</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">با چند کلیک ساده، اقساط بیمه خود را به صورت آنلاین پرداخت کنید.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </main>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">ویژگی‌های ما</h2>
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
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">مشتریان ما چه می‌گویند؟</h2>
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
    </div>
  );
};

export default LandingPage;
