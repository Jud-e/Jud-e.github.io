import { EXPERIENCE } from "../data/experience";
import { useInView } from "../hooks/useInView";
import "./Experience.css";

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className={`experience__inner fade-up ${inView ? "fade-up--visible" : ""}`}>
        <div className="glow-line" />
        <p className="section-label">Career journey</p>
        <h2 className="section-title">
          Experience<span className="accent">.</span>
        </h2>

        <div className="experience__grid">
          {EXPERIENCE.map((exp) => (
            <div key={exp.role} className="experience__card">
              <h3 className="experience__role">{exp.role}</h3>
              <div className="experience__divider" />
              <p className="experience__org">@ {exp.org}</p>
              <ul className="experience__list">
                {exp.points.map((pt) => (
                  <li key={pt} className="experience__item">{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
