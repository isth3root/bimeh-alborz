import { useState } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import Table from '../components/Table';
import type { User, Installment } from '../types';

const AdminPage = () => {
  const { users, updateInstallmentStatus } = useAppContext();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const adminColumns = [
    { header: 'ردیف', accessor: 'id' },
    { header: 'تاریخ', accessor: 'date' },
    { header: 'مبلغ قسط', accessor: 'installmentAmount' },
    { header: 'وضعیت', accessor: 'status' },
    { header: 'عملیات', accessor: 'action' },
  ];

  const renderAdminCell = (installment: Installment, column: { accessor: string }) => {
    if (column.accessor === 'action') {
      return installment.status === 'در انتظار پرداخت' && (
        <button
          onClick={() => updateInstallmentStatus(selectedUser!.id, installment.id, 'پرداخت شده')}
          className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
        >
          تغییر به پرداخت شده
        </button>
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

  if (selectedUser) {
    return (
      <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
        <button onClick={() => setSelectedUser(null)} className="mb-4 text-indigo-600 hover:text-indigo-800">
          &larr; بازگشت به لیست کاربران
        </button>
        <h1 className="text-3xl font-bold mb-8 text-gray-800">مدیریت اقساط برای {selectedUser.name}</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Table<Installment> columns={adminColumns} data={selectedUser.installments} renderCell={renderAdminCell} />
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">پنل ادمین - انتخاب کاربر</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition cursor-pointer"
            >
              <p className="font-bold text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-600">کد ملی: {user.nationalId}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
