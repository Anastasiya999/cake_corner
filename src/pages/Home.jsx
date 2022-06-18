import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux/es/exports";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ProductCard from "../components/ProductCard";
import Skeleton from "../components/ProductCard/Skeleton";
import SearchContext from "../context";

import { setCategoryId } from "../redux/slices/filterSlice";

import Pagination from "../components/Pagination";
function Home() {
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);

  const onChangeCategoryId = (id) => {
    dispatch(setCategoryId(id));
  };

  React.useEffect(() => {
    setIsLoading(true);

    const category =
      categoryId > 0 && currentPage == 1 ? `category=${categoryId}` : "";
    const sortBy = `sortBy=${sortType}`;
    const search = searchValue ? `search=${searchValue}` : "";

    axios
      .get(
        `https://62aca39d402135c7acb6030c.mockapi.io/items?page=${currentPage}&limit=4&${category}&${sortBy}&${search}`
      )
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);
  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategoryId} />
        <Sort />
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
      <Pagination setPage={setCurrentPage} />
    </>
  );
}
export default Home;
