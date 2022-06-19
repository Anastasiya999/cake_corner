import styles from "./Search.module.scss";
import React from "react";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";
function Search() {
  const inputRef = React.useRef();
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const handleClick = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => dispatch(setSearchValue(str)), 270),
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
