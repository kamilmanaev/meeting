import React, { useState } from "react";
import API from "../API";
export const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
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
  console.log(users);
  return (
    <>
      <h1>
        {" "}
        <span
          className={"badge " + (users.length > 0 ? "bg-primary" : "bg-danger")}
        >
          {users.length} {renderPhrase()} тусанет с тобою
        </span>
      </h1>
      {users.length > 0 && (
        <table class="table">
          {" "}
          <thead>
            {" "}
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретиля, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">удалить</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>
                  {item.qualities.map((quality) => (
                    <span className={`badge bg-${quality.color}`}>
                      {quality.name}
                    </span>
                  ))}
                </td>
                <td>{item.profession.name}</td>
                <td>{item.completedMeetings}</td>
                <td>{item.rate}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(item._id);
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
    </>
  );
};
