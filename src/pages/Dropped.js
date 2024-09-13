import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useAnimeContext } from "../context/AnimeContext";

const Dropped = () => {
  const { animeLists } = useAnimeContext();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dropped
      </Typography>
      <List>
        {animeLists["Dropped"].map((anime) => (
          <ListItem key={anime.mal_id}>
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
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Dropped;
