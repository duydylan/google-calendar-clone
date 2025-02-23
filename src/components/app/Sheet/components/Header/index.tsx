"use client";

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
import { useParams, useRouter } from "next/navigation";

function Header() {
  const { type, year, month, day } = useParams();
  const router = useRouter();

  const viewType = String(type);
  const currentDate = `${year}/${month}/${day}`;
  const currentMonth = dayjs(currentDate);

  const setViewType = (viewType: string) => {
    router.push(`/${viewType}/${year}/${month}/${day}`);
  };

  const setCurrentMonth = (value: number) => {
    router.push(`/${viewType}/${year}/${value}/${day}`);
  };

  const handleClickToday = () => {
    router.push(
      `/${viewType}/${dayjs().format("YYYY")}/${dayjs().format("MM")}/${dayjs().format("DD")}`
    );
  };

  return (
    <div className="flex justify-between items-center mb-4 p-4">
      <div className="flex items-center gap-1 sm:gap-3 text-primary">
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg border-primary"
          onClick={handleClickToday}
        >
          Today
        </Button>
        <span
          className="cursor-pointer"
          onClick={() => setCurrentMonth(parseInt(String(month)) - 1)}
        >
          <ChevronLeft size={20} />
        </span>
        <span
          className="cursor-pointer"
          onClick={() => setCurrentMonth(parseInt(String(month)) + 1)}
        >
          <ChevronRight size={20} />
        </span>
        <h2 className="text-md sm:text-lg font-semibold">{currentMonth.format("MMMM YYYY")}</h2>
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
