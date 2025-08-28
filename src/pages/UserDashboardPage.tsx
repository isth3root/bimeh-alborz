import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInstallments } from '../hooks/useInstallments';

const insurances = [
    { id: 1, name: 'بیمه شخص ثالث', policyNumber: '123456789' },
    { id: 2, name: 'بیمه بدنه', policyNumber: '987654321' },
];

const receipts = [
    { id: 1, date: '1403/01/15', amount: '250,000 تومان' },
    { id: 2, date: '1403/02/15', amount: '250,000 تومان' },
];

const UserDashboardPage = () => {
  const { installments } = useInstallments();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/dashboard" className="text-white text-lg font-bold">پنل کاربری</Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/training" className="text-gray-300 hover:text-white">نکات آموزشی</Link>
            <Link to="/info" className="text-gray-300 hover:text-white">اطلاعات و قوانین</Link>
            <Link to="/downloads" className="text-gray-300 hover:text-white">دانلود فرم‌ها</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">تماس با ما</Link>
            <Link to="/admin" className="text-gray-300 hover:text-white">پنل ادمین</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link to="/training" className="block text-gray-300 hover:text-white py-2">نکات آموزشی</Link>
            <Link to="/info" className="block text-gray-300 hover:text-white py-2">اطلاعات و قوانین</Link>
            <Link to="/downloads" className="block text-gray-300 hover:text-white py-2">دانلود فرم‌ها</Link>
            <Link to="/contact" className="block text-gray-300 hover:text-white py-2">تماس با ما</Link>
            <Link to="/admin" className="block text-gray-300 hover:text-white py-2">پنل ادمین</Link>
          </div>
        )}
      </nav>
      <div className="p-4 sm:p-8">
        <h1 className="text-3xl font-bold mb-8">پنل کاربری بیمه البرز</h1>

        <div className="mb-12 overflow-x-auto">
          <h2 className="text-2xl font-bold mb-4">زمان‌بندی اقساط</h2>
          <table className="w-full text-right border-collapse">
            <thead>
              <tr>
                <th className="p-2 border-b">ردیف</th>
                <th className="p-2 border-b">تاریخ</th>
                <th className="p-2 border-b">مبلغ کل</th>
                <th className="p-2 border-b">مبلغ قسط</th>
                <th className="p-2 border-b">وضعیت</th>
                <th className="p-2 border-b">پرداخت</th>
              </tr>
            </thead>
            <tbody>
              {installments.map((installment) => (
                <tr key={installment.id}>
                  <td className="p-2 border-b">{installment.id}</td>
                  <td className="p-2 border-b">{installment.date}</td>
                  <td className="p-2 border-b">{installment.price}</td>
                  <td className="p-2 border-b">{installment.installmentAmount}</td>
                  <td className={`p-2 border-b ${installment.status === 'پرداخت شده' ? 'text-green-600' : 'text-red-600'}`}>
                    {installment.status}
                  </td>
                  <td className="p-2 border-b">
                    {installment.status === 'در انتظار پرداخت' && (
                      <a
                        href="https://www.alborzins.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                      >
                        پرداخت آنلاین
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">بیمه‌نامه‌ها</h2>
          <ul className="space-y-4">
            {insurances.map((insurance) => (
              <li key={insurance.id} className="p-4 bg-gray-100 rounded-lg">
                <p className="font-bold">{insurance.name}</p>
                <p>شماره بیمه‌نامه: {insurance.policyNumber}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">رسیدهای پرداخت</h2>
          <ul className="space-y-4">
            {receipts.map((receipt) => (
              <li key={receipt.id} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                <div>
                  <p>تاریخ: {receipt.date}</p>
                  <p>مبلغ: {receipt.amount}</p>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  دانلود PDF
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
