import { useState } from 'react';
import { toEnglishNumbers } from '../utils/numberUtils';

const LoginPage = () => {
  const [captchaInput, setCaptchaInput] = useState('');
  const captchaValue = '12345';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const englishCaptcha = toEnglishNumbers(captchaInput);

    console.log('Submitted Captcha (converted to English):', englishCaptcha);

    if (englishCaptcha === captchaValue) {
      console.log('Captcha is correct!');
      // Here you would typically proceed with login
    } else {
      console.log('Captcha is incorrect!');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 sm:p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">ورود به پنل کاربری</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nationalId" className="block text-sm font-medium text-gray-700">
              کد ملی
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
              <div className="px-4 py-2 bg-gray-200 rounded-md">
                <span className="text-lg font-bold text-gray-600" style={{fontFamily: 'monospace'}}>{captchaValue}</span>
              </div>
              <input
                type="text"
                id="captcha"
                name="captcha"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
