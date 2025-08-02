import OverviewCard from "../components/OverviewCard";
import DurationFilter from "../components/DurationFilter";
import RecordTable from "../components/RecordTable";
import Today from "../components/Today";
import AddRecordButton from "../components/AddRecordButton";
import AddRecordCard from "../components/AddRecordCard";

import {useState} from "react";


export default function Overview() {
  const [expandAddRecordCard, setExpandAddRecordCard] = useState(false);
  
  const openAddRecordClick = () => {
    setExpandAddRecordCard(true);
  };

  const onRecordCardCancel = () => {
    setExpandAddRecordCard(false);
  };
  return (
    <div className="relative flex size-full min-h-screen h-screen flex-col bg-slate-50 justify-between">
      <div>
        <OverviewCard />
        { expandAddRecordCard ? (<AddRecordCard onCancel={onRecordCardCancel} />):(
          <>
          <DurationFilter />
          <RecordTable />
        </>
        )}
        <div className="flex-col bg-slate-50 pb-2 items-center justify-between">
          <Today />
          <AddRecordButton onClick={openAddRecordClick} />
        </div>
      </div>
    </div>
  );
}