import InputElem from "../../InputElem";
import OrderCard from "../OrderCard";
import styles from "./deliveryAdress.module.css";
const DeliveryAdress = () => {
  return (
    <OrderCard title="Укажите адрес доставки">
      <div className={styles.inputblock}>
        <div className="flex flex-col desktop:space-x-5 desktop:flex-row">
          <InputElem placeholder="Город" className={"mb-2.5 PrimaryInput"} />
          <InputElem placeholder="Улица" className={"PrimaryInput"} />
        </div>
        <div className="flex flex-col mt-5 desktop:space-x-5 desktop:mt-2.5 desktop:flex-row">
          <div className="flex flex-row space-x-2.5 desktop:space-x-5 desktop:flex-row ">
            <InputElem placeholder="Дом" className={"mb-2.5	SecondaryInput"} />
            <InputElem placeholder="Квартира" className={"SecondaryInput"} />
          </div>
          <div className="flex flex-row space-x-2.5 desktop:space-x-5 desktop:flex-row ">
            <InputElem placeholder="Подъезд" className={"SecondaryInput"} />
            <InputElem placeholder="Этаж" className={"SecondaryInput"} />
          </div>
        </div>
      </div>
    </OrderCard>
  );
};
export default DeliveryAdress;
