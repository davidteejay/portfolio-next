import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/constants/projects";

const caseStudySections = [
  {
    number: "01",
    id: "product-and-audience",
    title: "Product and audience",
    prompt:
      "Who is the product for, what need does it meet, and what does the experience help them do?",
  },
  {
    number: "02",
    id: "role-and-team",
    title: "My role and team",
    prompt:
      "What did I own? Who did I work with, and how were responsibilities shared?",
  },
  {
    number: "03",
    id: "challenge-and-constraints",
    title: "Challenge and constraints",
    prompt:
      "What was difficult, and which product, technical, or delivery constraints shaped the work?",
  },
  {
    number: "04",
    id: "decisions-and-tradeoffs",
    title: "Key decisions and tradeoffs",
    prompt:
      "Which important options did I consider, what tradeoffs mattered, and why did I choose this approach?",
  },
  {
    number: "05",
    id: "implementation",
    title: "Implementation",
    prompt:
      "How was the solution structured? Which technical details, integrations, or release work made the difference?",
  },
  {
    number: "06",
    id: "outcomes-and-learning",
    title: "Outcomes and learning",
    prompt:
      "What changed as a result, how can that change be verified, and what would I improve next time?",
  },
];

const caseStudyProjects = projects
  .filter((project) => project.caseStudy)
  .sort((a, b) => a.caseStudy!.order - b.caseStudy!.order);

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.id }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = caseStudyProjects.find((item) => item.id === slug);

  if (!project) notFound();

  return (
    <main className="case-study-page" id="main-content">
      <Link className="case-study-back" href="/projects">
        <span aria-hidden="true">←</span> Back to selected work
      </Link>

      <header className="case-study-hero">
        <p className="eyebrow">Case study · {project.year}</p>
        <h1>{project.name}</h1>
        <p className="case-study-summary">{project.description}</p>
        <div className="case-study-technologies" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </header>

      <aside className="case-study-draft-note">
        <span className="case-study-draft-indicator" aria-hidden="true" />
        <p>
          <strong>Case study framework</strong>
          <span>
            This page sets the structure. We&apos;ll add your project story,
            decisions, and verified outcomes next.
          </span>
        </p>
      </aside>

      <div className="case-study-body">
        <nav className="case-study-toc" aria-label="Case study sections">
          <p>On this page</p>
          {caseStudySections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              <span>{section.number}</span> {section.title}
            </a>
          ))}
        </nav>

        <div className="case-study-sections">
          {caseStudySections.map((section) => (
            <section
              className="case-study-section"
              id={section.id}
              key={section.id}
            >
              <span className="case-study-section-number">{section.number}</span>
              <div>
                <h2>{section.title}</h2>
                <p>{section.prompt}</p>
              </div>
            </section>
          ))}
        </div>
      </div>

      <footer className="case-study-footer">
        <Link href="/projects">← Back to all selected work</Link>
      </footer>
    </main>
  );
}
