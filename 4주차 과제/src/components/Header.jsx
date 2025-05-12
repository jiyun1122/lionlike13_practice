const Header = ({ query, setQuery, handleSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8 relative">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="검색어를 입력하세요"
        className=" bg-amber-50 border-amber-300 px-3 py-2 border rounded-xl w-1/3"
      />
      <button
        onClick={handleSearch}
        className="border border-amber-300 rounded-xl bg-amber-100 px-4 hover:bg-amber-500"
      >
        검색
      </button>
    </div>
  );
};

export default Header;
