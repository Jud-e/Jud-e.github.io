import { useInView } from "../hooks/useInView";
import "./Projects.css";

const PROJECTS = [
  {
    name: "Goalie",
    subtitle: "Sports Tournament Manager",
    desc: "Full-stack web platform for managing sports tournaments, teams, and match schedules. Built with Spring Boot and Thymeleaf with a MySQL database — 99 commits and collaborative development with a teammate.",
    stack: ["Spring Boot", "Java", "Thymeleaf", "MySQL", "REST APIs"],
    features: ["Tournament & team management", "Match scheduling system", "Collaborative development"],
    emoji: "🏆",
    gradient: "linear-gradient(135deg,#1a0533,#3b0764)",
    glowColor: "#7C3AED",
    github: "https://github.com/Jud-e/Goalie",
    demo: null,
  },
  {
    name: "Pharm",
    subtitle: "Doctor-Patient Appointment App",
    desc: "Cross-platform Flutter app for booking and managing doctor-patient appointments. Features user authentication and a clean mobile interface built with Dart and Node.js on the backend.",
    stack: ["Flutter", "Dart", "Node.js", "MongoDB"],
    features: ["User authentication", "Appointment booking", "Cross-platform mobile"],
    emoji: "🔐",
    gradient: "linear-gradient(135deg,#052e16,#064e3b)",
    glowColor: "#059669",
    github: "https://github.com/Jud-e/pharm",
    demo: null,
  },
  {
    name: "Country Details",
    subtitle: "Flutter REST API Integration",
    desc: "Flutter app demonstrating clean API integration and JSON data handling. Fetches real-time country data — population, capital, region — and displays it in a responsive, user-friendly UI.",
    stack: ["Flutter", "Dart", "REST API"],
    features: ["Live API data fetching", "JSON parsing & modeling", "Responsive clean UI"],
    emoji: "🌍",
    gradient: "linear-gradient(135deg,#0c1445,#1e3a8a)",
    glowColor: "#3B82F6",
    github: "https://github.com/Jud-e/country_details",
    demo: "https://appetize.io/app/m35j5xmc44f6z3lua7vd6jl3hu",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card__header" style={{ background: project.gradient }}>
        <div
          className="project-card__glow"
          style={{ background: project.glowColor }}
        />
        <span className="project-card__emoji">{project.emoji}</span>
      </div>

      <div className="project-card__body">
        <div className="project-card__title-row">
          <h3 className="project-card__name">{project.name}</h3>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-card__link"
            title="View on GitHub"
          >↗</a>
        </div>

        <p className="project-card__subtitle">{project.subtitle}</p>
        <p className="project-card__desc">{project.desc}</p>

        <div className="project-card__tags">
          {project.stack.map((t) => (
            <span key={t} className="project-card__tag">{t}</span>
          ))}
        </div>

        <div className="project-card__features">
          {project.features.map((f) => (
            <div key={f} className="project-card__feature">
              <span className="project-card__feat-dot" />
              {f}
            </div>
          ))}
        </div>

        {project.demo && (
          <div className="project-card__footer">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-card__demo"
            >
              Live Demo →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className={`projects__inner fade-up ${inView ? "fade-up--visible" : ""}`}>
        <div className="glow-line" />
        <p className="section-label">What I've built</p>
        <h2 className="section-title">
          Featured <span className="accent">Projects</span>
        </h2>

        <div className="projects__grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>

        <div className="projects__footer">
          <a
            className="btn-outline"
            href="https://github.com/Jud-e?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            View all on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
