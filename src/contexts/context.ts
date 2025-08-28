import { createContext } from 'react';
import type { InstallmentContextType } from '../types';

export const InstallmentContext = createContext<InstallmentContextType | null>(null);
