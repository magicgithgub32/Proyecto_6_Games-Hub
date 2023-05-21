import { createContext, useState } from "react";
import React from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState(() => {
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <UserContext.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </UserContext.Provider>
  );
};
