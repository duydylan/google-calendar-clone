import { EventType } from "../enums";

export interface Event {
  id: string;
  title: string;
  description?: string;
  date: string;
  type: EventType;
}
