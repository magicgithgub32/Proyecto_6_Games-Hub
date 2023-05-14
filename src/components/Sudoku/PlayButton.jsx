import { makepuzzle } from "sudoku";
import React from "react";

const PlayButton = ({
  setIsStarted,
  isStarted,
  setSudokuBoard,
  setShowedSolution,
  setIsFinished,
  inputRefs,
}) => {
  const playButtonHandler = () => {
    setIsStarted(!isStarted);
    setSudokuBoard(makepuzzle());
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
