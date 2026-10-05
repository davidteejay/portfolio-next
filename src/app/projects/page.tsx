import { FiArrowUpRight, FiChevronDown, FiLink } from "react-icons/fi";
import Link from "next/link";
import { projects } from "@/constants/projects";

const impact = [
  { value: "7+ years", label: "building software" },
  { value: "10+ apps", label: "shipped to app stores" },
  { value: "200K+", label: "users reached" },
];

const principles = [
  {
    title: "Own the full delivery",
    description:
      "I work across implementation, release automation, and app store delivery to help teams ship confidently.",
  },
  {
    title: "Build for real devices",
    description:
      "I bring native capabilities into React Native products, including Bluetooth, NFC, and health platform integrations.",
  },
  {
    title: "Make quality part of the workflow",
    description:
      "I use automated tests, crash reporting, and staged releases to find issues earlier and improve the release process.",
  },
];

type ProjectItem = (typeof projects)[number];

const orderedProjects = [...projects].sort(
  (a, b) =>
    (a.caseStudy?.order ?? Number.MAX_SAFE_INTEGER) -
    (b.caseStudy?.order ?? Number.MAX_SAFE_INTEGER),
);

const featuredProjects = orderedProjects.filter((project) => project.caseStudy);
const additionalProjects = orderedProjects.filter(
  (project) => !project.caseStudy,
);

function ProjectCard({ project }: { project: ProjectItem }) {
  const shownTechnologies = project.technologies.slice(0, 5);
  const remainingTechnologyCount =
    project.technologies.length - shownTechnologies.length;

  return (
    <article className="project-card">
      <header className="project-card-header">
        <h3>{project.name}</h3>
        <span className="project-period">{project.year}</span>
      </header>
      <p className="project-role">{project.role}</p>
      <p className="project-description">{project.description}</p>
      {project.outcome && (
        <p className="project-outcome">
          <strong>Impact</strong> {project.outcome}
        </p>
      )}
      <div className="project-technologies" aria-label="Technologies">
        {shownTechnologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
        {remainingTechnologyCount > 0 && (
          <span>+{remainingTechnologyCount} more</span>
        )}
      </div>
      {project.links && project.links.length > 0 ? (
        <div className="project-store-links">
          <FiLink aria-hidden="true" />
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : (
        <p className="project-links-note">
          {project.linksNote ?? "No public project link is listed."}
        </p>
      )}
      {project.caseStudy && (
        <Link
          className="case-study-project-link"
          href={`/projects/${project.id}`}
        >
          Read case study <FiArrowUpRight aria-hidden="true" />
        </Link>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <main
      className="main-container projects-main bg-background"
      id="main-content"
    >
      <div className="projects-content">
        <header className="projects-header">
          <p className="eyebrow">Selected work</p>
          <h1>Projects</h1>
          <p>
            Mobile products I&apos;ve helped design, build, modernize, and ship
            across fintech, health, education, and transport.
          </p>
        </header>

        <section className="featured-projects" aria-labelledby="featured-title">
          <div className="project-section-heading">
            <h2 id="featured-title">Featured projects</h2>
            <span>{featuredProjects.length} projects</span>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {additionalProjects.length > 0 && (
          <details className="additional-projects">
            <summary>
              <span>More projects</span>
              <span className="additional-project-action">
                View {additionalProjects.length}+ more projects
                <FiChevronDown aria-hidden="true" />
              </span>
            </summary>
            <div className="project-grid">
              {additionalProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </details>
        )}

        <section
          className="projects-impact-section"
          aria-labelledby="impact-title"
        >
          <div className="project-section-heading">
            <h2 id="impact-title">Impact at a glance</h2>
          </div>
          <div className="impact-strip projects-impact">
            {impact.map((item) => (
              <div className="impact-item" key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="projects-approach" aria-labelledby="work-title">
          <div className="project-section-heading">
            <h2 id="work-title">How I work</h2>
          </div>
          <div className="principle-grid">
            {principles.map((principle, index) => (
              <article className="principle-card" key={principle.title}>
                <span className="principle-number">0{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
