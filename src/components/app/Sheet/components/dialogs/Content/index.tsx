import { DialogTitle } from "@/components/ui/dialog";
import { Event } from "@/models/interfaces";
import { AlignLeft, Clock, SquareMenu } from "lucide-react";
import InfoItem from "../Info/components/Item";

interface ContentProps {
  event: Event;
}

function Content({ event }: ContentProps) {
  const { title, description, date, type } = event;

  return (
    <>
      <DialogTitle className="text-2xl font-normal">{title}</DialogTitle>
      <div className="grid gap-4 py-2">
        <InfoItem icon={<Clock size={18} />} children={date} />
        <InfoItem icon={<SquareMenu size={18} />} children={type} />
        <InfoItem icon={<AlignLeft size={18} />} children={description} />
      </div>
    </>
  );
}

export default Content;
