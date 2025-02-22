import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export function isDateInCurrentWeek(date: string | Date | dayjs.Dayjs): boolean {
  const inputDate = dayjs(date);
  const startOfWeek = dayjs().startOf("week"); // Start of the current week (Sunday)
  const endOfWeek = dayjs().endOf("week"); // End of the current week (Saturday)

  return inputDate.isSameOrAfter(startOfWeek) && inputDate.isSameOrBefore(endOfWeek);
}
