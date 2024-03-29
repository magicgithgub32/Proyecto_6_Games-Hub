import React from "react";
import { Link } from "react-router-dom";
import "./BackHome.css";

const BackHome = () => {
  return (
    <div className="homeButtonContainer">
      <Link to={`/`}>
        <button className="homeButton">Home</button>
      </Link>
    </div>
  );
};

export default BackHome;
