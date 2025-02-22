import EventItem from "@/components/app/Sidebar/components/Events/components/EventItem";
import Link from "@/components/common/Link";
import { EventType } from "@/models/enums";

function EventList() {
  return (
    <div className="mt-2">
      <div>
        <EventItem
          event={{
            id: "",
            date: "2025-02-22",
            title: "Webinar 2",
            type: EventType.Webinar,
          }}
          isFull={false}
        />
        <EventItem
          event={{
            id: "",
            date: "2025-02-22",
            title: "Second Session with Alex",
            type: EventType.Appointment,
          }}
          isFull={false}
        />
      </div>
      <Link href="" className="ml-2">
        5 more
      </Link>
    </div>
  );
}

export default EventList;
