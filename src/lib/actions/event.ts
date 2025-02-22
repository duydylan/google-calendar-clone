"use server";

import { createEventAPI } from "@/app/api/event";
import { EventType } from "@/models/enums";
import { CreateEventState } from "@/models/interfaces";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const FormSchema = z.object({
  title: z.string().min(1, {
    message: "Please enter title.",
  }),
  description: z.optional(z.string()),
  type: z.nativeEnum(EventType),
  timeFrom: z.string().min(1, {
    message: "Please enter time start.",
  }),
  timeTo: z.string().min(1, {
    message: "Please enter time end.",
  }),
});

export async function createEventAction(_: CreateEventState, formData: FormData) {
  const validateFields = FormSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing required fields.",
    };
  }

  const payload = {
    ...validateFields.data,
  };

  try {
    await createEventAPI(payload);

    revalidatePath("/");
    redirect("/");
  } catch (error) {
    return {
      message: "Failed to create event.",
    };
  }
}
