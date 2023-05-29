import MenuItem from "../../MenuItems/MenuItem";
import LogoIcon from "../../svg/LogoIcon";
import TelephoneIcon from "../../svg/TelephonIcon";
import UserIcon from "../../svg/UserIcon";
import ShopCartIcon from "../../svg/ShopCartIcon";
import HeartIcon from "../../svg/HeartIcon";
import Xmark from "../../svg/Xmark";
import { Link } from "react-router-dom";
import ModalSeach from "../ModalSeach";

const FullscreenMenu = ({ onClose }) => {
  return (
    <>
      <div className="flex flex-row justify-between 	">
        <Link to="/">
          <LogoIcon className="tablet:w-40 h-16" />
        </Link>
        <div className="flex items-center space-x-7">
          <div className="flex tablet:hidden desktop:hidden">
            {" "}
            <ModalSeach />
          </div>

          <UserIcon />
          <HeartIcon />
          <ShopCartIcon />
          <button onClick={onClose}>
            <Xmark />
          </button>
        </div>
      </div>
      <div className="flex font-semibold my-12 justify-center text-h2m">
        <TelephoneIcon />
        <a href="tel:+375 (33) 777-71-71">+375 (33) 777-71-71</a>
      </div>
      <div className="flex flex-col space-y-8 text-h1 justify-center items-center">
        <MenuItem />
      </div>
    </>
  );
};

export default FullscreenMenu;
