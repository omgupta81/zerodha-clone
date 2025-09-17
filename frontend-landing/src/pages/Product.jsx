// src/pages/Product.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Product images
import Kite from "../assets/kite.png";
import Console from "../assets/console.png";
import Coin from "../assets/coin.png";
import KiteConnect from "../assets/kiteconnect.png";
import Varsity from "../assets/varsity.png";

// Zerodha Universe Component
import ZerodhaUniverse from "../components/ZerodhaUniverse";

export default function Product() {
  const products = [
    {
      img: Kite,
      title: "Kite",
      description:
        "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more.",
      details:
        "Trade stocks, commodities, and currencies with real-time data and advanced charting tools.",
      buttons: ["Learn more"],
    },
    {
      img: Console,
      title: "Console",
      description:
        "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
      details:
        "View P&L, capital allocation, and tax statements, all in one intuitive interface.",
      buttons: ["Learn more"],
    },
    {
      img: Coin,
      title: "Coin",
      description:
        "Buy direct mutual funds online, commission-free, delivered directly to your Demat account.",
      details:
        "Invest in direct mutual funds seamlessly with zero commissions and track your portfolio easily.",
      buttons: ["Learn more"],
    },
    {
      img: KiteConnect,
      title: "Kite Connect API",
      description:
        "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs.",
      details: "Develop algorithmic trading systems or custom apps with robust APIs.",
      buttons: ["Learn more"],
    },
    {
      img: Varsity,
      title: "Varsity Mobile",
      description:
        "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations.",
      details:
        "Learn trading and investing concepts at your own pace with interactive lessons.",
      buttons: ["Learn more"],
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        {/* Header */}
        <h2 className="fw-bold text-center mb-3 text-dark">Zerodha Products</h2>
        <p className="text-center text-muted mb-5">
          Sleek, modern, and intuitive trading platforms
        </p>

        {/* Products Grid */}
        {products.map((product, idx) => (
          <Row
            key={idx}
            className={`align-items-center mb-5 p-3 bg-white shadow rounded g-4 ${
              idx % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >
            {/* Product Image */}
            <Col xs={12} md={5} className="text-center">
              <Card.Img
                src={product.img}
                alt={product.title}
                className="img-fluid rounded"
                style={{ maxWidth: "320px" }}
              />
            </Col>

            {/* Product Details */}
            <Col xs={12} md={7}>
              <h4 className="fw-semibold text-dark">{product.title}</h4>
              <p className="text-secondary mb-1">{product.description}</p>
              <p className="text-muted mb-3">{product.details}</p>
              {product.buttons.map((btn, i) => (
                <Button
                  key={i}
                  variant="outline-primary"
                  className="me-2 mt-2 text-capitalize"
                >
                  {btn}
                </Button>
              ))}
            </Col>
          </Row>
        ))}

        {/* Zerodha Universe Section */}
        <ZerodhaUniverse />
      </Container>
    </section>
  );
}
