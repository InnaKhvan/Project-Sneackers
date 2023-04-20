import styles from "./contactForm.module.css";
const ContactForm = () => {
  return (
    <div className={"flex w-2/3 bg-secondary1 " + styles.mainblock}>
      <div className={"desktop:m-10 my-5 " + styles.block}>
        {" "}
        <p className="desktop:text-h2 tablet:text-h2t text-h2m">
          Укажите ваши контактные данные{" "}
        </p>
        <div className={"flex desktop:flex-row flex-col " + styles.inputblock}>
          <input
            type="name"
            name="name"
            placeholder="Ваше имя"
            className={
              "border-secondary2 border-2 pl-5 h-14 text-p1 mb-2.5 " +
              styles.input
            }
          />
          <input
            type="telephone"
            name="telephone"
            placeholder="Номер телефона"
            className={
              "border-secondary2 border-2 pl-5 h-14 text-p1 desktop:ml-5 " +
              styles.input
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
