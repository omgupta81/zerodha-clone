// src/components/FAQItem.jsx
import React from "react";
import { Accordion } from "react-bootstrap";
import { highlightText } from "./CategoryCard";

export default function FAQItem({ faq, searchQuery, eventKey }) {
  return (
    <Accordion.Item
      eventKey={eventKey}
      className="mb-2 shadow-sm rounded"
    >
      <Accordion.Header className="fw-semibold text-primary">
        {highlightText(faq.q, searchQuery)}
      </Accordion.Header>
      <Accordion.Body className="text-secondary">
        {highlightText(faq.a, searchQuery)}
      </Accordion.Body>
    </Accordion.Item>
  );
}
