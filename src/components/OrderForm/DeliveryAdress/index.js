import OrderCard from "../OrderCard";
import styles from "./deliveryAdress.module.css";
const DeliveryAdress = () => {
  return (<OrderCard title="Укажите адрес доставки">
        <div className={styles.inputblock}>
          <div className="flex flex-col desktop:space-x-5 desktop:flex-row">
            <input
              type="city"
              name="city"
              placeholder="Город"
              className={
                "border-secondary2 border-2 pl-5 h-14 text-p1 mb-2.5 " +
                styles.input1
              }
            />
            <input
              type="street"
              name="street"
              placeholder="Улица"
              className={
                "border-secondary2 border-2 pl-5 h-14 text-p1 mb-2.5 " +
                styles.input1
              }
            />
          </div>
          <div className="flex flex-col desktop:space-x-5 desktop:mt-2.5 desktop:flex-row">
            <div className="flex flex-row space-x-2.5 desktop:space-x-5 desktop:flex-row ">
              <input
                type="house"
                name="house"
                placeholder="Дом"
                className={
                  "border-secondary2 border-2 pl-5 h-14 text-p1 mb-2.5 " +
                  styles.input2
                }
              />
              <input
                type="flat"
                name="flat"
                placeholder="Квартира"
                className={
                  "border-secondary2 border-2 pl-5 h-14 text-p1 mb-2.5 " +
                  styles.input2
                }
              />
            </div>
            <div className="flex flex-row space-x-2.5 desktop:space-x-5 desktop:flex-row ">
              <input
                type="entrance"
                name="entrance"
                placeholder="Подьезд"
                className={
                  "border-secondary2 border-2 pl-5 h-14 text-p1 mb-2.5 " +
                  styles.input2
                }
              />
              <input
                type="floor"
                name="floor"
                placeholder="Этаж"
                className={
                  "border-secondary2 border-2 pl-5 h-14 text-p1 mb-2.5 " +
                  styles.input2
                }
              />
            </div>
          </div>
        </div>
      </OrderCard>
  );
};
export default DeliveryAdress;
