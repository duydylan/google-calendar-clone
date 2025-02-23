import Grid from "./components/Grid";
import Header from "./components/Header";

function Sheet() {
  return (
    <article className="w-[calc(100%-320px)] bg-white border rounded-lg">
      <Header />
      <Grid />
    </article>
  );
}

export default Sheet;
