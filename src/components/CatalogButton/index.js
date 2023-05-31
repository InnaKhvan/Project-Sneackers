import LeftArrows from "../svg/ArrowLeft";
import RightArrows from "../svg/ArrowRight";
const num = [1, 2, 3, 4, 5];
const CatalogButton = () => {
  return (
    <div className="flex">
      {" "}
      <button>
        {" "}
        <LeftArrows />
      </button>
      <div className="flex">
        {num.map((item) => (
          <button className="px-3.5 py-3 tablet:py-5 tablet:px-6 mx-2.5 text-p1 tablet:text-p3 font-normal active:bg-primary2 hover:bg-primary2 rounded-full">
            {item}
          </button>
        ))}
      </div>
      <button>
        {" "}
        <RightArrows />
      </button>
    </div>
  );
};
export default CatalogButton;
