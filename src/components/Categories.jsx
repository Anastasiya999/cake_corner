import React from "react";

const categories = ["All", "Vegan", "Chocolate", "Cheesecake", " GlutenFree"];

function Categories() {
  const [activeCategory, setActive] = React.useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => {
          return (
            <li
              onClick={() => setActive(index)}
              className={activeCategory == index ? "active" : ""}
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
