import React from "react";
import { Container, Typography } from "@mui/material";

const Dropped = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dropped
      </Typography>
      <Typography variant="body1">
        Here is the list of animes you have dropped.
      </Typography>
    </Container>
  );
};

export default Dropped;
