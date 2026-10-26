import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar">
        <a href="#home" className="nav-logo">
          <span className="logo-mark">N</span>
          <span className="logo-text">
            Nova<span>Site</span>
          </span>
        </a>

        <button
          className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        <a
          href="#login"
          className="login-btn"
          onClick={() => setMenuOpen(false)}
        >
          Login
        </a>
      </nav>
    </header>
  );
}
