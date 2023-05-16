import React, { useState } from "react";
import { makepuzzle, solvepuzzle } from "sudoku";

const SeeSolution = ({
  setShowedSolution,
  setSudokuBoard,
  isStarted,
  solvedBoard,
  setParsedBoard,
  parsedBoard,
  setSolvedBoard,
}) => {
  const seeSolution = () => {
    setShowedSolution(true);
    // setSolvedBoard(solvepuzzle(parsedBoard));
    setParsedBoard(solvedBoard);

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
