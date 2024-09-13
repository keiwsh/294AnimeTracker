// src/contexts/AnimeContext.js
import React, { createContext, useState, useContext } from "react";

// Create a context for anime tracking
const AnimeContext = createContext();

export const AnimeProvider = ({ children }) => {
  const [animeLists, setAnimeLists] = useState({
    "Currently Watching": [],
    Completed: [],
    Dropped: [],
  });

  const addAnime = (anime, status) => {
    setAnimeLists((prevLists) => ({
      ...prevLists,
      [status]: [...prevLists[status], anime],
    }));
  };

  const removeAnime = (animeId, status) => {
    setAnimeLists((prevLists) => ({
      ...prevLists,
      [status]: prevLists[status].filter((anime) => anime.mal_id !== animeId),
    }));
  };

  return (
    <AnimeContext.Provider value={{ animeLists, addAnime, removeAnime }}>
      {children}
    </AnimeContext.Provider>
  );
};

// Custom hook to use the Anime context
export const useAnimeContext = () => useContext(AnimeContext);
