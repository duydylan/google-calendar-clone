"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import generateTime from "@/utils/day/generateTime";
import dayjs from "dayjs";
import { useState } from "react";

const hours = Array.from({ length: 12 }, (_, i) => i + 1);

interface TimePickerProps {
  date: Date;
  setDate: (value: Date) => void;
}

function TimePicker({ date, setDate }: TimePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTimeChange = (date: Date, type: "hour" | "minute" | "ampm", timeValue: string) => {
    const newDate = generateTime(date, type, timeValue);
    setDate(newDate);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen} modal={true}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {date ? dayjs(date).format("hh:mm A") : <span>hh:mm A</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 overflow-auto">
        <div className="flex flex-col sm:flex-row sm:max-h-[300px] divide-y sm:divide-y-0 sm:divide-x">
          <ScrollArea className="w-64 sm:w-auto">
            <div className="flex sm:flex-col p-2">
              {hours.reverse().map((hour) => (
                <Button
                  key={hour}
                  size="icon"
                  variant={date && date.getHours() % 12 === hour % 12 ? "default" : "ghost"}
                  className="sm:w-full shrink-0 aspect-square"
                  onClick={() => handleTimeChange(date, "hour", hour.toString())}
                >
                  {hour}
                </Button>
              ))}
            </div>
          </ScrollArea>
          <ScrollArea className="w-64 sm:w-auto">
            <div className="flex sm:flex-col p-2">
              {Array.from({ length: 59 }, (_, i) => i).map((minute) => (
                <Button
                  key={minute}
                  size="icon"
                  variant={date && date.getMinutes() === minute ? "default" : "ghost"}
                  className="sm:w-full shrink-0 aspect-square"
                  onClick={() => handleTimeChange(date, "minute", minute.toString())}
                >
                  {minute}
                </Button>
              ))}
            </div>
          </ScrollArea>
          <ScrollArea className="">
            <div className="flex sm:flex-col p-2">
              {["AM", "PM"].map((ampm) => (
                <Button
                  key={ampm}
                  size="icon"
                  variant={
                    date &&
                    ((ampm === "AM" && date.getHours() < 12) ||
                      (ampm === "PM" && date.getHours() >= 12))
                      ? "default"
                      : "ghost"
                  }
                  className="sm:w-full shrink-0 aspect-square"
                  onClick={() => handleTimeChange(date, "ampm", ampm)}
                >
                  {ampm}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default TimePicker;
