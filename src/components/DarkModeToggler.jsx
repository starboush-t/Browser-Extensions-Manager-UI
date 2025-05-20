import MoonIcon from "/assets/images/icon-moon.svg";
import SunIcon from "/assets/images/icon-sun.svg";
import { useDarkMode } from "../context/ThemeContext";

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 "
    >
      {darkMode ? (
        <img src={SunIcon} alt="sun" />
      ) : (
        <img src={MoonIcon} alt="moon" />
      )}
    </button>
  );
};

export default DarkModeToggler;
