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
  const [showedSolution, setShowedSolution] = useState(false);

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
    const isBoardCompleted = !parsedBoard.includes(NaN);
    setIsFinished(isBoardCompleted);
  }, [parsedBoard, sudokuBoard]);

  const playButtonHandler = () => {
    setIsStarted(!isStarted);
    setSudokuBoard([]);
    setIsFinished(false);
    setShowedSolution(false);
  };

  const seeSolution = () => {
    setShowedSolution(true);

    setSudokuBoard(solvedBoard);
  };

  const checkMyBoard = () => {
    const parsedBoardMinusOne = parsedBoard.map((cell) => cell - 1);
    const solvedBoardMinusOne = solvedBoard.map((cell) => parseInt(cell) - 1);
    if (
      parsedBoardMinusOne.every(
        (cell, index) => cell === solvedBoardMinusOne[index]
      )
    ) {
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

          {!showedSolution && isFinished && isStarted && (
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
                type="number"
                min={1}
                max={9}
                defaultValue={
                  showedSolution
                    ? solvedBoard[index]
                    : cell !== null
                    ? cell + 1
                    : ""
                }
                onInput={(e) => {
                  const inputValue = e.target.value;
                  if (
                    inputValue === "" ||
                    (inputValue >= 1 && inputValue <= 9)
                  ) {
                    const newBoard = [...sudokuBoard];
                    newBoard[index] = inputValue ? parseInt(inputValue) : null;
                    setSudokuBoard(newBoard);
                    setParsedBoard(newBoard.map((cell) => parseInt(cell)));
                  } else {
                    e.target.value = "";
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
