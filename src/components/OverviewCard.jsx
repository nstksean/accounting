
export default function OverviewCard() {
  return (
    <div className="min-h-40 bg-cardDarkGray flex flex-col items-stretch justify-end">
      <div className="flex w-full items-end justify-between gap-4 p-4">
        <div className="flex max-w-[440px] flex-1 flex-col gap-1">
          <p className="text-white text-sm font-normal">Today</p>
          <p className="text-white text-2xl font-bold max-w-[440px]">$1,234.56</p>
          <p className="text-white text-base font-medium">Total</p>
        </div>
      </div>
    </div>
  );
}
