import { Event } from "@/models/interfaces";
import dayjs from "dayjs";

export function findEvents(listEvents: Event[], date: string) {
  const events = listEvents?.filter((event) => {
    const eventDate = dayjs(event.timeFrom).format("YYYY-MM-DD");

    return eventDate === date;
  });

  return events;
}
