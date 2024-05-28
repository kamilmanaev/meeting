import React from "react";
import AllUsers from "./user";
import { object } from "prop-types";
import _ from "lodash";
export const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {Object.keys(columns).map((column) => (
            <td key={column}>{_.get(item, columns[column].iter)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
