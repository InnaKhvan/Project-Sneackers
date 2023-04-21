import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import './style.css'
const rangeSliderElement = {
    defaultValue:[150,250],
    

};
const FilterPrice = () => {
  return (
    <div>
      <h2 className="text-h3 mb-2.5 desktop:mb-5 mt-7">Цена</h2>
      <div></div>
      <RangeSlider {...rangeSliderElement}/>
    </div>
  );
};
export default FilterPrice;
