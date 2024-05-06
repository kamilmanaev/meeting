import React, { useState } from "react";
import API from "../API";
import paginate from "../utils/paginate";
import Pagination from "./pagination";
import AllUsers from "./user";
import Search_status from "./search-status";
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
  console.log(userCrop);
  return (
    <>
      {/* <Search_status numOfPeople={users.length} renderPhrase={renderPhrase} /> */}
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
          <AllUsers
            users={users}
            userCrop={userCrop}
            handleTogleBookmark={handleTogleBookmark}
            deleteUser={deleteUser}
            length={length}
            pageSize={pageSize}
            currentPage={currentPage}
            paginate={paginate}
          />
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
