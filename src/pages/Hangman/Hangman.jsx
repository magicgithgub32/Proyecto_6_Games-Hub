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
  const [visible, setVisible] = useState(false);

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

  const checkLetter = (letterGuessed) => {
    let isLetterFound = false;
    let correctGuessCount = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letterGuessed && !guess.includes(letterGuessed)) {
        isLetterFound = true;
        setGuess([...guess, letterGuessed]);
      }
      if (guess.includes(word[i])) {
        correctGuessCount++;
      }
    }
    if (
      !isLetterFound &&
      !missedLetters.includes(letterGuessed) &&
      !guess.includes(letterGuessed)
    ) {
      setMissedLetters([...missedLetters, letterGuessed]);
    }
    if (correctGuessCount === word.length) {
      setVisible(true);
    }
  };

  useEffect(() => {
    console.log(guess);
  }, [guess]);

  useEffect(() => {
    console.log(missedLetters);
  }, [missedLetters]);

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
              <div
                className={visible ? "wordLetter" : "nonVisibleWordLetter"}
                key={i}
              >
                {guess.includes(letter) ? letter : " "}
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
