import { Link } from "react-router-dom";
import styles from "./menu.module.css";
const MenuItems = () => {
  return (
    <div className="flex font-semibold h-14 space-x-9 text-xs bg-secondary1 ">
      <div
        className={"flex justify-between flex-row items-center " + styles.menu}
      >
        <div className="bg-current my-5">
          <Link>МУЖСКИЕ</Link>
        </div>
        <div className="my-5">
          <Link>ЖЕНСКИЕ</Link>
        </div>
        <Link className="flex my-5">БРЕНДЫ</Link>
        <Link className="flex my-5 text-sale">HOT SALE</Link>
      </div>
    </div>
  );
};
export default MenuItems;
