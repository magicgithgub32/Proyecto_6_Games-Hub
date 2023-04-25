import { Link } from "react-router-dom";
import "./Hangman.css";
import React, { useState, useEffect } from "react";
import { hangmanAlphabet } from "../../data/hangmanAlphabet";
import { hangmanWords } from "../../data/hangmanWords";

const Hangman = () => {
  const [isStarted, setisStarted] = useState(false);
  const [word, setWord] = useState("");

  const playButtonHandler = () => {
    setisStarted(!isStarted);
    isStarted &&
      setWord(hangmanWords[Math.floor(Math.random() * hangmanWords.length)]);
    console.log(isStarted);
    console.log(word);
  };

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

      <section className="hangmanBody">
        <section className="hangmanRow"></section>
        <section className="hangmanAlphabet">
          {hangmanAlphabet.map((letter) => (
            <button key={letter} className="letterButton">
              {letter}
            </button>
          ))}
        </section>
      </section>
    </article>
  );
};

export default Hangman;
