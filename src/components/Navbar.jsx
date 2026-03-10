import { useState, useEffect } from "react";
import "./Navbar.css";

const NAV_ITEMS = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__logo" onClick={() => scrollTo("hero")}>
          <div className="navbar__logo-icon">J</div>
          <span className="navbar__logo-text">Jude.dev</span>
        </div>

        <div className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <span
              key={item}
              className={`navbar__link ${activeSection === item.toLowerCase() ? "navbar__link--active" : ""}`}
              onClick={() => scrollTo(item.toLowerCase())}
            >
              {item}
            </span>
          ))}
          {/* <a className="navbar__resume-btn" href="#">Resume</a> */}
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="navbar__mobile-menu">
          {NAV_ITEMS.map((item) => (
            <span
              key={item}
              className="navbar__mobile-link"
              onClick={() => scrollTo(item.toLowerCase())}
            >
              {item}
            </span>
          ))}
          {/* <a className="navbar__resume-btn" href="#">Resume</a> */}
        </div>
      )}
    </>
  );
}
