import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CurrentlyWatching from "./pages/currentlyWatching";
import Completed from "./pages/Completed";
import Dropped from "./pages/Dropped";
import { AnimeProvider } from "./context/AnimeContext";
import Footer from "./components/Footer";

function App() {
  return (
    <AnimeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/currently-watching" element={<CurrentlyWatching />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/dropped" element={<Dropped />} />
        </Routes>
        <Footer />
      </Router>
    </AnimeProvider>
  );
}

export default App;
