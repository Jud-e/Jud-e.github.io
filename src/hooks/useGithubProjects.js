import { useState, useEffect } from "react";

const GITHUB_USERNAME = "Jud-e";

export function useGithubProjects(username) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=3&type=public`
        );
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        const repos = await res.json();

        // Fetch languages for each repo in parallel
        const withLanguages = await Promise.all(
          repos.map(async (repo) => {
            try {
              const langRes = await fetch(repo.languages_url);
              const langData = await langRes.json();
              return { ...repo, languages: Object.keys(langData) };
            } catch {
              return { ...repo, languages: repo.language ? [repo.language] : [] };
            }
          })
        );

        const mapped = withLanguages.map((repo) => ({
          name: repo.name,
          subtitle: repo.description || "Personal Project",
          desc: repo.description || "No description provided.",
          languages: repo.languages,
          github: repo.html_url,
          demo: repo.homepage || null,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          gradient: repoGradient(repo.language, repo.name),
          emoji: repoEmoji(repo.language, repo.name),
        }));

        setProjects(mapped);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { projects, loading, error };
}

function repoGradient(language, name) {
  const nameLower = (name || "").toLowerCase();
  if (nameLower.includes("game"))    return "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)";
  if (nameLower.includes("weather")) return "linear-gradient(135deg, #0f3460 0%, #533483 100%)";
  if (nameLower.includes("shop") || nameLower.includes("store"))
                                     return "linear-gradient(135deg, #1b4332 0%, #081c15 100%)";

  const map = {
    JavaScript: "linear-gradient(135deg, #1a1a2e 0%, #2d1b69 100%)",
    TypeScript: "linear-gradient(135deg, #0d1b2a 0%, #1b3a6b 100%)",
    Python:     "linear-gradient(135deg, #1a1a2e 0%, #003566 100%)",
    Java:       "linear-gradient(135deg, #1c0a00 0%, #3d0c02 100%)",
    Dart:       "linear-gradient(135deg, #003049 0%, #00668a 100%)",
    Swift:      "linear-gradient(135deg, #2b0a0a 0%, #7a1c1c 100%)",
    Kotlin:     "linear-gradient(135deg, #1a0533 0%, #4a0e8f 100%)",
    "C#":       "linear-gradient(135deg, #0d1117 0%, #1b3a1b 100%)",
    Go:         "linear-gradient(135deg, #00171f 0%, #003459 100%)",
    Rust:       "linear-gradient(135deg, #1a0a00 0%, #4a1800 100%)",
    HTML:       "linear-gradient(135deg, #1a0a00 0%, #5c1a00 100%)",
    CSS:        "linear-gradient(135deg, #1a0533 0%, #2d0b6b 100%)",
  };
  return map[language] || "linear-gradient(135deg, #1a1a2e 0%, #2d1b69 100%)";
}

function repoEmoji(language, name) {
  const n = (name || "").toLowerCase();
  if (n.includes("portfolio"))  return "🗂";
  if (n.includes("game"))       return "🎮";
  if (n.includes("api"))        return "🔌";
  if (n.includes("chat"))       return "💬";
  if (n.includes("auth"))       return "🔐";
  if (n.includes("shop") || n.includes("store")) return "🛒";
  if (n.includes("weather"))    return "🌦";
  if (n.includes("music"))      return "🎵";
  if (n.includes("fit") || n.includes("health")) return "💪";
  const langMap = {
    JavaScript: "⚡", TypeScript: "🔷", Python: "🐍",
    Java: "☕", Dart: "📱", Swift: "🍎",
    Kotlin: "🤖", "C#": "#", Go: "🐹", HTML: "🌐", CSS: "🎨",
  };
  return langMap[language] || "📁";
}

export { GITHUB_USERNAME };
