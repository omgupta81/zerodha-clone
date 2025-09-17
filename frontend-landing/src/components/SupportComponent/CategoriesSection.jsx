// src/components/CategoriesSection.jsx
import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import CategoryCard from "./CategoryCard";

export default function CategoriesSection({ categories, searchQuery }) {
  // Filter categories based on search query (title or description)
  const filteredCategories = categories.filter(
    (cat) =>
      cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="py-5">
      <h5 className="fw-bold text-primary mb-4">Browse Categories</h5>

      {filteredCategories.length > 0 ? (
        <Row className="justify-content-center g-4">
          {filteredCategories.map((cat, idx) => (
            <Col
              key={idx}
              xs={12}
              sm={6}
              md={4}
              className="d-flex justify-content-center"
            >
              <CategoryCard cat={cat} searchQuery={searchQuery} />
            </Col>
          ))}
        </Row>
      ) : (
        <Alert variant="secondary" className="mt-3 text-center">
          No categories found for "<strong>{searchQuery}</strong>"
        </Alert>
      )}
    </Container>
  );
}

