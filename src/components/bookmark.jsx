import React from "react";
function Bookmark({ handleTogleBookmark, id, status }) {
  console.log(id);
  return (
    <i
      className={"bi bi-bookmark" + (status ? "-fill" : "")}
      onClick={() => handleTogleBookmark(id)}
    ></i>
  );
}
Bookmark.protoTypes = {
  handleTogleBookmark: PropTypes.func,
  id: PropTypes.number,
  status: PropTypes.bool,
};
export default Bookmark;
