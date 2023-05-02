import "./Sudoku.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sudoku, { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";

const Sudoku = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [sudokuBoard, setSudokuBoard] = useState([]);
  const [solvedBoard, setSolvedBoard] = useState([]);

  useEffect(() => {
    if (isStarted) {
      const newBoard = sudoku.makepuzzle();
      const solvedBoard = sudoku.solvepuzzle(newBoard);

      setSudokuBoard(newBoard);
      setSolvedBoard(solvedBoard);
    }
  }, [isStarted]);

  const playButtonHandler = () => {
    setIsStarted(!isStarted);
  };

  const seeSolution = () => {
    setSudokuBoard(solvedBoard);
  };

  console.log(sudokuBoard);

  return (
    <article className="sudokuWrapper">
      <div className="homeButtonContainer">
        <Link to={`/`}>
          <button className="homeButton">Home</button>
        </Link>
      </div>
      <section className="sudokuHeader">
        <h1 className="title">SUDOKU</h1>

        <button className="playButton" onClick={playButtonHandler}>
          {isStarted ? "NEW" : "PLAY"}
        </button>

        <button className="solButton" onClick={seeSolution}>
          {isStarted ? "SEE SOLUTION" : ""}
        </button>
      </section>

      {isStarted && (
        <section className="sudokuBody">
          <div className="sudokuBoard">
            {sudokuBoard.map((cell, index) => (
              <input
                className="sudokuCell"
                key={index}
                defaultValue={cell !== null ? cell + 1 : ""}
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
};

export default Sudoku;
