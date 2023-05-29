import { Link } from "react-router-dom";
import VectorIcon from "../svg/VectorIcon";

const Navigation = ({ name }) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex font-medium my-5 text-p1 tablet:my-5 ">
        <Link to="/">
          <p className="text-secondary2">Главная</p>
        </Link>
        <div className="m-1">
          <VectorIcon />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
};
export default Navigation;
