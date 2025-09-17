// src/components/SupportFooter.jsx
import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import RaiseTicketButton from "./RaiseTicketButton";

export default function SupportFooter() {
  return (
    <footer className="bg-light py-5 border-top">
      <Container>
        <Row>
          {/* Popular Topics */}
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <h5 className="fw-bold text-primary mb-3">Popular Topics</h5>
            <ListGroup variant="flush">
              <ListGroup.Item className="px-0 py-1">
                <a href="#" className="text-dark text-decoration-none">
                  How to reset my Kite password?
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="px-0 py-1">
                <a href="#" className="text-dark text-decoration-none">
                  Adding funds using UPI
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="px-0 py-1">
                <a href="#" className="text-dark text-decoration-none">
                  Understanding P&amp;L reports
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Raise Ticket Section */}
          <Col xs={12} md={6}>
            <h5 className="fw-bold text-primary mb-3">Need More Help?</h5>
            <p className="text-muted mb-3" style={{ lineHeight: 1.6 }}>
              If you can't find what you're looking for, raise a support ticket
              and our team will get back to you promptly.
            </p>
            <RaiseTicketButton />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

