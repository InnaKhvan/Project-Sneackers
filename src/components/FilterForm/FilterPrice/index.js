// import RangeSlider from "react-range-slider-input";
// import "react-range-slider-input/dist/style.css";
// import "./style.css";
import RangeSliderComp from "../RangeSlider";
import styles from "./filterPrice.module.css";

const FilterPrice = () => {
  return (
    <div className={styles.mainblock}>
      <h2 className="text-h3 mb-2.5 desktop:mb-5 mt-7">Цена</h2>
      <div className={"flex space-x-5 " + styles.block}>
        {" "}
        <label>
          {" "}
          <input
            type="number"
            className={
              "text-p2 border pl-2.5 pr-5	bg-secondary1 border-secondary2 " +
              styles.priceblock
            }
          />
        </label>
        <label>
          {" "}
          <input
            type="number"
            min="100"
            max="1000"
            className={
              "text-p2 border pl-2.5 pr-5	bg-secondary1 border-secondary2 " +
              styles.priceblock
            }
          />
        </label>
      </div>

      <RangeSliderComp />
      {/* <RangeSlider type="range" /> */}
    </div>
  );
};
export default FilterPrice;
