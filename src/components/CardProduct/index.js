import styles from "./CardProduct.module.css";

function Card() {
    return (
        <div className={"Montserrat relative"}>
            <div className={styles.card}></div>
            <div className={styles.description}>Описание</div>
        </div >
    );
};
export default Card;