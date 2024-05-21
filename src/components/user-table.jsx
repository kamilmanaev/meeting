import React, { createFactory } from "react";
import PropTypes from "prop-types";
import AllUsers from "./user";
export function UserTable({
  userCrop,
  handleTogleBookmark,
  deleteUser,
  handleSort,
}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" onClick={() => handleSort("name")}>
            Имя
          </th>
          <th scope="col">Качества</th>
          <th scope="col" onClick={() => handleSort("profession.name")}>
            Профессия
          </th>
          <th scope="col" onClick={() => handleSort("completedMeetings")}>
            Встретиля, раз
          </th>
          <th scope="col" onClick={() => handleSort("rate")}>
            Оценка
          </th>
          <th scope="col">Избранное</th>
          <th scope="col">удалить</th>
        </tr>
      </thead>
      <tbody>
        {userCrop.map((user) => (
          <AllUsers
            key={user._id}
            handleTogleBookmark={handleTogleBookmark}
            deleteUser={deleteUser}
            id={user._id}
            profession={user.profession.name}
            completedmeetings={user.completedMeetings}
            rate={user.rate}
            bookmark={user.bookmark}
            name={user.name}
            qualities={user.qualities}
          />
        ))}
      </tbody>
    </table>
  );
}
UserTable.proptTypes = {
  userCrop: PropTypes.array,
  handleTogleBookmark: PropTypes.func,
  deleteUser: PropTypes.func,
  handleSort: PropTypes.func,
};
