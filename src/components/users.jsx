import React, { useEffect, useState } from "react";
import API from "../API";
import paginate from "../utils/paginate";
import Pagination from "./pagination";
import AllUsers from "./user";
import SearchStatus from "./search-status";

export const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const [professions, setProfessions] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  let length = users.length;

  useEffect(() => {
    API.professions.fetchAll().then((data) => setProfessions(data));
  }, []);
  let userCrop = paginate(users, pageSize, currentPage);

  console.log(professions);
  function handleChangePage(pageIndex) {
    setCurrentPage(pageIndex);
  }
  //функция для определения окончания

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
  return (
    <>
      <SearchStatus numOfPeople={users.length} />
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
