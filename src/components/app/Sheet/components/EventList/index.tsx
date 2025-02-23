import Link from "@/components/common/Link";
import { Event } from "@/models/interfaces";
import InfoDialog from "../dialogs/Info";

interface EventListProps {
  events: Event[];
}

function EventList({ events }: EventListProps) {
  const count = events.length - 2;

  const list = count > 0 ? events.slice(0, 2) : events;

  return (
    <div className="mt-2">
      <div>
        {list.map((event) => (
          <InfoDialog key={event.id} event={event} />
        ))}
      </div>
      {count > 0 && (
        <Link href="" className="ml-2">
          {count} more
        </Link>
      )}
    </div>
  );
}

export default EventList;
