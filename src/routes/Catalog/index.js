import Card from "../../components/CardProduct";
import Filter from "../../components/FilterForm";
import FilterSetting from "../../components/FilterSetting";
import Navigation from "../../components/Navigation";

const Catalog = () => {
  return (
    <>
      <div className="container flex justify-between">
        {" "}
        <div className="flex">
          <Navigation name="Каталог" />
        </div>
        <div className="flex">
          <FilterSetting />
        </div>
      </div>

      <div className="container flex space-x-6 ">
        <div className="flex w-1/4 hidden tablet:flex ">
          {" "}
          <Filter />
        </div>
        <div className="tablet:w-3/4 grid grid-cols-2 desktop:grid-cols-3 gap-x-6 gap-y-8">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Catalog;
