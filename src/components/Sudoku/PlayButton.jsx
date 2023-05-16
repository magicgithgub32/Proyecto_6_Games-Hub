import { makepuzzle } from "sudoku";
import React, { useEffect } from "react";

const PlayButton = ({
  setIsStarted,
  isStarted,
  setSudokuBoard,
  setShowedSolution,
  setIsFinished,
  setParsedBoard,
  parsedBoard,
}) => {
  const playButtonHandler = () => {
    setIsStarted(!isStarted);
    setParsedBoard(makepuzzle());
    setIsFinished(false);
    setShowedSolution(false);

    if (isStarted) {
      setSudokuBoard(...parsedBoard);
    }
  };

  return (
    <button className="playButton" onClick={playButtonHandler}>
      {isStarted ? "NEW GAME" : "PLAY"}
    </button>
  );
};

export default PlayButton;
