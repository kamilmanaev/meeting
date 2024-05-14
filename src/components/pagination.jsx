import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
function Pagination({
  currentPage,
  handleChangePage,
  pageSize,
  count,
  setCurrentPage,
}) {
  const pageCount = Math.ceil(count / pageSize);
  if (pageCount <= 1) return null;
  const pages = _.range(1, pageCount + 1);
  function beforePage() {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    else setCurrentPage(1);
  }
  function nextPage() {
    if (currentPage < pages.length) setCurrentPage(currentPage + 1);
  }
  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        <li className={"page-item" + (currentPage === 1 ? " disabled" : "")}>
          <button className="page-link " onClick={() => beforePage()}>
            предыдущая
          </button>
        </li>
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
        <li
          className={
            "page-item " + (currentPage === pages.length ? "disabled" : "")
          }
        >
          <button className="page-link" onClick={() => nextPage()}>
            следуящая
          </button>
        </li>
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
