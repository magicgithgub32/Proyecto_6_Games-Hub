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

    !isStarted &&
      setBoard([
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]);
  };

  // const useEffect =
  //   (() => {
  //     if (isStarted) {
  //       setPlayerOneTurn(!playerOneTurn);
  //     }

  //     // insertCellHandler();
  //   },
  //   [board, isStarted, playerOneTurn]);

  // const playerTurnHandler = () => {
  //   setPlayerOneTurn(!playerOneTurn);
  // };

  const insertCellHandler = (i, j) => {
    if (board[i][j] === null) {
      const newBoard = [...board];
      newBoard[i][j] = playerOneTurn ? "X" : "O";
      setBoard(newBoard);
      setPlayerOneTurn(!playerOneTurn);
    }
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
        <button onClick={() => insertCellHandler(0, 0)} className="board-item">
          {" "}
          {board[0][0] === "X" ? (
            <p>X</p>
          ) : board[0][0] === "O" ? (
            <p>O</p>
          ) : null}
        </button>
        <button onClick={() => insertCellHandler(0, 1)} className="board-item">
          {" "}
          {board[0][1] === "X" ? (
            <p>X</p>
          ) : board[0][1] === "O" ? (
            <p>O</p>
          ) : null}
        </button>
        <button onClick={() => insertCellHandler(0, 2)} className="board-item">
          {" "}
          {board[0][2] === "X" ? (
            <p>X</p>
          ) : board[0][2] === "O" ? (
            <p>O</p>
          ) : null}
        </button>
        <button onClick={() => insertCellHandler(1, 0)} className="board-item">
          {" "}
          {board[1][0] === "X" ? (
            <p>X</p>
          ) : board[1][0] === "O" ? (
            <p>O</p>
          ) : null}
        </button>
        <button onClick={() => insertCellHandler(1, 1)} className="board-item">
          {" "}
          {board[1][1] === "X" ? (
            <p>X</p>
          ) : board[1][1] === "O" ? (
            <p>O</p>
          ) : null}
        </button>
        <button onClick={() => insertCellHandler(1, 2)} className="board-item">
          {" "}
          {board[1][2] === "X" ? (
            <p>X</p>
          ) : board[1][2] === "O" ? (
            <p>O</p>
          ) : null}
        </button>
        <button onClick={() => insertCellHandler(2, 0)} className="board-item">
          {" "}
          {board[2][0] === "X" ? (
            <p>X</p>
          ) : board[2][0] === "O" ? (
            <p>O</p>
          ) : null}
        </button>
        <button onClick={() => insertCellHandler(2, 1)} className="board-item">
          {" "}
          {board[2][1] === "X" ? (
            <p>X</p>
          ) : board[2][1] === "O" ? (
            <p>O</p>
          ) : null}
        </button>
        <button onClick={() => insertCellHandler(2, 2)} className="board-item">
          {" "}
          {board[2][2] === "X" ? (
            <p>X</p>
          ) : board[2][2] === "O" ? (
            <p>O</p>
          ) : null}
        </button>
      </section>
      <section className="tictactoeTurn">
        {playerOneTurn ? <h1>IT'S "X" TURN</h1> : <h1>IT'S "O" TURN</h1>}
      </section>
    </article>
  );
};

export default TicTacToe;
