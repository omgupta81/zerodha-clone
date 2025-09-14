// src/components/FAQItem.jsx
import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { highlightText } from "./CategoryCard";

export default function FAQItem({ faq, searchQuery }) {
  return (
    <Accordion sx={{ mb: 2, borderRadius: 2, "&:before": { display: "none" }, boxShadow: 1 }}>
      <AccordionSummary expandIcon={<ExpandMore />} sx={{ fontWeight: 600, color: "#1565c0" }}>
        {highlightText(faq.q, searchQuery)}
      </AccordionSummary>
      <AccordionDetails sx={{ color: "#424242", lineHeight: 1.6 }}>
        {highlightText(faq.a, searchQuery)}
      </AccordionDetails>
    </Accordion>
  );
}
