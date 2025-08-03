import { TransactionsProvider, useTransactions } from "../context/TransactionsContext";
import React, { useState } from "react";


export default function AddRecordCard({ onCancel }) {
  const { addTransaction } = useTransactions();
  const [day, setDay] = useState(1);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const resetCard = () => {
    setDay(1);
    setName("");
    setAmount(0);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(name, amount, day);
    resetCard();
    onCancel();
  }

  const handleDayChange = (e) => {
    const newDay = parseInt(e.target.value, 10);
    if (newDay >= 1 && newDay <= 31) {
      setDay(newDay);
    } else {
      alert("請輸入有效的日期（1-31）");
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value));
  };

  return (
    <div className="h-1/2 flex flex-col p-4 bg-cardGray shadow-sm">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="flex items-center">
            <span className="block rounded-md  p-2 text-white text-2xl font-bold">
                2025/
            </span>
            <span className="block rounded-md p-2 text-white text-2xl font-bold">
                8/
            </span>
            <input
              type="number"
              id="day"
              value={day}
              min="1"
              max="31"
              className="block w-20 border-b border-white p-2 text-white text-2xl font-bold"
              placeholder="DD"
              onChange={handleDayChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full border-b border-gray-300 p-2"
            placeholder="Enter name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            min="0"
            max="999999999"
            className="mt-1 block w-full border-b border-gray-300 p-2"
            placeholder="Enter amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="flex justify-between gap-4">
            <button
            type="button"
            className="w-1/2 bg-noActionBlue text-white opacity-50 py-2 rounded-md hover:opacity-100"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-1/2 bg-actionOrange opacity-50 text-white py-2 rounded-md hover:opacity-100 mr-2"
          >
            Add Record
          </button>
        </div>
      </form>
    </div>
  );
}