import { useState } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const login = (username, password) => {
    if (username === "yourUsername" && password === "yourPassword") {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } else {
      alert("Your username and password do not match");
    }
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
};

export default useAuth;
