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
        className="bg-amber-100 border-amber-300 px-3 py-2 border rounded-xl w-1/4"
      />
      <button
        onClick={handleSearch}
        className="border border-amber-600 rounded-xl bg-amber-500 px-4 hover:bg-amber-700"
      >
        검색
      </button>
    </div>
  );
};

export default Header;
