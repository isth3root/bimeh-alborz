import { useState, useRef } from 'react';
import { toEnglishNumbers } from '../utils/numberUtils';
import { Link, useNavigate } from 'react-router-dom';
import { Captcha } from '@nabidam/react-captcha';

const LoginPage = () => {
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
  const [role, setRole] = useState('user'); // 'user' or 'admin'
  const navigate = useNavigate();
  const captchaRef = useRef(null);
  const captchaInputRef = useRef(null); // Dummy ref for the inputEl prop

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const englishCaptcha = toEnglishNumbers(captchaInput);

    if (englishCaptcha === captchaValue) {
      console.log('Captcha is correct!');
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } else {
      console.log('Captcha is incorrect!');
      alert('کد امنیتی اشتباه است.');
      if(captchaRef.current) {
        // @ts-ignore
        captchaRef.current.initializeCaptcha();
      }
      setCaptchaInput('');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 sm:p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block">
                &larr; بازگشت به صفحه اصلی
            </Link>
            <h2 className="text-2xl font-bold text-gray-700">ورود به پنل</h2>
        </div>

        <div className="flex justify-center space-x-4 rounded-lg bg-gray-200 p-1">
            <button
                onClick={() => setRole('user')}
                className={`w-full py-2 rounded-md transition ${role === 'user' ? 'bg-white shadow' : 'text-gray-600'}`}
            >
                کاربر
            </button>
            <button
                onClick={() => setRole('admin')}
                className={`w-full py-2 rounded-md transition ${role === 'admin' ? 'bg-white shadow' : 'text-gray-600'}`}
            >
                ادمین
            </button>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nationalId" className="block text-sm font-medium text-gray-700">
              {role === 'user' ? 'کد ملی' : 'نام کاربری ادمین'}
            </label>
            <input
              type="text"
              id="nationalId"
              name="nationalId"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password"className="block text-sm font-medium text-gray-700">
              رمز عبور
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="captcha" className="block text-sm font-medium text-gray-700">
              کد امنیتی
            </label>
            <div className="flex items-center space-x-4" dir="ltr">
                {/* @ts-ignore */}
                <Captcha setWord={setCaptchaValue} ref={captchaRef} inputEl={captchaInputRef} />
              <input
                type="text"
                id="captcha"
                name="captcha"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ref={captchaInputRef}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
