import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import { useSelector, useDispatch } from "react-redux";
import Categories from "../components/Categories";
import Sort, { criteria } from "../components/Sort";
import ProductCard from "../components/ProductCard";
import Skeleton from "../components/ProductCard/Skeleton";
import SearchContext from "../context";

import { setCategoryId, setFilters } from "../redux/slices/filterSlice";

import Pagination from "../components/Pagination";
function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { searchValue } = React.useContext(SearchContext);
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );
  const sortType = sort.sortProperty;

  const onChangeCategoryId = React.useCallback((id) => {
    dispatch(setCategoryId(id));
  }, []);

  const fetchItems = () => {
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
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = criteria.find(
        (item) => item.sortProperty == params.sortProperty
      );
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchItems();
    }
    isSearch.current = false;
  }, [categoryId, sortType, searchValue, currentPage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const query = qs.stringify({
        sortProperty: sortType,
        categoryId,
        currentPage,
      });

      navigate(`?${query}`);
    }

    isMounted.current = true;
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
      <Pagination page={currentPage} />
    </>
  );
}
export default Home;
