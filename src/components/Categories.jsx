import React from "react";

const categories = ["All", "Vegan", "Chocolate", "Cheesecake", " GlutenFree"];

function Categories({ value, onChangeCategory }) {
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => {
          return (
            <li
              onClick={() => onChangeCategory(index)}
              className={value == index ? "active" : ""}
              key={index}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
