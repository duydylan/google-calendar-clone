import Link from "@/components/common/Link";
import { EventType } from "@/models/enums";
import InfoDialog from "../dialogs/Info";

function EventList() {
  const events = [
    {
      id: "1",
      date: "2025-02-22",
      title: "Webinar 2",
      description: "Webinar for interview",
      type: EventType.Webinar,
    },
  ];

  return (
    <div className="mt-2">
      <div>
        {events.map((event) => (
          <InfoDialog key={event.id} event={event} />
        ))}
      </div>
      <Link
        href=""
        className="ml-2"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        5 more
      </Link>
    </div>
  );
}

export default EventList;
