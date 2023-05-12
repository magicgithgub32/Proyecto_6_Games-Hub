import React, { useState } from "react";
import { solvepuzzle } from "sudoku";

const SeeSolution = ({
  setShowedSolution,
  setSudokuBoard,
  isStarted,
  solvedBoard,
}) => {
  const seeSolution = () => {
    setShowedSolution(true);
    setSudokuBoard(solvedBoard);
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
