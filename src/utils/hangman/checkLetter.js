export const checkLetter = (
  word,
  guess,
  repeatedLetters,
  missedLetters,
  setMissedLetters,
  setLives,
  setLetters,
  letters,
  setRepeatedLetters,
  lives,
  letterGuessed
) => {
  let isLetterFound = false;
  let correctGuesses = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === letterGuessed) {
      isLetterFound = true;
      if (!guess.includes(letterGuessed)) {
        correctGuesses++;
      }
    }
  }

  if (isLetterFound && !guess.includes(letterGuessed)) {
    setGuess([...guess, letterGuessed]);
    setRepeatedLetters(repeatedLetters + correctGuesses - 1);
  }

  if (!isLetterFound && !missedLetters.includes(letterGuessed)) {
    setMissedLetters([...missedLetters, letterGuessed]);
    setLives(lives - 1);
  }

  if (!isLetterFound && missedLetters.includes(letterGuessed)) {
    alert("You already tried with " + letterGuessed);
  }

  if (isLetterFound && guess.includes(letterGuessed)) {
    alert("You already tried successfully with " + letterGuessed);
  }

  setLetters(
    letters.map((letter, i) => {
      if (word[i] === letterGuessed) {
        return letterGuessed;
      } else {
        return letter;
      }
    })
  );
};
