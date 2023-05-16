import { makepuzzle, solvepuzzle } from "sudoku";
import React, { useEffect } from "react";

const PlayButton = ({
  setIsStarted,
  isStarted,
  setSudokuBoard,
  setShowedSolution,
  setIsFinished,
  setParsedBoard,
  parsedBoard,
  setSolvedBoard,
  solvedBoard,
}) => {
  const playButtonHandler = () => {
    setIsStarted(!isStarted);
    setParsedBoard(makepuzzle);
    setIsFinished(false);
    setShowedSolution(false);
  };

  return (
    <button className="playButton" onClick={playButtonHandler}>
      {isStarted ? "NEW GAME" : "PLAY"}
    </button>
  );
};

export default PlayButton;
