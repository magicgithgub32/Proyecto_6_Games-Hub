import React from "react";
import "./LivesRow.css";

const LivesRow = ({ lives }) => {
  return (
    <div className="livesRow">
      {Array.from(Array(6)).map((_, i) => (
        <div key={i} className="leftLives">
          {i < lives ? <img src="../1up.png" alt="life" /> : null}
        </div>
      ))}
    </div>
  );
};

export default LivesRow;
