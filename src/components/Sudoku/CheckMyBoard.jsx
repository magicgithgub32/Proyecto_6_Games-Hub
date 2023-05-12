import React from "react";

const CheckMyBoard = ({ parsedBoard, solvedBoard, setWrongAnswer }) => {
  const checkMyBoard = () => {
    if (parsedBoard.every((cell, index) => cell === solvedBoard[index])) {
      alert("🍾 YOU WIN, MASTER OF NUMBERS! 🍾");
    } else {
      alert("Your solution is incorrect.");
      setWrongAnswer(true);
    }
  };

  return (
    <button onClick={checkMyBoard} className="checkSolButton">
      CHECK
    </button>
  );
};

export default CheckMyBoard;
