import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ToggleButton from "./ToggleButton";
import { useState } from "react";
import Filter from "./Filter";
import ConfirmModal from "./ConfirmModal";

const fetchData = async () => {
  const response = await fetch("https://brown-jesse-15.tiiny.site/json/data/extensions"); // Replace with your JSON file path or API endpoint
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const deleteExtension = async (id) => {
  // const response = await fetch(`http://localhost:3000/extensions/${id}`, {
  //   method: "DELETE",
  // });
  // if (!response.ok) {
  //   throw new Error("Failed to delete extension");
  // }
  return id;
};

const toggleButton = async ({ id, newValue }) => {
  const response = await fetch(`http://localhost:3000/extensions/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isActive: newValue }),
  });
  if (!response.ok) {
    throw new Error("Failed to toggle button");
  }
  return { id, newValue };
};

function Extension() {
  const [filter, setFilter] = useState("all"); // Default filter is 'all'
  const [active, setActive] = useState(false); // State to manage the toggle button
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState(null);
  const queryClient = useQueryClient();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["extension", { filter }],
    queryFn: fetchData,
    staleTime: 1000 * 10, // 10 seconds
  });

  const mutation = useMutation({
    mutationFn: deleteExtension,
    onSuccess: (id) => {
      queryClient.setQueryData(["extension", { filter }], (oldData) =>
        oldData.filter((ext) => ext.id !== id)
      );
    },
  });

  const toggleMutation = useMutation({
    mutationFn: toggleButton,
    onSuccess: ({ id, newValue }) => {
      queryClient.setQueryData(["extension", { filter }], (oldData) =>
        oldData.map((ext) =>
          ext.id === id ? { ...ext, isActive: newValue } : ext
        )
      );
    },
  });

  const handleToggle = (id, currentValue) => {
    toggleMutation.mutate({ id, newValue: !currentValue });
  };

  // const removeExtension = (id) => {
  //   const confirmDelete = window.confirm(
  //     "Are you sure you want to delete this extension?"
  //   );
  //   if (confirmDelete) {
  //     mutation.mutate(id);
  //   }

  //   // mutation.mutate(id);
  // };

  const removeExtension = (id) => {
    setPendingDeleteId(id);
    setModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (pendingDeleteId) {
      mutation.mutate(pendingDeleteId);
      setPendingDeleteId(null);
      setModalOpen(false);
    }
  };

  const handleCancelDelete = () => {
    setPendingDeleteId(null);
    setModalOpen(false);
  };

  const filteredExtensions = data?.filter((ext) => {
    if (filter === "active") return ext.isActive;
    if (filter === "inactive") return !ext.isActive;
    return true; // Show all extensions
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <section className="flex flex-1 flex-col transition-colors duration-300">
      <Filter filter={filter} setFilter={setFilter} />
      <div className="mt-5 grid lg:grid-cols-3 w-full  md:gap-4 md:grid-cols-2 gap-4">
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
              <button
                onClick={() => removeExtension(extension.id)}
                className="button dark:hover:bg-red-500 focus:bg-red-500 hover:transition-colors duration-500 
                "
              >
                Remove
              </button>
              <ToggleButton
                isActive={extension.isActive}
                active={active}
                setActive={setActive}
                handleToggle={() =>
                  handleToggle(extension.id, extension.isActive)
                }
              />
              <ConfirmModal
                open={modalOpen}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
                message={`Are you sure you want to delete this extension?`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Extension;
