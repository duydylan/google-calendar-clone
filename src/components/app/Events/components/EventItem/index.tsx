import Link from "@/components/common/Link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Video } from "lucide-react";

const secondIndex = 1;
const lastIndex = 2;

interface EventItemProps {
  type: number;
}

function EventItem({ type }: EventItemProps) {
  const bgs = ["bg-lightOrange", "bg-darkOrange", "bg-lightBlue"];
  const borderColors = ["border-lightBlue", "border-darkBlue", "border-darkOrange"];

  const iconBgs = ["bg-lightBlue", "", "bg-white"];
  const iconColors = ["text-white", "", "text-lightBlue"];

  return (
    <div
      className={cn(
        "rounded-md p-2 flex justify-between mb-2",
        bgs[type],
        `border-l-[5px] ${borderColors[type]}`
      )}
    >
      <div>
        <h3
          className={cn("text-sm font-medium", type !== lastIndex ? "text-primary" : "text-white")}
        >
          First Session with Alex
        </h3>
        <div
          className={cn("text-[12px] my-1", type !== lastIndex ? "text-lightBlue" : "text-white")}
        >
          9:00 AM - 9:30 AM GMT+8
        </div>
        <div className="flex items-center gap-3">
          <Avatar className="size-[30px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@Alex" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Link href="" className={cn(type === lastIndex && "text-white")}>
            View client profile
          </Link>
        </div>
      </div>
      {type !== secondIndex && (
        <div
          className={cn(
            "w-10 h-10 rounded-full flex justify-center items-center",
            iconBgs[type],
            iconColors[type]
          )}
        >
          <Video />
        </div>
      )}
    </div>
  );
}

export default EventItem;
