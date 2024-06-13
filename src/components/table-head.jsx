import React from "react";
export const TableHead = ({ columns, onSort, selectedSort }) => {
  function handleSort(item) {
    if (selectedSort.iter === item) {
      onSort((prevState) => ({
        ...prevState,
        order: prevState.order === "asc" ? "desc" : "asc",
      }));
    } else {
      onSort({ iter: item, order: "asc" });
    }
  }

  function handleSortArrow(selectedSort, currentPath) {
    if (selectedSort.iter === currentPath) {
      if (selectedSort.order == "asc") {
        return <i className="bi bi-caret-down-fill"></i>;
      } else return <i className="bi bi-caret-up-fill"></i>;
    }
  }

  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            scope="col"
            onClick={
              columns[column].iter && (() => handleSort(columns[column].iter))
            }
            role={columns[column].iter && "button"}
          >
            {columns[column].name}{" "}
            {handleSortArrow(selectedSort, columns[column].iter)}{" "}
          </th>
        ))}
      </tr>
    </thead>
  );
};
