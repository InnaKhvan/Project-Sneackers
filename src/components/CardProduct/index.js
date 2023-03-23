import styles from "./CardProduct.module.css";
import items from "../../store/products.json";

function Card() {
    return items.map((item) => (
        <div>
            <div className={styles.card}><img
                src={item.img}
                className="mx-auto my-auto "
                alt="picture"
            />
            </div>
            <div className={"mt-3 " + styles.description}>
                <div className="text-lg font-medium ">{item.name}</div>
                <div className={"inline-block text-base "}>{item.price} BYN</div>
                <button className={"inline-block ml-3 font-semibold underline text-xl "}>Купить</button>
            </div>
        </div>
    ));
};

export default Card;