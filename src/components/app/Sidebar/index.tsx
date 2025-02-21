import { Separator } from "@/components/ui/separator";
import Calendar from "../Calendar";

function Sidebar() {
  return (
    <aside className="rounded-md border bg-white">
      <Calendar />
      <Separator />
    </aside>
  );
}

export default Sidebar;
