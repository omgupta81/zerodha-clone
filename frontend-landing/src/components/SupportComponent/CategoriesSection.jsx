// src/components/CategoriesSection.jsx
import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import CategoryCard from "./CategoryCard";

// Utility to highlight matching text
const highlightText = (text, query) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? <span key={i} style={{ backgroundColor: "#fff176" }}>{part}</span> : part
  );
};

export default function CategoriesSection({ categories, searchQuery }) {
  const filteredCategories = categories.filter(
    (cat) =>
      cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h5" fontWeight={600} mb={4} sx={{ color: "#1a237e" }}>
        Browse Categories
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat, idx) => (
            <Grid item key={idx} sx={{ display: "flex", justifyContent: "center" }}>
              <CategoryCard
                cat={cat}
                searchQuery={searchQuery}
                highlightText={highlightText}
              />
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ color: "#424242", mt: 2 }}>
            No categories found for "{searchQuery}"
          </Typography>
        )}
      </Grid>
    </Container>
  );
}
