function generateTime(date: Date, type: "hour" | "minute" | "ampm", value: string) {
  const newDate = new Date(date);
  if (type === "hour") {
    newDate.setHours((parseInt(value) % 12) + (newDate.getHours() >= 12 ? 12 : 0));
  } else if (type === "minute") {
    newDate.setMinutes(parseInt(value));
  } else if (type === "ampm") {
    const currentHours = newDate.getHours();
    newDate.setHours(value === "PM" ? currentHours + 12 : currentHours - 12);
  }

  return newDate;
}

export default generateTime;
