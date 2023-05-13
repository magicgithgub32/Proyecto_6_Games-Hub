import React, { useState } from "react";
import "./SudokuBoard.css";

const SudokuBoard = ({
  sudokuBoard,
  showedSolution,
  setSudokuBoard,
  setParsedBoard,
}) => {
  return (
    <div className="sudokuBoard">
      {sudokuBoard.map((cell, index) => (
        <input
          className="sudokuCell"
          key={index}
          maxLength={1}
          type="number"
          min={1}
          max={9}
          defaultValue={
            showedSolution
              ? sudokuBoard[index] + 1
              : cell !== null
              ? cell + 1
              : ""
          }
          onInput={(e) => {
            const inputValue = e.target.value;
            if (inputValue === "" || (inputValue >= 1 && inputValue <= 9)) {
              const newBoard = [...sudokuBoard];
              newBoard[index] = inputValue ? parseInt(inputValue) - 1 : null;
              setSudokuBoard(newBoard);
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
