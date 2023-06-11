import CardComponent from "../../components/CardComponent";
import Navigation from "../../components/Navigation";
import items from "../../mockData/products.json";

const CardItem = () => {
  return (
    <>
      <Navigation name="Товар" />
      {items.map((item) => (
        <CardComponent item={item} />
      ))}
    </>
  );
};
export default CardItem;
