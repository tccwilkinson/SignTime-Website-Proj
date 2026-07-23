import React, { createContext, useContext, useState } from 'react';

const DemoModalContext = createContext(null);

export function DemoModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <DemoModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx) {
    throw new Error('useDemoModal must be used within a DemoModalProvider');
  }
  return ctx;
}
