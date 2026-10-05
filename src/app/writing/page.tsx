import type { Metadata } from "next";
import { FiArrowUpRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Articles by Chibuokem Onyekwelu about React Native, software engineering, and design.",
  alternates: { canonical: "/writing" },
  openGraph: {
    title: "Writing | Chibuokem Onyekwelu",
    description:
      "Articles by Chibuokem Onyekwelu about React Native, software engineering, and design.",
    url: "https://chibuokem.dev/writing",
  },
};

const articles = [
  {
    category: "React Native",
    date: "September 15, 2025",
    readTime: "3 min read",
    title: "Implementing session timeouts in your React Native application",
    description:
      "A practical walkthrough of detecting inactivity and ending a session in a React Native app.",
    href: "https://medium.com/@chibuokem/implementing-session-timeouts-in-your-react-native-application-2e8bf768bbdf",
  },
  {
    category: "Design and product",
    date: "October 17, 2019",
    readTime: "2 min read",
    title: "Diving into UI/UX Design",
    description:
      "A reflection on exploring user interface and experience design alongside software engineering.",
    href: "https://medium.com/chibuokem/diving-into-ui-ux-design-536b11533434",
  },
];

export default function WritingPage() {
  return (
    <main className="writing-page" id="main-content">
      <header className="writing-page-header">
        <p className="eyebrow">Writing</p>
        <h1>Ideas and lessons from the work</h1>
        <p>
          Notes on building mobile products, learning new disciplines, and the
          decisions behind the work.
        </p>
      </header>
      <div className="writing-page-links">
        <a
          className="writing-profile-link"
          href="https://medium.com/@chibuokem"
          target="_blank"
          rel="noopener noreferrer"
        >
          View my Medium profile <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <section className="writing-grid" aria-label="Articles">
        {articles.map((article) => (
          <article className="writing-card" key={article.href}>
            <div className="writing-meta">
              <span>{article.category}</span>
              <span>{article.date}</span>
            </div>
            <h2>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {article.title}
              </a>
            </h2>
            <p>{article.description}</p>
            <a
              className="writing-read-link"
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read article <span>{article.readTime}</span>
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
