import "./Footer.css";

const NAV_ITEMS = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <span className="footer__brand">
            Jude<span className="accent">.</span>
          </span>
          <nav className="footer__nav">
            {NAV_ITEMS.map((item) => (
              <span
                key={item}
                className="footer__nav-link"
                onClick={() => scrollTo(item.toLowerCase())}
              >
                {item}
              </span>
            ))}
          </nav>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Jude Enuanwa. All rights reserved.</span>
          
        </div>
      </div>
    </footer>
  );
}
