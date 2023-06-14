import CardComponent from "../../components/CardComponent";
import MenuItems from "../../components/MenuItems";
import Navigation from "../../components/Navigation";
// import items from "../../mockData/products.json";
const items = {
    name: "Adidas BREAKNET",
    price: 200,
    img: "/Project-Sneackers/adidas1.png",
    articul: 4534728,
    color: "Белый",
    sex: "Мужской",
    size: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45]

};
const CardItem = () => {
  return (
    <>
    <MenuItems className="hidden tablet:block"/>
      <Navigation name="Товар" />
        <CardComponent item={items} />
    
    </>
  );
};
export default CardItem;
