import React from "react";
import { hangmanWords } from "../../../data/hangmanWords";

const playButtonHandler = ({
  isStarted,
  setWord,
  setisStarted,
  setGuess,
  setRepeatedLetters,
  setMissedLetters,
  setLives,
}) => {
  if (!isStarted) {
    const newWord =
      hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
    setWord(newWord);
  }
  setisStarted(!isStarted);
  setGuess([]);
  setRepeatedLetters(0);
  setMissedLetters([]);
  setLives(6);
};

export default playButtonHandler;
