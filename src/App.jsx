import { useEffect, useState } from "react";
import "./App.css";

const navigation = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Awards",
  "Contact",
];
const socials = {
  linkedin: "https://www.linkedin.com/in/asma-turki-a3b570396",
  github: "https://github.com/turkiasma",
  email: "mailto:asma.turki@medtech.tn",
};
const experiences = [
  {
    role: "AI Engineering Intern",
    company: "SCSI.tn",
    period: "Jun 2026 – Jul 2026",
    bullets: [
      "Developed an end-to-end NL2SQL chatbot translating French business questions into executable MySQL queries for inventory, sales, accounting, and purchasing.",
      "Evaluated Qwen, Llama, and Mistral, and fine-tuned Qwen 7B with Unsloth and LoRA for domain-specific SQL generation.",
      "Built a FastAPI backend and Streamlit interface to validate, execute, correct, and display SQL results.",
    ],
    tags: [
      "Python",
      "FastAPI",
      "Streamlit",
      "MySQL",
      "LLMs",
      "LoRA",
      "Unsloth",
    ],
  },
  {
    role: "Cybersecurity Intern",
    company: "Minotore Company",
    period: "Jun 2025 – Jul 2025",
    bullets: [
      "Deployed a phishing simulation platform using Gophish and Postfix for security awareness and testing.",
      "Configured SSL/TLS certificates with Certbot and Let’s Encrypt, and tested realistic phishing scenarios in a virtualized environment.",
    ],
    tags: ["Gophish", "Postfix", "SSL/TLS", "Certbot", "VirtualBox"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "DraCode Company",
    period: "Jul 2024 – Aug 2024",
    bullets: [
      "Developed two full-stack web applications using Vue 3, Vuetify, and Nuxt.js with a shared PostgreSQL database.",
      "Built backend services and RESTful APIs with Node.js, Express.js, TypeORM, and TypeScript, and deployed database services using Docker.",
    ],
    tags: ["Vue 3", "Nuxt.js", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
  },
];
const projects = [
  {
    icon: "chart",
    category: "FINTECH · GENERATIVE AI & DATA",
    title: "FinSight — AI-Powered Financial Analytics",
    description:
      "Developed an interactive financial analytics platform for small businesses, featuring cash flow dashboards, budget tracking, CSV-based analysis, and an AI assistant powered by Qwen for natural-language financial queries.",
    tags: [
      "Python",
      "Streamlit",
      "Pandas",
      "Plotly",
      "Ollama",
      "Qwen3",
      "Groq",
      "FinTech",
    ],
    links: [
      {
        label: "Live Demo",
        icon: "arrow",
        href: "https://finsight-analytics-project.streamlit.app/",
      },
    ],
  },
  {
    icon: "chat",
    category: "GENERATIVE AI",
    title: "SCSI NL2SQL AI Chatbot",
    description:
      "Built an end-to-end AI chatbot that translates natural language business questions into executable SQL queries using open-source LLMs, FastAPI, Streamlit, and MySQL.",
    tags: [
      "Python",
      "FastAPI",
      "Streamlit",
      "MySQL",
      "LLMs",
      "Qwen",
      "Llama",
      "Mistral",
      "LoRA",
      "Unsloth",
      "Prompt Engineering",
    ],
  },
  {
    icon: "chart",
    category: "MACHINE LEARNING & DATA",
    title: "Mental Health Risk Prediction Dashboard",
    description:
      "Built a machine learning and data analytics dashboard to predict mental health risk using a Kaggle dataset, with preprocessing, exploratory analysis, model training, and visual insights.",
    tags: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Machine Learning",
      "Data Analysis",
      "Streamlit",
    ],
  },
  {
    icon: "spark",
    category: "APPLIED AI · WEB & MOBILE",
    title: "AI-Powered Smart Matching Platform",
    subtitle: "OffensyLab",
    description:
      "Developed an AI-powered service-matching platform allowing users to create home service requests through voice input and connect with suitable providers.",
    award: "Best Senior Project Award",
    tags: [
      "Gemini",
      "CatBoost",
      "React",
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    icon: "bag",
    category: "FULL-STACK & AI",
    title: "AI-Powered E-Commerce Assistant",
    description:
      "Developed a full-stack perfume e-commerce platform with secure authentication, product management, REST APIs, and an AI conversational assistant for product recommendations.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];
const skills = [
  ["Languages", ["Python", "Java", "C", "JavaScript", "TypeScript", "SQL"]],
  [
    "AI & Data",
    [
      "LLMs",
      "GenAI",
      "NL2SQL",
      "RAG",
      "Prompt Engineering",
      "Machine Learning",
      "Data Analysis",
    ],
  ],
  [
    "Backend & Web",
    [
      "FastAPI",
      "Streamlit",
      "Flask",
      "Node.js",
      "Express.js",
      "React",
      "React Native",
    ],
  ],
  ["Databases", ["MySQL", "PostgreSQL", "MongoDB"]],
  [
    "Tools & Automation",
    ["n8n", "Git", "Docker", "VS Code", "Jira", "Agile/Scrum"],
  ],
];
function Icon({ name, ...props }) {
  const paths = {
    github: (
      <path
        d="M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 5v-3.4c0-1 .1-1.6-.5-2.2 3.3-.4 6.8-1.6 6.8-7.3A5.7 5.7 0 0 0 19.8 4a5.3 5.3 0 0 0-.1-4S18.4-.4 15.4 1.6a14.6 14.6 0 0 0-7.8 0C4.6-.4 3.3 0 3.3 0a5.3 5.3 0 0 0-.1 4 5.7 5.7 0 0 0-1.5 4.4c0 5.7 3.5 6.9 6.8 7.3-.5.5-.6 1.1-.5 2.2v3.4"
        transform="translate(2 2) scale(.85)"
      />
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
      </>
    ),
    arrow: <path d="M7 17 17 7M7 7h10v10" />,
    down: <path d="m6 9 6 6 6-6" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    award: (
      <>
        <path d="M8 3h8v6a4 4 0 0 1-8 0V3Zm0 2H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4m-4 1v6m-4 2h8" />
      </>
    ),
    cap: (
      <>
        <path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v6c4 3 8 3 12 0v-6m4-2v7" />
      </>
    ),
    chat: (
      <>
        <path d="M21 11a8 8 0 0 1-8 8H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4Z" />
        <path d="M7 8h10M7 12h6" />
      </>
    ),
    chart: (
      <>
        <path d="M3 3v18h18M7 16v-5m5 5V7m5 9v-8" />
      </>
    ),
    spark: (
      <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" />
    ),
    bag: (
      <>
        <rect x="4" y="7" width="16" height="14" rx="2" />
        <path d="M8 8V6a4 4 0 0 1 8 0v2" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-3a6 6 0 0 1 12 0v3m1-17a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </>
    ),
  };
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
function SkillTag({ children }) {
  const [selected, setSelected] = useState(false);
  return (
    <button
      type="button"
      className="tag"
      aria-pressed={selected}
      onClick={() => setSelected(!selected)}
    >
      {children}
    </button>
  );
}
function Tags({ items, interactive = false, award = false }) {
  return (
    <div className="tags">
      {items.map((tag) =>
        interactive ? (
          <SkillTag key={tag}>{tag}</SkillTag>
        ) : (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ),
      )}
      {award && <span className="tag tag-green">Award winner</span>}
    </div>
  );
}
function Heading({ label, children }) {
  return (
    <header className="section-heading">
      {label && <p className="eyebrow">// {label}</p>}
      <h2>{children}</h2>
    </header>
  );
}
function SocialLink({ type, children, className = "" }) {
  return (
    <a
      className={className}
      href={socials[type]}
      target={type === "email" ? undefined : "_blank"}
      rel={type === "email" ? undefined : "noreferrer"}
    >
      <Icon name={type === "email" ? "mail" : type} />
      {children}
    </a>
  );
}

function App() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const updateActive = () => {
      const sections = navigation.map((name) =>
        document.getElementById(name.toLowerCase()),
      );
      const current = [...sections]
        .reverse()
        .find((section) => section.getBoundingClientRect().top <= 160);
      setActive(
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 8
          ? "contact"
          : current?.id || "home",
      );
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    const onEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("keydown", onEscape);
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a
          className="logo"
          href="#home"
          aria-label="Asma Turki home"
          onClick={() => setMenuOpen(false)}
        >
          AT
        </a>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <nav
          id="navigation"
          className={menuOpen ? "navigation open" : "navigation"}
          aria-label="Main navigation"
        >
          {navigation.map((name) => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              aria-current={
                active === name.toLowerCase() ? "location" : undefined
              }
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </a>
          ))}
        </nav>
      </header>
      <main id="main">
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="hero-kicker">
              <span /> SOFTWARE ENGINEERING · AI · DATA
            </p>
            <h1>Asma Turki</h1>
            <p className="hero-title">
              Software Engineering Student <span>|</span> AI & Data Engineering
            </p>
            <p className="hero-description">
              Final-year Software Engineering student passionate about AI, data
              analytics, GenAI, and building practical software solutions with
              business impact.
            </p>
            <div className="hero-links">
              <SocialLink type="linkedin" className="button primary">
                LinkedIn <Icon name="arrow" />
              </SocialLink>
              <SocialLink type="github" className="button secondary">
                GitHub <Icon name="arrow" />
              </SocialLink>
            </div>
            <div className="hero-stats">
              <div>
                <strong>3</strong>
                <span>Internship experiences</span>
              </div>
              <div>
                <strong>2×</strong>
                <span>Best project awards</span>
              </div>
              <div>
                <strong>Top 3</strong>
                <span>Excellence scholarship</span>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            GET TO KNOW ME
            <Icon name="down" />
          </a>
        </section>
        <div className="section-wrap">
          <section id="about" className="section">
            <Heading>About Me</Heading>
            <div className="about-grid">
              <div className="about-copy">
                <p>
                  I am a final-year Software Engineering student at{" "}
                  <strong>MedTech</strong>, with experience in AI engineering,
                  full-stack development, and data-driven applications.
                </p>
                <p>
                  I have worked on projects involving LLMs, NL2SQL, SQL
                  databases, machine learning, dashboards, FastAPI, Streamlit,
                  and AI-powered user experiences.
                </p>
                <p>
                  I am especially interested in{" "}
                  <strong>
                    applied AI, data analytics, GenAI, automation, and
                    FinTech-oriented solutions.
                  </strong>
                </p>
                <p className="location">
                  <Icon name="pin" /> Ariana, Tunisia
                </p>
              </div>
              <div className="highlights">
                <article className="highlight card">
                  <Icon name="cap" />
                  <div>
                    <h3>Software Engineering at MedTech</h3>
                    <p>B.Eng. · South Mediterranean University</p>
                    <span>2022 – 2027</span>
                  </div>
                </article>
                <article className="highlight card">
                  <Icon name="award" />
                  <div>
                    <h3>Academic Excellence Scholarship</h3>
                    <p>Top 3 scholarship recipient · Spring 2024</p>
                  </div>
                </article>
                <article className="highlight card">
                  <Icon name="spark" />
                  <div>
                    <h3>Two-Time Best Project Award</h3>
                    <p>Recognized in freshman and senior year</p>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
        <div className="section-wrap">
          <section id="experience" className="section">
            <Heading>Experience</Heading>
            <div className="timeline">
              {experiences.map((item) => (
                <article className="experience card" key={item.company}>
                  <div className="experience-header">
                    <div>
                      <h3>{item.role}</h3>
                      <p className="company">{item.company}</p>
                    </div>
                    <div className="period">
                      {item.period}
                      <span>Tunis, Tunisia</span>
                    </div>
                  </div>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <Tags items={item.tags} />
                </article>
              ))}
            </div>
          </section>
        </div>
        <div className="section-wrap">
          <section id="projects" className="section">
            <Heading>Projects</Heading>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article
                  className={`project card ${index === 0 ? "featured" : ""}`}
                  key={project.title}
                >
                  <div className="project-top">
                    <span className="project-icon">
                      <Icon name={project.icon} />
                    </span>
                    <span className="project-number">0{index + 1}</span>
                  </div>
                  <p className="project-category">{project.category}</p>
                  {project.award && (
                    <p className="award-badge">
                      <span aria-hidden="true">🏆</span> {project.award}
                    </p>
                  )}
                  <h3>{project.title}</h3>
                  {project.subtitle && (
                    <p className="project-subtitle">{project.subtitle}</p>
                  )}
                  <p className="project-description">{project.description}</p>
                  <Tags items={project.tags} award={Boolean(project.award)} />
                  {project.links?.length > 0 && (
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          className="button secondary"
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon name={link.icon} />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        </div>
        <div className="section-wrap">
          <section id="skills" className="section">
            <Heading>Skills</Heading>
            <div className="skills-grid">
              {skills.map(([name, items]) => (
                <article className="skill card" key={name}>
                  <h3>{name}</h3>
                  <Tags items={items} interactive />
                </article>
              ))}
            </div>
          </section>
        </div>
        <div className="section-wrap">
          <section id="awards" className="section">
            <Heading label="beyond the code">Awards & Leadership</Heading>
            <div className="awards-grid">
              {[
                [
                  "award",
                  "Top 3 Excellence Scholarship",
                  "MedTech · Spring 2024",
                  "Academic excellence",
                ],
                [
                  "award",
                  "1st Place · Best Senior Software Engineering Project",
                  "MedTech · OffensyLab",
                  "Project award",
                ],
                [
                  "spark",
                  "Best Freshman Project",
                  "MedTech · Freshman year",
                  "Project award",
                ],
                [
                  "people",
                  "Treasurer · IEEE WIE Affinity Group",
                  "IEEE SMU Student Branch · 2025",
                  "Leadership",
                ],
                [
                  "globe",
                  "IELTS Academic 7.5",
                  "C1 English proficiency",
                  "Certification",
                ],
              ].map(([icon, title, detail, category]) => (
                <article className="award-card card" key={title}>
                  <span className="award-icon">
                    <Icon name={icon} />
                  </span>
                  <div>
                    <p className="award-category">{category}</p>
                    <h3>{title}</h3>
                    <p>{detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
        <div className="section-wrap">
          <section id="contact" className="section contact">
            <Heading label="let’s connect">Get in Touch</Heading>
            <p className="contact-intro">
              Have a project in mind, an opportunity to share, or just want to
              say hello? I’d love to hear from you.
            </p>
            <div className="contact-links">
              <SocialLink type="email" className="contact-card card">
                <span>
                  <small>Email</small>asma.turki@medtech.tn
                </span>
                <Icon name="arrow" />
              </SocialLink>
              <SocialLink type="linkedin" className="contact-card card">
                <span>
                  <small>LinkedIn</small>Asma Turki
                </span>
                <Icon name="arrow" />
              </SocialLink>
              <SocialLink type="github" className="contact-card card">
                <span>
                  <small>GitHub</small>turkiasma
                </span>
                <Icon name="arrow" />
              </SocialLink>
            </div>
            <p className="location">
              <Icon name="pin" />
              Ariana, Tunisia
            </p>
          </section>
        </div>
      </main>
      <footer>
        <a href="#home" className="logo">
          AT
        </a>
        <p>© {new Date().getFullYear()} Asma Turki</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
export default App;
