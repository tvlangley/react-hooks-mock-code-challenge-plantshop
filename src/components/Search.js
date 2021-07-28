import React, { useState } from "react";

function Search({onSearchData}) {
  const [searchValue, setSearchValue] = useState("")

  onSearchData(searchValue)

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
}

export default Search;
