import ApplicationForm from "../../components/ApplicationForm";
import BrandsBlock from "../../components/BrandBlock";
import HotSale from "../../components/HotSale";
import MenuItems from "../../components/MenuItems";
import NewProdactBlock from "../../components/NewProducts";
import Slider from "../../components/Slider";

const MainPage = () => {
  return (
    <>
      <MenuItems className="hidden tablet:block" />
      <Slider />
      <div className="grid content-between gap-y-40">
        {" "}
        <BrandsBlock />
        <NewProdactBlock />
        <HotSale />
        <ApplicationForm />
      </div>
    </>
  );
};
export default MainPage;
