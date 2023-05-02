import styles from "./CardProduct.module.css";
import items from "../../store/products.json";
import { Link } from "react-router-dom";

function Card() {
    return items.map((item) => (
        <div>
            <div className={styles.card}><img
                src={item.img}
                alt="picture"
            />
            </div>
            <div className={"mt-3 " + styles.description}>
                <Link><div className="text-lg font-medium ">{item.name}</div></Link>
                <div className={"inline-block text-base "}>{item.price} BYN</div>
                <button className={"inline-block ml-3 font-semibold underline text-xl "}>Купить</button>
            </div>
        </div>
    ));
};

export default Card;
