import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub"; 

const Navbar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#4bc2b4" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          // Event handlers for hover effect
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered ? "Kei" : "ケイ"}
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
          sx={{ ml: 2 }} 
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
