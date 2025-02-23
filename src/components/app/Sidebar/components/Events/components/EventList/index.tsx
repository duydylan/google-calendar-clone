"use client";

import { getEventsAPI } from "@/app/api/event";
import { CalendarType, EventQueryKeys } from "@/models/enums";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import EventItem from "../EventItem";
import Empty from "@/components/common/Empty";

function EventList() {
  const { data } = useQuery({
    queryKey: [EventQueryKeys.GetUpComing],
    queryFn: async () => {
      const date = dayjs(new Date()).format("YYYY-MM-DD");
      const result = await getEventsAPI(CalendarType.Day, date);

      return result.slice(0, 3);
    },
  });

  return (
    <div className="mt-3">
      {data?.length === 0 && <Empty content="No upcoming events" />}
      {data?.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList;
