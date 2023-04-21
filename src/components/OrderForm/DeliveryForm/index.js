import OrderCard from "../OrderCard";
const DeliveryForm = () => {
  return (
    <OrderCard title="Выберите способ доставки">
      <div className="flex flex-col tablet:flex-row ">
        <div className="flex">
          <input type="radio" id="elem" />
          <p className="flex text-p1 ml-1 ">Доставка курьером</p>
        </div>
        <div className="flex tablet:ml-5">
          <input type="radio" id="elem" />
          <div className="flex text-p1 ml-1">Самовывоз </div>
        </div>
      </div>
    </OrderCard>
  );
};
export default DeliveryForm;
