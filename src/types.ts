export interface Installment {
  id: number;
  date: string;
  price: string;
  installmentAmount: string;
  status: 'پرداخت شده' | 'در انتظار پرداخت';
}

export interface InstallmentContextType {
  installments: Installment[];
  updateInstallmentStatus: (id: number, status: 'پرداخت شده' | 'در انتظار پرداخت') => void;
}
