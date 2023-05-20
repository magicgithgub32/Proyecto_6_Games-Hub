import React, { useRef, useEffect } from "react";
import "./SudokuBoard.css";

const SudokuBoard = ({
  showedSolution,
  setParsedBoard,
  parsedBoard,
  solvedBoard,
}) => {
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current.forEach((input) => {
      console.log(input);
      if (input.value !== "") {
        input.disabled = true;
      }
    });
  }, []);
  return (
    <div className="sudokuBoard">
      {parsedBoard.map((cell, index) => (
        <input
          className={"sudokuCell"}
          key={index}
          maxLength={1}
          type="number"
          min={1}
          max={9}
          value={
            showedSolution
              ? solvedBoard[index] + 1
              : cell !== null
              ? cell + 1
              : ""
          }
          ref={(element) => {
            inputsRef.current[index] = element;
          }}
          onInput={(e) => {
            const inputValue = e.target.value;

            if (inputValue === "" || (inputValue >= 1 && inputValue <= 9)) {
              const newBoard = [...parsedBoard];
              newBoard[index] = inputValue ? parseInt(inputValue) - 1 : null;

              setParsedBoard(newBoard.map((cell) => parseInt(cell)));
            } else {
              e.target.value = "";
            }
          }}
        />
      ))}
    </div>
  );
};

export default SudokuBoard;
