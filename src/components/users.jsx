import React, { useState } from "react";
import API from "../API";
export const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  console.log(users);
  return <h1>name</h1>;
};
