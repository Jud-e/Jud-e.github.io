import { useTypewriter } from "../hooks/useTypewriter";
import "./Hero.css";

export default function Hero() {
  const typedText = useTypewriter("Junior Software Developer", 60);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero">
      <div className="hero__content">

        {/* Left column */}
        <div className="hero__left">
          <div className="hero__status">
            <span className="hero__status-dot" />
            <span>Open to opportunities · Canada</span>
          </div>

          <div className="hero__intro">Hey, I'm Jude 👋🏾</div>

          <h1 className="hero__name">
            Software
            <span className="hero__name--accent"> Developer.</span>
          </h1>

          <p className="hero__desc">
            I build user-focused applications and scalable web systems.
          </p>

          <p className="hero__stack">
            <span className="accent">Flutter</span> ·{" "}
            <span className="accent">Java</span> ·{" "}
            <span className="accent">Web Technologies</span>
          </p>

          <div className="hero__buttons">
            <a className="btn-primary" href="mailto:jude.enuanwa@gmail.com">
              Get In Touch
            </a>
            <button className="btn-outline" onClick={() => scrollTo("projects")}>
              Browse Projects
            </button>
          </div>
        </div>

        {/* Right column — profile photo */}
        <div className="hero__right">
          <div className="hero__photo-ring">
            <div className="hero__photo-wrap">
              {/*
                Place your photo at: public/images/profile.jpg
                Then it will appear here automatically.
              */}
              <img
                src="/images/profile.jpeg"
                alt="Jude Enuanwa"
                className="hero__photo"
                onError={(e) => {
                  // Fallback avatar if image not found
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hero__photo-fallback">
                <span>JE</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
