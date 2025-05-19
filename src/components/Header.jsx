import Logo from "../assets/images/logo.svg";
import DarkModeToggler from "./DarkModeToggler";
import Filter from "./Filter";

const Header = () => {
  return (
    <header className="lg:mb-7 transition-colors duration-300 hover:transition-all hover:duration-300">
      <section className="flex flex-col lg:gap-10">
        <div className="flex justify-between bg-white dark:bg-gray-800 rounded-lg shadow-lg px-3 py-2">
          <img src={Logo} className="stroke-transparent " />
          <DarkModeToggler />
        </div>
      </section>
    </header>
  );
};

export default Header;
