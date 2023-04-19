import { Route, Routes } from "react-router-dom";
import "./style.css";
import React from "react";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/tictactoe" element={<TicTacToe />}></Route> */}
        {/* <Route path="/hangman" element={<Hangman />}></Route> */}
        {/* <Route path="/sudoku" element={<Sudoku />}></Route> */}
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
