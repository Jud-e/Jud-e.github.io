import { useInView } from "../hooks/useInView";
import "./Contact.css";

const LINKS = [
  { icon: "✉️", label: "Email",    value: "jude.enuanwa@gmail.com",      href: "mailto:jude.enuanwa@gmail.com" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/jude",   href: "https://www.linkedin.com/in/jude-enuanwa" },
  { icon: "🐙", label: "GitHub",   value: "github.com/Jud-e",        href: "https://github.com/Jud-e" },
];

export default function Contact() {
  const [ref, inView] = useInView();

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className={`contact__inner fade-up ${inView ? "fade-up--visible" : ""}`}>

        {/* Left column */}
        <div className="contact__left">
          <p className="section-label">Interested in working together?</p>
          <h2 className="section-title contact__heading">
            Get In <span className="accent">Touch.</span>
          </h2>
          <p className="contact__desc">
            I'm actively seeking junior developer roles in web and mobile.
            Whether you have an opportunity, a project, or just want to say
            hi — my inbox is open.
          </p>
          <div className="contact__buttons">
            <a className="btn-primary" href="mailto:jude.enuanwa@gmail.com">
              Get In Touch
            </a>
            <button className="btn-outline" onClick={() => scrollTo("projects")}>
              Browse Projects
            </button>
          </div>
        </div>

        {/* Right column */}
        <div className="contact__right">
          {LINKS.map(({ icon, label, value, href }) => (
            <a key={label} className="contact__link" href={href} target="_blank" rel="noreferrer">
              <span className="contact__link-icon">{icon}</span>
              <div className="contact__link-text">
                <p className="contact__link-label">{label}</p>
                <p className="contact__link-value">{value}</p>
              </div>
              <span className="contact__link-arrow">→</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
