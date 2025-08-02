
const recordData = [
  { name: "Groceries", amount: 50.00, date: "2024/07/29" },
  { name: "Breakfast", amount: 30.00, date: "2024/07/29" },
  { name: "Coffee", amount: 5.00, date: "2024/07/29" },
  { name: "Gas", amount: 40.00, date: "" },
  { name: "Lunch", amount: 15.00, date: "" },
  { name: "Dinner", amount: 100.00, date: "" },
  { name: "Groceries", amount: 50.00, date: "2024/07/29" },
  { name: "Breakfast", amount: 30.00, date: "2024/07/29" },
  { name: "Coffee", amount: 5.00, date: "2024/07/29" },
  { name: "Gas", amount: 40.00, date: "" },
  { name: "Lunch", amount: 15.00, date: "" },
  { name: "Dinner", amount: 100.00, date: "" },
];

export default function RecordTable() {
    return (
        <div className="p-4 flex-1 overflow-y-auto max-h-1/2 bg-white">
          <table className="table-auto w-full">
            <thead>
              <tr className="sticky top-0 bg-white">
                <th className="text-left text-[#4e7a97] font-bold py-2">Name</th>
                <th className="text-left text-[#4e7a97] font-bold py-2">Amount</th>
                <th className="text-left text-[#4e7a97] font-bold py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {recordData.map((record, index) => (
                <tr key={index}>
                  <td className="py-2 border-t border-[#d0dee7]">
                    <div className="flex flex-col">
                      <span className="font-bold">{record.name}</span>
                      <span className="text-xs text-gray-500">{record.date}</span>
                    </div>
                  </td>
                  <td className="py-2 border-t border-[#d0dee7]">${record.amount}</td>
                  <td className="py-2 border-t border-[#d0dee7]">{record.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    )
}