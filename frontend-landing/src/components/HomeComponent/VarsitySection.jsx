// src/components/VarsitySection.jsx
import { Container, Row, Col, Button } from "react-bootstrap";
import VarsityImg from "../../assets/education.svg";

export default function VarsitySection() {
  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="align-items-center">
          {/* Left - Image */}
          <Col xs={12} md={6} className="d-flex justify-content-center mb-4 mb-md-0">
            <img
              src={VarsityImg}
              alt="Varsity by Zerodha"
              className="img-fluid"
              style={{ maxWidth: 500 }}
            />
          </Col>

          {/* Right - Text */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <h2 className="fw-bold mb-3">Varsity by Zerodha</h2>
            <p className="text-secondary mb-4">
              An open-access, interactive, and extensive stock market education platform.
            </p>
            <Button
              as="a"
              href="#"
              className="px-4 py-2"
              style={{ backgroundColor: "#387ed1", borderColor: "#387ed1", textTransform: "none" }}
            >
              Explore Varsity
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
