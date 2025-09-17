// src/components/Header/MobileMenu.jsx
// src/components/Header/MobileMenu.jsx
import { Offcanvas, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import navItems from "./NavItems";

export default function MobileMenu({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="fw-bold">Zerodha Clone</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <Nav className="flex-column">
          {/* Navigation links */}
          {navItems.map((item) => (
            <Nav.Link
              key={item.label}
              as={Link}
              to={item.path}
              onClick={handleClose}
              className="my-1 text-dark"
            >
              {item.label}
            </Nav.Link>
          ))}

          {/* Sign Up button */}
          <Button
            as={Link}
            to="/signup"
            variant="primary"
            onClick={handleClose}
            className="mt-3 w-100 text-center fw-semibold"
            style={{ textTransform: "none" }}
          >
            Sign Up
          </Button>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
