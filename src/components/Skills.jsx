import { SKILLS } from "../data/skills";
import { useInView } from "../hooks/useInView";
import "./Skills.css";

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className={`skills__inner fade-up ${inView ? "fade-up--visible" : ""}`}>
        <div className="glow-line" />
        <p className="section-label">What I work with</p>
        <h2 className="section-title">
          Skills<span className="accent">.</span>
        </h2>

        <div className="skills__grid">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="skills__category">
              <h3 className="skills__category-title">{category}</h3>
              <div className="skills__divider" />
              <ul className="skills__list">
                {items.map((skill) => (
                  <li key={skill} className="skills__item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
