import styles from "./Search.module.scss";
import React from "react";
function Search({ searchValue, setSearchValue }) {
  return (
    <div className={styles.search}>
      <input
        value={searchValue}
        placeholder="Search.."
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}

export default Search;
