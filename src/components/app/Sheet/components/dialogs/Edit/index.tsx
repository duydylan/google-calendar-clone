"use client";

import FormUI from "@/components/common/Form";
import Input from "@/components/common/Input";
import Select from "@/components/common/Select";
import Textarea from "@/components/common/Textarea";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { editEventAction } from "@/lib/actions/event";
import { FORM_INITIAL_STATE } from "@/models/constants";
import { EventQueryKeys, EventType } from "@/models/enums";
import { CreateEventState, Event } from "@/models/interfaces";
import { useQueryClient } from "@tanstack/react-query";
import { useActionState, useState } from "react";

interface EditProps {
  event: Event;
  setIsOpenDialog: (value: boolean) => void;
}

function Edit({ event, setIsOpenDialog }: EditProps) {
  const { id, title, description, type } = event;

  const [eventType, setEventType] = useState<string>(type);

  const queryClient = useQueryClient();

  const handleCloseDialog = () => {
    setIsOpenDialog(false);
  };

  const handleEventAction = async (prevState: any, formData: FormData) => {
    const result = await editEventAction(prevState, formData);

    if (!result.errors) {
      handleCloseDialog();
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
    <>
      <DialogHeader>
        <DialogTitle>Edit Event</DialogTitle>
      </DialogHeader>
      <FormUI action={formAction} submitLabel="Save" isLoading={isPending}>
        <input type="hidden" name="id" value={id} />
        <Input
          label="Title"
          name="title"
          defaultValue={title}
          errors={state.errors?.title}
          required
          autoFocus
        />
        <Textarea
          label="Description"
          name="description"
          errors={state.errors?.description}
          defaultValue={description}
        />
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
          defaultValue={type}
          value={eventType}
          onValueChange={setEventType}
        />
      </FormUI>
    </>
  );
}

export default Edit;
