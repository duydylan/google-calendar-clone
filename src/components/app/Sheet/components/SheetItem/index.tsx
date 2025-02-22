import { cn } from "@/lib/utils";
import { getToday } from "@/utils/day/getToday";
import EventList from "../EventList";

const today = getToday();

interface SheetItemProps {
  isCurrent: boolean;
  date: string;
  day: number;
}

function SheetItem({ isCurrent, date, day }: SheetItemProps) {
  return (
    <div className={cn(" text-sm bg-white cursor-pointer pt-2", isCurrent ? "" : "text-gray-400")}>
      <span
        className={cn(
          "mx-auto flex justify-center items-center size-6 text-[13px] text-center rounded-full",
          date === today && "bg-lightBlue text-white text-[11px]"
        )}
      >
        {day}
      </span>
      <EventList />
    </div>
  );
}

export default SheetItem;
