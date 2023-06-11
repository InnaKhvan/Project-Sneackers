import LeftArrows from "../svg/ArrowLeft";
import RightArrows from "../svg/ArrowRight";
const num = [1, 2, 3, 4, 5];
const CatalogButton = () => {
  return (
    <div className="flex justify-center items-center mt-10 desktop:mt-[60px]">
      {" "}
      <button className="w-5 h-5 mr-5 tablet:w-6 h-6 mr-[30px]">
        {" "}
        <LeftArrows />
      </button>
    
        {num.map((item) => (
          <button className="flex items-center justify-center h-10 w-10 rounded-full text-p1 font-normal tablet:h-[60px] tablet:w-[60px] text-p3 active:bg-primary2 hover:bg-primary2 ">
            {item}
          </button>
        ))}
   
      <button className="w-5 h-5 ml-5 tablet:w-6 h-6 ml-[30px]">
        {" "}
        <RightArrows />
      </button>
    </div>
  );
};
export default CatalogButton;
