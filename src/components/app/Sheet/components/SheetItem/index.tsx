"use client";

import { cn } from "@/lib/utils";
import { getToday } from "@/utils/day/getToday";
import { createContext, useState } from "react";
import EventList from "../EventList";
import AddDialog from "../dialogs/Add";

const today = getToday();

export interface SheetItemContextProps {
  isOpenAddDialog: boolean;
  setIsOpenAddDialog: (value: boolean) => void;
  isOpenInfoDialog: boolean;
  setIsOpenInfoDialog: (value: boolean) => void;
}

export const SheetItemContext = createContext<SheetItemContextProps | null>(null);
interface SheetItemProps {
  isCurrent: boolean;
  date: string;
  day: number;
}

function SheetItem({ isCurrent, date, day }: SheetItemProps) {
  const [isOpenAddDialog, setIsOpenAddDialog] = useState(false);
  const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);

  return (
    <SheetItemContext.Provider
      value={{
        isOpenAddDialog,
        setIsOpenAddDialog,
        isOpenInfoDialog,
        setIsOpenInfoDialog,
      }}
    >
      <AddDialog
        trigger={
          <div
            className={cn(
              "text-sm bg-white cursor-pointer pt-2 relative z-10",
              isCurrent ? "" : "text-gray-400"
            )}
            onClick={() => {
              if (!isOpenInfoDialog) {
                setIsOpenAddDialog(true);
              }
            }}
          >
            <span
              className={cn(
                "mx-auto flex justify-center items-center size-6 text-[13px] text-center rounded-full",
                date === today && "bg-lightBlue text-white text-[11px]"
              )}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {day}
            </span>
            <EventList />
          </div>
        }
      />
    </SheetItemContext.Provider>
  );
}

export default SheetItem;
