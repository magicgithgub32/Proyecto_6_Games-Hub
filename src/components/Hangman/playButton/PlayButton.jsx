import React from "react";
import { hangmanWords } from "../../../data/hangmanWords";
import "./PlayButton.css";

const PlayButton = ({
  isStarted,
  setWord,
  setIsStarted,
  setGuess,
  setRepeatedLetters,
  setMissedLetters,
  setLives,
}) => {
  const playButtonHandler = () => {
    if (!isStarted) {
      const newWord =
        hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
      setWord(newWord);
    }
    setIsStarted(!isStarted);
    setGuess([]);
    setRepeatedLetters(0);
    setMissedLetters([]);
    setLives(6);
  };

  return (
    <button className="playButton" onClick={playButtonHandler}>
      {isStarted ? "STOP" : "PLAY"}
    </button>
  );
};

export default PlayButton;
