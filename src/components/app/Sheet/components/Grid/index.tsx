"use client";

import { CalendarType } from "@/models/enums";
import { findEvents } from "@/utils/event/findEvents";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import { useEvents } from "../../hooks";
import SheetItem from "../SheetItem";

function Grid() {
  const { type, year, month, day } = useParams();

  const viewType = String(type);
  const currentDate = `${year}/${month}/${day}`;
  const currentMonth = dayjs(currentDate);

  const { data: listEvents } = useEvents(
    CalendarType.Month,
    dayjs(new Date()).format("YYYY-MM-DD")
  );

  const startOfMonth = currentMonth.startOf("month").day();
  const daysInMonth = currentMonth.daysInMonth();
  const prevMonthDays = currentMonth.subtract(1, "month").daysInMonth();

  const days = Array.from({ length: 42 }, (_, index) => {
    if (index < startOfMonth) {
      const date = currentMonth
        .subtract(1, "month")
        .date(prevMonthDays - startOfMonth + index + 1)
        .format("YYYY-MM-DD");
      const events = listEvents ? findEvents(listEvents, date) : [];

      return {
        day: prevMonthDays - startOfMonth + index + 1,
        isCurrent: false,
        date,
        events,
      };
    }

    const day = index - startOfMonth + 1;
    if (day > 0 && day <= daysInMonth) {
      const date = currentMonth.date(day).format("YYYY-MM-DD");
      const events = listEvents ? findEvents(listEvents, date) : [];

      return { day, isCurrent: true, date, events };
    }

    const date = currentMonth
      .add(1, "month")
      .date(day - daysInMonth)
      .format("YYYY-MM-DD");
    const events = listEvents ? findEvents(listEvents, date) : [];

    return {
      day: day - daysInMonth,
      isCurrent: false,
      date,
      events,
    };
  });

  return (
    <>
      {viewType === "month" && (
        <>
          <div className="grid grid-cols-7 text-center text-gray-500">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="font-medium text-sm">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 h-[calc(100vh-140px)] gap-[2px] mt-2 bg-gray-200 border-t-[2px] rounded-b-md">
            {days.map(({ date, day, isCurrent, events }, index) => (
              <SheetItem key={index} date={date} day={day} isCurrent={isCurrent} events={events} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Grid;
