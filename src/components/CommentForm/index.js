import styles from "./commentForm.module.css";
const CommentForm = () => {
  return (
    <div className={"flex w-2/3 bg-secondary1 " + styles.mainblock}>
      <div className={"desktop:m-10 my-5 " + styles.block}>
        {" "}
        <p className="desktop:text-h2 tablet:text-h2t text-h2m">
          Комментарий к заказу{" "}
        </p>
        <div className={"flex "}>
          <input
            type="comment"
            name="comment"
            placeholder="Комментарий"
            className={
              "border-secondary2 border-2 pl-5 pb-5 text-p1 " + styles.input
            }
          />
        </div>
      </div>
    </div>
  );
};
export default CommentForm;
