import { Link } from "react-router-dom";
import items from "../../mockData/menuItem.json";
import styles from "./MainMenuItem.module.css";
const MainMenuItem = () => {
  return items.map((item) => (
    <div className="flex h-14 text-xs bg-secondary1 ">
      <div className={"flex items-center " + styles.menu}>
        <Link>
          <button className="p-9">{item.name}</button>
        </Link>
      </div>
    </div>
  ));
};

export default MainMenuItem;
