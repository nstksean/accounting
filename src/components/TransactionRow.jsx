import { useTransactions } from "../context/TransactionsContext";

export default function TransactionRow({ record }) {
  const { deleteTransaction } = useTransactions();

  if (!record) {
    return (
      <tr>
        <td colSpan="3" className="text-center py-4 text-gray-500">No transactions found</td>
      </tr>
    );
  }

  return (
    <tr>
      <td className="py-2 border-t border-[#d0dee7]">
        <div className="flex flex-col">
          <span className="font-bold">{record.name}</span>
          <span className="text-xs text-gray-500">{record.date}</span>
        </div>
      </td>
      <td className="py-2 border-t border-[#d0dee7]">${record.amount}</td>
      <td className="py-2 border-t border-[#d0dee7]">
        <button 
          className="text-red-500 hover:text-red-700 focus:outline-none" 
          onClick={() => deleteTransaction(record.id)}>
            Delete
          </button>
      </td>
    </tr>
  );
}