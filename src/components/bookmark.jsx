import React from "react";
import PropTypes from "prop-types";
function Bookmark({ handleTogleBookmark, id, status }) {
  return (
    <i
      className={"bi bi-bookmark" + (status ? "-fill" : "")}
      onClick={() => handleTogleBookmark(id)}
    ></i>
  );
}
Bookmark.propTypes = {
  handleTogleBookmark: PropTypes.func,
  id: PropTypes.string,
  status: PropTypes.bool,
};
export default Bookmark;
