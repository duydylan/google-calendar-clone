"use client";

import { Minus } from "lucide-react";
import { useState } from "react";
import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";

interface DateTimePickerProps {
  defaultDateFrom: string;
}

function DateTimePicker({ defaultDateFrom }: DateTimePickerProps) {
  const [dateFrom, setDateFrom] = useState<Date>(new Date(defaultDateFrom));
  const [dateTo, setDateTo] = useState<Date>(new Date());

  return (
    <div className="grid grid-rows-2 sm:grid-cols-2 items-center gap-4">
      <div className="col-span-1">
        <DatePicker date={dateFrom} setDate={setDateFrom} />
      </div>
      <div className="col-span-1 grid grid-cols-12 items-center">
        <div className="col-span-5">
          <TimePicker date={dateFrom} setDate={setDateFrom} />
        </div>
        <div className="col-span-2 flex justify-center">
          <Minus size={10} />
        </div>
        <div className="col-span-5">
          <TimePicker date={dateTo} setDate={setDateTo} />
        </div>
      </div>
      <input type="hidden" name="timeFrom" value={dateFrom.toISOString()} />
      <input type="hidden" name="timeTo" value={dateTo.toISOString()} />
    </div>
  );
}

export default DateTimePicker;
