import dayjs from "dayjs";
import { redirect } from "next/navigation";

export default function Home() {
  const today = dayjs().format("YYYY/MM/DD");

  redirect(`/month/${today}`);
}
