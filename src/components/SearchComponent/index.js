
const SearchForm = () => {
  return (
    <>
      <label class="relative block">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input
          className="flex w-346px h-44px "
          placeholder="Поиск по сайту"
        />
      </label>

      {/* onChange={this.filterList}  */}
      {/* {this.state.items.map(function (item) { */}
      {/* //   return <Item key={item} name={item} />; */}
      {/* })} */}
    </>
  );
};

export default SearchForm;
