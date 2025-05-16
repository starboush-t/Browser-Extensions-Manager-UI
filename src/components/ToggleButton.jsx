import React, { useState } from "react";

const ToggleButton = ({ isActive, handleToggle }) => {
  const [isToggled, setIsToggled] = useState(isActive);

  const handleToggles = () => {
    console.log(!isToggled);
    setIsToggled(!isToggled);
    handleToggle();
  };

  return (
    <div
      className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer ${
        isToggled
          ? "bg-red-700 dark:bg-red-500"
          : "bg-gray-200 dark:bg-gray-300"
      }`}
      onClick={handleToggles}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
          isToggled ? "translate-x-8" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default ToggleButton;

