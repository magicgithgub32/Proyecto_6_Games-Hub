import React, { useState } from "react";
import { makepuzzle, solvepuzzle } from "sudoku";
solvepuzzle;

const SeeSolution = ({
  setShowedSolution,
  setSudokuBoard,
  isStarted,
  solvedBoard,
  setParsedBoard,
}) => {
  const seeSolution = () => {
    setShowedSolution(true);
    setParsedBoard(solvedBoard);

    // setSudokuBoard(solvedBoard);
  };

  return (
    <button
      onClick={seeSolution}
      className={isStarted ? "solButton" : "disabledButton"}
    >
      SEE SOLUTION
    </button>
  );
};

export default SeeSolution;
