import "./TicTacToe.css";
import React, { useState, useEffect } from "react";
import TictactoeBoardContainer from "../../components/TicTacToe/tictactoeBoardContainer/TicTacToeBoardContainer";
import BackHome from "../../components/backHome/BackHome";
import PlayButton from "../../components/TicTacToe/PlayButton";
import GameTitle from "../../components/gameTitle/GameTitle";
import { checkGame } from "../../utils/ticTacToe/checkGame";

const TicTacToe = () => {
  const [isStarted, setisStarted] = useState(false);
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    checkGame(board, gameOver, setGameOver);
  }, [board]);

  return (
    <article className="tictactoeWrapper">
      <BackHome />

      <section className="tictactoeHeader">
        <GameTitle title="TIC-TAC-TOE" />

        <PlayButton
          setisStarted={setisStarted}
          isStarted={isStarted}
          setBoard={setBoard}
          setGameOver={setGameOver}
        />
      </section>
      {isStarted && (
        <TictactoeBoardContainer
          board={board}
          playerOneTurn={playerOneTurn}
          setBoard={setBoard}
          setPlayerOneTurn={setPlayerOneTurn}
          gameOver={gameOver}
        />
      )}
    </article>
  );
};

export default TicTacToe;
