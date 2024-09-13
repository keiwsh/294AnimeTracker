// src/api/animeApi.js
import axios from "axios";

const API_URL = "https://api.jikan.moe/v4";

export const searchAnime = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/anime?q=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching anime:", error);
    return null;
  }
};
