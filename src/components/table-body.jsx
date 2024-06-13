import React from "react";
import AllUsers from "./user";
import { object } from "prop-types";
import _ from "lodash";
import PropTypes from "prop-types";
export const TableBody = ({ data, columns }) => {
  function renderContent(item, column) {
    const component = columns[column].component;
    if (component) {
      if (typeof component === "function") {
        return component(item);
      }
      return component;
    }
    return _.get(item, columns[column].iter);
  }
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {Object.keys(columns).map((column) => (
            <td key={column}>{renderContent(item, column)}</td>
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
