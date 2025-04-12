import Logo from "../assets/images/logo.svg";
import DarkModeToggler from "./DarkModeToggler";

const Header = () => {
  return (
    <header>
      <div>
        <div className="">
          <img src={Logo} />
          <DarkModeToggler />
        </div>
        <div>
          <h1>Extensions List</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
