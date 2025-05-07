# Google Calendar

## Overview

It is a Google Calendar-like application built using Next.js and PostgreSQL. It allows users to manage events with a filtering UI similar to Google Calendar, supporting navigation between previous and next months.

## Tech Stack

- **Frontend:** Next.js
- **Database:** Neon PostgreSQL
- **ORM/Database Client:** `postgres` library
- **State Management:** React Query
- **UI Components:** TailwindCSS, shadcn

## Features

- Create, read, update, and delete events
- Filter events by month (previous/next)
- Direct PostgreSQL connection from Next.js without API routes
- Optimized for performance with React Query for data fetching

## Future Improvements

- Authentication (NextAuth.js or Firebase Auth)
- Recurring events support

## License

MIT License
