import FilterPrice from "./FilterPrice";
import styles from "./filter.module.css";
import FilterBrand from "./FilterBrand";
import FilterTypeShoes from "./FilterTypeShoes";
import FilterSize from "./FilterSize";

const Sex = ["Женский", "Мужской", "Унисекс"];

const Filter = () => {
  return (
    <div className="bg-secondary1 flex-col desktop:p-8 desktop:h-[906px] h-[914px] px-4 py-8">
      <h1 className="flex font-semibold text-h2t mb-5 ">
        Фильтры
      </h1>
      <div className={"flex flex-col " + styles.block}>
        <FilterTypeShoes />
        <FilterBrand />
        <h2 className="text-h3 mb-2.5 desktop:mb-5 mt-7	">Пол</h2>
        {Sex.map((item) => (
          <div className="text-p2 mb-2.5">
            <input className="mr-1" type="checkbox" />
            {item}
          </div>
        ))}
        <FilterSize />
        <FilterPrice />
      </div>
    </div>
  );
};

export default Filter;
