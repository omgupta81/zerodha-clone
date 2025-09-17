// src/components/CategoryCard.jsx
import React from "react";
import { Card, Button } from "react-bootstrap";

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
    <Card
      className="p-4 mb-3 shadow-sm text-center"
      style={{
        borderRadius: "1rem",
        border: "1px solid #e0e0e0",
        width: "100%",
        maxWidth: 280,
        transition: "0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0.5rem 1rem rgba(0,0,0,0.15)";
        e.currentTarget.style.borderColor = "#90caf9";
        e.currentTarget.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 .125rem .25rem rgba(0,0,0,.075)";
        e.currentTarget.style.borderColor = "#e0e0e0";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Icon */}
      {cat.icon && <div className="mb-3 fs-2">{cat.icon}</div>}

      {/* Title */}
      <Card.Title className="fw-bold text-primary mb-2" style={{ fontSize: "1.2rem" }}>
        {highlightText(cat.title, searchQuery)}
      </Card.Title>

      {/* Description */}
      <Card.Text className="text-secondary mb-3" style={{ lineHeight: 1.6, wordBreak: "break-word" }}>
        {highlightText(cat.desc, searchQuery)}
      </Card.Text>

      {/* Explore Button */}
      <Button
        variant="link"
        className="fw-semibold text-primary p-0"
        style={{ textDecoration: "none" }}
        onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
        onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
      >
        Explore →
      </Button>
    </Card>
  );
}
