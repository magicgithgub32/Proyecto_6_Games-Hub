import React, { useState } from "react";

const SeeSolution = ({
  setShowedSolution,
  isStarted,
  solvedBoard,
  setParsedBoard,
}) => {
  const seeSolution = () => {
    setShowedSolution(true);
    setParsedBoard(solvedBoard);
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
