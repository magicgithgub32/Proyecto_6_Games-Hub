import React from "react";

const CheckMyBoard = ({ parsedBoard, solvedBoard }) => {
  const checkMyBoard = () => {
    if (parsedBoard.every((cell, index) => cell === solvedBoard[index])) {
      alert("🍾 YOU WIN, MASTER OF NUMBERS! 🍾");
    } else {
      alert("Your solution is incorrect.");
    }
  };

  return (
    <button onClick={checkMyBoard} className="checkSolButton">
      CHECK
    </button>
  );
};

export default CheckMyBoard;
