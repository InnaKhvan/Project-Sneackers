import styles from "./buttonOrder.module.css";
const ButtonOrder = () => {
  return (
    <div>
      <button
        className={
          "bg-primary2 text-secondary1 text-p1 font-bold rounded-xl " +
          styles.button
        }
      >
        Оформить заказ
      </button>
    </div>
  );
};
export default ButtonOrder;
