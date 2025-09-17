// src/components/FAQSection.jsx
import React from "react";
import { Container, Accordion } from "react-bootstrap";

// 🔹 Utility to highlight matching text
const highlightText = (text, query) => {
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

export default function FAQSection({ faqs, searchQuery }) {
  // Filter FAQs based on search query
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="py-5">
      {/* Section Header */}
      <h5 className="fw-bold text-primary mb-4">Frequently Asked Questions</h5>

      {filteredFaqs.length > 0 ? (
        <Accordion defaultActiveKey="0" alwaysOpen>
          {filteredFaqs.map((faq, idx) => (
            <Accordion.Item
              key={idx}
              eventKey={String(idx)}
              className="mb-3 shadow-sm rounded"
            >
              <Accordion.Header className="fw-semibold text-primary">
                {highlightText(faq.q, searchQuery)}
              </Accordion.Header>
              <Accordion.Body className="text-secondary">
                {highlightText(faq.a, searchQuery)}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      ) : (
        <p className="text-muted mt-3">
          No FAQs found for "<span className="fw-semibold">{searchQuery}</span>"
        </p>
      )}
    </Container>
  );
}
