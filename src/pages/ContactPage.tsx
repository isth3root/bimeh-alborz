import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">تماس با ما</h1>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-primary-700">اطلاعات تماس</h2>
            <div className="space-y-4 text-gray-600">
              <p><strong>آدرس:</strong> اهواز خیابان اصلی، پلاک ۱۲۳</p>
              <p><strong>تلفن:</strong> ۰۲۱-۱۲۳۴۵۶۷۸</p>
              <p><strong>ایمیل:</strong> info@bimeh-alborz.com</p>
              <p><strong>ساعات کاری:</strong> شنبه تا چهارشنبه، ۹ صبح تا ۵ عصر</p>
            </div>
            <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-primary-700">ما را در نقشه پیدا کنید</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.896789508539!2d51.38897381525946!3d35.7040619801893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00a7b326d97d%3A0x9e8a0a9e8a0a9e8a!2sTehran%2C%20Iran!5e0!3m2!1sen!2sus!4v1622548812613!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{border:0}}
                        allowFullScreen
                        loading="lazy"
                        title="نقشه موقعیت دفتر"
                    ></iframe>
                </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-primary-700">ارسال پیام</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">نام</label>
                <input type="text" id="name" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">ایمیل</label>
                <input type="email" id="email" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">پیام شما</label>
                <textarea id="message" rows={5} className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition">
                  ارسال پیام
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
