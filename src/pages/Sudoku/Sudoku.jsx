import "./Sudoku.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sudoku, { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";

const Sudoku = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [sudokuBoard, setSudokuBoard] = useState([]);
  const [solvedBoard, setSolvedBoard] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [parsedBoard, setParsedBoard] = useState([]);
  const [solutionSeen, setSolutionSeen] = useState(false);

  useEffect(() => {
    if (isStarted) {
      const newBoard = sudoku.makepuzzle();
      const solvedBoard = sudoku.solvepuzzle(newBoard);

      setSudokuBoard(newBoard);
      setSolvedBoard(solvedBoard);
    }
  }, [isStarted]);

  useEffect(() => {
    setParsedBoard(sudokuBoard.map((cell) => parseInt(cell)));
  }, [sudokuBoard]);

  useEffect(() => {
    const isBoardCompleted =
      !sudokuBoard.includes(null) && !sudokuBoard.includes(NaN);
    setIsFinished(isBoardCompleted);

    if (isFinished && parsedBoard.includes(0)) {
      alert("Please, remove any 0 you inserted.");
    }
  }, [parsedBoard]);

  const playButtonHandler = () => {
    setIsStarted(!isStarted);
    setSudokuBoard([]);
  };

  const seeSolution = () => {
    setSudokuBoard(solvedBoard);
    setSolutionSeen(true);
  };

  const checkMyBoard = () => {
    if (parsedBoard.every((cell, index) => cell === solvedBoard[index])) {
      alert("🍾 YOU WIN, MASTER OF NUMBERS! 🍾");
    } else {
      alert("Your solution is incorrect.");
    }
  };

  console.log(sudokuBoard);
  console.log(solvedBoard);
  console.log(parsedBoard);

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
          {isStarted ? "NEW GAME" : "PLAY"}
        </button>

        <section className="solutionsSection">
          <button
            onClick={seeSolution}
            className={isStarted ? "solButton" : "disabledButton"}
          >
            SEE SOLUTION
          </button>

          {!solutionSeen && isFinished && isStarted && (
            <button onClick={checkMyBoard} className="checkSolButton">
              CHECK
            </button>
          )}
        </section>
      </section>

      {isStarted && (
        <section className="sudokuBody">
          <div className="sudokuBoard">
            {sudokuBoard.map((cell, index) => (
              <input
                className="sudokuCell"
                key={index}
                maxLength={1}
                defaultValue={cell !== null ? cell + 1 : ""}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  if (
                    inputValue === "" ||
                    (inputValue >= 1 && inputValue <= 9)
                  ) {
                    const newBoard = [...sudokuBoard];
                    newBoard[index] = inputValue
                      ? parseInt(inputValue) - 1
                      : null;
                    setSudokuBoard(newBoard);
                  }
                }}
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
};

export default Sudoku;
