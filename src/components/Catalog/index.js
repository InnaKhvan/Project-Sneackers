import { Link } from "react-router-dom";
import styles from "./Catalog.module.css";

const Catalog = () => {
  return (
    <Link>
      <button
        className={"flex bg-primary1 justify-center text-secondary1 p-5 rounded-xl " + styles.button}
      >
        Смотреть каталог{" "}
      </button>
    </Link>
  );
};
export default Catalog;
