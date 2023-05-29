import items from "../../../mockData/filter.json";

const FilterBrand = () => {
  return (
    <>
      <h2 className="text-h3 mb-2.5 desktop:mb-5 tablet:mt-7	">
        {items[1].type}
      </h2>
      <div className="grid grid-cols-2	tablet:grid-cols-1">
        {items[1].name.map((item) => (
          <div className="text-p2 mb-2.5">
            <input className="mr-1" type="checkbox" id={`brand - ${item}`} />
            <label for="brand">{item}</label>
          </div>
        ))}
      </div>
    </>
  );
};
export default FilterBrand;
