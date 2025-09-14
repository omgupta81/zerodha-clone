// src/components/SupportHero.jsx
import React from "react";
import { Box, Container, Typography, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function SupportHero({ searchQuery, setSearchQuery }) {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(135deg, #1565c0, #1e88e5)", // Softer gradient
        textAlign: "center",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle decorative circles */}
      <Box
        sx={{
          position: "absolute",
          width: 120,
          height: 120,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.05)",
          top: 20,
          left: -40,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.05)",
          bottom: -40,
          right: -40,
        }}
      />

      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3"
          fontWeight={700}
          gutterBottom
          sx={{
            textShadow: "1px 1px 6px rgba(0,0,0,0.15)", // softer shadow
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          How can we help you?
        </Typography>

        <TextField
          fullWidth
          placeholder="Search for help articles, FAQs, or topics..."
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "#1565c0" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            mt: 4,
            backgroundColor: "#f5f5f5", // softer background
            borderRadius: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              "&.Mui-focused fieldset": { borderColor: "#1565c0", borderWidth: 1.5 },
            },
            "& .MuiOutlinedInput-input": { py: 1.5 },
            transition: "all 0.3s ease",
            "&:hover": { boxShadow: "0 4px 12px rgba(0,0,0,0.08)" },
          }}
        />
      </Container>
    </Box>
  );
}
