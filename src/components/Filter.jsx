

const Filter = ({ filteredData, setFilteredData }) => {
  return (
    <section className="mt-6 flex flex-col justify-center items-center gap-3 md:flex-row md:gap-0 md:justify-between w-full">
      <div className="w-full text-center md:text-left">
        <h1 className="font-noto w-full">Extensions List</h1>
      </div>
      <div className="flex justify-evenly items-center w-full md:justify-end md:gap-4">
        <button
          className={`button ${
            filteredData === "all" ? "bg-red-500 text-white" : ""
          }`}
          onClick={() => setFilteredData("all")}
        >
          All
        </button>
        <button
          className={`button ${
            filteredData === "active" ? "bg-red-500 text-white" : ""
          }`}
          onClick={() => setFilteredData("active")}
        >
          Active
        </button>
        <button
          className={`button ${
            filteredData === "inactive" ? "bg-red-500 text-white" : ""
          }`}
          onClick={() => setFilteredData("inactive")}
        >
          Inactive
        </button>
      </div>
    </section>
  );
};

export default Filter;
