import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { useAppContext } from '../hooks/useAppContext';

const LoginPage = () => {
  const [nationalId, setNationalId] = useState('');
  const [password, setPassword] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const navigate = useNavigate();
  const { users } = useAppContext();

  // IMPORTANT: This is a test site key provided by Google.
  // You MUST replace this with your own site key from the Google reCAPTCHA admin console.
  const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaValue) {
      alert('لطفا تیک «من ربات نیستم» را بزنید.');
      return;
    }

    // User authentication logic (mock)
    const user = users.find(u => u.nationalId === nationalId);

    if (user) { // For now, we are not checking password
      // In a real app, you would also send the recaptchaValue to your server for verification
      console.log("reCAPTCHA value:", recaptchaValue);
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } else {
      alert('کاربری با این مشخصات یافت نشد.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl">
        <div className="text-center">
            <Link to="/" className="text-primary-600 hover:text-primary-800 mb-4 inline-block font-semibold">
                &larr; بازگشت به صفحه اصلی
            </Link>
            <h2 className="text-3xl font-bold text-gray-800">ورود به پنل کاربری</h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nationalId" className="block text-sm font-medium text-gray-700 mb-1">
              کد ملی یا نام کاربری
            </label>
            <input
              type="text"
              id="nationalId"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label htmlFor="password"className="block text-sm font-medium text-gray-700 mb-1">
              رمز عبور
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={(value) => setRecaptchaValue(value)}
                hl="fa" // Set language to Persian
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300"
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
