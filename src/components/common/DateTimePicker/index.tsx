"use client";

import * as React from "react";

import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";
import { Minus } from "lucide-react";

function DateTimePicker() {
  const [dateFrom, setDateFrom] = React.useState<Date>(new Date());
  const [dateTo, setDateTo] = React.useState<Date>(new Date());

  return (
    <div className="grid grid-cols-2 items-center gap-4">
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
    </div>
  );
}

export default DateTimePicker;
