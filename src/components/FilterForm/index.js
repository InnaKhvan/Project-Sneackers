import FilterPrice from "./FilterPrice";
import FilterBrand from "./FilterBrand";
import FilterTypeShoes from "./FilterTypeShoes";
import FilterSize from "./FilterSize";
import FilterSex from "./FilterSex";

const Filter = () => {
  return (
    <div className="bg-secondary1 w-full desktop:p-8 h-max px-4 py-8">
      <h1 className="flex font-semibold text-h2t mb-5 ">Фильтры</h1>
      <div className="grid">
        <FilterTypeShoes />
        <FilterBrand />
        <FilterSex />
        <FilterSize />
        <FilterPrice />
      </div>
    </div>
  );
};

export default Filter;
