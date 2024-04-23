import React, { useState } from "react";
import API from "../API";
import paginate from "../utils/paginate";
import Pagination from "./pagination";
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

  /*   function changeBookMark(bookmark) {
    if (bookmark) {
      return    <td>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-bookmark"
          viewBox="0 0 16 16"
        >
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
        </svg>
      </td>;
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-bookmark-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
        </svg>
      );
    }
  } */
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
                <td>{/* {changeBookMark()} */}</td>
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
