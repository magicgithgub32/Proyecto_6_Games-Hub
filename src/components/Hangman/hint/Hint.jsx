import "./Hint.css";
import React from "react";

const Hint = ({ word }) => {
  const getHint = () => {
    switch (word) {
      case "PARASIT":
        return <p>Freeloader of sorts</p>;
      case "SMARTPHONE":
        return <p>Mini-computer</p>;
      case "WATERMELON":
        return <p>Fruit</p>;
      case "PHANTOM":
        return <p>Apparition</p>;
      case "FESTIVAL":
        return <p>Celebration</p>;
      case "PERFORMANCE":
        return <p>Display of talent</p>;
      case "TENDENCY":
        return <p>Inclination</p>;
      case "MOVEMENT":
        return <p>Group with a cause</p>;
      case "POLITICAL":
        return <p>Related to government</p>;
      case "TYPHOON":
        return <p>Massive storm</p>;
      case "STELLAR":
        return <p>Out of this world</p>;
      case "HARMONY":
        return <p>Balance</p>;
      case "SAPPHIRE":
        return <p>Gem</p>;
      case "GESTURE":
        return <p>Movement with meaning</p>;
      case "VIBRANT":
        return <p>Full of life</p>;
      case "HALO":
        return <p>Glowing circle</p>;
      default:
        return null;
    }
  };
  return <div className="hint">{getHint()}</div>;
};

export default Hint;
