// src/components/Header/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import navItems from "./NavItems";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container-fluid px-2 px-lg-4 d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <Logo />
        </Link>

        {/* Hamburger toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isOpen ? "show" : ""
          }`}
        >
          <ul className="navbar-nav align-items-center mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li className="nav-item" key={item.label}>
                <Link
                  className="nav-link text-dark mx-2"
                  to={item.path}
                  style={{ fontWeight: 500 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Sign Up button */}
            <li className="nav-item ms-lg-3">
              <Link
                className="btn btn-primary px-3"
                to="/signup"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

