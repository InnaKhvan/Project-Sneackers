import ButtonOrder from "../ButtonOrder";
import FilterSize from "../FilterForm/FilterSize";
import HeardVector from "../svg/HeardVector";
// import img from "./Project-Sneackers/adidas1.png"

const CardComponent = ({ item }) => {
  return (
    <div className="container grid grid-rows-2 gap-y-5 tablet:grid-cols-2 gap-x-4	desktop:gap-x-7	">
      <div className="grid">
        <img src="/Project-Sneackers/adidas1.png" />
      </div>
      <div className="flex flex-col">
        <div className="flex text-h2t font-bold	mb-2.5 tablet:mb-8 text-3xl	desktop:text-h1 mb-[60px]">
          {item.name}
        </div>
        <div className="flex flex-col space-y-5 desktop:space-y-7">
          <div className="flex flex-col text-p1 space-y-2 desktop:text-h2 space-y-3">
            <div className=" flex flex-row">
              Артикул: <div className="font-semibold">{item.articul}</div>
            </div>
            <div className=" flex flex-row">
              Цвет: <div className="font-semibold">{item.color}</div>
            </div>
            <div className=" flex flex-row">
              Пол: <div className="font-semibold">{item.sex}</div>
            </div>
          </div>
          <div>Размер</div>
          <div>
            {item.size.map((num) => (
              <div> {num}</div>
            ))}
          </div>
          <div className="flex flex-col space-y-2.5 desktop:space-y-6">
            {" "}
            <div className="text-xl font-bold desktop:text-h4">
              {item.price} BYN
            </div>
            <div className="flex flex-row space-x-3.5 desktop:space-x-6">
              {" "}
              <button className="bg-primary2 text-secondary1 items-center	justify-center text-p2 font-bold rounded-xl h-[43px] w-[143px] desktop:w-60 desktop:h-[72px] desktop:text-h2m">
                В корзину
              </button>
              <a className="flex w-[43px] h-[43px] border-2	items-center justify-center rounded-lg border-primary2 desktop:w-[72px] desktop:h-[72px]">
                {" "}
                <HeardVector />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
