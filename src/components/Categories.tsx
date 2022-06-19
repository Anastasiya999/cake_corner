import React from "react";

const categories = ["All", "Vegan", "Chocolate", "Cheesecake", " GlutenFree"];

type CategoriesProps = {
  value: number;
  onChangeCategory: any;
};

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
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
};

export default Categories;
