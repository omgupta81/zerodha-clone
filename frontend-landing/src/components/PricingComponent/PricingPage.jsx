// src/pages/PricingPage.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Pricing0 from "../../assets/pricing0.svg";
import PricingEquity from "../../assets/pricing0.svg";
import PricingMF from "../../assets/otherTrades.svg";

export default function PricingPage() {
  const pricingItems = [
    { 
      img: Pricing0, 
      label: "Free account opening", 
      description: "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage." 
    },
    { 
      img: PricingMF, 
      label: "Direct mutual funds, Intraday & F&O", 
      description: "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades." 
    },
    { 
      img: PricingEquity, 
      label: "Free equity delivery", 
      description: "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges." 
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#f4f6f8" }}>
      <Container>
        {/* Page Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Charges & Pricing</h2>
          <p className="text-secondary">
            Explore all charges, taxes, and brokerage rates for trading, investing, and mutual funds.
          </p>
        </div>

        {/* Pricing Cards */}
        <Row className="justify-content-center g-4">
          {pricingItems.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="d-flex justify-content-center">
              <Card
                className="text-center shadow-sm h-100"
                style={{
                  borderRadius: "1rem",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  width: "100%",
                  maxWidth: "260px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {/* Icon Circle */}
                <div
                  className="d-flex align-items-center justify-content-center mx-auto mt-4 mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #42a5f5, #1976d2)",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  <img src={item.img} alt={item.label} style={{ width: "40px", height: "40px" }} />
                </div>

                {/* Card Body */}
                <Card.Body>
                  <Card.Title className="fw-bold text-primary mb-2">{item.label}</Card.Title>
                  <Card.Text className="text-secondary" style={{ lineHeight: 1.6, fontSize: "0.95rem" }}>
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
