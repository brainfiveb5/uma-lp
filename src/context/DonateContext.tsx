import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface DonateContextType {
  isVisible: boolean;
  toggleDonate: () => void;
  hideDonate: () => void;
}

const DonateContext = createContext<DonateContextType | undefined>(undefined);

interface DonateProviderProps {
  children: ReactNode;
}

export function DonateProvider({ children }: DonateProviderProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleDonate = () => setIsVisible(prev => !prev);
  const hideDonate = () => setIsVisible(false);

  return (
    <DonateContext.Provider value={{ isVisible, toggleDonate, hideDonate }}>
      {children}
    </DonateContext.Provider>
  );
}

export const useDonate = () => {
  const context = useContext(DonateContext);
  if (!context) throw new Error('useDonate deve ser usado dentro de DonateProvider');
  return context;
  
};
