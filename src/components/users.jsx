import React from "react";
import API from "../API";
export const Users = () => {
  console.log(API.users.fetchAll());
  return <h1>name</h1>;
};
