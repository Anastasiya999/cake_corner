import React from "react";
import "./style/App.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import ProductCard from "./components/ProductCard";

import products from "./mock_products.json";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://cakecorner.free.beeceptor.com/items")
      .then((res) => res.json())
      .then((result) => setItems(result));
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className=" content__title "> All cakes </h2>
          <div className="content__items">
            {items.map((item, index) => {
              return <ProductCard key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
