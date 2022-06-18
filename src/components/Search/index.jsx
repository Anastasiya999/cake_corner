import styles from "./Search.module.scss";
import React from "react";
import debounce from "lodash.debounce";
function Search({ setSearchValue }) {
  const inputRef = React.useRef();
  const [value, setValue] = React.useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const handleClick = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => setSearchValue(str), 250),
    []
  );
  return (
    <div className={styles.search}>
      {value && <img src="/img/close.svg" onClick={handleClick} />}
      <input
        ref={inputRef}
        value={value}
        placeholder="Search.."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
