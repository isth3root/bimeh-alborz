export interface Installment {
  id: number;
  date: string;
  price: string;
  installmentAmount: string;
  status: 'پرداخت شده' | 'در انتظار پرداخت';
}

export interface User {
  id: number;
  name: string;
  nationalId: string;
  installments: Installment[];
}

export interface AppContextType {
  users: User[];
  updateInstallmentStatus: (userId: number, installmentId: number, status: 'پرداخت شده' | 'در انتظار پرداخت') => void;
}
