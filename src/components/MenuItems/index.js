import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <div className="bg-secondary1 hidden tablet:flex">
      <div className="container flex justify-start items-center h-14 text-p2 font-semibold">
        <Link to="Catalog" className="flex w-1/2 justify-between desktop:w-1/3">
          <MenuItem />
        </Link>
      </div>
    </div>
  );
};

export default MenuItems;
