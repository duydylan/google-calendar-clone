import Link from "@/components/common/Link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { EventType } from "@/models/enums";
import { Event } from "@/models/interfaces";
import { renderEventStyles } from "@/utils/event/renderStyles";
import { Video } from "lucide-react";

interface EventItemProps {
  event: Event;
  isFull?: boolean;
}

function EventItem({ event, isFull = true }: EventItemProps) {
  const { bg, borderColor, titleColor, dateColor, iconBg, iconColor } = renderEventStyles({
    type: event.type,
    date: event.date,
  });

  return (
    <>
      {isFull ? (
        <div
          className={cn(
            "rounded-md p-2 flex justify-between mb-2",
            bg,
            `border-l-[5px] ${borderColor}`
          )}
        >
          <div>
            <h3 className={cn("text-sm font-medium", titleColor)}>{event.title}</h3>
            <div className={cn("text-[12px] my-1", dateColor)}>{event.date}</div>
            <div className="flex items-center gap-3">
              <Avatar className="size-[30px]">
                <AvatarImage src="https://github.com/shadcn.png" alt="@Alex" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Link href="" className={cn(dateColor)}>
                View client profile
              </Link>
            </div>
          </div>
          {event.type === EventType.Appointment && (
            <div
              className={cn(
                "w-10 h-10 rounded-full flex justify-center items-center",
                iconBg,
                iconColor
              )}
            >
              <Video />
            </div>
          )}
        </div>
      ) : (
        <div
          className={cn(
            "rounded-sm px-1 flex justify-between mb-1",
            bg,
            `border-l-[3px] ${borderColor}`
          )}
        >
          <h3 className={cn("text-[12px] font-medium truncate", titleColor)}>{event.title}</h3>
        </div>
      )}
    </>
  );
}

export default EventItem;
