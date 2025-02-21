import { Separator } from "@/components/ui/separator";
import Calendar from "./components/Calendar";
import Events from "./components/Events";

function Sidebar() {
  return (
    <aside className="w-[320px] rounded-lg border bg-white">
      <Calendar />
      <Separator />
      <Events />
    </aside>
  );
}

export default Sidebar;
