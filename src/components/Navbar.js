import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub"; // Import GitHub Icon

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#4bc2b4" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Kei
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
        <IconButton
          color="inherit"
          href="https://github.com/keiwsh/294AnimeTracker"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ ml: 2 }} // Add margin-left for spacing
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
