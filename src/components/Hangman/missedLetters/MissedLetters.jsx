import React from "react";
import "./MissedLetters.css";

const MissedLetters = ({ missedLetters }) => {
  return (
    <section className="missedLetters">
      {missedLetters.map((missedletter, index) => (
        <p key={index}>{missedletter}</p>
      ))}
    </section>
  );
};

export default MissedLetters;
