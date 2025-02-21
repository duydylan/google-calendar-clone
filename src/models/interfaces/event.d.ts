import { EventType } from "../enums";

export interface Event {
  id: string;
  title: string;
  date: string;
  type: EventType;
}
