import FilterPrice from "./FilterPrice";
import styles from "./filter.module.css";
import FilterBrand from "./FilterBrand";
import FilterTypeShoes from "./FilterTypeShoes";
import FilterSize from "./FilterSize";

const Sex = ["Женский", "Мужской", "Унисекс"];

const Filter = () => {
  return (
    <div
      className={
        "bg-secondary1 flex-col hidden tablet:flex " + styles.mainblock
      }
    >
      <h1
        className={
          "flex font-semibold text-h2t tablet:mb-5 " + styles.textFilter
        }
      >
        Фильтры
      </h1>
      <div className={"flex flex-col " + styles.block}>
        <FilterTypeShoes />
        <FilterBrand />
        <h2 className="text-h3 mb-2.5 desktop:mb-5 mt-7	">Пол</h2>
        {Sex.map((item) => (
          <div className="text-p2 mb-2.5">
            <input className="mr-1" type="checkbox" id="sexfilter" />
          <label for="sexfilter">{item}</label>  
          </div>
        ))}
        <FilterSize />
        <FilterPrice />
      </div>
    </div>
  );
};

export default Filter;
