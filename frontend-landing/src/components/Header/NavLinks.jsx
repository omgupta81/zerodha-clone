// src/components/Header/NavLinks.jsx
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import navItems from "./NavItems";

export default function NavLinks() {
  return (
    <div className="d-flex align-items-center">
      {/* Navigation Links */}
      <div className="d-flex gap-3">
        {navItems.map((item) => (
          <Button
            key={item.label}
            as={Link}
            to={item.path}
            variant="link"
            className="text-dark fw-medium"
            style={{
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#1e88e5")}
            onMouseLeave={(e) => (e.target.style.color = "#000")}
          >
            {item.label}
          </Button>
        ))}
      </div>

      {/* Sign Up Button */}
      <Button
        as={Link}
        to="/signup"
        variant="primary"
        className="ms-3 px-4"
        style={{
          textTransform: "none",
          fontWeight: "500",
          borderRadius: "50px",
        }}
      >
        Sign Up
      </Button>
    </div>
  );
}
