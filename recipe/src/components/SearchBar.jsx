import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="leitin">
      <input
        placeholder="Finna uppskriftir..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>Leita</button>
    </form>
  );
}

export default SearchBar;
