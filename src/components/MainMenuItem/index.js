import { Link } from "react-router-dom";
import items from "../../mockData/menuItem.json";
const MainMenuItem = ({ className }) => {
  return (
    <div className={"bg-secondary1 " + className}>
      <div className="container flex justify-start items-center h-14 text-xs font-semibold">
        {items.map((item) => (
          <Link>
            <button className="pr-9 ">{item.name}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainMenuItem;
