"use client";

import { CalendarType } from "@/models/enums";
import dayjs from "dayjs";
import { useState } from "react";
import Grid from "./components/Grid";
import Header from "./components/Header";

function Sheet() {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [viewType, setViewType] = useState<string>(CalendarType.Month);

  return (
    <article className="w-[calc(100%-320px)] bg-white border rounded-lg">
      <Header
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
        viewType={viewType}
        setViewType={setViewType}
      />
      <Grid currentMonth={currentMonth} viewType={viewType} />
    </article>
  );
}

export default Sheet;
