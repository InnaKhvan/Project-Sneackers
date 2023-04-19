import styles from "./newBlock.module.css";

const NewBlock = () => {
  return (
    <div
      className={
        "container flex flex-col content-between " + styles.block
      }
    >
      <div className={"flex justify-center text-h1 " + styles.new}>НОВИНКИ</div>
      <div>
        Карточки товаров
      </div>
      <a className={"flex font-semibold content-end justify-center underline " + styles.look} href="">Смотреть еще</a>
    </div>
  );
};

export default NewBlock;
