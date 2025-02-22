"use server";

import { sql } from "@/lib/db";
import { CalendarType } from "@/models/enums";
import { CreateEventPayload } from "@/models/interfaces";

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

export async function getEvents(filter: CalendarType, date: string) {
  return await sql`
      SELECT * FROM events
      WHERE DATE_TRUNC(${filter}, time_from) = DATE_TRUNC(${filter}, ${date}::TIMESTAMP);
    `;
}
