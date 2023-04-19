import styles from "./ApplicationForm.module.css";
const ApplicationForm = () => {
  return (
    <div
      className={
        "bg-primary2 flex justify-center content-center tablet:flex-wrap " +
        styles.form
      }
    >
      <div className={"flex flex-col tablet:flex-row " + styles.block}>
        <div className={"flex flex-col " + styles.textblock}>
          <div className={"text-secondary1 text-h1 " + styles.text1}>
            ХОЧЕШЬ СКИДКУ 10% НА ПЕРВЫЙ ЗАКАЗ?
          </div>
          <div className={"mt-5 tablet:mt-2.5 " + styles.text2}>
            Подпишись на рассылку и получи свою персональную скидку
          </div>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Имя"
            className={
              "border-secondary2 text-secondary2 pl-5 border-2 h-14 mb-2.5 " +
              styles.input
            }
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={
              "border-secondary2 border-2 pl-5 h-14 mb-2.5 " + styles.input
            }
          ></input>
          <button
            className={
              "bg-primary1 text-secondary1 rounded-xl " + styles.button
            }
          >
            Подписаться
          </button>
          <div
            className={
              "text-p1 flex flex-row justify-center mt-2.5 " +
              styles.checkbox
            }
          >
            <input type="checkbox" id="elem" />
            <div className="flex pl-2.5">
              Я согласен с обработкой персональных данных
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApplicationForm;
