const Sex = ["Женский", "Мужской", "Унисекс"];
const FilterSex = () => {
  return (
    <>
      <h2 className="text-h3 mb-2.5 desktop:mb-5 mt-7">Пол</h2>
      <div className="grid grid-cols-2 tablet:grid-cols-1">
        {Sex.map((item) => (
          <div className="text-p2 mb-2.5">
            <input className="mr-1" type="checkbox" />
            {item}
          </div>
        ))}
      </div>
    </>
  );
};
export default FilterSex;
