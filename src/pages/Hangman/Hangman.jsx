import { Link } from "react-router-dom";
import "./Hangman.css";
import React, { useState, useEffect } from "react";
import { hangmanAlphabet } from "../../data/hangmanAlphabet";
import { hangmanWords } from "../../data/hangmanWords";

const Hangman = () => {
  const [isStarted, setisStarted] = useState(false);
  const [word, setWord] = useState("");
  const [guess, setGuess] = useState([]);
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

  const playButtonHandler = () => {
    if (!isStarted) {
      const newWord =
        hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
      setWord(newWord);
    }
    setisStarted(!isStarted);
    setGuess([]);
    setMissedLetters([]);
    setLives(6);
  };

  const checkLetter = (letterGuessed) => {
    let isLetterFound = false;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letterGuessed && !guess.includes(letterGuessed)) {
        isLetterFound = true;
        setGuess([...guess, letterGuessed]);
      }
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

  useEffect(() => {
    console.log(guess);
  }, [guess]);

  useEffect(() => {
    console.log(missedLetters);
  }, [missedLetters]);

  useEffect(() => {
    console.log(lives);
  }, [lives]);

  return (
    <article className="hangmanWrapper">
      <div className="homeButtonContainer">
        <Link to={`/`}>
          <button className="homeButton">Home</button>
        </Link>
      </div>

      <section className="hangmanHeader">
        <h1 className="title">HANGMAN</h1>

        <button className="playButton" onClick={playButtonHandler}>
          {isStarted ? "STOP" : "PLAY"}
        </button>
      </section>

      {word && isStarted && (
        <section className="hangmanBody">
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
