import React from "react";
import "./HangmanAlphabet.css";

const HangmanAlphabet = ({ hangmanAlphabet, checkLetter }) => {
  return (
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
  );
};

export default HangmanAlphabet;
