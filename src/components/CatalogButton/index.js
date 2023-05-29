import LeftArrows from "../svg/ArrowLeft";
import RightArrows from "../svg/ArrowRight";
const num = [1, 2, 3, 4, 5];
const CatalogButton = () => {
  return (
    <div className="flex justify-between">
      {" "}
      <button>
        {" "}
        <LeftArrows />
      </button>
      <div className="flex">
        {num.map((item) => (
          <button className="py-5 px-6 m-3.5 text-p1 tablet:text-p3 font-normal active:bg-primary2 hover:bg-primary2 rounded-full">
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
