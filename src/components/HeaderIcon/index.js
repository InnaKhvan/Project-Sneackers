import { HeartIcon } from "../svg/HeartIcon"
import { MenuIcon } from "../svg/MenuIcon"
import { SearchIconTablet } from "../svg/SearchIconTablet"
import { ShopCartIcon } from "../svg/ShopCartIcon"
import { UserIcon } from "../svg/UserIcon"

const HeaderIcon = () => {
    return (
        <div className="flex space-x-7 justify-around">
        <SearchIconTablet className="hidden tablet:block desktop:hidden" />
        <UserIcon className="hidden tablet:block desktop:block" />
        <HeartIcon className="hidden tablet:block desktop:block" />
        <ShopCartIcon />
        <MenuIcon className="tablet:hidden desktop:hidden" />
      </div>
    )
}
export default HeaderIcon;