import { makepuzzle } from "sudoku";
import React from "react";

const PlayButton = ({
  setIsStarted,
  isStarted,
  setShowedSolution,
  setIsFinished,
  setParsedBoard,
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
