import styles from "./CardProduct.module.css";


const Card = ({ items }) => {
    return items.map((item) => (
        <div className={"Montserrat "}>
            <div className={styles.card}></div>
            <div className={"mt-3 " + styles.description}>
                <div className="text-lg font-medium ">{item.name}</div>
                <div className={"inline-block text-base "}>{item.price} BYN</div>
                <button className={"inline-block ml-3 font-semibold underline text-xl "}>Купить</button>
            </div>
        </div>
    ));
};

export default Card;