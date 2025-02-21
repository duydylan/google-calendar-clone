import Sidebar from "@/components/app/Sidebar";

export default function Home() {
  return (
    <main className=" bg-lightGreen min-h-[100vh] p-2">
      <div className="container flex">
        <Sidebar />
        <article>a</article>
      </div>
    </main>
  );
}
