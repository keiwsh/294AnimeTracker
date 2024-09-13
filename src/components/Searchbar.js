// src/components/SearchBar.js
import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { searchAnime } from "../api/animeApi"; // Your API function

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const data = await searchAnime(query);
    if (data) {
      setResults(data.data); // `data.data` contains the list of anime
    } else {
      setResults([]);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Search for Anime
      </Typography>
      <TextField
        label="Anime Title"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        style={{ marginTop: "10px" }}
      >
        Search
      </Button>

      {results.length > 0 && (
        <List style={{ marginTop: "20px" }}>
          {results.map((anime) => (
            <ListItem key={anime.mal_id}>
              <ListItemText
                primary={anime.title}
                secondary={`Score: ${anime.score || "N/A"}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default SearchBar;
