import InputElem from "../../InputElem";
import OrderCard from "../OrderCard";
const DeliveryAdress = () => {
  return (
    <OrderCard title="Укажите адрес доставки">
      <div className="mt-2.5 tablet:mt-5 desktop:mt-[30px]">
        <div className="grid grid-row-4 desktop:grid-cols-4 gap-5">
          <InputElem placeholder="Город" className="w-[250px] col-span-2" />
          <InputElem placeholder="Улица" className="w-[250px] col-span-2" />
          <InputElem placeholder="Дом" className="w-[120px]" />
          <InputElem placeholder="Квартира" className="w-[120px]" />
          <InputElem placeholder="Подъезд" className="w-[120px]" />
          <InputElem placeholder="Этаж" className="w-[120px]" />
        </div>
      </div>
    </OrderCard>
  );
};
export default DeliveryAdress;
