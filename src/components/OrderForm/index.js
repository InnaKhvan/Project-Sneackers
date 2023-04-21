import ButtonOrder from "../ButtonOrder";
import Checkbox from "../Checkbox";
import CommentForm from "./CommentForm";
import ContactForm from "./ContactForm";
import DeliveryAdress from "./DeliveryAdress";
import DeliveryForm from "./DeliveryForm";
import styles from "./orderForm.module.css";
const OrderForm = () => {
  return (
    <div className="container ">
      <div className="">
       <ContactForm />
      </div>
      <div className="my-5">
        <DeliveryForm />
      </div>
      <DeliveryAdress />
      <div className="my-5">
        <CommentForm />
      </div>
      <div className={"hidden tablet:flex flex-col " + styles.orderButton}>
        <ButtonOrder />
        <div className="mt-3.5">
          <Checkbox />
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
