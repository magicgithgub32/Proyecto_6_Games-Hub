import "./Sudoku.css";
import React, { useEffect, useState } from "react";
import sudoku, { solvepuzzle } from "sudoku";
import SeeSolution from "../../components/Sudoku/SeeSolution";
import PlayButton from "../../components/Sudoku/PlayButton";
import CheckMyBoard from "../../components/Sudoku/CheckMyBoard";
import BackHome from "../../components/backHome/BackHome";
import SudokuBoard from "../../components/Sudoku/sudokuBoard/SudokuBoard";
import GameTitle from "../../components/gameTitle/GameTitle";

const Sudoku = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [sudokuBoard, setSudokuBoard] = useState(Array(81).fill(null));
  const [parsedBoard, setParsedBoard] = useState(Array(81).fill(null));
  const [solvedBoard, setSolvedBoard] = useState(Array(81).fill(null));
  const [isFinished, setIsFinished] = useState(false);
  const [showedSolution, setShowedSolution] = useState(false);

  useEffect(() => {
    if (isStarted) {
      setSolvedBoard(solvepuzzle(parsedBoard));
    }
  }, [isStarted]);

  useEffect(() => {
    const isBoardCompleted =
      !parsedBoard.includes(NaN) && !parsedBoard.includes(null);
    setIsFinished(isBoardCompleted);
  }, [parsedBoard, sudokuBoard]);

  // useEffect(() => {
  //   setParsedBoard(sudokuBoard);
  // }, [sudokuBoard]);

  console.log("SudokuBoard:", sudokuBoard);
  console.log("ParsedBoard:", parsedBoard);
  console.log("SolvedBoard:", solvedBoard);

  return (
    <article className="sudokuWrapper">
      <BackHome />

      <section className="sudokuHeader">
        <GameTitle title="SUDOKU" />

        <PlayButton
          setIsStarted={setIsStarted}
          isStarted={isStarted}
          setSudokuBoard={setSudokuBoard}
          setIsFinished={setIsFinished}
          setShowedSolution={setShowedSolution}
          setParsedBoard={setParsedBoard}
          parsedBoard={parsedBoard}
        />

        <section className="solutionsSection">
          <SeeSolution
            setShowedSolution={setShowedSolution}
            setSudokuBoard={setSudokuBoard}
            setParsedBoard={setParsedBoard}
            isStarted={isStarted}
            solvedBoard={solvedBoard}
          />

          {!showedSolution && isFinished && isStarted && (
            <CheckMyBoard parsedBoard={parsedBoard} solvedBoard={solvedBoard} />
          )}
        </section>
      </section>

      {isStarted && (
        <section className="sudokuBody">
          <SudokuBoard
            sudokuBoard={sudokuBoard}
            setSudokuBoard={setSudokuBoard}
            showedSolution={showedSolution}
            setParsedBoard={setParsedBoard}
            parsedBoard={parsedBoard}
            solvedBoard={solvedBoard}
          />
        </section>
      )}
    </article>
  );
};

export default Sudoku;
