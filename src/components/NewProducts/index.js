import styles from "./newProdactBlock.module.css";

const NewProdactBlock = () => {
  return (
    <div
      className={
        "container flex flex-col content-between " + styles.block
      }
    >
      <div className={"flex justify-center text-h1 " + styles.new}>НОВИНКИ</div>
      <div>
        Тут будут карточки товаров
      </div>
      <a className={"flex font-semibold content-end justify-center underline " + styles.look} href=" ">Смотреть еще</a>
    </div>
  );
};

export default NewProdactBlock;
