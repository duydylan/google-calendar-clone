"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { CalendarType, EventType } from "@/models/enums";
import dayjs from "dayjs";
import { capitalize } from "lodash";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import EventItem from "../Sidebar/components/Events/components/EventItem";
import EventList from "./components/EventList";

const today = dayjs().format("YYYY-MM-DD");

function Sheet() {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [viewType, setViewType] = useState<string>(CalendarType.Month);

  const startOfMonth = currentMonth.startOf("month").day();
  const daysInMonth = currentMonth.daysInMonth();
  const prevMonthDays = currentMonth.subtract(1, "month").daysInMonth();

  const days = Array.from({ length: 42 }, (_, index) => {
    if (index < startOfMonth) {
      return {
        day: prevMonthDays - startOfMonth + index + 1,
        current: false,
        date: currentMonth
          .subtract(1, "month")
          .date(prevMonthDays - startOfMonth + index + 1)
          .format("YYYY-MM-DD"),
      };
    }
    const day = index - startOfMonth + 1;
    if (day > 0 && day <= daysInMonth) {
      return { day, current: true, date: currentMonth.date(day).format("YYYY-MM-DD") };
    }
    return {
      day: day - daysInMonth,
      current: false,
      date: currentMonth
        .add(1, "month")
        .date(day - daysInMonth)
        .format("YYYY-MM-DD"),
    };
  });

  return (
    <article className="w-[calc(100%-320px)] bg-white border rounded-lg">
      <div className="flex justify-between items-center mb-4 p-4">
        <div className="flex items-center gap-3 text-primary">
          <Button variant="outline" size="sm" className="rounded-lg border-primary">
            Today
          </Button>
          <span
            className="cursor-pointer"
            onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
          >
            <ChevronLeft size={20} />
          </span>
          <span
            className="cursor-pointer"
            onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
          >
            <ChevronRight size={20} />
          </span>
          <h2 className="text-lg font-semibold">{currentMonth.format("MMMM YYYY")}</h2>
        </div>
        <div>
          <Select value={viewType} onValueChange={setViewType}>
            <SelectTrigger className="w-[100px] border-none focus:ring-0 focus:ring-offset-0 rounded-lg bg-lightBlue text-white font-normal">
              <SelectValue defaultValue={CalendarType.Month} placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.entries(CalendarType).map(([index, item]) => (
                  <SelectItem key={index} value={item}>
                    {capitalize(item)}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {viewType === "month" && (
        <>
          <div className="grid grid-cols-7 text-center text-gray-500">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="font-medium text-sm">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-[2px] mt-2 bg-gray-100 border-y-[2px] rounded-b-md">
            {days.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "h-24 text-sm bg-white cursor-pointer pt-1 hover:bg-lightGreen",
                  item.current ? "" : "text-gray-400"
                )}
              >
                <span
                  className={cn(
                    "mx-auto flex justify-center items-center size-6 text-[13px] text-center rounded-full",
                    item.date === today && "bg-lightBlue text-white text-[11px]"
                  )}
                >
                  {item.day}
                </span>
                <EventList />
              </div>
            ))}
          </div>
        </>
      )}
    </article>
  );
}

export default Sheet;
