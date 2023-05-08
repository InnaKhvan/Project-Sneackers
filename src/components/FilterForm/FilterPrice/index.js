import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./style.css";
import styles from './filterPrice.module.css'

const FilterPrice = () => {

  return (
    <div className={styles.mainblock}>
      <h2 className="text-h3 mb-2.5 desktop:mb-5 mt-7">Цена</h2>
      <div className={"flex space-x-5 " + styles.block}>
        {" "}
        <input type="text" id="i1" className={"text-p2 border pl-2.5 pr-5	bg-secondary1 border-secondary2 " + styles.priceblock} />
        <input className={"text-p2 border pl-2.5 pr-5	bg-secondary1 border-secondary2 " + styles.priceblock} />
      </div>

      <RangeSlider  />
    </div>
  );
};
console.log(RangeSlider)
export default FilterPrice;
