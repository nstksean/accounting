
import React, { createContext, useState, useEffect, useContext, useMemo } from 'react';
import { formatDateWithDigits } from '../util/dateFormate';

const TRANSACTIONS_STORAGE_KEY = 'accountTransactions';

const recordData = [
  { id: self.crypto.randomUUID(), name: "Groceries", amount: 50, date: "2024/08/01" },
  { id: self.crypto.randomUUID(), name: "Breakfast", amount: 30, date: "2024/08/01" },
  { id: self.crypto.randomUUID(), name: "Coffee", amount: 5, date: "2024/08/01" },
  { id: self.crypto.randomUUID(), name: "Gas", amount: 40, date: "2024/08/04" },
  { id: self.crypto.randomUUID(), name: "Lunch", amount: 15, date: "2024/08/05" },
  { id: self.crypto.randomUUID(), name: "Dinner", amount: 100, date: "2024/08/05" },
  { id: self.crypto.randomUUID(), name: "Groceries", amount: 50, date: "2024/08/01" },
  { id: self.crypto.randomUUID(), name: "Breakfast", amount: 30, date: "2024/08/01" },
  { id: self.crypto.randomUUID(), name: "Coffee", amount: 5, date: "2024/08/01" },
  { id: self.crypto.randomUUID(), name: "Gas", amount: 40, date: "2024/08/08" },
  { id: self.crypto.randomUUID(), name: "Lunch", amount: 15, date: "2024/08/08" },
  { id: self.crypto.randomUUID(), name: "Dinner", amount: 100, date: "2024/08/08" },
];

const TransactionsContext = createContext({
  transactions: [],
  addTransaction: () => {},
  deleteTransaction: () => {},
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
    const date = `2024/08/${String(day).padStart(2, '0')}`;
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

  const contextValue = useMemo(() => ({
    transactions,
    addTransaction,
    deleteTransaction,
  }), [transactions]);

  return (
    <TransactionsContext.Provider value={contextValue}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  return useContext(TransactionsContext);
};