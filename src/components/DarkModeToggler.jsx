import MoonIcon from "../assets/images/icon-moon.svg";
import SunIcon from "../assets/images/icon-sun.svg";
import { useDarkMode } from "../context/ThemeContext";

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {darkMode ? (
        <img src={MoonIcon} alt="moon" />
      ) : (
        <img src={SunIcon} alt="sun" />
      )}
    </button>
  );
};

export default DarkModeToggler;
