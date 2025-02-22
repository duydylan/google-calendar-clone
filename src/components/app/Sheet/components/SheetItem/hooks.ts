import { getEvents } from "@/app/api/event";
import { CalendarType, EventQueryKeys } from "@/models/enums";
import { useQuery } from "@tanstack/react-query";

export function useEvents(filter: CalendarType, date: string) {
  return useQuery({
    queryKey: [EventQueryKeys.GetEvents, filter, date],
    queryFn: () => getEvents(filter, date),
  });
}
