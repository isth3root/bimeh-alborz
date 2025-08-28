import { useContext } from 'react';
import { InstallmentContext } from '../contexts/context';

export const useInstallments = () => {
  const context = useContext(InstallmentContext);
  if (!context) {
    throw new Error('useInstallments must be used within an InstallmentProvider');
  }
  return context;
};
