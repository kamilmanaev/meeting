import React, { useState } from "react";
import API from "../API";
import paginate from "../utils/paginate";
import Pagination from "./pagination";
import Bookmark from "./bookmark";
export const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  let length = users.length;
  let pages = [];
  let userCrop = paginate(users, pageSize, currentPage);

  function handleChangePage(pageIndex) {
    setCurrentPage(pageIndex);
  }
  //функция для определения окончания

  function renderPhrase() {
    if (
      users.length === 0 ||
      users.length % 10 === 1 ||
      (users.length > 4 && users.length < 15)
    )
      return "человек";
    else {
      if (users.length % 10 <= 4) return "человека";
    }
  }
  const deleteUser = (id) => {
    setUsers(users.filter((item) => id !== item._id));
  };
  function handleTogleBookmark(id) {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        } else return user;
      })
    );
  }
  console.log(users);
  return (
    <>
      <h1>
        <span
          className={"badge " + (users.length > 0 ? "bg-primary" : "bg-danger")}
        >
          {users.length} {renderPhrase()} тусанет с тобою
        </span>
      </h1>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретиля, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th scope="col">удалить</th>
            </tr>
          </thead>
          <tbody>
            {userCrop.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>
                  {item.qualities.map((quality) => (
                    <span
                      className={`badge bg-${quality.color}`}
                      key={quality._id}
                    >
                      {quality.name}
                    </span>
                  ))}
                </td>
                <td>{item.profession.name}</td>
                <td>{item.completedMeetings}</td>
                <td>{item.rate}</td>
                <td>
                  <Bookmark
                    handleTogleBookmark={handleTogleBookmark}
                    id={item._id}
                    status={item.bookmark}
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(item._id);
                      length = users.length;
                    }}
                  >
                    удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        currentPage={currentPage}
        handleChangePage={handleChangePage}
        pageSize={pageSize}
        count={length}
      />
    </>
  );
};
