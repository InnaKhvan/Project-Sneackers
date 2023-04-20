import styles from "./deliveryForm.module.css";
const DeliveryForm = () => {
  return (
    <div className={"flex w-2/3 bg-secondary1 " + styles.mainblock}>
      <div
        className={
          "flex flex-col content-between desktop:my-10 my-5 " + styles.block
        }
      >
        <p className="desktop:text-h2 tablet:text-h2t text-h2m">
          Выберите способ доставки{" "}
        </p>
        <div className={"flex flex-col tablet:flex-row " + styles.inputblock}>
          <div className="flex">
            <input type="radio" id="elem" />
            <p className={"flex text-p1 " + styles.input}>Доставка курьером</p>
          </div>
          <div className="flex desktop:ml-5">
            <input type="radio" id="elem" />
            <div className={"flex text-p1 " + styles.input}>Самовывоз </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeliveryForm;
