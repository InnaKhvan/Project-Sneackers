import SearchIcon from "../svg/SearchIcon";
import style from "./Search.module.css"
const SearchForm = () => {
  return (
   
<div className="relative">
        <input type="text"
          className={"flex h-11 border py-3.5 pr-2.5 text-xs " + style.search}
          placeholder="Поиск по сайту"
        />
        <div className="absolute top-3 pl-6">
          <SearchIcon />
        </div>
    
    </div>
     

  );
};

export default SearchForm;
