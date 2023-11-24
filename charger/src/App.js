import React from "react";
import './App.css';
import {Routes,Route} from "react-router-dom";
import MainScreen from "./components/MainScreen.js";
import MainScreen from "./components/MainScreen.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen/>} />
    </Routes>
  );
}

export default App;
