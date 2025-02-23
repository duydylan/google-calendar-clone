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
import { EventQueryKeys, EventType } from "@/models/enums";
import { CreateEventState } from "@/models/interfaces";
import { useQueryClient } from "@tanstack/react-query";
import { ReactNode, useActionState, useState } from "react";
import { toast } from "sonner";

interface AddProps {
  trigger: ReactNode;
  dateSelected: string;
}
function Add({ trigger, dateSelected }: AddProps) {
  const [eventType, setEventType] = useState<string>(EventType.Appointment);
  const [isOpenAddDialog, setIsOpenAddDialog] = useState(false);

  const queryClient = useQueryClient();

  const handleCloseDialog = () => {
    setIsOpenAddDialog(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEventAction = async (prevState: any, formData: FormData) => {
    const result = await createEventAction(prevState, formData);

    if (!result.errors) {
      handleCloseDialog();
      toast("Event has been created.");
      queryClient.invalidateQueries({ queryKey: [EventQueryKeys.GetEvents] });
      queryClient.invalidateQueries({ queryKey: [EventQueryKeys.GetUpComing] });
    }

    return result;
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
        <Form action={formAction} submitLabel="Create" isLoading={isPending}>
          <Input label="Title" name="title" errors={state.errors?.title} required autoFocus />
          <Textarea label="Description" name="description" errors={state.errors?.description} />
          <Select
            label="Type"
            name="type"
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
          <FormGroup>
            <Label>Time</Label>
            <DateTimePicker defaultDateFrom={dateSelected} />
          </FormGroup>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default Add;
