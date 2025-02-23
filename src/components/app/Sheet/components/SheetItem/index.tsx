import { cn } from "@/lib/utils";
import { Event } from "@/models/interfaces";
import { getToday } from "@/utils/day/getToday";
import EventList from "../EventList";
import AddDialog from "../dialogs/Add";

const today = getToday();

interface SheetItemProps {
  isCurrent: boolean;
  date: string;
  day: number;
  events: Event[];
}

function SheetItem({ isCurrent, date, day, events }: SheetItemProps) {
  return (
    <div
      className={cn(
        "text-sm pt-2 relative z-10 h-auto",
        isCurrent ? "" : "text-gray-400",
        events.length === 0 ? "bg-white" : "bg-lightGreen"
      )}
    >
      <span
        className={cn(
          "mx-auto flex justify-center items-center size-6 text-[13px] text-center rounded-full",
          date === today && "bg-lightBlue text-white text-[11px]"
        )}
      >
        {day}
      </span>
      <EventList events={events} />
      <AddDialog
        trigger={<div className="w-full min-h-[60px] cursor-pointer"></div>}
        dateSelected={date}
      />
    </div>
  );
}

export default SheetItem;
