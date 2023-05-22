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
  };
  return (
    <main>
      <BackHome />

      <form onSubmit={(ev) => login(ev)}>
        <input
          type="text"
          placeholder="Username"
          onInput={(ev) => setUsername(ev.target.value)}
        />
        <button>LOG IN</button>
      </form>

      {/* <div className="gifWrapper">
        <iframe
          src="https://giphy.com/embed/4pMX5rJ4PYAEM"
          width="480"
          height="358"
          className="giphy-embed"
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/homer-simpson-the-simpsons-bush-4pMX5rJ4PYAEM"></a>
        </p>
      </div> */}
    </main>
  );
};

export default Login;
