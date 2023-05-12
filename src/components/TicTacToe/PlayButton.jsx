import React, { useState } from "react";

const PlayButton = ({ setisStarted, isStarted, setBoard }) => {
  const playButtonHandler = () => {
    setisStarted(!isStarted);

    isStarted &&
      setBoard([
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]);
  };
  return (
    <button className="playButton" onClick={playButtonHandler}>
      {isStarted ? "STOP" : "PLAY"}
    </button>
  );
};

export default PlayButton;
