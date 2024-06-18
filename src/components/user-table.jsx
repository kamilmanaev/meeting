import React, { createFactory } from "react";
import PropTypes from "prop-types";
import AllUsers from "./user";
import { TableHead } from "./table-head";
import { TableBody } from "./table-body";
import QualitiesList from "./qualities-list";
import Bookmark from "./bookmark";
export function UserTable({
  userCrop,
  onSort,
  selectedSort,
  deleteUser,
  handleTogleBookmark,
}) {
  const columns = {
    name: { iter: "name", name: "Имя" },
    qualities: {
      name: "Качества",
      component: (user) => <QualitiesList qualities={user.qualities} />,
    },
    profession: { iter: "profession.name", name: "Профессия" },
    completedMeetings: { iter: "completedMeetings", name: "Встретился, раз" },
    rate: { iter: "rate", name: "Оценка" },
    bookmark: {
      iter: "bookmark",
      name: "Избранное",
      component: (user) => (
        <Bookmark
          handleTogleBookmark={handleTogleBookmark}
          id={user._id}
          status={user.bookmark}
        />
      ),
    },
    delete: {
      component: (user) => (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            deleteUser(user._id);
          }}
        >
          Удалить
        </button>
      ),
    },
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
