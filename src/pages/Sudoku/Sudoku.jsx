import "./Sudoku.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sudoku = () => {
  const [isStarted, setisStarted] = useState(false);

  const playButtonHandler = () => {
    if (!isStarted) {
    }
    setisStarted(!isStarted);
  };

  return (
    <article className="sudokuWrapper">
      <div className="homeButtonContainer">
        <Link to={`/`}>
          <button className="homeButton">Home</button>
        </Link>
      </div>

      <section className="sudokuHeader">
        <h1 className="title">SUDOKU</h1>

        <button className="playButton" onClick={playButtonHandler}>
          {isStarted ? "STOP" : "PLAY"}
        </button>
      </section>

      {isStarted && (
        <section className="sudokuBody">
          <div className="sudokuBoard"></div>
        </section>
      )}
    </article>
  );
};

export default Sudoku;
