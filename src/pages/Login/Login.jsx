import { useNavigate } from "react-router-dom";
import "./Login.css";
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import BackHome from "../../components/backHome/BackHome";

const Login = () => {
  const [username, setUsername] = useState("");
  const { setUserLogged } = useContext(UserContext);
  const navigate = useNavigate();

  const login = (ev) => {
    ev.preventDefault();
    if (username === "MasterOfDisaster") {
      localStorage.setItem("user", username);
      setUserLogged(true);
      navigate("/home");
    } else {
      alert("⛔️ User not allowed! ⛔️");
    }
    setUsername("");
    console.log(username);
  };
  return (
    <main>
      <BackHome />

      <form onSubmit={(ev) => login(ev)}>
        <input
          className="loginInput"
          type="text"
          placeholder="Username"
          onInput={(ev) => setUsername(ev.target.value)}
          value={username}
        />
        <button>LOG IN</button>
      </form>
    </main>
  );
};

export default Login;
