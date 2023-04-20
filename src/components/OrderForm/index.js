import ContactForm from "../ContactForm";
import DeliveryAdress from "../DeliveryAdress";
import DeliveryForm from "../DeliveryForm";

const OrderForm = () => {
  return (
    <div className="container ">
      <div className=""><ContactForm /></div>
      <div className="my-5"><DeliveryForm /></div>
      <DeliveryAdress />
    </div>
  );
};

export default OrderForm;
