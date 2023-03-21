import styles from "./Header.module.css";
import SearchForm from "../Search";
import { UserIcon } from "../svg/UserIcon";
import { HeartIcon } from "../svg/HeartIcon";
import { ShopCartIcon } from "../svg/ShopCartIcon";
import { TelephoneIcon } from "../svg/TelephonIcon";
import { LogoIcon } from "../svg/LogoIcon";
import MainMenuItem from "../MainMenuItem";
import { MenuIcon } from "../svg/MenuIcon";
import { SearchIconTablet } from "../svg/SearchIconTablet";

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
          <LogoIcon className="" />
          <div className="flex items-center">
          <SearchForm className="hidden desktop:block" />
          </div>
          <div
            className={
              "flex flex-row font-semibold justify-around hidden tablet:flex desktop:flex " +
              styles.telephone
            }
          >
            <TelephoneIcon />
            +375 (33) 777-71-71
          </div>
          <div className="flex space-x-7 justify-around">
            <SearchIconTablet className="hidden tablet:block desktop:hidden" />
            <UserIcon className="hidden tablet:block desktop:block" />
            <HeartIcon className="hidden tablet:block desktop:block" />
            <ShopCartIcon />
            <MenuIcon className="tablet:hidden desktop:hidden" />
          </div>
        </div>
      </div>
      <MainMenuItem className="hidden tablet:block desktop:block" />
    </header>
  );
}
export default Header;
