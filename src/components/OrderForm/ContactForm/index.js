import InputElem from "../../InputElem";
import OrderCard from "../OrderCard";

const ContactForm = () => {
  return (
    <OrderCard title="Укажите ваши контактные данные">
      <div className="grid grid-cols-1 gap-y-2.5 desktop:grid-cols-2 gap-x-5 ">
        <InputElem className="w-[250px]" placeholder="Ваше имя" />
        <InputElem className="w-[250px]" placeholder="Номер телефона" />
      </div>
    </OrderCard>
  );
};

export default ContactForm;
