import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarType } from "@/models/enums";
import dayjs from "dayjs";
import { capitalize } from "lodash";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeaderProps {
  currentMonth: dayjs.Dayjs;
  setCurrentMonth: (value: dayjs.Dayjs) => void;
  viewType: string;
  setViewType: (value: string) => void;
}

function Header({ currentMonth, setCurrentMonth, viewType, setViewType }: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4 p-4">
      <div className="flex items-center gap-3 text-primary">
        <Button variant="outline" size="sm" className="rounded-lg border-primary">
          Today
        </Button>
        <span
          className="cursor-pointer"
          onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
        >
          <ChevronLeft size={20} />
        </span>
        <span
          className="cursor-pointer"
          onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
        >
          <ChevronRight size={20} />
        </span>
        <h2 className="text-lg font-semibold">{currentMonth.format("MMMM YYYY")}</h2>
      </div>
      <div>
        <Select value={viewType} onValueChange={setViewType}>
          <SelectTrigger className="w-[100px] border-none focus:ring-0 focus:ring-offset-0 rounded-lg bg-lightBlue text-white font-normal">
            <SelectValue defaultValue={CalendarType.Month} placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Object.entries(CalendarType).map(([index, item]) => (
                <SelectItem key={index} value={item}>
                  {capitalize(item)}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default Header;
