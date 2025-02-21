import EventItem from "../EventItem";

function EventList() {
  return (
    <div className="mt-3">
      <EventItem type={0} />
      <EventItem type={1} />
      <EventItem type={2} />
    </div>
  );
}

export default EventList;
