import React from "react";
import "./WordContainer.css";

const WordContainer = ({ letters }) => {
  return (
    <div className="wordContainer">
      {letters.map((letter, i) => (
        <div className="wordLetter" key={i}>
          {letter ? letter : " "}
        </div>
      ))}
    </div>
  );
};

export default WordContainer;
