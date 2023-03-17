import styles from "./Header.module.css";
import SearchForm from "../Search";
import { UserIcon } from "../svg/UserIcon";
import { HeartIcon } from "../svg/HeartIcon";
import { ShopCartIcon } from "../svg/ShopCartIcon";
import { TelephoneIcon } from "../svg/TelephonIcon";
import { LogoIcon } from "../svg/LogoIcon";
import MainMenuItem from "../MainMenuItem";

function Header() {
  return (
    <header className="flex flex-col h-53">
      <div className="container flex h-37 flex-row items-center justify-around">
        <div className={"flex justify-between items-center " + styles.header}>
          <LogoIcon />
          <SearchForm />
          <div className="flex font-semibold justify-around">
            <TelephoneIcon />
            +375 (33) 777-71-71
          </div>
          <div className="flex mt-16 space-x-7 justify-around">
            <UserIcon />
            <HeartIcon />
            <ShopCartIcon />
          </div>
        </div>
      </div>
      <MainMenuItem />
    </header>
  );
}
export default Header;
