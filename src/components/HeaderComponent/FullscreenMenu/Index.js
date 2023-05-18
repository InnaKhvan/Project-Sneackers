import MenuItem from "../../MenuItems/MenuItem";
import LogoIcon from "../../svg/LogoIcon";
import TelephoneIcon from "../../svg/TelephonIcon";
import SearchIconTablet from "../../svg/SearchIconTablet";
import UserIcon from "../../svg/UserIcon";
import ShopCartIcon from "../../svg/ShopCartIcon";
import HeartIcon from "../../svg/HeartIcon";
import Xmark from "../../svg/Xmark";

const FullscreenMenu = ({ onClose }) => {
  return (
    <>
      <div className="flex items-center flex-row justify-between">
        <LogoIcon className="flex tablet:w-40 h-16" />
        <div className="flex items-center space-x-7 justify-around">
          <SearchIconTablet />
          <UserIcon />
          <HeartIcon />
          <ShopCartIcon />
          <button onClick={onClose}>
            <Xmark />
          </button>
        </div>
      </div>
      <div className="flex mt-10 font-semibold justify-center text-h2m">
        <TelephoneIcon />
        <a href="tel:+375 (33) 777-71-71">+375 (33) 777-71-71</a>
      </div>
      <div className="flex flex-col my-20 space-y-8 text-h1 justify-center items-center  ">
        <MenuItem />
      </div>
    </>
  );
};

export default FullscreenMenu;
