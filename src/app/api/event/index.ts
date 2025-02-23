"use server";

import { sql } from "@/lib/db";
import { CalendarType } from "@/models/enums";
import {
  ById,
  CreateEventPayload,
  Event,
  EventSchema,
  UpdateEventPayload,
} from "@/models/interfaces";

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

export async function editEventAPI(payload: UpdateEventPayload) {
  try {
    const { id, title, description, type, timeFrom, timeTo } = payload;

    return await sql`
          UPDATE events
          SET 
            title = COALESCE(${title ?? null}, title),
            description = COALESCE(${description ?? null}, description),
            type = COALESCE(${type ?? null}, type),
            time_from = COALESCE(${timeFrom ?? null}::TIMESTAMPTZ, time_from),
            time_to = COALESCE(${timeTo ?? null}::TIMESTAMPTZ, time_to),
            modified_at = now()
          WHERE id = ${id};
      `;
  } catch (error) {
    console.log(error);
  }
}

export async function getEventsAPI(filter: CalendarType, date: string): Promise<Event[]> {
  const selectedDate = new Date(date).toISOString();

  let result: EventSchema[] = [];

  if (filter === CalendarType.Day) {
    result = await sql<EventSchema[]>`
      SELECT * FROM events
      WHERE time_from = ${selectedDate}::TIMESTAMP
    `;
  } else if (filter === CalendarType.Month) {
    result = await sql<EventSchema[]>`
    SELECT * FROM events
    WHERE time_from >= date_trunc('month', ${date}::TIMESTAMP) - INTERVAL '1 month'
    AND time_from < date_trunc('month', ${date}::TIMESTAMP) + INTERVAL '1 month';
  `;
  }

  return result.map((item) => ({
    ...item,
    timeFrom: item.time_from,
    timeTo: item.time_to,
  }));
}

export async function deleteEventAPI({ id }: ById) {
  return await sql<EventSchema[]>`
      DELETE FROM events
      WHERE id = ${id};
    `;
}
