import { Link } from "react-router-dom";
import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div className="headerWrapper">
      <h1>GAMES HUB</h1>
      <article className="gamesButtons">
        <Link to={`/tictactoe`}>
          <button>TICTACTOE</button>
        </Link>
        <Link to={`/hangman`}>
          <button>HANGMAN</button>
        </Link>
        <Link to={`/sudoku`}>
          <button>SUDOKU</button>
        </Link>
        <Link to={`/`}>
          <button>back home</button>
        </Link>
      </article>
    </div>
  );
};

export default Header;
