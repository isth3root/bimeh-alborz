import { Navigate } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';
import Table from '../components/Table';
import type { Installment } from '../types';

const insurances = [
    { id: 1, name: 'بیمه شخص ثالث', policyNumber: '123456789' },
    { id: 2, name: 'بیمه بدنه', policyNumber: '987654321' },
];

const receipts = [
    { id: 1, date: '1403/01/15', amount: '250,000 تومان' },
    { id: 2, date: '1403/02/15', amount: '250,000 تومان' },
];

const UserDashboardPage = () => {
  const { currentUser } = useAppContext();

  if (!currentUser || currentUser.role !== 'user') {
    // If no user is logged in, or the user is not a regular user, redirect to login.
    // This is a simple form of authorization.
    return <Navigate to="/login" />;
  }

  const installmentColumns = [
    { header: 'ردیف', accessor: 'id' },
    { header: 'تاریخ', accessor: 'date' },
    { header: 'مبلغ کل', accessor: 'price' },
    { header: 'مبلغ قسط', accessor: 'installmentAmount' },
    { header: 'وضعیت', accessor: 'status' },
    { header: 'پرداخت', accessor: 'payment' },
  ];

  const renderInstallmentCell = (installment: Installment, column: { accessor: string }) => {
    if (column.accessor === 'payment') {
      return installment.status === 'در انتظار پرداخت' && (
        <a
          href="https://www.alborzins.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          پرداخت آنلاین
        </a>
      );
    }

    if (column.accessor === 'status') {
      return (
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
          installment.status === 'پرداخت شده' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {installment.status}
        </span>
      );
    }

    return installment[column.accessor as keyof Installment];
  };

  const getInstallmentCellClassName = (column: { accessor:string }) => {
    if (column.accessor === 'payment') {
      return 'whitespace-nowrap';
    }
    return '';
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">پنل کاربری خوش آمدید, {currentUser.name}!</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">زمان‌بندی اقساط</h2>
        <Table<Installment>
          columns={installmentColumns}
          data={currentUser.installments}
          renderCell={renderInstallmentCell}
          getCellClassName={getInstallmentCellClassName}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">بیمه‌نامه‌ها</h2>
          <ul className="space-y-4">
            {insurances.map((insurance) => (
              <li key={insurance.id} className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                <p className="font-bold text-gray-800">{insurance.name}</p>
                <p className="text-sm text-gray-600">شماره بیمه‌نامه: {insurance.policyNumber}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">رسیدهای پرداخت</h2>
          <ul className="space-y-4">
            {receipts.map((receipt) => (
              <li key={receipt.id} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                <div>
                  <p className="font-semibold text-gray-800">تاریخ: {receipt.date}</p>
                  <p className="text-sm text-gray-600">مبلغ: {receipt.amount}</p>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
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
