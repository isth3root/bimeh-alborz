import { useState, useRef } from 'react';
import { toEnglishNumbers } from '../utils/numberUtils';
import { Link, useNavigate } from 'react-router-dom';
import { Captcha } from '@nabidam/react-captcha';
import { useAppContext } from '../hooks/useAppContext';

const LoginPage = () => {
  const [nationalId, setNationalId] = useState('');
  const [password, setPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
  const navigate = useNavigate();
  const { users } = useAppContext();
  const captchaRef = useRef(null);
  const captchaInputRef = useRef(null); // Dummy ref for the inputEl prop

  const handleReloadCaptcha = () => {
    if(captchaRef.current) {
        // @ts-expect-error - The package types are incorrect
        captchaRef.current.initializeCaptcha();
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const englishCaptcha = toEnglishNumbers(captchaInput);

    // Case-insensitive captcha validation
    if (englishCaptcha.toLowerCase() !== captchaValue.toLowerCase()) {
      alert('کد امنیتی اشتباه است.');
      handleReloadCaptcha();
      setCaptchaInput('');
      return;
    }

    // User authentication logic (mock)
    const user = users.find(u => u.nationalId === nationalId);

    if (user) { // For now, we are not checking password
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
          <div>
            <label htmlFor="captcha" className="block text-sm font-medium text-gray-700 mb-1">
              کد امنیتی
            </label>
            <div className="flex items-center space-x-2" dir="ltr">
                <div className="border rounded-lg overflow-hidden">
                    {/* @ts-expect-error - The package types are incorrect and require the inputEl prop which causes a runtime error */}
                    <Captcha setWord={setCaptchaValue} ref={captchaRef} backgroundColor="#e5e7eb" fontColor="#1f2937" />
                </div>
                <button type="button" onClick={handleReloadCaptcha} className="p-2 text-gray-600 hover:text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M20 4h-5v5M4 20h5v-5" />
                    </svg>
                </button>
              <input
                type="text"
                id="captcha"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                ref={captchaInputRef}
              />
            </div>
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
