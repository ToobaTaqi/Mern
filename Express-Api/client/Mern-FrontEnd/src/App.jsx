import React, { useState, useContext } from "react";
import Admin from "./Admin";
import User from "./User";
import Guest from "./Guest";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalContext } from "./Context/context";
import { decodeToken } from "react-jwt";

export const AppRoute = "/";
const ComponentByRoles = {
  admin: Admin,
  user: User,
  guest: Guest,
};

const getUserRole = (params) =>
  ComponentByRoles[params] || ComponentByRoles["guest"];

export default function App() {
  const { state, dispatch } = useContext(GlobalContext);

  const decodeUser = (token) => {
    if (!token) {
      return undefined;
    } else {
      const res = decodeToken(token);
      return res?.role;
    }
  };

  const currentToken = decodeUser(state.token);
  const CurrentUser = getUserRole(currentToken);
  // return <CurrentUser />;
  return <Admin/>
 
}
