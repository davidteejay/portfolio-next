import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";
import { FaMedium, FaStackOverflow, FaXTwitter } from "react-icons/fa6";
import { ADPListIcon } from "@/assets/icons/ADPList";

const iconSize = 20;

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/chibuokem-onyekwelu",
    icon: <FiLinkedin size={iconSize} />,
  },
  {
    label: "GitHub",
    href: "https://github.com/davidteejay",
    icon: <FiGithub size={iconSize} />,
  },
  {
    label: "ADPList mentoring",
    href: "https://adplist.org/mentors/chibuokem-onyekwelu",
    icon: <ADPListIcon size={iconSize} />,
  },
  {
    label: "X",
    href: "https://x.com/lord_chii",
    icon: <FaXTwitter size={iconSize} />,
  },
  {
    label: "Medium",
    href: "https://medium.com/@chibuokem",
    icon: <FaMedium size={iconSize} />,
  },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/10407415/chibuokem-onyekwelu",
    icon: <FaStackOverflow size={iconSize} />,
  },
];

export default function Home() {
  return (
    <main className="home-page" id="main-content">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">
            Senior / Lead Mobile Engineer · React Native
          </p>
          <h1 id="home-title">
            I lead teams building reliable React Native apps.
          </h1>
          <p className="hero-summary">
            I&apos;m Chibuokem, a Senior / Lead Mobile Engineer specializing in
            React Native and TypeScript. I bring technical direction and
            hands-on ownership across product development, native integrations,
            and release delivery, with experience in fintech, health, education,
            and transport.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projects">
              Explore selected work <FiArrowUpRight size={18} />
            </Link>
            <a className="button button-secondary" href="/resume.pdf" download>
              Download resume <FiArrowUpRight size={18} />
            </a>
            <a
              className="button button-secondary"
              href="mailto:hello@chibuokem.dev"
            >
              <FiMail size={18} /> Contact me
            </a>
          </div>
          <div className="social-links" aria-label="More ways to connect">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="hero-photo-wrap">
          <Image
            src="/images/chibuokem-portrait.jpeg"
            alt="Chibuokem Onyekwelu"
            fill
            priority
            sizes="(max-width: 720px) 180px, 280px"
            className="hero-photo"
          />
        </div>
      </section>
    </main>
  );
}
