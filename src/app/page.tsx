import Sheet from "@/components/app/Sheet";
import Sidebar from "@/components/app/Sidebar";

export default function Home() {
  return (
    <main className="bg-lightGreen min-h-[100vh] p-2">
      <div className="max-w-[1280px] mx-auto  flex gap-3">
        <Sidebar />
        <Sheet />
      </div>
    </main>
  );
}
