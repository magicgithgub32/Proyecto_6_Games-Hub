import "./Hangman.css";
import React, { useState, useEffect } from "react";
import { hangmanAlphabet } from "../../data/hangmanAlphabet";
import Hint from "../../components/Hangman/Hint/Hint";
import BackHome from "../../components/backHome/BackHome";
import PlayButton from "../../components/Hangman/playButton/PlayButton";
import WordContainer from "../../components/Hangman/wordContainer/WordContainer";
import LivesRow from "../../components/Hangman/livesRow/LivesRow";
import HangmanAlphabet from "../../components/Hangman/hangmanAlphabet/HangmanAlphabet";
import MissedLetters from "../../components/Hangman/missedLetters/MissedLetters";
import { checkGame } from "../../utils/hangman/checkgame";
import GameTitle from "../../components/gameTitle/GameTitle";

const Hangman = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [word, setWord] = useState("");
  const [guess, setGuess] = useState([]);
  const [repeatedLetters, setRepeatedLetters] = useState();
  const [missedLetters, setMissedLetters] = useState([]);
  const [lives, setLives] = useState();
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    console.log(word);
  }, [word]);

  useEffect(() => {
    if (word) {
      setLetters(new Array(word.length).fill(null));
    }
  }, [word]);

  useEffect(() => {
    checkGame(word, guess, repeatedLetters, lives);
  }, [word, guess, repeatedLetters, lives]);

  const checkLetter = (letterGuessed) => {
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

  return (
    <article className="hangmanWrapper">
      <BackHome />

      <section className="hangmanHeader">
        <GameTitle title="HANGMAN" />

        <PlayButton
          isStarted={isStarted}
          setWord={setWord}
          setIsStarted={setIsStarted}
          setGuess={setGuess}
          setRepeatedLetters={setRepeatedLetters}
          setMissedLetters={setMissedLetters}
          setLives={setLives}
        />
      </section>

      {word && isStarted && (
        <section className="hangmanBody">
          <Hint word={word} />

          <WordContainer letters={letters} />

          <LivesRow lives={lives} />

          {lives > 0 && (
            <HangmanAlphabet
              hangmanAlphabet={hangmanAlphabet}
              checkLetter={checkLetter}
            />
          )}

          <MissedLetters missedLetters={missedLetters} />
        </section>
      )}
    </article>
  );
};

export default Hangman;
