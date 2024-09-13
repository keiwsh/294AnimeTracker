// src/components/Footer.js
import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";

const Footer = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{
        padding: "10px 0",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container>
        <Typography
          variant="body2"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          sx={{
            fontSize: "14px",
            transition: "color 0.3s ease",
            color: hovered ? "#4bc2b4" : "inherit",
          }}
        >
          {hovered ? "Made by Kei" : "ケイが作った"}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
