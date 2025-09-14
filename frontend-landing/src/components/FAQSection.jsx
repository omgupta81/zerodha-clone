// src/components/FAQSection.jsx
import React from "react";
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

// Utility to highlight matching text
const highlightText = (text, query) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? <span key={i} style={{ backgroundColor: "#fff176" }}>{part}</span> : part
  );
};

export default function FAQSection({ faqs, searchQuery }) {
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h5" fontWeight={600} mb={4} sx={{ color: "#1a237e" }}>
        Frequently Asked Questions
      </Typography>

      {filteredFaqs.length > 0 ? (
        filteredFaqs.map((faq, idx) => (
          <Accordion
            key={idx}
            sx={{
              mb: 2,
              borderRadius: 2,
              "&:before": { display: "none" },
              boxShadow: 1,
              transition: "0.3s",
              "&:hover": { boxShadow: 6 },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMore />} sx={{ fontWeight: 600, color: "#1565c0" }}>
              {highlightText(faq.q, searchQuery)}
            </AccordionSummary>
            <AccordionDetails sx={{ color: "#424242", lineHeight: 1.6 }}>
              {highlightText(faq.a, searchQuery)}
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Typography variant="body1" sx={{ color: "#424242", mt: 2 }}>
          No FAQs found for "{searchQuery}"
        </Typography>
      )}
    </Container>
  );
}
