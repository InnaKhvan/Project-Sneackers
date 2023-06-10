import Checkbox from "../../Checkbox";
import InputElem from "../../InputElem";
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
          <InputElem placeholder="Имя" className="PrimaryInput" />
          <InputElem placeholder="Email" className="PrimaryInput my-2.5" />
          <button
            className={
              "bg-primary1 text-secondary1 text-p1 rounded-xl " + styles.button
            }
          >
            Подписаться
          </button>
          <div
            className={
              "text-p1 flex flex-row justify-center mt-2.5 " + styles.checkbox
            }
          >
            <Checkbox />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApplicationForm;
