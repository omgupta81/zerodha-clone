// src/components/SupportNavbar.jsx
import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function SupportNavbar() {
  const links = [
    { label: "Help", id: "categories-section" },
    { label: "Tickets", id: "raise-ticket-section" },
    { label: "FAQs", id: "faq-section" },
  ];

  const [activeSection, setActiveSection] = useState("");

  // Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Highlight active section on scroll
  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollPos = window.scrollY + 100; // offset for navbar height
      let currentSection = "";
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= scrollPos) {
          currentSection = link.id;
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <Navbar
      bg="white"
      expand="lg"
      className="border-bottom shadow-sm"
      sticky="top"
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand
          className="fw-bold text-primary fs-4"
          style={{ cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Support
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="support-navbar-nav" />
        <Navbar.Collapse id="support-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {links.map((link) => (
              <Nav.Link
                key={link.label}
                onClick={() => handleScroll(link.id)}
                className={`text-dark fw-medium mx-2 ${
                  activeSection === link.id ? "text-primary fw-bold" : ""
                }`}
                style={{
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    activeSection === link.id ? "#0d6efd" : "#212529")
                }
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Optional: underline animation for active link */}
      <style>
        {`
          @media (min-width: 992px) {
            .nav-link {
              position: relative;
            }
            .nav-link::after {
              content: '';
              position: absolute;
              width: 0;
              height: 2px;
              left: 0;
              bottom: -4px;
              background-color: #0d6efd;
              transition: width 0.3s;
            }
            .nav-link:hover::after,
            .nav-link.text-primary::after {
              width: 100%;
            }
          }
        `}
      </style>
    </Navbar>
  );
}
