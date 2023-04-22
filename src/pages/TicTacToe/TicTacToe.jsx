import "./TicTacToe.css";
import React, { useState, useEffect } from "react";
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

  const useEffect =
    (() => {
      setBoard([
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]);
    },
    []);

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
        <button onClick={playerTurnHandler} className="board-item" />
        <button onClick={playerTurnHandler} className="board-item" />
        <button onClick={playerTurnHandler} className="board-item" />
        <button onClick={playerTurnHandler} className="board-item" />
        <button onClick={playerTurnHandler} className="board-item" />
        <button onClick={playerTurnHandler} className="board-item" />
        <button onClick={playerTurnHandler} className="board-item" />
        <button onClick={playerTurnHandler} className="board-item" />
        <button onClick={playerTurnHandler} className="board-item" />
      </section>
      <section className="tictactoeTurn">
        {playerOneTurn ? <h1>IT'S "X" TURN</h1> : <h1>IT'S "O" TURN</h1>}
      </section>
    </article>
  );
};

export default TicTacToe;
