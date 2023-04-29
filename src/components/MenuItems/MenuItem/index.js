import { Link } from "react-router-dom";
import styles from "./menuitem.module.css"
import items from "../../../mockData/menuItem.json";
const MenuItem = ({kind}) => {
  const className = kind === "primary" ? "BlackColor" : "RedColor";
  return (
    <>
      {items.map((item) => (
        <Link>
          <button className={className}>{item.name}</button>
        </Link>
      ))}
    </>
  );
};

export default MenuItem;
