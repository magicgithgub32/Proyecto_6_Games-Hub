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
  // const [sudokuBoard, setSudokuBoard] = useState(Array(81).fill(null));
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
    setIsFinished(!parsedBoard.includes(NaN) && !parsedBoard.includes(null));
  }, [parsedBoard]);

  // useEffect(() => {
  //   setSudokuBoard(parsedBoard);
  // }, [parsedBoard]);

  // console.log("SudokuBoard:", sudokuBoard);
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
          setIsFinished={setIsFinished}
          setShowedSolution={setShowedSolution}
          setParsedBoard={setParsedBoard}
        />

        <section className="solutionsSection">
          <SeeSolution
            setShowedSolution={setShowedSolution}
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
            showedSolution={showedSolution}
            setParsedBoard={setParsedBoard}
            parsedBoard={parsedBoard}
            solvedBoard={solvedBoard}
            // sudokuBoard={sudokuBoard}
          />
        </section>
      )}
    </article>
  );
};

export default Sudoku;
