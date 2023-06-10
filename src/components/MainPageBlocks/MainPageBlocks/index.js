import { Link } from "react-router-dom";
import FeaturedProdacts from "../FeaturedProdacts";
const MainPageBlocks = ({ items, title = "", headerClass, linkMore = "" }) => {
  return (
    <div className="container flex flex-col">
      <div
        className={
          "flex text-h4 justify-center mb-10 tablet:text-h1 mb-[60px] " +
          headerClass
        }
      >
        {title}
      </div>
      <FeaturedProdacts items={items}/>
      <Link to={linkMore}>
        <div className="flex content-end text-h2t justify-center mt-[60px] underline">
          Смотреть еще
        </div>
      </Link>
    </div>
  ); 
};

export default MainPageBlocks;
