import React from "react";
function Search_status(numOfPeople, renderPhrase) {
  return (
    <h1>
      <span
        className={"badge " + (numOfPeople > 0 ? "bg-primary" : "bg-danger")}
      >
        {numOfPeople} {renderPhrase()} тусанет с тобою
      </span>
    </h1>
  );
}
Search_status.propTypes = {
  numOfPeople: PropTypes.number,
  renderPhrase: PropTypes.func,
};
export default Search_status;
