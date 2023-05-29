import { Link } from "react-router-dom";
import VectorIcon from "../svg/VectorIcon";
import styles from "./navig.module.css";

const Navigation = ({ name }) => {
  return (
    <div className="container flex flex-col justify-between">
      <div className={"flex font-medium text-p1 tablet:my-5 " + styles.block}>
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
