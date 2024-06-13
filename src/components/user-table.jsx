import React, { createFactory } from "react";
import PropTypes from "prop-types";
import AllUsers from "./user";
import { TableHead } from "./table-head";
import { TableBody } from "./table-body";
import QualitiesList from "./qualities-list";
export function UserTable({ userCrop, onSort, selectedSort }) {
  const columns = {
    name: { iter: "name", name: "Имя" },
    qualities: {
      name: "Качества",
      component: (user) => <QualitiesList qualities={user.qualities} />,
    },
    profession: { iter: "profession.name", name: "Профессия" },
    completedMeetings: { iter: "completedMeetings", name: "Встретился, раз" },
    rate: { iter: "rate", name: "Оценка" },
    bookmark: { iter: "bookmark", name: "Избранное" },
    delete: {},
  };
  return (
    <table className="table">
      <TableHead
        columns={columns}
        onSort={onSort}
        selectedSort={selectedSort}
      />
      <TableBody data={userCrop} columns={columns} />
    </table>
  );
}
UserTable.proptTypes = {
  userCrop: PropTypes.array,
  handleTogleBookmark: PropTypes.func,
  deleteUser: PropTypes.func,
  handleSort: PropTypes.func,
};
