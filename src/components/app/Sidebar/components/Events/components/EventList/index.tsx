import { EventType } from "@/models/enums";
import EventItem from "../EventItem";

function EventList() {
  return (
    <div className="mt-3">
      <EventItem event={{ id: "", date: "2023", title: "Webinar", type: EventType.Webinar }} />
      <EventItem
        event={{ id: "", date: "2025-02-22", title: "Webinar 2", type: EventType.Webinar }}
      />
      <EventItem
        event={{
          id: "",
          date: "2023",
          title: "First Session with Alex",
          type: EventType.Appointment,
        }}
      />
      <EventItem
        event={{
          id: "",
          date: "2025-02-20",
          title: "Second Session with Alex",
          type: EventType.Appointment,
        }}
      />
    </div>
  );
}

export default EventList;
