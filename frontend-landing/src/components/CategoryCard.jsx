// src/components/CategoryCard.jsx
import React from "react";
import { Paper, Box, Typography, Button } from "@mui/material";

// 🔹 Utility to highlight matching text
export const highlightText = (text, query) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <span key={i} style={{ backgroundColor: "#fff176" }}>{part}</span>
    ) : (
      part
    )
  );
};

export default function CategoryCard({ cat, searchQuery }) {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        borderRadius: 3,
        border: "1px solid #e0e0e0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: 280,
        transition: "0.3s",
        "&:hover": {
          boxShadow: 8,
          borderColor: "#90caf9",
          transform: "translateY(-5px)",
        },
      }}
    >
      <Box mb={2}>{cat.icon}</Box>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "#1565c0", fontWeight: 700, fontSize: "1.2rem" }}
      >
        {highlightText(cat.title, searchQuery)}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#424242", mb: 2, lineHeight: 1.6, wordWrap: "break-word" }}
      >
        {highlightText(cat.desc, searchQuery)}
      </Typography>
      <Button
        size="small"
        variant="text"
        sx={{
          px: 0,
          color: "#1565c0",
          fontWeight: 600,
          textTransform: "none",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        Explore →
      </Button>
    </Paper>
  );
}
