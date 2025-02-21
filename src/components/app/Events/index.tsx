import EventList from "./components/EventList";
import EventHeader from "./components/Header";

function Events() {
  return (
    <div className="mt-6 px-4">
      <EventHeader />
      <EventList />
    </div>
  );
}

export default Events;
