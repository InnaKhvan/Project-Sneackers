import { Link } from "react-router-dom";
import items from "../../mockData/menuItem.json";
const MenuItem = () => {
  return (
    <div className="bg-secondary1 hidden tablet:flex">
      <div className="container flex justify-start items-center h-14 text-xs font-semibold">
        {items.map((item) => (
          <Link>
            <button className={`pr-9 + ${item.color}`}>{item.name}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
