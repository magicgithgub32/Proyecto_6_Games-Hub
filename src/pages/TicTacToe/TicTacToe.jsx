import "./TicTacToe.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const TicTacToe = () => {
  const [isStarted, setisStarted] = useState(false);
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const playButtonHandler = () => {
    setisStarted(!isStarted);
  };

  const playerTurnHandler = () => {
    setPlayerOneTurn(!playerOneTurn);
  };

  return (
    <article className="tictactoeWrapper">
      <div className="homeButtonContainer">
        <Link to={`/`}>
          <button className="homeButton">Home</button>
        </Link>
      </div>

      <section className="tictactoeHeader">
        <h1 className="title">TIC-TAC-TOE</h1>

        <button className="playButton" onClick={playButtonHandler}>
          {isStarted ? "STOP" : "PLAY"}
        </button>
      </section>
      <section className="tictactoeBoard">
        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item">4</div>
        <div className="grid-item">5</div>
        <div className="grid-item">6</div>
        <div className="grid-item">7</div>
        <div className="grid-item">8</div>
        <div className="grid-item">9</div>
      </section>
    </article>
  );
};

export default TicTacToe;
