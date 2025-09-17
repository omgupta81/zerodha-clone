// src/pages/About.jsx
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import AboutImg from "../assets/nithinKamath.jpg"; // replace with your image

export default function About() {
  return (
    <section className="py-5 py-md-6 bg-light">
      <Container>
        {/* Section Heading */}
        <h2 className="fw-bold text-center text-dark mb-3">About Zerodha</h2>
        <p className="text-muted text-center mb-5">
          We pioneered the discount broking model in India. Now, we are breaking
          ground with our technology.
        </p>

        {/* Top Section: Two-column text */}
        <Row className="mb-5 g-5">
          {/* Left Column */}
          <Col md={6}>
            <p className="text-muted">
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p className="text-muted">
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p className="text-muted">
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </Col>

          {/* Right Column */}
          <Col md={6}>
            <p className="text-muted">
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p className="text-muted">
              Rainmatter, our fintech fund and incubator, has invested in
              several fintech startups with the goal of growing the Indian
              capital markets.
            </p>
            <p className="text-muted">
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us or learn more about our business and product
              philosophies.
            </p>
          </Col>
        </Row>

        <hr className="my-5" />

        {/* Bottom Section: Image with text */}
        <Row className="align-items-center g-4">
          {/* Image */}
          <Col md={4} className="text-center">
            <Image
              src={AboutImg}
              alt="Nithin Kamath"
              roundedCircle
              className="shadow"
              style={{ maxWidth: "200px" }}
            />
            <p className="text-muted mt-2 mb-0">
              Nithin Kamath <br />
              Founder, CEO
            </p>
          </Col>

          {/* Text */}
          <Col md={8}>
            <p className="text-muted">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade-long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p className="text-muted mt-3">
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
          </Col>
        </Row>

        <hr className="mt-5" />
      </Container>
    </section>
  );
}
