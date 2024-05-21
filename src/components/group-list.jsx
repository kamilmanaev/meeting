import React from "react";
import PropTypes from "prop-types";
export function GroupList({ items, onClick, selectedProfession }) {
  if (!Array.isArray(items)) {
    return (
      <ul className="list-group">
        {Object.keys(items).map((item) => (
          <li
            className={
              "list-group-item" +
              (selectedProfession === items[item] ? " active" : "")
            }
            role="button"
            key={items[item]._id}
            onClick={() => onClick(items[item])}
          >
            {items[item].name}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul>
      {" "}
      {items.map((item) => (
        <li
          className={
            "list-group-item" + (selectedProfession === item ? " active" : "")
          }
          role="button"
          key={item._id}
          onClick={() => onClick(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

GroupList.prototype = {
  items: PropTypes.object,
  onClick: PropTypes.func,
  selectedProfession: PropTypes.object,
};
