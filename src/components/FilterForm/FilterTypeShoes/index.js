import items from "../../../mockData/filter.json";

const FilterTypeShoes = () => {
  return (
    <>
      <h2 className="text-h3 mb-2.5 desktop:mb-5 mt-7">{items[0].type}</h2>
      {items[0].name.map((item) => (
        <div className="text-p2 mb-2.5">
          <input className="mr-1" type="checkbox" />
          {item}
        </div>
      ))}
    </>
  );
};
export default FilterTypeShoes;