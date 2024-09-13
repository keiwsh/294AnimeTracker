import React from 'react';
import { Container, Typography } from '@mui/material';

const Completed = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Completed
      </Typography>
      <Typography variant="body1">
        Here is the list of animes you have completed.
      </Typography>
    </Container>
  );
};

export default Completed;
