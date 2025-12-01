import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      
      <header className="max-w-4xl mx-auto flex flex-col gap-2 mb-16">
        <h1 className="text-4xl font-bold">Akash Muddhana</h1>
        <p className="text-lg text-gray-300">Frontend Developer | Learning ML/AI</p>
        <div className="flex gap-4 mt-3">
          <a href="#projects" className="px-4 py-2 bg-blue-600 rounded-xl hover:bg-blue-700">Projects</a>
          <a href="#skills" className="px-4 py-2 bg-gray-800 rounded-xl hover:bg-gray-700">Skills</a>
          <a href="#contact" className="px-4 py-2 bg-gray-800 rounded-xl hover:bg-gray-700">Contact</a>
        </div>
      </header>

      
      <section id="projects" className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-gray-900 p-5 rounded-2xl shadow-lg border border-gray-800">
            <h3 className="text-xl font-bold mb-2">E-commerce Homepage Clone</h3>
            <p className="text-gray-400 mb-3">A responsive e-commerce UI with search, dynamic product rendering, and add‑to‑cart counter.</p>
            <p className="text-sm text-gray-500 mb-4">Tech: HTML, CSS, JavaScript (Enhanced)</p>
            <div className="flex gap-3">
              <a href=" https://akash-muddhana.github.io/Amazon-clone/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 rounded-xl hover:bg-blue-700">Live Demo</a>
              <a href="https://github.com/Akash-Muddhana/Amazon-Clone" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 rounded-xl hover:bg-gray-700">GitHub</a>
            </div>
          </div>

          
          <div className="bg-gray-900 p-5 rounded-2xl shadow-lg border border-gray-800">
            <h3 className="text-xl font-bold mb-2">React E‑Commerce UI (Placeholder)</h3>
            <p className="text-gray-400 mb-3">Upcoming improved version using React + Tailwind. Modular components and better product rendering.</p>
            <p className="text-sm text-gray-500 mb-4">Tech: React, Tailwind CSS</p>
            <div className="flex gap-3">
              <a href="#" className="px-4 py-2 bg-gray-700 rounded-xl cursor-not-allowed opacity-50">Coming Soon</a>
            </div>
          </div>
        </div>
      </section>

    
      <section id="skills" className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
            <h4 className="font-semibold mb-1">Languages</h4>
            <p className="text-gray-400 text-sm">HTML, CSS, JavaScript, Python</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
            <h4 className="font-semibold mb-1">Frameworks</h4>
            <p className="text-gray-400 text-sm">React, Tailwind CSS</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
            <h4 className="font-semibold mb-1">Tools</h4>
            <p className="text-gray-400 text-sm">Git, GitHub, Vercel</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
            <h4 className="font-semibold mb-1">Currently Learning</h4>
            <p className="text-gray-400 text-sm">Machine Learning, APIs</p>
          </div>
        </div>
      </section>

      
      <section id="about" className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed max-w-2xl">
          I build clean and fast web applications using modern frontend tools. I learn fast, execute fast, and constantly push myself to grow. Currently improving JavaScript and React, and preparing for ML projects.
        </p>
      </section>

     
      <section id="contact" className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-400">Email: akashmuddhana6969@gmail.com</p>
        <p className="text-gray-400">GitHub: https://github.com/Akash-Muddhana</p>
        <p className="text-gray-400">LinkedIn: www.linkedin.com/in/akash-muddhana-aba9b0331</p>
      </section>
    </div>
  );
}
