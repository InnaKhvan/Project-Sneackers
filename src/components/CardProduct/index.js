import styles from "./CardProduct.module.css";
import items from "../../mockData/products.json";
import { Link } from "react-router-dom";

function Card() {
  return items.map((item) => (
    <div>
      <div className="object-fill mb-5">
        <img src={item.img} alt="picture" />
      </div>
      <div>
        <Link>
          <div className="text-p3">{item.name}</div>
        </Link>
        <div className={"inline-block text-h2m "}>{item.price} BYN</div>
        <button className={"inline-block ml-3 underline text-h2t "}>
          Купить
        </button>
      </div>
    </div>
  ));
}

export default Card;
