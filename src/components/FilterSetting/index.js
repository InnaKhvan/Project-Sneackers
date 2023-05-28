import styles from './filterSetting.module.css'
import SettingIcon from "../svg/SettingIcon";


const FilterSetting = () => {
    return (
        <div className={"flex tablet:hidden my-5 " + styles.blockFil}>
        <p className={"flex font-semibold " + styles.textFil}>Фильтры</p>
        <SettingIcon />
      </div>
    )
}

export default FilterSetting;