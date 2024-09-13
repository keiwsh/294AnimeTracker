import React from "react";
import { Container, Typography } from "@mui/material";

const currentlyWatching = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Currently Watching
      </Typography>
      <Typography variant="body1">
        Here is the list of animes you are currently watching.
      </Typography>
    </Container>
  );
};

export default currentlyWatching;
