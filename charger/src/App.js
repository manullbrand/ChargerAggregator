import React from "react";
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from "./components/Home.js";
import MainScreen from "./components/MainScreen.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mainscreen" element={<MainScreen />} />
    </Routes>
  );
}

export default App;
