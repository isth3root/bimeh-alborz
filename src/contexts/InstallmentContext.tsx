import { useState } from 'react';
import type { ReactNode } from 'react';
import { InstallmentContext } from './context';
import type { Installment } from '../types';

const initialInstallments: Installment[] = [
  { id: 1, date: '1403/01/15', price: '500,000 تومان', installmentAmount: '250,000 تومان', status: 'پرداخت شده' },
  { id: 2, date: '1403/02/15', price: '500,000 تومان', installmentAmount: '250,000 تومان', status: 'پرداخت شده' },
  { id: 3, date: '1403/03/15', price: '500,000 تومان', installmentAmount: '250,000 تومان', status: 'در انتظار پرداخت' },
  { id: 4, date: '1403/04/15', price: '500,000 تومان', installmentAmount: '250,000 تومان', status: 'در انتظار پرداخت' },
];

export const InstallmentProvider = ({ children }: { children: ReactNode }) => {
  const [installments, setInstallments] = useState<Installment[]>(initialInstallments);

  const updateInstallmentStatus = (id: number, status: 'پرداخت شده' | 'در انتظار پرداخت') => {
    setInstallments(
      installments.map((inst) =>
        inst.id === id ? { ...inst, status } : inst
      )
    );
  };

  return (
    <InstallmentContext.Provider value={{ installments, updateInstallmentStatus }}>
      {children}
    </InstallmentContext.Provider>
  );
};
