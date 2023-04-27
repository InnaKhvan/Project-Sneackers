import './menuitem.css'
import { Link } from "react-router-dom";
import items from "../../../mockData/menuItem.json";
const MenuItem = ({ kind}) => {
  const className = kind === "primary" ? "BlackColor" : "RedColor";
  return (
    <>
      {items.map((item) => (
        <Link>
          <button className={`pr-9 ${className}`}>{item.name}</button>
        </Link>
      ))}
    </>
  );
};

export default MenuItem;
