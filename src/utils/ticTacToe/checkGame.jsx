export const checkGame = (board, gameOver, setGameOver) => {
  if (gameOver) {
    return;
  }
  if (
    (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X") ||
    (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X") ||
    (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") ||
    (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") ||
    (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") ||
    (board[2][2] === "X" && board[2][1] === "X" && board[2][0] === "X") ||
    (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X") ||
    (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X")
  ) {
    setTimeout(() => {
      alert("🚀 PLAYER X WINS 🚀!!!");
      setGameOver(true);
    }, 200);
  } else if (
    (board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O") ||
    (board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O") ||
    (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") ||
    (board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O") ||
    (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O") ||
    (board[2][2] === "O" && board[2][1] === "O" && board[2][0] === "O") ||
    (board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O") ||
    (board[1][0] === "O" && board[1][1] === "O" && board[1][2] === "O")
  ) {
    setTimeout(() => {
      alert("🧨 PLAYER 0 WINS 🧨!!!");
      setGameOver(true);
    }, 200);
  } else if (board.every((row) => row.every((cell) => cell !== null))) {
    setTimeout(() => {
      alert("🔗🌀THAT'S A TIE🌀🔗");
    }, 200);
  }
};
