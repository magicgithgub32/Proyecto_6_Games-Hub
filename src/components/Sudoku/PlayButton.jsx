import { makepuzzle } from "sudoku";
import React from "react";

const PlayButton = ({
  setIsStarted,
  isStarted,
  setShowedSolution,
  setIsFinished,
  setParsedBoard,
  inputRefs,
}) => {
  const playButtonHandler = () => {
    setIsStarted(!isStarted);
    setParsedBoard(makepuzzle);
    setIsFinished(false);
    setShowedSolution(false);
    inputRefs.current.map((inputRef) => (inputRef.className = "sudokuCell"));
  };

  return (
    <button className="playButton" onClick={playButtonHandler}>
      {isStarted ? "NEW GAME" : "PLAY"}
    </button>
  );
};

export default PlayButton;
