// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CurrentlyWatching from "./pages/CurrentlyWatching";
import Completed from "./pages/Completed";
import Dropped from "./pages/Dropped";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currently-watching" element={<CurrentlyWatching />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/dropped" element={<Dropped />} />
      </Routes>
    </Router>
  );
}

export default App;
