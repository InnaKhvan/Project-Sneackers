import items from "../../mockData/products.json";
import styles from "./CartCard.module.css";

function CartCard() {
    return items.map((item) => (
        <div className={styles.container}>
            <div className={"inline-block " + styles.img}><img
                src={item.img}
                alt="picture"
            />
            </div>
            <div className={"inline-block mt-3 "}>
                <div className="text-lg font-medium ">{item.name}</div>
                <div className={"text-base "}>{item.price} BYN</div>
                <button className={"inline-block ml-3 font-semibold underline text-xl "}>Купить</button>
            </div>
        </div>
    ));
};

export default CartCard;