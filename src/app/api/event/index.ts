"use server";

import { sql } from "@/lib/db";
import { CalendarType } from "@/models/enums";
import { CreateEventPayload, Event, EventSchema } from "@/models/interfaces";

export async function createEventAPI(payload: CreateEventPayload) {
  try {
    const { title, description, type, timeFrom, timeTo } = payload;

    return await sql`
          INSERT INTO events (title, description, type, time_from, time_to, created_at, modified_at) 
          VALUES (${title}, ${
      description || ""
    }, ${type}, ${timeFrom}::TIMESTAMPTZ, ${timeTo}::TIMESTAMPTZ, now(), now());
      `;
  } catch (error) {
    console.log(error);
  }
}

export async function getEvents(filter: CalendarType, date: string): Promise<Event[]> {
  const result = await sql<EventSchema[]>`
      SELECT * FROM events
      WHERE time_from >= date_trunc('month', ${date}::TIMESTAMP) - INTERVAL '1 month'
      AND time_from < date_trunc('month', ${date}::TIMESTAMP) + INTERVAL '1 month';
    `;

  return result.map((item) => ({
    ...item,
    timeFrom: item.time_from,
    timeTo: item.time_to,
  }));
}
