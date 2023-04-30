import React from "react";

export const checkLetter = ({
  letterGuessed,
  word,
  guess,
  setGuess,
  repeatedLetters,
  setRepeatedLetters,
  missedLetters,
  setMissedLetters,
  lives,
  setLives,
  letters,
  setLetters,
}) => {
  let isLetterFound = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letterGuessed && !guess.includes(letterGuessed)) {
      isLetterFound = true;
      setGuess([...guess, letterGuessed]);
    }
  }
  if (
    isLetterFound &&
    word.includes(letterGuessed) &&
    guess.includes(letterGuessed)
  ) {
    setRepeatedLetters(repeatedLetters + 1);
  }

  if (
    !isLetterFound &&
    !missedLetters.includes(letterGuessed) &&
    !guess.includes(letterGuessed)
  ) {
    setMissedLetters([...missedLetters, letterGuessed]);
    setLives(lives - 1);
  }
  setLetters(
    letters.map((letter, i) => {
      if (word[i] === letterGuessed && !guess.includes(letterGuessed)) {
        return letterGuessed;
      } else {
        return letter;
      }
    })
  );
};
