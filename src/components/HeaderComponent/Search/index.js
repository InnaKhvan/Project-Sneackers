import SearchIcon from "../../svg/SearchIcon";
import style from "./Search.module.css";
const SearchForm = ({ className }) => {
  return (
    <div className={"relative flex" + className}>
      <input
        type="text"
        className={
          "flex h-11 border py-3.5 pr-2.5 text-xs font-normal active:border-secondary1 " +
          style.search
        }
        placeholder="Поиск по сайту"
        onClick={(e) => e.stopPropagation()}
      />
      <div className="absolute top-3 pl-6">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchForm;
