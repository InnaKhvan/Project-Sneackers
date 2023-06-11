import ButtonOrder from "../ButtonOrder";
import FilterSize from "../FilterForm/FilterSize";
import HeardVector from "../svg/HeardVector";
// import img from "./Project-Sneackers/adidas1.png"

const CardComponent = ({ item }) => {
  return (
    <div className="flex flex-col space-x-5 bg-secondary1">
      <div className="flex w-1/2"><img src="/Project-Sneackers/adidas1.png" /></div>
      <div className="flex w-1/2 flex-col">
        <div className="flex text-h2t font-bold	">{item.name}</div>
        <div className="text-p1">
          Артикул: <div className="text-p1 font-semibold">{item.articul}</div>
        </div>
        <div className="text-p1">
          Цвет: <div className="text-p1 font-semibold">{item.color}</div>
        </div>
        <div className="text-p1">
          Пол: <div className="text-p1 font-semibold">{item.sex}</div>
        </div>
        <FilterSize /> <div className="text-xl font-bold">{item.price} BYN</div>
        <div className="flex flex-row space-x-3.5">
          {" "}
          <button className="bg-primary2 text-secondary1 items-center	justify-center text-p2 font-bold rounded-xl h-[43px] w-[143px]">В корзину
          </button><a className="flex w-[43px] h-[43px] border-2	items-center	justify-center	 rounded-lg border-primary2">
            {" "}
            <HeardVector />
          </a>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
