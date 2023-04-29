import MenuItem from "./MenuItem";

const MenuItems = () => {
  return (
    <div className="bg-secondary1 hidden tablet:flex">
      <div className="container flex justify-start items-center h-14 text-xs font-semibold">
        <div className="flex w-1/3 justify-between">
        <MenuItem />
        </div>
     
      </div>
    </div>
  );
};

export default MenuItems;
