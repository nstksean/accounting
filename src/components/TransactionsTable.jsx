import { useTransactions } from "../context/TransactionsContext"

import TransactionRow from "./TransactionRow";

export default function TransactionsTable() {
    const { transactions } = useTransactions();

    if (!transactions || transactions.length === 0) {
      return (
        <div className="p-4 flex-1 bg-white">
          <p className="text-center text-gray-500">No transactions found</p>
        </div>
      );
    }
    return (
        <div className="p-4 flex-1 bg-white">
          <table className="table-auto w-full">
            <thead>
              <tr className="sticky top-0 bg-white">
                <th className="text-left text-[#4e7a97] font-bold py-2">Name</th>
                <th className="text-left text-[#4e7a97] font-bold py-2">Amount</th>
                <th className="text-left text-[#4e7a97] font-bold py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((record) => (
                <TransactionRow key={record.id} record={record} />
              ))}
            </tbody>
          </table>
        </div>
    )
}