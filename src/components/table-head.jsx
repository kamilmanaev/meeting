import React from "react";
export const TableHead = ({ handleSort, columns }) => {
  console.log(Object.values(columns));
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].iter
                ? () => handleSort(columns[column].iter)
                : null
            }
            role={columns[column].iter && "button"}
          >
            {columns[column].name}{" "}
          </th>
        ))}
      </tr>
    </thead>
  );
};
