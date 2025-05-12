const Search = ({ handleSearch }) => {
  return (
    <button
      onClick={handleSearch}
      className="border border-amber-300 bg-amber-200 px-4 cursor-pointer"
    >
      검색
    </button>
  );
};

export default Search;
