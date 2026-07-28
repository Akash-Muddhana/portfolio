import React from "react";
import profilePic from "./assets/profile.png";

const projectCards = [
  {
    title: "Expense Tracker (MERN)",
    description:
      "Track transactions, calculate balances, and persist financial data with a clean responsive interface.",
    initials: "ET",
    accent: "from-emerald-500 to-teal-400",
    links: [
      { label: "Live", href: "https://expense-tracker-iy2y.vercel.app/" },
      {
        label: "Frontend",
        href: "https://github.com/Akash-Muddhana/expense-tracker",
      },
      {
        label: "Backend",
        href: "https://github.com/Akash-Muddhana/expense-tracker-backend",
      },
    ],
  },
  {
    title: "Task Manager (React)",
    description:
      "Add, edit, delete, and filter tasks with persistent storage for daily planning.",
    initials: "TM",
    accent: "from-amber-500 to-orange-400",
    links: [
      { label: "Live", href: "https://task-manager-nu-bay.vercel.app" },
      { label: "Code", href: "https://github.com/Akash-Muddhana/task-manager" },
    ],
  },
  {
    title: "Currency Converter",
    description:
      "Convert currencies using live exchange rates through a simple API-powered UI.",
    initials: "CC",
    accent: "from-sky-500 to-cyan-400",
    links: [
      { label: "Live", href: "https://currency-converter-akash.vercel.app/" },
      {
        label: "Code",
        href: "https://github.com/Akash-Muddhana/currency-converter",
      },
    ],
  },
];

const skills = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Database", items: ["MongoDB"] },
  { title: "Tools", items: ["Git", "GitHub", "Vercel"] },
];

function Tag({ children }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/8 px-3 py-1 text-sm text-slate-200">
      {children}
    </span>
  );
}

function ButtonLink({ href, children, variant = "secondary" }) {
  const styles =
    variant === "primary"
      ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
      : "border border-white/10 bg-white/8 text-slate-100 hover:bg-white/14";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </a>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:py-12">
        <header className="mb-12 grid gap-8 border-b border-white/10 pb-10 md:grid-cols-[auto_1fr] md:items-center">
          <div className="mx-auto md:mx-0">
            <div className="rounded-lg bg-gradient-to-br from-cyan-400 via-emerald-400 to-amber-300 p-1 shadow-2xl shadow-cyan-950/30">
              <img
                src={profilePic}
                alt="Akash avatar"
                className="h-32 w-32 rounded-md object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              MERN Stack Developer
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Akash Muddhana
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Frontend developer building polished React apps and full-stack
              MERN projects, with a growing focus on ML and AI.
            </p>

            <nav className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href="#projects"
                className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="rounded-lg border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/14"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/14"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main>
          <section id="projects" className="mb-16">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
                  Featured Work
                </p>
                <h2 className="mt-2 text-3xl font-bold">Projects</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-400">
                Practical apps with real CRUD flows, API integration, auth, and
                deployment experience.
              </p>
            </div>

            <article className="mb-6 overflow-hidden rounded-lg border border-cyan-300/25 bg-[#101821] shadow-2xl shadow-cyan-950/30">
              <div className="grid gap-0 lg:grid-cols-[1.25fr_0.75fr]">
                <div className="p-6 sm:p-8">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-md bg-cyan-300 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-950">
                      Main Highlight
                    </span>
                    <span className="text-sm font-medium text-cyan-200">
                      Full-stack MERN school management system
                    </span>
                  </div>

                  <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    Sai Surya - School Management Web App
                  </h3>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                    Built a deployed school management platform with role-based
                    authentication for principals and teachers. The app includes
                    student and teacher management, attendance tracking, notice
                    posting, REST APIs, secure authentication, and MongoDB data
                    storage.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Tag>React</Tag>
                    <Tag>Node.js</Tag>
                    <Tag>Express.js</Tag>
                    <Tag>MongoDB</Tag>
                    <Tag>REST APIs</Tag>
                    <Tag>Authentication</Tag>
                    <Tag>Vercel</Tag>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <ButtonLink
                      href="https://sai-surya-frontend.vercel.app"
                      variant="primary"
                    >
                      View Live Demo
                    </ButtonLink>
                    <ButtonLink href="https://github.com/Akash-Muddhana/sai-surya-frontend">
                      Frontend Code
                    </ButtonLink>
                    <ButtonLink href="https://github.com/Akash-Muddhana/sai-surya-backend">
                      Backend Code
                    </ButtonLink>
                  </div>
                </div>

                <div className="border-t border-white/10 bg-gradient-to-br from-cyan-500 via-emerald-500 to-amber-300 p-6 text-slate-950 lg:border-l lg:border-t-0">
                  <div className="flex h-full min-h-64 flex-col justify-between rounded-lg bg-white/78 p-5 shadow-xl">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-700">
                        Sai Surya
                      </p>
                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="rounded-lg bg-slate-950 p-4 text-white">
                          <p className="text-2xl font-black">2</p>
                          <p className="mt-1 text-xs text-slate-300">
                            Secure roles
                          </p>
                        </div>
                        <div className="rounded-lg bg-white p-4 shadow-sm">
                          <p className="text-2xl font-black">4+</p>
                          <p className="mt-1 text-xs text-slate-600">
                            Core modules
                          </p>
                        </div>
                        <div className="rounded-lg bg-white p-4 shadow-sm">
                          <p className="text-2xl font-black">CRUD</p>
                          <p className="mt-1 text-xs text-slate-600">
                            Management flows
                          </p>
                        </div>
                        <div className="rounded-lg bg-slate-950 p-4 text-white">
                          <p className="text-2xl font-black">API</p>
                          <p className="mt-1 text-xs text-slate-300">
                            REST backend
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-cyan-200">
                      Principal and teacher workflows in one deployed app
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-5 md:grid-cols-3">
              {projectCards.map((project) => (
                <article
                  key={project.title}
                  className="rounded-lg border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/8"
                >
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${project.accent} text-sm font-black text-slate-950`}
                  >
                    {project.initials}
                  </div>
                  <h4 className="text-lg font-bold">{project.title}</h4>
                  <p className="mt-2 min-h-20 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <ButtonLink key={link.href} href={link.href}>
                        {link.label}
                      </ButtonLink>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="mb-16">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-300">
                Toolkit
              </p>
              <h2 className="mt-2 text-3xl font-bold">Skills</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="rounded-lg border border-white/10 bg-white/5 p-5"
                >
                  <h4 className="font-semibold text-white">{skill.title}</h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="about"
            className="mb-16 rounded-lg border border-white/10 bg-white/5 p-6 sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              About
            </p>
            <h2 className="mt-2 text-3xl font-bold">About Me</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              Computer Science undergraduate skilled in frontend development and
              modern web technologies. I build responsive applications with
              JavaScript and React, and I have hands-on experience developing
              full-stack MERN applications using MongoDB, Express.js, React, and
              Node.js.
            </p>
          </section>

          <section id="contact" className="pb-4">
            <div className="flex flex-col gap-5 rounded-lg border border-white/10 bg-[#101821] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
                  Contact
                </p>
                <h2 className="mt-2 text-3xl font-bold">Let's Connect</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:akash.muddhana.dev@gmail.com"
                  className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Email
                </a>
                <ButtonLink href="https://github.com/Akash-Muddhana">
                  GitHub
                </ButtonLink>
                <ButtonLink href="https://www.linkedin.com/in/akash-muddhana-aba9b0331">
                  LinkedIn
                </ButtonLink>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
