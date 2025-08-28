const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 sm:p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">ورود به پنل کاربری</h2>
        <form className="space-y-6">
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
            <div className="flex items-center space-x-4">
              <input
                type="text"
                id="captcha"
                name="captcha"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <div className="px-4 py-2 bg-gray-200 rounded-md">
                <span className="text-lg font-bold text-gray-600">۱۲۳۴۵</span>
              </div>
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
