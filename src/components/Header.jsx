import Logo from "../assets/images/logo.svg";
import DarkModeToggler from "./DarkModeToggler";

const Header = () => {
  return (
    <header>
      <div>
        <div className="flex justify-between bg-white dark:bg-gray-800 rounded-lg shadow-lg px-3 py-2">
          <img src={Logo} />
          <DarkModeToggler />
        </div>
        <div>
          <h1 className="font-noto">Extensions List</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
