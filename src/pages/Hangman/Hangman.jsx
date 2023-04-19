import { Link } from "react-router-dom";
import "./Hangman.css";
import React from "react";

const Hangman = () => {
  return (
    <>
      <p>I'm the Hangman</p>
      <Link to={`/`}>
        <button>back home</button>
      </Link>
    </>
  );
};

export default Hangman;
