import { EventType } from "../enums";
import { FormState } from "./common";

export interface Event {
  id: string;
  title: string;
  description?: string;
  date: string;
  type: EventType;
}
export interface CreateEventPayload {
  title: string;
  description?: string;
  type: EventType;
  timeFrom: string;
  timeTo: string;
}
export type UpdateEventPayload = Partial<CreateEventPayload>;
export interface CreateEventState
  extends FormState<{
    title?: string[];
    description?: string[];
    type?: string[];
    timeFrom?: string[];
    timeTo?: string[];
  }> {}
export interface GetEventParams {}
