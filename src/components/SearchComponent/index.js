
const SearchForm = () => {
  return (
    <>
   
<div className="seach">
        <input type="text"
          className="flex border rounded w-84 h-11 py-3.5"
          placeholder="Поиск по сайту"
        />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7A7A7A" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 20.9999L16.65 16.6499" stroke="#7A7A7A" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
    </div>
     
    </>
  );
};

export default SearchForm;
