import { Separator } from "@/components/ui/separator";
import Calendar from "../Calendar";
import Events from "../Events";

function Sidebar() {
  return (
    <aside className="w-[320px] rounded-md border bg-white">
      <Calendar />
      <Separator />
      <Events />
    </aside>
  );
}

export default Sidebar;
