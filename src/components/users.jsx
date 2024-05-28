import React, { useEffect, useState } from "react";
import _ from "lodash";
import API from "../API";
import paginate from "../utils/paginate";
import Pagination from "./pagination";
import AllUsers from "./user";
import SearchStatus from "./search-status";
import { GroupList } from "./group-list";
import { UserTable } from "./user-table";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [professions, setProfessions] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProfession, setSelectedProfession] = useState();
  const pageSize = 4;
  const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });

  useEffect(() => {
    API.professions.fetchAll().then((data) => setProfessions(data));
  }, []);
  useEffect(() => {
    API.users.fetchAll().then((data) => setUsers(data));
  }, []);

  const filteredUsers = selectedProfession
    ? users.filter(
        (user) =>
          JSON.stringify(user.profession) === JSON.stringify(selectedProfession)
      )
    : users;
  const sortedUser = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]);
  let userCrop = paginate(sortedUser, pageSize, currentPage);
  let count = filteredUsers.length;
  useEffect(() => {
    if (currentPage > Math.ceil(count / pageSize))
      setCurrentPage(currentPage - 1);
  }, [users, currentPage, count]);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProfession]);

  function clearFilter() {
    setSelectedProfession();
  }
  function handleChangePage(pageIndex) {
    setCurrentPage(pageIndex);
  }
  //функция для определения окончания

  function handleSort(item) {
    setSortBy(item);
  }
  console.log(sortBy);

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
  function handleSelectProfession(params) {
    setSelectedProfession(params);
  }
  return (
    <div className="d-flex">
      {" "}
      <div className="d-flex flex-column flex-shrink-0 p-3">
        {professions && (
          <>
            {
              <GroupList
                items={professions}
                onClick={handleSelectProfession}
                selectedProfession={selectedProfession}
              />
            }
            {
              <button
                onClick={() => clearFilter()}
                className="btn btn-secondary"
              >
                Очистить
              </button>
            }
          </>
        )}
      </div>
      <div className="d-flex flex-column">
        <SearchStatus numOfPeople={count} />
        {count > 0 && (
          <UserTable
            userCrop={userCrop}
            handleTogleBookmark={handleTogleBookmark}
            deleteUser={deleteUser}
            onSort={handleSort}
            selectedSort={sortBy}
          />
        )}
        <Pagination
          currentPage={currentPage}
          handleChangePage={handleChangePage}
          pageSize={pageSize}
          count={count}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};
