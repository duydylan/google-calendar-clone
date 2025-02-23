import Grid from "./components/Grid";
import Header from "./components/Header";

function Sheet() {
  return (
    <article className="w-full sm:w-[calc(100%-320px)] bg-white border rounded-lg mt-2 sm:mt-0">
      <Header />
      <Grid />
    </article>
  );
}

export default Sheet;
