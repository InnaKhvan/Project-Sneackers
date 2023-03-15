import items from "../../mockData/menuItem.json"
const MainMenuItem = () => {
    return (
        items.map((item) => (
        <button className="p-9">
          {item.name}
        </button>
    ),
    ))
};

export default MainMenuItem;