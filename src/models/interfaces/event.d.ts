import { CalendarType, EventType } from "../enums";
import { FormState } from "./common";

export interface EventSchema {
  id: string;
  title: string;
  description: string;
  time_from: string;
  time_to: string;
  type: EventType;
}
export interface Event {
  id: string;
  title: string;
  description: string;
  timeFrom: string;
  timeTo: string;
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
export interface GetEventParams {
  type: CalendarType;
  date: string;
}
