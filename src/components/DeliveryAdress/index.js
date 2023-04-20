import styles from "./deliveryAdress.module.css";
const DeliveryAdress = () => {
  return (
    <div className={"flex w-2/3 bg-secondary1 " + styles.mainblock}>
      <div className={"my-5 desktop:m-10 " + styles.block}>
        {" "}
        <p className="desktop:text-h2 tablet:text-h2t text-h2m">
          Укажите адрес доставки{" "}
        </p>
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
      </div>
    </div>
  );
};
export default DeliveryAdress;
