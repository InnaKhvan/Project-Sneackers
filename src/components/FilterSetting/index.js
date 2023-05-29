import SettingIcon from "../svg/SettingIcon";


const FilterSetting = () => {
    return (
        <div className="flex tablet:hidden my-5 mr-[15px]">
        <p className="flex font-semibold text-p1 mr-[5px]">Фильтры</p>
        <SettingIcon />
      </div>
    )
}

export default FilterSetting;