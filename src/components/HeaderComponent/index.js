import SearchForm from "./Search";
import TelephoneIcon from "../svg/TelephonIcon";
import LogoIcon from "../svg/LogoIcon";
import HeaderIcons from "./HeaderIcons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container flex justify-between w-full h-37 my-5 items-center tablet:my-10">
        <Link to="/">
          {" "}
          <LogoIcon className="tablet:w-40 h-16" />
        </Link>
        <SearchForm className="flex hidden desktop:block" />
      <div className="flex flex-row text-h2m font-semibold justify-around hidden tablet:flex ">
        <TelephoneIcon />
        <a href="tel:+375 (33) 777-71-71">+375 (33) 777-71-71</a>
      </div>
      <HeaderIcons />
    </div>
  );
}
export default Header;
