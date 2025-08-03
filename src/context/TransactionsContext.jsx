import React, { createContext, useState, useEffect, useContext, useMemo } from 'react';

const TRANSACTIONS_STORAGE_KEY = 'accountTransactions';

const recordData = [
  { id: self.crypto.randomUUID(), name: "Groceries", amount: 50, date: "2025/08/01" },
  { id: self.crypto.randomUUID(), name: "Breakfast", amount: 30, date: "2025/08/01" },
  { id: self.crypto.randomUUID(), name: "Coffee", amount: 5, date: "2025/08/01" },
  { id: self.crypto.randomUUID(), name: "Gas", amount: 40, date: "2025/08/04" },
  { id: self.crypto.randomUUID(), name: "Lunch", amount: 15, date: "2025/08/05" },
  { id: self.crypto.randomUUID(), name: "Dinner", amount: 100, date: "2025/08/05" },
  { id: self.crypto.randomUUID(), name: "Groceries", amount: 50, date: "2025/08/01" },
  { id: self.crypto.randomUUID(), name: "Breakfast", amount: 30, date: "2025/08/01" },
  { id: self.crypto.randomUUID(), name: "Coffee", amount: 5, date: "2025/08/01" },
  { id: self.crypto.randomUUID(), name: "Gas", amount: 40, date: "2025/08/08" },
  { id: self.crypto.randomUUID(), name: "Lunch", amount: 15, date: "2025/08/03" },
  { id: self.crypto.randomUUID(), name: "Dinner", amount: 100, date: "2025/08/03" },
];
const FILTER_TYPES = {
    TODAY: 'today',
    THIS_WEEK: 'thisWeek',
    THIS_MONTH: 'thisMonth'
  };


const TransactionsContext = createContext({
  transactions: [],
  addTransaction: () => {},
  deleteTransaction: () => {},
  activeFilter: FILTER_TYPES.THIS_MONTH,
  setActiveFilter: () => {},
  FILTER_TYPES: FILTER_TYPES
});


export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    try {
      const storedData = localStorage.getItem(TRANSACTIONS_STORAGE_KEY);
      return storedData ? JSON.parse(storedData) : recordData;
    } catch (error) {
      console.error("Failed to load transactions from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      if (!localStorage.getItem(TRANSACTIONS_STORAGE_KEY)) {
        localStorage.setItem(TRANSACTIONS_STORAGE_KEY, JSON.stringify(recordData));
      }
      localStorage.setItem(TRANSACTIONS_STORAGE_KEY, JSON.stringify(transactions));
    } catch (error) {
      console.error("Failed to save transactions to localStorage:", error);
    }
  }, [transactions]);

  const addTransaction = (name, amount, day) => {
    const date = `2025/08/${String(day).padStart(2, '0')}`;
    const newTransaction = {
      id: self.crypto.randomUUID(),
      date,
      name: name,
      amount: Number(amount),
    };
    setTransactions(prevTransactions => [...prevTransactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(prevTransactions => 
      prevTransactions.filter(transaction => transaction.id !== id)
    );
  };

  const [activeFilter, setActiveFilter] = useState(FILTER_TYPES.THIS_MONTH);

  const filteredTransactions = useMemo(() => {
    const today = new Date('2025/08/03');
    
    return transactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      
      switch (activeFilter) {
        case FILTER_TYPES.TODAY: {
          return (
          transactionDate.getFullYear() === today.getFullYear() &&
          transactionDate.getMonth() === today.getMonth() &&
          transactionDate.getDate() === today.getDate()
        );
      }


        case FILTER_TYPES.THIS_WEEK: {
          const currentDay = today.getDay();
          const weekStart = new Date(today);
          weekStart.setDate(today.getDate() - currentDay);

          const weekEnd = new Date(weekStart);
          weekEnd.setDate(weekStart.getDate() + 6);

          return (
            transactionDate >= weekStart && transactionDate <= weekEnd
          );
        }

        case FILTER_TYPES.THIS_MONTH: {
          return (
            transactionDate.getFullYear() === today.getFullYear() &&
            transactionDate.getMonth() === today.getMonth()
          );
        }

        default:
          return true;
      }
    });
  }, [transactions, activeFilter]);

  const contextValue = useMemo(() => ({
    transactions: filteredTransactions,
    addTransaction,
    deleteTransaction,
    activeFilter,
    setActiveFilter,
    FILTER_TYPES
  }), [filteredTransactions, activeFilter]);

  return (
    <TransactionsContext.Provider value={contextValue}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error('useTransactions must be used within a TransactionsProvider');
  }
  return context;
};