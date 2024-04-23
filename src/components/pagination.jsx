import React from "react";
import _ from "lodash";
function Pagination({ currentPage, handleChangePage, pageSize, count }) {
  const pageCount = Math.ceil(count / pageSize);
  const pages = _.range(1, pageCount + 1);
  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={"page-item " + (page === currentPage ? "active" : "")}
            key={page}
          >
            <button
              className="page-link"
              onClick={() => handleChangePage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
