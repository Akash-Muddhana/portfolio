import React from "react";
import profilePic from "./assets/profile.png";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header / Hero */}
        <header className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-12">
          <div className="mx-auto md:mx-0 flex-shrink-0">
            <img
              src={profilePic}
              alt="Akash avatar"
              className="w-32 h-32 rounded-full ring-2 ring-blue-500 shadow-lg object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Akash Muddhana
            </h1>
            <p className="text-gray-300 mt-2">
              Frontend Developer — Exploring ML & AI
            </p>

            <nav className="flex gap-3 mt-4">
              <a
                href="#projects"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full shadow-sm"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full shadow-sm"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full shadow-sm"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Projects */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Featured */}
            <article className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-800 transform hover:-translate-y-1 transition">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold">Expense Tracker (MERN)</h3>
                  <p className="text-gray-400 mt-2">
                    Track transactions, calculate balances, and persist data to
                    MongoDB . Clean UI and responsive layout.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-sm">
                    <span className="bg-gray-800 px-2 py-1 rounded-full">
                      MERN
                    </span>
                    <span className="bg-gray-800 px-2 py-1 rounded-full">
                      Tailwind
                    </span>
                    <span className="bg-gray-800 px-2 py-1 rounded-full">
                      MongoDB
                    </span>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <a
                      href="https://expense-tracker-iy2y.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                      Live
                    </a>
                    <a
                      href="https://github.com/Akash-Muddhana/expense-tracker"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                    >
                     frontend Code
                    </a>
                     <a
                      href="https://github.com/Akash-Muddhana/expense-tracker-backend"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                    >
                     backend Code
                    </a>
                  </div>
                </div>
                <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                  ET
                </div>
              </div>
            </article>

            {/* Other projects grid */}
            <div className="grid gap-6">
              <article className="bg-gray-900 p-5 rounded-2xl shadow-md border border-gray-800 flex items-start gap-4 hover:shadow-lg transition">
                <div className="flex-1">
                  <h4 className="font-semibold">Task Manager (React)</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    Add/edit/delete tasks with filters and persistent storage.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <a
                      href="https://task-manager-nu-bay.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm px-3 py-1 bg-blue-600 rounded"
                    >
                      Live
                    </a>
                    <a
                      href="https://github.com/Akash-Muddhana/task-manager"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm px-3 py-1 bg-gray-800 rounded"
                    >
                      Code
                    </a>
                  </div>
                </div>
                <div className="w-12 h-12 bg-indigo-600 rounded flex items-center justify-center">
                  TM
                </div>
              </article>

              <article className="bg-gray-900 p-5 rounded-2xl shadow-md border border-gray-800 flex items-start gap-4 hover:shadow-lg transition">
                <div className="flex-1">
                  <h4 className="font-semibold">Currency Converter</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    Real-time rates via API with a simple, intuitive UI.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <a
                      href="https://currency-converter-akash.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm px-3 py-1 bg-blue-600 rounded"
                    >
                      Live
                    </a>
                    <a
                      href="https://github.com/Akash-Muddhana/currency-converter"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm px-3 py-1 bg-gray-800 rounded"
                    >
                      Code
                    </a>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-600 rounded flex items-center justify-center">
                  CC
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
              <h4 className="font-semibold">Frontend</h4>
              <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-300">
                <span className="bg-gray-800 px-2 py-1 rounded">HTML</span>
                <span className="bg-gray-800 px-2 py-1 rounded">CSS</span>
                <span className="bg-gray-800 px-2 py-1 rounded">
                  JavaScript
                </span>
                <span className="bg-gray-800 px-2 py-1 rounded">React</span>
              </div>
            </div>
            <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
              <h4 className="font-semibold">Database</h4>
              <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-300">
                <span className="bg-gray-800 px-2 py-1 rounded">MongoDB</span>
              </div>
            </div>
            <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
              <h4 className="font-semibold">Frameworks</h4>
              <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-300">
                <span className="bg-gray-800 px-2 py-1 rounded">React</span>
              </div>
            </div>

            <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
              <h4 className="font-semibold">Tools</h4>
              <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-300">
                <span className="bg-gray-800 px-2 py-1 rounded">Git</span>
                <span className="bg-gray-800 px-2 py-1 rounded">Github</span>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed max-w-2xl">
            Computer Science undergraduate skilled in frontend development and
            modern web technologies. Strong foundation in JavaScript, React, and
            Python with hands-on experience building responsive applications.
            Experienced in developing full-stack applications using the MERN
            stack (MongoDB, Express.js, React, Node.js).
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:akashmuddhana6969@gmail.com"
              className="px-4 py-2 bg-blue-600 rounded-lg w-fit"
            >
              Email
            </a>
            <a
              href="https://github.com/Akash-Muddhana"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-800 rounded-lg w-fit"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/akash-muddhana-aba9b0331"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-800 rounded-lg w-fit"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
