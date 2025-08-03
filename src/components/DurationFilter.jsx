import { useTransactions } from "../context/TransactionsContext";

export default function DurationFilter() {
  const { activeFilter, setActiveFilter, FILTER_TYPES } = useTransactions();

  return (
    <div className="flex border-b border-[#d0dee7] px-4 gap-8">
      <button
        className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
          activeFilter === FILTER_TYPES.TODAY
            ? 'border-b-[#1993e5] text-[#0e161b]'
            : 'border-b-transparent text-[#4e7a97]'
        }`}
        onClick={() => setActiveFilter(FILTER_TYPES.TODAY)}
      >
        <p className="text-sm font-bold leading-normal tracking-[0.015em]">Today</p>
      </button>
      <button
        className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
          activeFilter === FILTER_TYPES.THIS_WEEK
            ? 'border-b-[#1993e5] text-[#0e161b]'
            : 'border-b-transparent text-[#4e7a97]'
        }`}
        onClick={() => setActiveFilter(FILTER_TYPES.THIS_WEEK)}
      >
        <p className="text-sm font-bold leading-normal tracking-[0.015em]">This Week</p>
      </button>
      <button
        className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
          activeFilter === FILTER_TYPES.THIS_MONTH
            ? 'border-b-[#1993e5] text-[#0e161b]'
            : 'border-b-transparent text-[#4e7a97]'
        }`}
        onClick={() => setActiveFilter(FILTER_TYPES.THIS_MONTH)}
      >
        <p className="text-sm font-bold leading-normal tracking-[0.015em]">This Month</p>
      </button>
    </div>
  );
}
