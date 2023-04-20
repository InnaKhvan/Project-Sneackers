import styles from "./filter.module.css";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';


const Brand = [
  "Nike",
  "Adidas",
  "Puma",
  "Reebook",
  "Air Jordan",
  "Convers",
  "New Balance",
  "Champion",
  "Vans",
];
const Sex = ["Женский", "Мужской", "Унисекс"];
const Size = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

const Filter = () => {
  return (
    <div className={"bg-secondary1 flex-col hidden tablet:flex " + styles.mainblock}>
      <h1 className={"flex font-semibold tablet:mb-5 " + styles.textFilter}>Фильтры</h1>
      <div className={"flex flex-col " + styles.block}>
        <h2 className="text-h3 mb-3.5 tablet:mb-2.5	">Вид обуви</h2>
        <div className="text-p2">
          <input className={" " + styles.checkbox} type="checkbox" />
          Кроссовки
        </div>
        <div className="text-p2">
          <input className={"mt-2.5 tablet:mb-2.5 " + styles.checkbox} type="checkbox" />
          Кеды
        </div>
        <h2 className="text-h3 mb-5 mt-6 tablet:mt-3 tablet:mb-2.5">Бренд</h2>
        {Brand.map((item) => (
          <div className="text-p2 mb-2.5">
            <input className={" " + styles.checkbox} type="checkbox" />
            {item}
          </div>
        ))}
        <h2 className="text-h3 my-5 tablet:my-2.5">Пол</h2>
        {Sex.map((item) => (
          <div className="text-p2 mb-2.5">
            <input className={" " + styles.checkbox} type="checkbox" />
            {item}
          </div>
        ))}
        <h2 className="text-h3 my-5 tablet:my-2.5">Размер</h2>
        <div className="grid grid-cols-5 gap-2.5 tablet:grid-cols-3 tablet:gap-5">
          {Size.map((item) => (
            <div className="flex text-p1">{item}</div>
          ))}
        </div>
        <h2 className="text-h3 my-5">Цена</h2>
        <RangeSlider />
      </div>
    </div>
  );
};

export default Filter;
