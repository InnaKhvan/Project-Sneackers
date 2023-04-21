import InputElem from "../../InputElem";
import OrderCard from "../OrderCard";

const ContactForm = () => {
  return <OrderCard title="Укажите ваши контактные данные">
    <div className="flex desktop:flex-row flex-col ">
        <InputElem />
          <div className="desktop:ml-5"><InputElem /></div>
        </div>
  </OrderCard>;
};

export default ContactForm;
