// src/components/SupportHero.jsx
import React from "react";
import { Container, Form, InputGroup, Button } from "react-bootstrap";
import RaiseTicketButton from "./RaiseTicketButton";

export default function SupportHero({ searchQuery, setSearchQuery }) {
  return (
    <section
      className="position-relative text-center text-white py-5"
      style={{
        background: "linear-gradient(135deg, #1565c0, #1e88e5)",
        overflow: "hidden",
      }}
    >
      {/* Decorative floating circles */}
      <div
        className="position-absolute rounded-circle"
        style={{
          width: "140px",
          height: "140px",
          backgroundColor: "rgba(255,255,255,0.07)",
          top: "30px",
          left: "-50px",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="position-absolute rounded-circle"
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "rgba(255,255,255,0.07)",
          bottom: "-50px",
          right: "-60px",
          animation: "float 10s ease-in-out infinite",
        }}
      />

      <Container className="position-relative" style={{ zIndex: 1 }}>
        {/* Hero Heading */}
        <h1
          className="fw-bold mb-4"
          style={{
            textShadow: "1px 1px 8px rgba(0,0,0,0.2)",
            fontSize: "2.5rem",
            animation: "fadeIn 1.5s ease",
          }}
        >
          How can we help you?
        </h1>
        <p className="text-light mb-4" style={{ fontSize: "1.1rem" }}>
          Search our help articles or raise a support ticket and our team will get back to you quickly.
        </p>

        {/* Search Input */}
        <div className="mx-auto" style={{ maxWidth: "500px" }}>
          <InputGroup className="shadow rounded-pill overflow-hidden">
            <Form.Control
              type="text"
              placeholder="Search for help articles, FAQs, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 px-3"
              style={{ height: "50px" }}
            />
            <Button
              variant="primary"
              className="rounded-end"
              onClick={() => alert("Search feature coming soon!")}
            >
              Search
            </Button>
          </InputGroup>

          {/* Direct Raise Ticket CTA */}
          <div className="mt-3">
            <RaiseTicketButton />
          </div>
        </div>
      </Container>

      {/* Floating animation keyframes */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}
