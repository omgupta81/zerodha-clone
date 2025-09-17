// src/components/Header/Logo.jsx
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

export default function Logo() {
  return (
    <Link
      to="/"
      className="d-flex align-items-center text-decoration-none"
      style={{ color: "black" }}
    >
    

      {/* Logo Text */}
      <span className="fs-5 fw-bold" style={{ lineHeight: 1 }}>
        Zerodha Clone
      </span>
    </Link>
  );
}
