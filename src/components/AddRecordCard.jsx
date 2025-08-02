export default function AddRecordCard({ onCancel }) {
  return (
    <div className="h-1/2 flex flex-col p-4 bg-cardGray shadow-sm">
      <form>
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
              value={1}
              min="1"
              max="31"
              className="block w-20 border-b border-white p-2 text-white text-2xl font-bold"
              placeholder="DD"
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