import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyAnimeList
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/currently-watching">
            Currently Watching
          </Button>
          <Button color="inherit" component={Link} to="/completed">
            Completed
          </Button>
          <Button color="inherit" component={Link} to="/dropped">
            Dropped
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
