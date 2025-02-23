import { DialogTitle } from "@/components/ui/dialog";
import { Event } from "@/models/interfaces";
import dayjs from "dayjs";
import { AlignLeft, Clock, SquareMenu } from "lucide-react";
import InfoItem from "../Info/components/Item";

interface ContentProps {
  event: Event;
}

function Content({ event }: ContentProps) {
  const { title, description, timeFrom, timeTo, type } = event;

  const dateString = dayjs(timeFrom).format("dddd, D MMMM");
  const timeFromString = dayjs(timeFrom).format("hh:mm A");
  const timeToString = dayjs(timeTo).format("hh:mm A");

  return (
    <>
      <DialogTitle className="text-xl font-normal mt-3">{title}</DialogTitle>
      <div className="grid gap-4 py-2">
        <InfoItem icon={<Clock size={18} />}>
          {dateString} ${timeFromString} - ${timeToString}
        </InfoItem>
        <InfoItem icon={<SquareMenu size={18} />}>{type}</InfoItem>
        <InfoItem icon={<AlignLeft size={18} />}>{description}</InfoItem>
      </div>
    </>
  );
}

export default Content;
