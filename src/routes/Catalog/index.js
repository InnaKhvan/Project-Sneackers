import Card from "../../components/CardProduct";
import Filter from "../../components/FilterForm";
import Navigation from "../../components/Navigation";

const Catalog = () => {
  return (
    <>
      <Navigation />
      <div className="container flex space-x-6 ">
        <div className="flex w-1/3 hidden tablet:flex ">
          {" "}
          <Filter />
        </div>
        <div className="grid grid-cols-3 gap-x-6 gap-y-8">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Catalog;
