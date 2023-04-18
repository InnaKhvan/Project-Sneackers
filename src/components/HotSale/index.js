import styles from "./HotSale.module.css";
const HotSale = () => {
  return (
    <div className={"container flex flex-col content-between " + styles.block}>
      <div className={"flex text-sale justify-center text-h1 "}>HOT SALE</div>
      <a
        className={"flex font-semibold content-end justify-center underline " + styles.look}
        href=""
      >
        Смотреть еще
      </a>
    </div>
  );
};

export default HotSale;
