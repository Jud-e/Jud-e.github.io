import { useInView } from "../hooks/useInView";
import "./About.css";

const FACTS = [
  { label: "Location", value: "Canada", icon: "📍" },
  { label: "Education", value: "Computer Science", icon: "🎓" },
  { label: "Focus", value: "Web & Mobile Development", icon: "💡" },
  { label: "Status", value: "Open to Junior Dev roles", icon: "✅" },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="about" ref={ref}>
      <div className={`about__inner fade-up ${inView ? "fade-up--visible" : ""}`}>
        <div className="about__text">
          <div className="glow-line" />
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Building experiences<br />
            <span className="accent">that matter.</span>
          </h2>
          <p className="about__para">
            I'm a Computer Science student based in Canada with a passion for building
            applications that are both functional and beautiful. My journey spans mobile
            development with Flutter and Java, through to full-stack web applications.
          </p>
          <p className="about__para">
            I've gained real-world experience through internships — leading web development
            at NIIT and building mobile UI at HNG Zuri — while also supporting students
            at Douglas College.
          </p>
          <p className="about__para">
            Currently deepening my skills in scalable backend systems and modern frontend
            frameworks, always looking for the next challenge.
          </p>
        </div>

        <div className="about__facts">
          {FACTS.map(({ label, value, icon }) => (
            <div key={label} className="about__fact-card">
              <span className="about__fact-icon">{icon}</span>
              <div>
                <p className="about__fact-label">{label}</p>
                <p className="about__fact-value">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
