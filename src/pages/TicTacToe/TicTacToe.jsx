import "./TicTacToe.css";
import React, { useState, useEffect } from "react";
import TictactoeBoardContainer from "../../components/TicTacToe/TicTacToeBoardContainer";
import BackHome from "../../components/backHome/BackHome";
import PlayButton from "../../components/TicTacToe/PlayButton";
import { checkGame } from "../../utils/ticTacToe/checkGame";

const TicTacToe = () => {
  const [isStarted, setisStarted] = useState(false);
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  useEffect(() => {
    checkGame(board);
  }, [board]);

  return (
    <article className="tictactoeWrapper">
      <BackHome />

      <section className="tictactoeHeader">
        <h1 className="title">TIC-TAC-TOE</h1>

        <PlayButton
          setisStarted={setisStarted}
          isStarted={isStarted}
          setBoard={setBoard}
        />
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
