import "./TicTacToe.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TictactoeBoardContainer from "../../components/TicTacToe/TicTacToeBoardContainer";
import BackHome from "../../components/BackHome";

const TicTacToe = () => {
  const [isStarted, setisStarted] = useState(false);
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  useEffect(() => {
    if (
      (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X") ||
      (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X") ||
      (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") ||
      (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") ||
      (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") ||
      (board[2][2] === "X" && board[2][1] === "X" && board[2][0] === "X") ||
      (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X") ||
      (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X")
    ) {
      setTimeout(() => {
        alert("🚀 PLAYER X WINS 🚀!!!");
      }, 200);
    } else if (
      (board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O") ||
      (board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O") ||
      (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") ||
      (board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O") ||
      (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O") ||
      (board[2][2] === "O" && board[2][1] === "O" && board[2][0] === "O") ||
      (board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O") ||
      (board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O")
    ) {
      setTimeout(() => {
        alert("🧨 PLAYER 0 WINS 🧨!!!");
      }, 200);
    } else if (board.every((row) => row.every((cell) => cell !== null))) {
      setTimeout(() => {
        alert("🔗🌀THAT'S A TIE🌀🔗");
      }, 200);
    }
  }, [board]);

  const playButtonHandler = () => {
    setisStarted(!isStarted);

    isStarted &&
      setBoard([
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]);
  };

  return (
    <article className="tictactoeWrapper">
      <BackHome />

      <section className="tictactoeHeader">
        <h1 className="title">TIC-TAC-TOE</h1>

        <button className="playButton" onClick={playButtonHandler}>
          {isStarted ? "STOP" : "PLAY"}
        </button>
      </section>
      {isStarted && (
        <TictactoeBoardContainer
          board={board}
          playerOneTurn={playerOneTurn}
          setBoard={setBoard}
          setPlayerOneTurn={setPlayerOneTurn}
        />
      )}
    </article>
  );
};

export default TicTacToe;
