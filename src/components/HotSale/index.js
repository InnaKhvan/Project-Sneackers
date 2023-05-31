import { Link } from "react-router-dom";
import Card from "../CardProduct";
import items from "../../mockData/saleProdact.json";
const HotSale = () => {
  return (
    <div className="container flex flex-col content-between">
      <div className="flex text-sale text-h4 justify-center tablet:text-h1 mb-10 tablet:mb-[60px]">HOT SALE</div>
      <div className="grid grid-cols-4 gap-x-6 ">
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

export default HotSale;
