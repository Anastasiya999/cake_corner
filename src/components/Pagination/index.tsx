import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux/es/exports";
import { setCurrentPage } from "../../redux/slices/filterSlice";

import styles from "./Pagination.module.scss";

type PaginationProps = {
  page: number;
};

const Pagination: React.FC<PaginationProps> = ({ page }) => {
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      forcePage={page - 1}
      className={styles.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
      pageRangeDisplayed={8}
      pageCount={3}
      previousLabel="<"
    />
  );
};

export default Pagination;
