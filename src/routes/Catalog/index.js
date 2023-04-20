import Filter from "../../components/FilterForm";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

const Catalog = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div className="container">
        <Filter />
      </div>
    </>
  );
};

export default Catalog;
