import React from "react";
import AllUsers from "./user";
import { object } from "prop-types";
import _ from "lodash";
import PropTypes from "prop-types";
export const TableBody = ({ data, columns }) => {
  console.log(data);
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

TableBody.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.object,
};
