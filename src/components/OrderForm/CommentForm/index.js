import InputElem from "../../InputElem";
import OrderCard from "../OrderCard";
import styles from "./commentForm.module.css";
const CommentForm = () => {
  return (
    <OrderCard title="Комментарий к заказу">
      <InputElem placeholder="Комментарий" className={"Primary " + styles.input}/>
    </OrderCard>
  );
};
export default CommentForm;
