import CardComponent from "../../components/CardComponent";
import MenuItems from "../../components/MenuItems";
import Navigation from "../../components/Navigation";
import items from "../../mockData/products.json";

const CardItem = () => {
  return (
    <>
    <MenuItems className="hidden tablet:block"/>
      <Navigation name="Товар" />
      {items.map((item) => (
        <CardComponent item={item} />
      ))}
    </>
  );
};
export default CardItem;
