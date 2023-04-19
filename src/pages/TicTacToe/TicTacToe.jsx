import "./TicTacToe.css";
import React from "react";
import { Link } from "react-router-dom";

const TicTacToe = () => {
  return (
    <>
      <p>I'm the Tic-Tac-Toe</p>
      <Link to={`/`}>
        <button>back home</button>
      </Link>
    </>
  );
};

export default TicTacToe;
