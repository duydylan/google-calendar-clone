"use client";

import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { useState } from "react";

function Calendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return <CalendarUI mode="single" selected={date} onSelect={setDate} />;
}

export default Calendar;
