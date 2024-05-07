import React from "react";
import PropTypes from "prop-types";
function SearchStatus({ numOfPeople }) {
  function renderPhrase() {
    if (
      numOfPeople === 0 ||
      numOfPeople % 10 === 1 ||
      (numOfPeople > 4 && numOfPeople < 15)
    )
      return "человек";
    else {
      if (numOfPeople % 10 <= 4) return "человека";
    }
  }
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
SearchStatus.propTypes = {
  numOfPeople: PropTypes.number,
};
export default SearchStatus;
