import { Link } from "react-router-dom";
import VectorIcon from "../svg/VectorIcon";
import SettingIcon from "../svg/SettingIcon";
import styles from "./navig.module.css";

const Navigation = () => {
  return (
    <div className="flex justify-between">
      <div className={"flex font-medium text-p1 tablet:my-5 " + styles.block}>
        <Link to="../">
          <p className="flex text-secondary2">Главная</p>
        </Link>

        <div className={"flex " + styles.vector}>
          <VectorIcon />
        </div>
        <p>Каталог</p>
      </div>
      <div className={"flex tablet:hidden my-5 " + styles.blockFil}>
        <p className={"flex font-semibold " + styles.textFil}>Фильтры</p>
        <SettingIcon />
      </div>
    </div>
  );
};
export default Navigation;
