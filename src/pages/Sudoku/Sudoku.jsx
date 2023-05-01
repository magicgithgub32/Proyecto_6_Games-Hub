import "./Sudoku.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sudoku = () => {
  const emptyGrid = [];
  for (let i = 0; i < 9; i++) {
    emptyGrid.push(new Array(9).fill(null));
  }

  const [isStarted, setisStarted] = useState(false);
  const [grid, setGrid] = useState(emptyGrid);

  const fillBoard = () => {
    const newGrid = grid.map((row) =>
      row.map((cell) => Math.floor(Math.random() * 9) + 1)
    );
    setGrid(newGrid);
  };

  const playButtonHandler = () => {
    if (!isStarted) {
      fillBoard();
    }
    setisStarted(!isStarted);
  };

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
          {isStarted ? "STOP" : "PLAY"}
        </button>
      </section>

      {isStarted && (
        <section className="sudokuBody">
          <div className="sudokuBoard">
            {(() => {
              const cells = [];
              for (let i = 0; i < 81; i++) {
                const row = Math.floor(i / 9);
                const col = i % 9;
                cells.push(
                  <input
                    key={i}
                    className="sudokuCell"
                    value={grid[row][col] || ""}
                    readOnly
                  />
                );
              }
              return cells;
            })()}
          </div>
        </section>
      )}
    </article>
  );
};

export default Sudoku;
