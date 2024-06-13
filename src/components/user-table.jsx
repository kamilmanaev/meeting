import React, { createFactory } from "react";
import PropTypes from "prop-types";
import AllUsers from "./user";
import { TableHead } from "./table-head";
import { TableBody } from "./table-body";
export function UserTable({ userCrop, onSort, selectedSort }) {
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
      <TableHead columns={columns} onSort={onSort} />
      <TableBody
        data={userCrop}
        columns={columns}
        selectedSort={selectedSort}
      />
    </table>
  );
}
UserTable.proptTypes = {
  userCrop: PropTypes.array,
  handleTogleBookmark: PropTypes.func,
  deleteUser: PropTypes.func,
  handleSort: PropTypes.func,
};
