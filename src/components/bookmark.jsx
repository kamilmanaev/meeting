import React from "react";
function Bookmark({ handleTogleBookmark, id, status }) {
  return (
    <i
      className={"bi bi-bookmark" + (status ? "-fill" : "")}
      onClick={() => handleTogleBookmark(id)}
    ></i>
  );
}
export default Bookmark;
