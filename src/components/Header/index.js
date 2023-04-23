import styles from "./Header.module.css";
import SearchForm from "./Search";
import TelephoneIcon from "../svg/TelephonIcon";
// import MainMenuItem from "../MainMenuItem";
import LogoIcon from "../svg/LogoIcon";
import HeaderIcons from "./HeaderIcons";


function Header() {
  return (
    <header className="flex flex-col h-53">
      <div className="container flex h-37 flex-row items-center justify-around">
        <div
          className={
            "flex justify-between flex-row tablet:flex-row items-center " +
            styles.header
          }
        >
          <LogoIcon className="tablet:w-40 h-16" />
          <div className="flex items-center">
            <SearchForm className="hidden desktop:block" />
          </div>
          <div
            className={
              "flex flex-row font-semibold justify-around hidden tablet:flex " +
              styles.telephone
            }
          >
            <TelephoneIcon />
            <a href="tel:+375 (33) 777-71-71">+375 (33) 777-71-71</a>
          </div>
          <HeaderIcons />
        </div>
      </div>
    </header>
  );
}
export default Header;
