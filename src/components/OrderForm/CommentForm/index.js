import OrderCard from "../OrderCard";
import styles from "./commentForm.module.css";
const CommentForm = () => {
  return (
    <OrderCard title="Комментарий к заказу">
      <input
        type="comment"
        name="comment"
        placeholder="Комментарий"
        className={
          "border-secondary2 border-2 pl-5 pb-5 text-p1 " + styles.input
        }
      />
    </OrderCard>
  );
};
export default CommentForm;
