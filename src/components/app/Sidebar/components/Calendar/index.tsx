"use client";

import { Calendar as CalendarUI } from "@/components/ui/calendar";
import dayjs from "dayjs";
import { useParams, useRouter } from "next/navigation";

function SidebarCalendar() {
  const { type, year, month, day } = useParams();
  const router = useRouter();
  const date = new Date(`${year}/${month}/${day}`);

  const handleOnSelect = (value?: Date) => {
    const dateSelected = dayjs(value).format("YYYY/MM/DD");
    router.push(`/${type}/${dateSelected}`);
  };

  return (
    <div className="w-fit mx-auto">
      <CalendarUI className="w-fit" mode="single" selected={date} onSelect={handleOnSelect} />
    </div>
  );
}

export default SidebarCalendar;
