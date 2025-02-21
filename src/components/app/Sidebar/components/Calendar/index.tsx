"use client";

import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { useState } from "react";

function SidebarCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="w-fit mx-auto">
      <CalendarUI className="w-fit" mode="single" selected={date} onSelect={setDate} />
    </div>
  );
}

export default SidebarCalendar;
