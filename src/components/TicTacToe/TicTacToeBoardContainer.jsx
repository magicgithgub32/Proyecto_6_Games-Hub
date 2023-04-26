import React from "react";

const TictactoeBoardContainer = ({
  board,
  playerOneTurn,
  setBoard,
  setPlayerOneTurn,
}) => {
  const insertCellHandler = (i, j) => {
    if (board[i][j] === null) {
      const newBoard = [...board];
      newBoard[i][j] = playerOneTurn ? "X" : "O";
      setBoard(newBoard);
      setPlayerOneTurn(!playerOneTurn);
    }
  };
  return (
    <section className="tictactoeBoardContainer">
      <section className="tictactoeBoard">
        <button onClick={() => insertCellHandler(0, 0)} className="board-item">
          {" "}
          {board[0][0] === "X" ? (
            <p>X</p>
          ) : board[0][0] === "O" ? (
            <p>O</p>
          ) : null}
        </button>
        <button onClick={() => insertCellHandler(0, 1)} className="board-item">
          {" "}
          {board[0][1] === "X" ? (
            <p>X</p>
          ) : board[0][1] === "O" ? (
            <p>O</p>
          ) : null}
        </button>
        <button onClick={() => insertCellHandler(0, 2)} className="board-item">
          {" "}
          {board[0][2] === "X" ? (
            <p>X</p>
          ) : board[0][2] === "O" ? (
            <p>O</p>
          ) : null}
        </button>
        <button onClick={() => insertCellHandler(1, 0)} className="board-item">
          {" "}
          {board[1][0] === "X" ? (
            <p>X</p>
          ) : board[1][0] === "O" ? (
            <p>O</p>
          ) : null}
        </button>
        <button onClick={() => insertCellHandler(1, 1)} className="board-item">
          {" "}
          {board[1][1] === "X" ? (
            <p>X</p>
          ) : board[1][1] === "O" ? (
            <p>O</p>
          ) : null}
        </button>
        <button onClick={() => insertCellHandler(1, 2)} className="board-item">
          {" "}
          {board[1][2] === "X" ? (
            <p>X</p>
          ) : board[1][2] === "O" ? (
            <p>O</p>
          ) : null}
        </button>
        <button onClick={() => insertCellHandler(2, 0)} className="board-item">
          {" "}
          {board[2][0] === "X" ? (
            <p>X</p>
          ) : board[2][0] === "O" ? (
            <p>O</p>
          ) : null}
        </button>
        <button onClick={() => insertCellHandler(2, 1)} className="board-item">
          {" "}
          {board[2][1] === "X" ? (
            <p>X</p>
          ) : board[2][1] === "O" ? (
            <p>O</p>
          ) : null}
        </button>
        <button onClick={() => insertCellHandler(2, 2)} className="board-item">
          {" "}
          {board[2][2] === "X" ? (
            <p>X</p>
          ) : board[2][2] === "O" ? (
            <p>O</p>
          ) : null}
        </button>
      </section>
      <section className="tictactoeTurn">
        {playerOneTurn ? <h1>IT'S "X" TURN</h1> : <h1>IT'S "O" TURN</h1>}
      </section>
    </section>
  );
};

export default TictactoeBoardContainer;
