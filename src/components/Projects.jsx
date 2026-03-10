import { useGithubProjects, GITHUB_USERNAME } from "../hooks/useGithubProjects";
import { useInView } from "../hooks/useInView";
import "./Projects.css";

// Language → colour mapping (mirrors GitHub's language colours)
const LANG_COLORS = {
  JavaScript:  "#f1e05a",
  TypeScript:  "#3178c6",
  Python:      "#3572A5",
  Java:        "#b07219",
  Dart:        "#00B4AB",
  Swift:       "#F05138",
  Kotlin:      "#A97BFF",
  "C#":        "#178600",
  "C++":       "#f34b7d",
  Go:          "#00ADD8",
  Rust:        "#dea584",
  Ruby:        "#701516",
  PHP:         "#4F5D95",
  HTML:        "#e34c26",
  CSS:         "#563d7c",
  Shell:       "#89e051",
  Vue:         "#41b883",
  Svelte:      "#ff3e00",
};

function LangDot({ lang }) {
  const color = LANG_COLORS[lang] || "#8892a4";
  return (
    <span className="lang-dot">
      <span className="lang-dot__circle" style={{ background: color }} />
      <span className="lang-dot__name">{lang}</span>
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* Dark gradient header */}
      <div className="project-card__header" style={{ background: project.gradient }}>
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

        {/* All languages like GitHub */}
        {project.languages.length > 0 && (
          <div className="project-card__languages">
            {project.languages.map((lang) => (
              <LangDot key={lang} lang={lang} />
            ))}
          </div>
        )}

        <div className="project-card__meta">
          <span className="project-card__meta-item">⭐ {project.stars}</span>
          <span className="project-card__meta-item">🍴 {project.forks}</span>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="project-card__demo">
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="project-card project-card--skeleton">
      <div className="skeleton-header" />
      <div className="project-card__body">
        <div className="skeleton-line skeleton-line--short" />
        <div className="skeleton-line" />
        <div className="skeleton-line skeleton-line--medium" />
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();
  const { projects, loading, error } = useGithubProjects(GITHUB_USERNAME);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className={`projects__inner fade-up ${inView ? "fade-up--visible" : ""}`}>
        <div className="glow-line" />
        <p className="section-label">Latest from GitHub</p>
        <h2 className="section-title">
          Projects<span className="accent">.</span>
        </h2>
        <p className="projects__subtitle">
          Auto-updated from{" "}
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="projects__github-link"
          >
            @{GITHUB_USERNAME}
          </a>{" "}
          — always showing the 3 most recently updated repos.
        </p>

        {error && (
          <div className="projects__error">⚠️ Couldn't load GitHub repos: {error}</div>
        )}

        <div className="projects__grid">
          {loading
            ? [1, 2, 3].map((n) => <SkeletonCard key={n} />)
            : projects.map((p) => <ProjectCard key={p.name} project={p} />)}
        </div>

        <div className="projects__footer">
          <a
            className="btn-outline"
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
          >
            View all repositories →
          </a>
        </div>
      </div>
    </section>
  );
}
