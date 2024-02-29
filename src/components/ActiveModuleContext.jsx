import React, { createContext, useContext, useState } from 'react';

const ActiveModuleContext = createContext();

export const useActiveModule = () => {
  const context = useContext(ActiveModuleContext);
  if (!context) {
    throw new Error('useActiveModule must be used within an ActiveModuleProvider');
  }
  return context;
};

export const ActiveModuleProvider = ({ children }) => {
  const [activeModule, setActiveModule] = useState('notes');

  const setModule = (module) => {
    setActiveModule(module);
  };

  return (
    <ActiveModuleContext.Provider value={{ activeModule, setModule }}>
      {children}
    </ActiveModuleContext.Provider>
  );
};
