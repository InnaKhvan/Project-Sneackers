import { Link } from "react-router-dom";

function Card({item}) {
  return  (
    <div>
      <div className="mb-5">
        <img src={item.img} alt={item.name}/>
      </div>
      <div>
        <Link>
          <div className="text-p1 font-medium	tablet:text-p3">{item.name}</div>
        </Link>
        <div className="inline-block font-normal	text-p1 tablet:text-h2m ">{item.price} BYN</div>
        <button className="inline-block font-medium ml-3 underline text-p1 tablet:text-h2t ">
          Купить
        </button>
      </div>
    </div>
  );
}

export default Card;
