import { Button } from "@/components/ui/button";
import dayjs from "dayjs";

function EventHeader() {
  const today = dayjs().format("DD MMM");

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-primary">Upcoming Events</h3>
        <Button className="rounded-xl font-light text-[12px]" size="sm">
          View All
        </Button>
      </div>
      <div className="text-sm text-gray-500">Today, {today}</div>
    </div>
  );
}

export default EventHeader;
