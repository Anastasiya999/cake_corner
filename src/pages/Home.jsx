import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ProductCard from "../components/ProductCard";
import Skeleton from "../components/ProductCard/Skeleton";
import Search from "../components/Search";
function Home({ searchValue }) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "popularity",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = `sortBy=${sortType.sortProperty}`;
    const search = searchValue ? `search=${searchValue}` : "";

    fetch(
      `https://62aca39d402135c7acb6030c.mockapi.io/items?${category}&${sortBy}&${search}`
    )
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);
  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={setCategoryId} />
        <Sort value={sortType} onChangeType={setSortType} />
      </div>
      <h2 className=" content__title "> All cakes </h2>
      <div className="content__items">
        {isLoading
          ? [...Array(8)].map((item, index) => {
              return <Skeleton key={index} {...item} />;
            })
          : items.map((item, index) => {
              return <ProductCard key={item.id} {...item} />;
            })}
      </div>
    </>
  );
}
export default Home;
