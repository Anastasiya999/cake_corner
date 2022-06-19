import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import { useSelector, useDispatch } from "react-redux";
import Categories from "../components/Categories";
import Sort, { criteria } from "../components/Sort";
import ProductCard from "../components/ProductCard";
import Skeleton from "../components/ProductCard/Skeleton";

import { setCategoryId, setFilters } from "../redux/slices/filterSlice";

import Pagination from "../components/Pagination";
import { fetchProducts } from "../redux/slices/productSlice";
function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );
  const searchValue = useSelector((state) => state.filter.search);
  const { items, status } = useSelector((state) => state.product);
  const sortType = sort.sortProperty;

  const onChangeCategoryId = (id) => {
    dispatch(setCategoryId(id));
  };

  const fetchItems = async () => {
    const category =
      categoryId > 0 && currentPage == 1 ? `category=${categoryId}` : "";
    const sortBy = `sortBy=${sortType}`;
    const search = searchValue ? `search=${searchValue}` : "";

    dispatch(
      fetchProducts({
        currentPage,
        category,
        sortBy,
        search,
      })
    );
  };
  //if we have params in url during first render don't fetch data
  React.useEffect(() => {
    if (!isSearch.current) {
      fetchItems();
    }
    isSearch.current = false;
  }, [categoryId, sortType, searchValue, currentPage]);

  //on first render chceck url parameters, if so - save in redux store
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
      console.log({
        ...params,
        sort,
      });
      isSearch.current = true;
    }
  }, []);

  //first render - don't save params to url
  React.useEffect(() => {
    if (isMounted.current) {
      const query = qs.stringify({
        sortProperty: sortType,
        categoryId,
        currentPage,
      });

      navigate(`?${query}`);
    }
    // flag the first render
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
        {status === "loading"
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
