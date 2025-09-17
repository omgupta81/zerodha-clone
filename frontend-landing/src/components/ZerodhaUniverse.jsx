// src/components/ZerodhaUniverse.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Partner logos
import Tijori from "../assets/tijori.svg";
import Ditto from "../assets/dittoLogo.png";
import ZerodhaFundhouse from "../assets/zerodhaFundhouse.png";
import Streak from "../assets/streakLogo.png";
import Smallcase from "../assets/smallcaseLogo.png";
import Sensibull from "../assets/sensibullLogo.svg";

export default function ZerodhaUniverse() {
  const partners = [
    {
      img: Tijori,
      alt: "Tijori",
      details:
        "Our asset management venture creating simple and transparent index funds to help you save for your goals.",
    },
    {
      img: Ditto,
      alt: "Ditto",
      details: "Personalized advice on life and health insurance. No spam or mis-selling.",
    },
    {
      img: ZerodhaFundhouse,
      alt: "Zerodha Fundhouse",
      details:
        "Investment research and fund management platform offering insights into stocks, sectors, and supply chains.",
    },
    {
      img: Streak,
      alt: "Streak",
      details:
        "Systematic trading platform allowing strategy creation and backtesting without coding.",
    },
    {
      img: Smallcase,
      alt: "Smallcase",
      details: "Thematic investing platform with diversified stock baskets and ETFs.",
    },
    {
      img: Sensibull,
      alt: "Sensibull",
      details:
        "Options trading platform for strategy creation, position analysis, and data insights.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        {/* Heading */}
        <h3 className="fw-bold text-center mb-3">The Zerodha Universe</h3>
        <p className="text-muted text-center mb-5">
          Extend your trading and investment experience with our trusted partners.
          Each platform complements your journey with specialized services.
        </p>

        {/* Partner Grid */}
        <Row className="g-4 justify-content-center">
          {partners.map((partner, idx) => (
            <Col key={idx} xs={12} sm={6} md={4}>
              <Card
                className="text-center h-100 shadow-sm p-4 bg-white"
                style={{
                  borderRadius: "1rem",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0px 8px 20px rgba(0,0,0,0.15)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Card.Img
                  variant="top"
                  src={partner.img}
                  alt={partner.alt}
                  className="mb-3"
                  style={{ maxWidth: "120px", height: "auto", margin: "0 auto" }}
                />
                <Card.Text className="text-muted small">{partner.details}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
