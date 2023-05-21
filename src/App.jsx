import { Route, Routes } from "react-router-dom";
import "./style.css";
import React from "react";
import Home from "./pages/Home/Home";
import TicTacToe from "./pages/TicTacToe/TicTacToe";
import Hangman from "./pages/Hangman/Hangman";
import Sudoku from "./pages/Sudoku/Sudoku";
import Login from "./pages/Login/Login";
import { UserContextProvider } from "./context/userContext";
import AuthRoute from "./components/authRoute/AuthRoute";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/tictactoe"
            element={
              <AuthRoute>
                <TicTacToe />
              </AuthRoute>
            }
          ></Route>
          <Route
            path="/hangman"
            element={
              <AuthRoute>
                <Hangman />
              </AuthRoute>
            }
          ></Route>
          <Route
            path="/sudoku"
            element={
              <AuthRoute>
                <Sudoku />
              </AuthRoute>
            }
          ></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
