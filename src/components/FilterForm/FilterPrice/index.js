import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./style.css";
import { useState } from "react";

const FilterPrice = () => {
  const [values, setValues] = useState([100, 1000]);

  console.log(values);
  return (
    <div className="mb-[30px]">
      <h2 className="text-h3 mb-2.5 desktop:mb-5 mt-7">Цена</h2>
      <div className="flex space-x-5 mb-[15px]">
        {" "}
        <label>
          {" "}
          <input
            value={values[0]}
            type="number"
            className="text-p2 border pl-2.5 w-[50px] rounded-[3px] py-[5px] bg-secondary1 border-secondary2"
            placeholder={values[0]}
            onChange={(event) => setValues([event.target.value, values[1]])}
          />
        </label>
        <label>
          {" "}
          <input
            value={values[1]}
            type="number"
            className="text-p2 border pl-2.5 w-[50px] rounded-[3px] py-[5px] bg-secondary1 border-secondary2"
            placeholder={values[1]}
            onChange={(event) => setValues([values[0], event.target.value])}
          />
        </label>
      </div>

      <RangeSlider onInput={setValues} value={values} min={100} max={1000} />
    </div>
  );
};
export default FilterPrice;
