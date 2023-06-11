import SearchIconTablet from "../../svg/SearchIconTablet";
import ShopCartIcon from "../../svg/ShopCartIcon";
import UserIcon from "../../svg/UserIcon";
import HeartIcon from "../../svg/HeartIcon";
import MenuItemHeader from "../MenuItemHeader";

const HeaderIcons = () => {

  return (
    <div className="flex space-x-7 items-center justify-center ">
      <SearchIconTablet className="hidden tablet:flex desktop:hidden" />
      <UserIcon className="hidden tablet:flex " />
      <HeartIcon className="hidden tablet:flex " />
      <ShopCartIcon />
      <MenuItemHeader className="flex tablet:hidden "/>
    </div>
  );
};

export default HeaderIcons;
