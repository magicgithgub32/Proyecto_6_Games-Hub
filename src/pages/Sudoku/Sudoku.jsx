import "./Sudoku.css";
import React from "react";
import { Link } from "react-router-dom";

const Sudoku = () => {
  return (
    <>
      <p>I'm the Sudoku</p>
      <Link to={`/`}>
        <button>back home</button>
      </Link>
    </>
  );
};

export default Sudoku;
