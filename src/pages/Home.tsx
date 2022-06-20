import React from "react";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Categories from "../components/Categories";
import Sort, { criteria } from "../components/Sort";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Skeleton from "../components/ProductCard/Skeleton";
import { useAppDispatch } from "../redux/store";

import {
  setCategoryId,
  setFilters,
  setCurrentPage,
} from "../redux/slices/filter/slice";
import { fetchProducts } from "../redux/slices/product/slice";
import { selectFilter } from "../redux/slices/filter/selectors";
import { selectProductData } from "../redux/slices/product/selectors";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(selectProductData);
  const sortType = sort.sortProperty;

  const onChangeCategoryId = React.useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const fetchItems = async () => {
    const category =
      categoryId > 0 && currentPage == 1 ? `category=${categoryId}` : "";
    const sortBy = `sortBy=${sortType}`;
    const search = searchValue ? `search=${searchValue}` : "";

    dispatch(
      fetchProducts({
        currentPage: String(currentPage),
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
          searchValue: String(params.search),
          categoryId: Number(params.categoryId),
          currentPage: Number(params.currentPage),
          sort: sort || criteria[0],
        })
      );
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
        <Sort value={sort} />
      </div>
      <h2 className=" content__title "> All cakes </h2>
      <div className="content__items">
        {status === "loading"
          ? [...Array(8)].map((item, index) => {
              return <Skeleton key={index} {...item} />;
            })
          : items.map((item: any) => {
              return <ProductCard key={item.id} {...item} />;
            })}
      </div>
      <Pagination page={currentPage} onPageChange={onChangePage} />
    </>
  );
};
export default Home;
