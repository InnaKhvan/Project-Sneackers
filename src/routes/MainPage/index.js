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
      <BrandsBlock />
      <NewProdactBlock />
      <HotSale />
      <ApplicationForm />
    </>
  );
};
export default MainPage;
