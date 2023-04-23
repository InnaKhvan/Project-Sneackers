import InputElem from "../../InputElem";
import OrderCard from "../OrderCard";

const ContactForm = () => {
  return (
    <OrderCard title="Укажите ваши контактные данные">
      <div className="flex desktop:flex-row flex-col ">
        <InputElem className={"mb-2.5	PrimaryInput"} placeholder="Ваше имя" />
        <div className="desktop:ml-5">
          <InputElem className={"PrimaryInput"} placeholder="Номер телефона" />
        </div>
      </div>
    </OrderCard>
  );
};

export default ContactForm;
