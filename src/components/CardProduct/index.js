import { Link } from "react-router-dom";

const Card = ({ item, className }) => {
  return (

      <div className={className}>
        <div className="mb-5">
          <img src={item.img} alt={item.name} />
        </div>
        <div>
          <Link>
            <div className="text-p1 font-medium	text-p3">{item.name}</div>
          </Link>
          <div
            className={
              "inline-block font-normal text-p1 tablet:text-h2m " + className
            }
          >
            {item.price} BYN
          </div>
    
     
          <button className="inline-block font-medium ml-3 underline text-p1 tablet:text-h2t ">
            Купить
          </button>
        </div>
      </div>
   
  );
};

export default Card;
