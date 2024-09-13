import React, { createContext, useState, useContext } from "react";

// Create a Context for the Anime
const AnimeContext = createContext();

// Create a Provider component
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

// Custom hook for using the AnimeContext
export const useAnimeContext = () => {
  const context = useContext(AnimeContext);
  if (!context) {
    throw new Error("useAnimeContext must be used within an AnimeProvider");
  }
  return context;
};
