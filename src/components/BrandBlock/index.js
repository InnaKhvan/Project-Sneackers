import adidas from "../../mockData/adidas.png";
import jordan from "../../mockData/jordan.png";
import NB from "../../mockData/NB.png";
import nike from "../../mockData/nike.png";
import puma from "../../mockData/puma.png";

const BrandsBlock = () => {
  return (
    <div className="container flex-col flex justify-center mt-40  ">
      <div className="flex text-h4 justify-center tablet:text-h1 mb-10 tablet:mb-[60px]">
        БРЕНДЫ
      </div>
      <div className="grid grid-cols-4 gap-y-10 gap-x-5	items-center tablet:grid-cols-5">
        <img
          className="object-contain tablet:col-span-2 content-center"
          src={puma} alt='' 
        />
        <img className="object-contain tablet:col-span-2 " src={NB} alt='' />
        <img className="object-contain tablet:col-span-1 " src={adidas} alt='' />
        <img
          className="object-contain tablet:col-span-2 tablet:col-start-2 "
          src={jordan} alt='' 
        />
        <img
          className="object-contain hidden col-span-2 tablet:grid"
          src={nike} alt='' 
        />
      </div>
    </div>
  );
};

export default BrandsBlock;
