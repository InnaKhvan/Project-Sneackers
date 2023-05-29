import items from "../../../mockData/filter.json";

const FilterTypeShoes = () => {
  return (
    <>
      <h2 className="text-h3 mb-2.5 desktop:mb-5">{items[0].type}</h2>
      <div className="grid grid-cols-2 tablet:grid-cols-1">
        {items[0].name.map((item) => (
          <div className="text-p2 mb-2.5">
            <input className="mr-1" type="checkbox" id={`typeshoes-${item}`} />
            <label for="typeshoes">{item}</label>
          </div>
        ))}
      </div>
    </>
  );
};
export default FilterTypeShoes;
