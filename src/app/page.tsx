import Sheet from "@/components/app/Sheet";
import Sidebar from "@/components/app/Sidebar";

export default function Home() {
  return (
    <main className="flex bg-tertiary min-h-[100vh] p-2">
      <div className="w-full max-w-[1280px] mx-auto flex gap-3">
        <Sidebar />
        <Sheet />
      </div>
    </main>
  );
}
