// src/components/SearchBar.js
import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add"; // Import the add icon
import { searchAnime } from "../api/animeApi";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [animeLists, setAnimeLists] = useState({
    "Currently Watching": [],
    Completed: [],
    Dropped: [],
  });

  // Function to perform search
  const performSearch = async (searchQuery) => {
    if (searchQuery.trim() === "") {
      setResults([]);
      return;
    }

    const data = await searchAnime(searchQuery);
    if (data) {
      setResults(data.data);
    } else {
      setResults([]);
    }
  };

  // Use effect to perform search whenever the query changes
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      performSearch(query);
    }, 300); // Debounce delay (e.g., 300ms)

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleAddClick = (event, anime) => {
    setAnchorEl(event.currentTarget);
    setSelectedAnime(anime);
  };

  const handleMenuClose = (status) => {
    if (selectedAnime) {
      setAnimeLists((prevLists) => ({
        ...prevLists,
        [status]: [...prevLists[status], selectedAnime],
      }));
    }
    setAnchorEl(null);
    setSelectedAnime(null);
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
        placeholder="Type anime title here..."
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => performSearch(query)}
        style={{ marginTop: "10px" }}
      >
        Search
      </Button>

      {results.length > 0 && (
        <List style={{ marginTop: "20px" }}>
          {results.map((anime) => (
            <ListItem
              key={anime.mal_id}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div style={{ width: 60, height: 60, marginRight: 10 }}>
                <img
                  src={anime.images?.jpg?.image_url || ""}
                  alt={anime.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 4,
                  }}
                />
              </div>
              <ListItemText
                primary={anime.title}
                secondary={`Score: ${anime.score || "N/A"}`}
              />
              <IconButton
                onClick={(event) => handleAddClick(event, anime)}
                edge="end"
                aria-label="add"
                style={{ marginLeft: "auto" }}
              >
                <AddIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => handleMenuClose("Currently Watching")}>
          Currently Watching
        </MenuItem>
        <MenuItem onClick={() => handleMenuClose("Completed")}>
          Completed
        </MenuItem>
        <MenuItem onClick={() => handleMenuClose("Dropped")}>Dropped</MenuItem>
      </Menu>
    </Container>
  );
};

export default SearchBar;
