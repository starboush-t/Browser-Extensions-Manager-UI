import Extension from "./extension";
import data from "../../data.json";

function Extensions() {
  // console.log(data);
  return (
    <section className="flex  transition-colors duration-300">
      <Extension />
    </section>
  );
}

export default Extensions;
