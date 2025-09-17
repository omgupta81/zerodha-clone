// src/components/TrustSection.jsx
import { Container, Row, Col } from "react-bootstrap";
import EcosystemImg from "../../assets/ecosystem.png";
import PressLogos from "../../assets/pressLogos.png";

export default function TrustSection() {
  return (
    <section className="py-5 bg-white">
      <Container>
        {/* Top Row: Text + Image */}
        <Row className="align-items-center">
          {/* Left Column - Text */}
          <Col xs={12} md={5} className="mb-4 mb-md-0 text-center text-md-start">
            <h2 className="fw-bold mb-3" style={{ color: "#1a1a1a" }}>
              Trust with confidence
            </h2>

            <div className="mb-3">
              <h5 className="fw-semibold mb-2" style={{ fontSize: "18px", color: "#1a1a1a" }}>
                Customer-first always
              </h5>
              <p className="text-secondary">
                That's why <strong>1.6+ crore</strong> customers trust Zerodha with <strong>~ ₹6 lakh crores</strong> of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
              </p>
            </div>

            <div className="mb-3">
              <h5 className="fw-semibold mb-2" style={{ fontSize: "18px", color: "#1a1a1a" }}>
                No spam or gimmicks
              </h5>
              <p className="text-secondary">
                No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="/about/philosophy">Our philosophies</a>.
              </p>
            </div>

            <div>
              <h5 className="fw-semibold mb-2" style={{ fontSize: "18px", color: "#1a1a1a" }}>
                The Zerodha universe
              </h5>
              <p className="text-secondary">
                Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
              </p>
            </div>
          </Col>

          {/* Right Column - Image */}
          <Col xs={12} md={7} className="d-flex justify-content-center">
            <div className="text-center">
              <a href="/products">
                <img
                  src={EcosystemImg}
                  alt="The Zerodha Universe"
                  className="img-fluid"
                  style={{ maxWidth: 550 }}
                />
              </a>
              <p className="mt-2">
                <a href="/products">Explore our products →</a>
              </p>
            </div>
          </Col>
        </Row>

        {/* Press logos section */}
        <Row className="mt-5">
          <Col className="text-center">
            <a href="/media">
              <img
                src={PressLogos}
                alt="Press Logos"
                className="img-fluid"
                style={{ maxWidth: 800 }}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
