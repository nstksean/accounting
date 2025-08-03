import {useEffect, useState} from "react";
import { useAppToday } from "../context/TodayContext";
import { formatDateWithDigits } from "../util/dateFormate";

export default function Today() {

    const [dateString, setDateString] = useState("");
    const today = useAppToday();

    useEffect(() => {
    if (!today) {
      setDateString('Loading...');
      return;
    }

    const date = new Date(today);

    if (isNaN(date.getTime())) {
      setDateString('Invalid Date');
      return;
    }

    const formattedDate = formatDateWithDigits(date);
    setDateString(formattedDate);
  }, [today]);

    return(
        <h2 className="text-white text-lg font-bold flex-1 text-center pl-12 pr-12 py-4 bg-cardDarkGray">{dateString}</h2>
    )
}