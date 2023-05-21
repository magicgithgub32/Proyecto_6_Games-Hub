import { Link } from "react-router-dom";
import "./Header.css";
import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Header = () => {
  const { userLogged, setUserLogged } = useContext(UserContext);
  return (
    <div className="headerWrapper">
      <h1>GAMES HUB</h1>

      <article className="loginButton">
        {userLogged ? (
          <button
            className="logout"
            onClick={() => {
              setUserLogged(false);
              localStorage.removeItem("user");
            }}
          >
            LOG OUT
          </button>
        ) : (
          <Link to={`/login`}>
            <button>LOG IN</button>
          </Link>
        )}
      </article>
      <article className="gamesButtons">
        <Link to={`/tictactoe`}>
          <button>TIC-TAC-TOE</button>
        </Link>
        <Link to={`/hangman`}>
          <button>HANGMAN</button>
        </Link>
        <Link to={`/sudoku`}>
          <button>SUDOKU</button>
        </Link>
      </article>
    </div>
  );
};

export default Header;
