import { useQuery } from "@tanstack/react-query";
import ToggleButton from "./ToggleButton";
import { useState } from "react";
import Filter from "./Filter";

const fetchData = async () => {
  const response = await fetch("../../data.json"); // Replace with your JSON file path or API endpoint
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function Extension() {
  const [filteredData, setFilteredData] = useState("all"); // Default filter is 'all'
  const [active, setActive] = useState(false); // State to manage the toggle button

  const { data, isError, isLoading } = useQuery({
    queryKey: ["extension"],
    queryFn: fetchData,
  });

  const filteredExtensions = data?.filter((ext) => {
    if (filteredData === "active") return ext.isActive;
    if (filteredData === "inactive") return !ext.isActive;
    return true; // Show all extensions
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <section>
      <Filter filteredData={filteredData} setFilteredData={setFilteredData} />
      <div className="mt-5 grid lg:grid-cols-3 w-full md:gap-4 md:grid-cols-2 gap-4">
        {filteredExtensions?.map((extension) => (
          <div
            key={extension.id}
            className="card gap-10 flex flex-col shadow-lg dark:border-[1px] dark:border-gray-600"
          >
            <div className="flex flex-1 w-fit h-fit justify-between items-start gap-4 ">
              <div className="w-4/12">
                <img src={extension.logo} alt={`${extension.name} logo`} />
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="font-noto font-[500]">{extension.name}</h2>
                <p className="font-noto pr-10 md:pr-4 text-md font-[400] leading-relaxed text-gray-700 dark:text-gray-400">
                  {extension.description}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button className="button dark:hover:bg-red-500 dark:hover:text-blue-900">
                Remove
              </button>
              <ToggleButton
                isActive={extension.isActive}
                active={active}
                setActive={setActive}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Extension;
