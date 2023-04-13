import styles from "./brand.module.css";
import adidas from "../../mockData/adidas.png";
import jordan from "../../mockData/jordan.png";
import NB from "../../mockData/NB.png";
import nike from "../../mockData/nike.png";
import puma from "../../mockData/puma.png";

const Brands = () => {
  return (
    <div
      className={
        "container flex-col flex justify-center mt-40 " + styles.block
      }
    >
      <div className={"flex top-40 justify-center text-center " + styles.text}>
        БРЕНДЫ
      </div>
      <div className={"flex flex-col content-between " + styles.logoblock}>
        <div className="flex justify-between">
          {" "}
          <img className={styles.imglogo} src={puma} />
          <img className={styles.imglogo} src={NB} />
          <img className={styles.imglogo} src={adidas} />
        </div>
        <div className="flex justify-around">
          <img className={styles.imglogo} src={jordan} />
          <img className={styles.imglogo} src={nike} />
        </div>
      </div>
    </div>
  );
};

export default Brands;
