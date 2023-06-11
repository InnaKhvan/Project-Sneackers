import ApplicationForm from "../../components/MainPageBlocks/ApplicationForm";
import BrandsBlock from "../../components/MainPageBlocks/BrandBlock";
import MainPageBlocks from "../../components/MainPageBlocks";
import MenuItems from "../../components/MenuItems";
import Slider from "../../components/Slider";
import NewProdact from "../../mockData/newProdact.json";
import SaleProdact from "../../mockData/saleProdact.json";
const MainPage = () => {
  return (
    <>
      <MenuItems className="hidden tablet:block" />
      <Slider />
      <div className="grid content-between gap-y-40">
        {" "}
        <BrandsBlock />
        <MainPageBlocks title="НОВИНКИ" items={NewProdact} linkMore="Catalog" />
        <MainPageBlocks
          title="HOT SALE"
          items={SaleProdact}
          linkMore="Catalog"
          headerClass="text-sale" 
        />
        <ApplicationForm />
      </div>
    </>
  );
};
export default MainPage;
