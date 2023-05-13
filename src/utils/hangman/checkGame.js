export const checkGame = (word, guess, repeatedLetters, lives) => {
  if (word && guess.length + repeatedLetters === word.length) {
    setTimeout(() => {
      alert("📚 YOU ARE THE WORDS MASTER 📚!!!");
    }, 200);
  } else if (word && lives <= 0) {
    setTimeout(() => {
      alert("👎 YOU LOSE 👎!!!");
    }, 200);
  }
};
