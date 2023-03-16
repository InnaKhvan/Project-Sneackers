import MainMenuItem from "../MainMenuItem";
import styles from "./menu.module.css";
const MenuItems = () => {
  return (
    <div className="flex h-14 text-xs bg-secondary1 ">
      <div
        className={"flex items-center " + styles.menu}
      >
          <MainMenuItem />
        </div>
        
      </div>
  
  );
};
export default MenuItems;
