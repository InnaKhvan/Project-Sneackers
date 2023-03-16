import { Link } from "react-router-dom";
import items from "../../mockData/menuItem.json"
const MainMenuItem = () => {
    return (
        items.map((item) => (
        <Link><button className="p-9">
          {item.name}
        </button></Link>
    ),
    ))
};

export default MainMenuItem;