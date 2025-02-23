"use client";

import EventItem from "@/components/app/Sidebar/components/Events/components/EventItem";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Event } from "@/models/interfaces";
import { Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import Content from "../Content";
import Edit from "../Edit";
import IconWrapper from "./components/Icon";

interface InfoDialogProps {
  event: Event;
}

function InfoDialog({ event }: InfoDialogProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenInfoDialog, setIsOpenInfoDialog] = useState(false);

  useEffect(() => {
    if (!isOpenInfoDialog) setIsEdit(false);
  }, [isOpenInfoDialog]);

  return (
    <Dialog open={isOpenInfoDialog} onOpenChange={setIsOpenInfoDialog}>
      <DialogTrigger asChild>
        <div
          className="cursor-pointer"
          onClick={() => {
            setIsOpenInfoDialog(true);
          }}
        >
          <EventItem event={event} isFull={false} />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="absolute right-12 top-[18px] flex items-center gap-4">
          <span onClick={() => setIsEdit(true)}>
            <IconWrapper icon={<Pencil size={16} />} tooltip="Edit event" />
          </span>
          <IconWrapper icon={<Trash2 size={16} />} tooltip="Delete event" />
        </div>
        {isEdit ? (
          <Edit event={event} setIsOpenDialog={setIsOpenInfoDialog} />
        ) : (
          <Content event={event} />
        )}
      </DialogContent>
    </Dialog>
  );
}

export default InfoDialog;
