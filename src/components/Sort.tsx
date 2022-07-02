import React from "react";
import { setSort } from "../redux/slices/filter/slice";
import { SortType } from "../redux/slices/filter/types";
import { useAppDispatch } from "../redux/store";

export const criteria: SortType[] = [
  { name: "popularity", sortProperty: "rating" },
  { name: "price", sortProperty: "price" },
  { name: "alphabet", sortProperty: "name" },
];

type SortTypeProps = {
  value: SortType;
};

const Sort: React.FC<SortTypeProps> = React.memo(({ value }) => {
  const dispatch = useAppDispatch();

  const sortRef = React.useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = (index: SortType) => {
    dispatch(setSort(index));

    setIsOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b> Sort by: </b>
        <span onClick={() => setIsOpen((prev) => !prev)}>{value.name}</span>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {criteria.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    value.sortProperty == item.sortProperty ? "active" : ""
                  }
                  onClick={() => handleSelect(item)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
});

export default Sort;
