// src/components/SupportNavbar.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

export default function SupportNavbar() {
  const links = [
    { label: "Help", id: "categories-section" },
    { label: "Tickets", id: "raise-ticket-section" },
    { label: "FAQs", id: "faq-section" },
  ];

  // Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        boxShadow: 1,
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "#1565c0", cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Support
        </Typography>
        <Box>
          {links.map((link) => (
            <Button
              key={link.label}
              onClick={() => handleScroll(link.id)}
              sx={{
                mx: 1.5,
                color: "#424242",
                textTransform: "none",
                fontWeight: 500,
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
