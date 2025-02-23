import { CalendarType, EventType } from "../enums";
import { ById, FormState } from "./common";

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
export type UpdateEventPayload = Partial<CreateEventPayload> & ById;
export interface CreateEventState
  extends FormState<{
    title?: string[];
    description?: string[];
    type?: string[];
  }> {}
export interface GetEventParams {
  type: CalendarType;
  date: string;
}
