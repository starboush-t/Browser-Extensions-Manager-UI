const Filter = ({ filter, setFilter }) => {
  return (
    <section className="mt-6 flex flex-col justify-center items-center gap-3 md:flex-row md:gap-0 md:justify-between w-full">
      <div className="w-full text-center md:text-left">
        <h1 className="font-noto w-full">Extensions List</h1>
      </div>
      <div className="flex justify-evenly items-center w-full md:justify-end md:gap-4">
        <button
          className={`button ${
            filter === "all" ? "bg-red-500 text-white" : ""
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`button ${
            filter === "active" ? "bg-red-500 text-white" : ""
          }`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`button ${
            filter === "inactive" ? "bg-red-500 text-white" : ""
          }`}
          onClick={() => setFilter("inactive")}
        >
          Inactive
        </button>
      </div>
    </section>
  );
};

export default Filter;
