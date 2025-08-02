
export default function DurationFilter() {
  return (
    <div className="flex border-b border-[#d0dee7] px-4 gap-8">
      <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#1993e5] text-[#0e161b] pb-[13px] pt-4" href="#">
        <p className="text-[#0e161b] text-sm font-bold leading-normal tracking-[0.015em]">Today</p>
      </a>
      <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4e7a97] pb-[13px] pt-4" href="#">
        <p className="text-[#4e7a97] text-sm font-bold leading-normal tracking-[0.015em]">This Week</p>
      </a>
      <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4e7a97] pb-[13px] pt-4" href="#">
        <p className="text-[#4e7a97] text-sm font-bold leading-normal tracking-[0.015em]">This Month</p>
      </a>
    </div>
  );
}
