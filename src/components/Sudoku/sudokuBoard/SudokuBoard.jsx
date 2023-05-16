import React, { useState, useRef } from "react";
import "./SudokuBoard.css";
import { solvepuzzle } from "sudoku";

const SudokuBoard = ({
  sudokuBoard,
  showedSolution,
  setSudokuBoard,
  setParsedBoard,
  parsedBoard,
  solvedBoard,
}) => {
  return (
    <div className="sudokuBoard">
      {parsedBoard.map((cell, index) => (
        <input
          className="sudokuCell"
          key={index}
          maxLength={1}
          type="number"
          min={1}
          max={9}
          defaultValue={
            showedSolution
              ? solvedBoard[index] + 1
              : cell !== null
              ? cell + 1
              : ""
          }
          // disabled={sudokuBoard[index] + 1}
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
