"use client";

import DateTimePicker from "@/components/common/DateTimePicker";
import Form from "@/components/common/Form";
import FormGroup from "@/components/common/FormGroup";
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
import { Label } from "@/components/ui/label";
import { createEventAction } from "@/lib/actions/event";
import { FORM_INITIAL_STATE } from "@/models/constants";
import { EventType } from "@/models/enums";
import { CreateEventState } from "@/models/interfaces";
import { ReactNode, useActionState, useState } from "react";

interface AddProps {
  trigger: ReactNode;
}
function Add({ trigger }: AddProps) {
  const [eventType, setEventType] = useState<string>(EventType.Appointment);
  const [isOpenAddDialog, setIsOpenAddDialog] = useState(false);

  const handleEventAction = async (prevState: any, formData: FormData) => {
    return createEventAction(prevState, formData, setIsOpenAddDialog);
  };

  const [state, formAction, isPending] = useActionState(
    handleEventAction,
    FORM_INITIAL_STATE as CreateEventState
  );

  return (
    <Dialog open={isOpenAddDialog} onOpenChange={setIsOpenAddDialog}>
      <DialogTrigger asChild>
        <div onClick={() => setIsOpenAddDialog?.(true)}>{trigger}</div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Event</DialogTitle>
        </DialogHeader>
        <Form action={formAction} submitLabel="Create">
          <Input label="Title" name="title" errors={state.errors?.title} required autoFocus />
          <Textarea label="Description" name="description" errors={state.errors?.description} />
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
          <FormGroup>
            <Label>Time</Label>
            <DateTimePicker />
          </FormGroup>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default Add;
