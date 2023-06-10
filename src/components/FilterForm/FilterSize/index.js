import items from "../../../mockData/filter.json";

const FilterSize = () => {
  return (
    <>
      <h2 className="text-h3 mb-2.5 desktop:mb-5 mt-7">{items[2].type}</h2>
      <div className="grid grid-cols-3 gap-2.5 desktop:grid-cols-5 gap-5">
        {items[2].name.map((item) => (
          <div className="flex text-p1">{item}</div>
        ))}
      </div>
    </>
  );
};
export default FilterSize;
