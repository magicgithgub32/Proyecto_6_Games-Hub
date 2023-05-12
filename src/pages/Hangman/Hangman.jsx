import "./Hangman.css";
import React, { useState, useEffect } from "react";
import { hangmanAlphabet } from "../../data/hangmanAlphabet";
import Hint from "../../components/Hangman/Hint/Hint";
import BackHome from "../../components/BackHome";
import PlayButton from "../../components/Hangman/PlayButton";

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
    if (word && guess.length + repeatedLetters === word.length) {
      setTimeout(() => {
        alert("📚 YOU ARE THE WORDS MASTER 📚!!!");
      }, 200);
    } else if (word && lives <= 0) {
      setTimeout(() => {
        alert("👎 YOU LOSE 👎!!!");
      }, 200);
    }
  }, [guess, word, lives, repeatedLetters]);

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
        <h1 className="title">HANGMAN</h1>

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

          <div className="wordContainer">
            {letters.map((letter, i) => (
              <div className="wordLetter" key={i}>
                {letter ? letter : " "}
              </div>
            ))}
          </div>

          <div className="livesRow">
            {Array.from(Array(6)).map((_, i) => (
              <div key={i} className="leftLives">
                {i < lives ? <img src="../1up.png" alt="life" /> : null}
              </div>
            ))}
          </div>

          <section className="hangmanAlphabet">
            {hangmanAlphabet.map((letter) => (
              <button
                onClick={() => checkLetter(letter)}
                key={letter}
                className="letterButton"
              >
                {letter}
              </button>
            ))}
          </section>

          <section className="missedLetters">
            {missedLetters.map((missedletter, index) => (
              <p key={index}>{missedletter}</p>
            ))}
          </section>
        </section>
      )}
    </article>
  );
};

export default Hangman;
