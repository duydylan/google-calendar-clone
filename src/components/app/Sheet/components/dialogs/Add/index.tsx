"use client";

import FormUI from "@/components/common/Form";
import Input from "@/components/common/Input";
import Select from "@/components/common/Select";
import Textarea from "@/components/common/Textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EventType } from "@/models/enums";
import { ReactNode, useContext, useState } from "react";
import { SheetItemContext } from "../../SheetItem";

interface AddProps {
  trigger: ReactNode;
}
function Add({ trigger }: AddProps) {
  const [eventType, setEventType] = useState<string>(EventType.Appointment);

  const context = useContext(SheetItemContext);

  const { isOpenAddDialog, setIsOpenAddDialog, isOpenInfoDialog } = context || {};

  return (
    <Dialog
      open={isOpenAddDialog}
      onOpenChange={(isOpenAddDialog) => {
        if (!isOpenInfoDialog) setIsOpenAddDialog?.(isOpenAddDialog);
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Event</DialogTitle>
        </DialogHeader>
        <FormUI submitLabel="Create">
          <Input label="Title" name="title" autoFocus />
          <Select
            label="Type"
            options={[
              {
                label: "Appointment",
                value: EventType.Appointment,
              },
              {
                label: "Webinar",
                value: EventType.Webinar,
              },
            ]}
            defaultValue={EventType.Appointment}
            value={eventType}
            onValueChange={setEventType}
          />
          <input type="hidden" name="type" value={eventType} />
          <Textarea label="Description" name="description" />
        </FormUI>
      </DialogContent>
    </Dialog>
  );
}

export default Add;
