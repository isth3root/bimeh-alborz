import { useInstallments } from '../hooks/useInstallments';

const AdminPage = () => {
  const { installments, updateInstallmentStatus } = useInstallments();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">پنل ادمین</h1>

      <div>
        <h2 className="text-2xl font-bold mb-4">مدیریت اقساط کاربران</h2>
        <table className="w-full text-right border-collapse">
          <thead>
            <tr>
              <th className="p-2 border-b">ردیف</th>
              <th className="p-2 border-b">تاریخ</th>
              <th className="p-2 border-b">مبلغ قسط</th>
              <th className="p-2 border-b">وضعیت</th>
              <th className="p-2 border-b">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {installments.map((installment) => (
              <tr key={installment.id}>
                <td className="p-2 border-b">{installment.id}</td>
                <td className="p-2 border-b">{installment.date}</td>
                <td className="p-2 border-b">{installment.installmentAmount}</td>
                <td className={`p-2 border-b ${installment.status === 'پرداخت شده' ? 'text-green-600' : 'text-red-600'}`}>
                  {installment.status}
                </td>
                <td className="p-2 border-b">
                  {installment.status === 'در انتظار پرداخت' && (
                    <button
                      onClick={() => updateInstallmentStatus(installment.id, 'پرداخت شده')}
                      className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
                    >
                      تغییر به پرداخت شده
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
