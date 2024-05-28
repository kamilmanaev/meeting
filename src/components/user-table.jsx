import React, { createFactory } from "react";
import PropTypes from "prop-types";
import AllUsers from "./user";
import { TableHead } from "./table-head";
import { TableBody } from "./table-body";
export function UserTable({
  userCrop,
  handleTogleBookmark,
  deleteUser,
  onSort,
  selectedSort,
}) {
  function handleSort(item) {
    if (item !== selectedSort.iter) {
      onSort((prevState) => ({ ...prevState, iter: item }));
    } else
      onSort((prevState) => ({
        ...prevState,
        order: prevState.order == "asc" ? "desc" : "asc",
      }));
  }

  const columns = {
    name: { iter: "name", name: "Имя" },
    qualities: { name: "Качества" },
    profession: { iter: "profession.name", name: "Профессия" },
    completedMeetings: { iter: "completedMeetings", name: "Встретился, раз" },
    rate: { iter: "rate", name: "Оценка" },
    bookmark: { iter: "bookmark", name: "Избранное" },
    delete: {},
  };

  return (
    <table className="table">
      <TableHead handleSort={handleSort} columns={columns} />
      <TableBody data={userCrop} columns={columns} />
    </table>
  );
}
UserTable.proptTypes = {
  userCrop: PropTypes.array,
  handleTogleBookmark: PropTypes.func,
  deleteUser: PropTypes.func,
  onSort: PropTypes.func,
};
