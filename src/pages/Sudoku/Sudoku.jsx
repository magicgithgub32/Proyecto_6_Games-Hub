import "./Sudoku.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sudoku, { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";

const Sudoku = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [sudokuBoard, setSudokuBoard] = useState(Array(81).fill(null));
  const [parsedBoard, setParsedBoard] = useState(Array(81).fill(null));
  const [solvedBoard, setSolvedBoard] = useState(Array(81).fill(null));
  const [isFinished, setIsFinished] = useState(false);
  const [showedSolution, setShowedSolution] = useState(false);

  useEffect(() => {
    if (isStarted) {
      // const newBoard = sudoku.makepuzzle();

      // setSudokuBoard(newBoard);

      setSolvedBoard(solvepuzzle(sudokuBoard));
    }
  }, [isStarted]);

  // useEffect(() => {
  //   setParsedBoard(sudokuBoard.map((cell) => parseInt(cell)));
  // }, [sudokuBoard]);

  useEffect(() => {
    const isBoardCompleted = !parsedBoard.includes(NaN);
    setIsFinished(isBoardCompleted);
  }, [parsedBoard, sudokuBoard]);

  const playButtonHandler = () => {
    setIsStarted(!isStarted);
    setSudokuBoard(makepuzzle);
    setIsFinished(false);
    setShowedSolution(false);
  };

  useEffect(() => {
    setParsedBoard(sudokuBoard);
  }, [sudokuBoard]);

  const seeSolution = () => {
    setShowedSolution(true);
    setSudokuBoard(solvepuzzle);
  };

  const checkMyBoard = () => {
    if (parsedBoard.every((cell, index) => cell === sudokuBoard[index])) {
      alert("🍾 YOU WIN, MASTER OF NUMBERS! 🍾");
    } else {
      alert("Your solution is incorrect.");
    }
  };

  console.log("SudokuBoard:", sudokuBoard);
  console.log("ParsedBoard:", parsedBoard);
  console.log("SolvedBoard:", solvedBoard);

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
                    ? sudokuBoard[index] + 1
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
