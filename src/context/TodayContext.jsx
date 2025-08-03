import React, { createContext, useState, useContext } from 'react';

const TODAY_STORAGE_KEY = 'appTodayDate';

const AppTodayContext = createContext(null);

export const AppTodayProvider = ({ children }) => {

  const [today] = useState(() => {
    try {
      const storedDate = localStorage.getItem(TODAY_STORAGE_KEY);

      if (storedDate) {
        return JSON.parse(storedDate);
      } else {
        const newToday = Date.now();
        localStorage.setItem(TODAY_STORAGE_KEY, JSON.stringify(newToday));
        return newToday;
      }
    } catch (error) {
      console.error("Failed to access localStorage:", error);
      return null;
    }
  });

  return (
    <AppTodayContext.Provider value={today}>
      {children}
    </AppTodayContext.Provider>
  );
};

export const useAppToday = () => {
  const context = useContext(AppTodayContext);
  if (context === undefined) {
    throw new Error('useAppToday must be used within a AppTodayProvider');
  }
  return context;
};