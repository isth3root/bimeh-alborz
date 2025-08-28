import { useState } from 'react';
import type { ReactNode } from 'react';
import { AppContext } from './appContext';
import type { User } from '../types';

const initialUsers: User[] = [
  {
    id: 1,
    name: 'علی رضایی',
    nationalId: '1234567890',
    installments: [
      { id: 1, date: '1403/01/15', price: '500,000 تومان', installmentAmount: '250,000 تومان', status: 'پرداخت شده' },
      { id: 2, date: '1403/02/15', price: '500,000 تومان', installmentAmount: '250,000 تومان', status: 'در انتظار پرداخت' },
    ],
  },
  {
    id: 2,
    name: 'مریم حسینی',
    nationalId: '0987654321',
    installments: [
      { id: 1, date: '1403/01/20', price: '1,000,000 تومان', installmentAmount: '500,000 تومان', status: 'پرداخت شده' },
      { id: 2, date: '1403/02/20', price: '1,000,000 تومان', installmentAmount: '500,000 تومان', status: 'پرداخت شده' },
      { id: 3, date: '1403/03/20', price: '1,000,000 تومان', installmentAmount: '500,000 تومان', status: 'در انتظار پرداخت' },
    ],
  },
];

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const updateInstallmentStatus = (userId: number, installmentId: number, status: 'پرداخت شده' | 'در انتظار پرداخت') => {
    setUsers(
      users.map((user) =>
        user.id === userId
          ? {
              ...user,
              installments: user.installments.map((inst) =>
                inst.id === installmentId ? { ...inst, status } : inst
              ),
            }
          : user
      )
    );
  };

  return (
    <AppContext.Provider value={{ users, updateInstallmentStatus }}>
      {children}
    </AppContext.Provider>
  );
};
