import { EventType } from "@/models/enums";
import dayjs from "dayjs";
import { isDateInCurrentWeek } from "../day/checkCurrentInWeek";

export function renderEventStyles({
  type,
  date,
}: {
  type: EventType;
  date: string | Date | dayjs.Dayjs;
}) {
  const isEarly = isDateInCurrentWeek(date);

  const styles = {
    appointmentEarly: {
      bg: "bg-tertiary",
      borderColor: "border-lightOrange",
      titleColor: "text-primary",
      dateColor: "text-lightBlue",
      iconBg: "bg-lightOrange",
      iconColor: "text-lightBlue",
    },
    appointmentLate: {
      bg: "bg-lightBlue",
      borderColor: "border-darkOrange",
      titleColor: "text-white",
      dateColor: "text-border",
      iconBg: "bg-white",
      iconColor: "text-lightBlue",
    },
    webinarEarly: {
      bg: "bg-lightOrange",
      borderColor: "border-darkBlue",
      titleColor: "text-primary",
      dateColor: "text-lightBlue",
      iconBg: "bg-lightBlue",
      iconColor: "text-lightBlue",
    },
    webinarLate: {
      bg: "bg-darkOrange",
      borderColor: "border-lightBlue",
      titleColor: "text-primary",
      dateColor: "text-lightBlue",
      iconBg: "bg-lightBlue",
      iconColor: "text-lightBlue",
    },
    default: {
      bg: "bg-lightBlue",
      borderColor: "border-darkOrange",
      titleColor: "text-primary",
      dateColor: "text-white",
      iconBg: "bg-white",
      iconColor: "text-lightBlue",
    },
  };

  if (type === EventType.Appointment) {
    return isEarly ? styles.appointmentEarly : styles.appointmentLate;
  }
  if (type === EventType.Webinar) {
    return isEarly ? styles.webinarEarly : styles.webinarLate;
  }
  return styles.default;
}
