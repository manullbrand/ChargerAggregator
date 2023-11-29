import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import BookingScreen from "./Pages/BookingScreen.jsx";
import BookingScreenAlt from "./Pages/BookingScreenAlt.jsx";
import RideScreen from "./Pages/RideScreen.jsx"
import ChargingScreen from "./Pages/ChargingScreen.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<BookingScreen />} />
           <Route path="/booking-alt" element={<BookingScreenAlt />} />
      <Route path="/ride" element={<RideScreen />} />
      <Route path="/charging" element={<ChargingScreen />} />

    </Routes>
  );
}

export default App;
