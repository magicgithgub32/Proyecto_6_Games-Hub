import { useNavigate } from "react-router-dom";
import "./Login.css";
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const { setUserLogged } = useContext(UserContext);
  const navigate = useNavigate();

  const login = (ev) => {
    ev.preventDefault();
    if (username === "MasterOfGames") {
      localStorage.setItem("user", username);
      setUserLogged(true);
      navigate("/home");
    } else {
      alert("⛔️ User not allowed! ⛔️");
    }
  };
  return (
    <main>
      <form onSubmit={(ev) => login(ev)}>
        <input
          type="text"
          placeholder="Username"
          onInput={(ev) => setUsername(ev.target.value)}
        />
        <button>LOG IN</button>
      </form>
    </main>
  );
};

export default Login;
