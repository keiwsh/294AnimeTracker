import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box, // Import Box
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAnimeContext } from "../context/AnimeContext"; 

const Completed = () => {
  const { animeLists, removeAnime } = useAnimeContext();
  const completed = animeLists["Completed"];

  return (
    <Container>
      <Box my={4}>
        {" "}
        {/* Moved Box inside Container */}
        <Typography variant="h4" align="center" gutterBottom>
          Completed
        </Typography>
        <List>
          {completed.map((anime) => (
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
                edge="end"
                aria-label="delete"
                onClick={() => removeAnime(anime.mal_id, "Completed")}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Completed;
