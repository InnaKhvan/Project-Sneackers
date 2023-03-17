import { Link } from "react-router-dom";
import items from "../../mockData/menuItem.json";
const MainMenuItem = () => {
  return (
    <div className="container flex items-center h-14 text-xs bg-secondary1 ">
      {items.map((item) => (
        <Link>
          <button className="p-9">{item.name}</button>
        </Link>
      ))}
    </div>
  );
};

export default MainMenuItem;
