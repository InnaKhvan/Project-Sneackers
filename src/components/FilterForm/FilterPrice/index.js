import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./style.css";
import styles from './filterPrice.module.css'
// rangeSlider = {
//     min: 150,
//     max: 250,

// };
const FilterPrice = () => {

  const rng=document.getElementById('r1'); //rng - это ползунок
  const i1=document.getElementById('i1'); // i1 - input
 i1=rng;

  // const rangeSliderElement = {
  //   min: 150,
  //   max: 450,
    
  
  // };


  return (
    <div className={styles.mainblock}>
      <h2 className="text-h3 mb-2.5 desktop:mb-5 mt-7">Цена</h2>
      <div className={"flex space-x-5 " + styles.block}>
        {" "}
        <input type="text" id="i1" className={"text-p2 border pl-2.5 pr-5	bg-secondary1 border-secondary2 " + styles.priceblock} />
        <input className={"text-p2 border pl-2.5 pr-5	bg-secondary1 border-secondary2 " + styles.priceblock} />
      </div>

      <RangeSlider type="range" id="r1" oninput="FilterPrice" />
    </div>
  );
};
console.log(RangeSlider)
export default FilterPrice;
