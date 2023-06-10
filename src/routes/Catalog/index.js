import CatalogButton from "../../components/CatalogButton";
import Card from "../../components/CardProduct";
import Filter from "../../components/FilterForm";
import FilterSetting from "../../components/FilterSetting";
import Navigation from "../../components/Navigation";
import items from "../../mockData/products.json";
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

      <div className="container flex space-x-6 mb-20 tablet:mb-[120px] desktop:mb-40">
        <div className="flex w-1/4 hidden tablet:flex ">
          {" "}
          <Filter />
        </div>
        <div className="tablet:w-3/4">
          <div className="grid grid-cols-2 desktop:grid-cols-3 gap-x-6 gap-y-8">
            {items.map((item) => (
              <Card item={item} />
            ))}
          </div>
          <div className="flex justify-center mt-10 desktop:mt-[60px]">
            <CatalogButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
