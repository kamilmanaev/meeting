import React from "react";
import PropTypes from "prop-types";
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
Pagination.propTypes = {
  currentPage: PropTypes.number,
  handleChangePage: PropTypes.func,
  pageSize: PropTypes.number,
  count: PropTypes.number,
};
export default Pagination;
