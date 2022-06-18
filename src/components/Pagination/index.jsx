import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

function Pagination({ page, setPage }) {
  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => setPage(e.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
