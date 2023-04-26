import { Link } from "react-router-dom";
import "./Hangman.css";
import React, { useState, useEffect } from "react";
import { hangmanAlphabet } from "../../data/hangmanAlphabet";
import { hangmanWords } from "../../data/hangmanWords";

const Hangman = () => {
  const [isStarted, setisStarted] = useState(false);
  const [word, setWord] = useState("");
  const [guess, setGuess] = useState("");

  useEffect(() => {
    console.log(word);
  }, [word]);

  const playButtonHandler = () => {
    if (!isStarted) {
      const newWord =
        hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
      setWord(newWord);
    }
    setisStarted(!isStarted);

    console.log(isStarted);
  };

  // const checkLetter = (word, letterGuessed) => {
  //   word.includes(letterGuessed) ?
  // }

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
            {word.split("").map((letter, i) => (
              <div key={i} className="wordLetter">
                ___
              </div>
            ))}
          </div>

          <div className="livesRow">
            {word.split("").map((letter, j) => (
              <div key={j} className="leftLives">
                <img src="../1up.png" />
              </div>
            ))}
          </div>

          <section className="hangmanAlphabet">
            {hangmanAlphabet.map((letter) => (
              <button key={letter} className="letterButton">
                {letter}
              </button>
            ))}
          </section>
        </section>
      )}
    </article>
  );
};

export default Hangman;
