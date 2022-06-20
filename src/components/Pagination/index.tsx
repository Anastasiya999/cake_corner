import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

type PaginationProps = {
  page: number;
  onPageChange: (e: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ page, onPageChange }) => {
  return (
    <ReactPaginate
      forcePage={page - 1}
      className={styles.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onPageChange(e.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      previousLabel="<"
    />
  );
};

export default Pagination;
