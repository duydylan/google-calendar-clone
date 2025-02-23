import Link from "@/components/common/Link";
import { Event } from "@/models/interfaces";
import InfoDialog from "../dialogs/Info";
import { sortBy } from "lodash";

interface EventListProps {
  events: Event[];
}

function EventList({ events }: EventListProps) {
  const count = events.length - 2;

  const listSorted = sortBy(events, (item) => item.timeFrom);
  const listCounted = count > 0 ? listSorted.slice(0, 2) : listSorted;

  return (
    <div className="mt-2">
      <div>
        {listCounted.map((event) => (
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
