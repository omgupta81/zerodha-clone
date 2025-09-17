// src/components/HeroSection.jsx
import { Container, Button } from "react-bootstrap";
import HomeHero from "../../assets/homeHero.png";

export default function HeroSection() {
  return (
    <Container className="text-center py-5">
      {/* Hero Image */}
      <img
        src={HomeHero}
        alt="Hero Banner"
        className="img-fluid mx-auto"
        style={{ maxWidth: "70%", height: "auto" }}
      />

      {/* Heading */}
      <h1 className="fw-bold mt-4 text-secondary">Invest in everything</h1>
      
      {/* Subheading */}
      <h5 className="mt-2 text-secondary">
        Online platform to invest in stocks, derivatives, mutual funds, and more
      </h5>

      {/* CTA Button */}
      <Button variant="primary" size="lg" className="mt-4 px-4">
        Sign up for free
      </Button>
    </Container>
  );
}
