import items from "../../../mockData/menuItem.json";
const MenuItem = () => {
  return items.map((item) => {
    if (item.name == "HOT SALE") {
      return <button className="text-sale">{item.name}</button>;
    }
    return <button>{item.name}</button>;
  });
};

export default MenuItem;
