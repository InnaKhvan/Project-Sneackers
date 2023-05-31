import { Link } from "react-router-dom";
import items from "../../mockData/newProdact.json";
import Card from "../CardProduct";

const NewProdactBlock = () => {
 
  return (
    <div className="container flex flex-col ">
      <div className="flex text-h4 justify-center tablet:text-h1 mb-10 tablet:mb-[60px]">
        НОВИНКИ
      </div>
      <div className="grid grid-cols-4 gap-x-6">
        {items.map((item) => (
          <Card item={item} />
        ))}
      </div>
      <Link to="Catalog">
        <div className="flex content-end text-h2t justify-center underline">
          Смотреть еще
        </div>
      </Link>
    </div>
  );
};

export default NewProdactBlock;
