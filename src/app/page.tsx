'use client';

import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";



export default function Home(): JSX.Element {
  return (
    <>
      {/* HERO SECTION */}
      <main className="relative min-h-screen bg-[#1c1c1e] text-white px-4 sm:px-6 md:px-8 py-12 overflow-hidden flex flex-col items-center justify-center text-center scroll-smooth">
        <div className="absolute left-[-25%] top-[-25%] w-[60vw] h-[60vw] bg-[#08040472] rounded-full blur-3xl opacity-20 pointer-events-none" />

        <nav className="absolute top-6 left-0 right-0 flex justify-center gap-30 text-lg sm:text-xl font-mono text-[#ffda61] tracking-widest z-50">
          <a href="#home" className="hover:text-white hover:underline underline-offset-4 transition">HOME</a>
          <a href="#about" className="hover:text-white transition">ABOUT</a>
          <a href="#projects" className="hover:text-white hover:underline underline-offset-4 transition">PROJECTS</a>
          <a href="#experience" className="hover:text-white hover:underline underline-offset-4 transition">EXPERIENCE</a>
        </nav>

        <h1 id="home" className="text-6xl md:text-8xl font-bold tracking-widest uppercase font-[PlayfairDisplay] text-white mt-4">
          BHUMI SHAH
        </h1>

        <p className="mt-4 text-xl md:text-3xl text-[#e0e0e0] font-light font-sans">
          Computer Engineering @ University of Waterloo
        </p>

        <p className="mt-5 max-w-xl text-[#e1ddddfd] text-base sm:text-lg leading-relaxed font-sans font-light">
          Interested in systems, markets, and making things run fast.
        </p>

        <div className="flex gap-6 mt-6 text-2xl text-[#ffda61]">
          <a href="https://github.com/bhumi6633" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-white transition duration-200"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/bhumi-shah980/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-white transition duration-200"><FaLinkedin /></a>
          <a href="https://x.com/Bhumi6633" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-white transition duration-200"><FaXTwitter /></a>
          <a href="mailto:b32shah@uwaterloo.ca" className="hover:text-white transition duration-200"><FaEnvelope /></a>
        </div>
      </main>

      {/* ABOUT SECTION */}
      <section id="about" className="min-h-screen w-full bg-[#1c1c1e] px-6 py-20 flex flex-col items-center text-white">
        <h2 className="text-4xl md:text-7xl font-bold mb-12 text-[#ffda61] uppercase tracking-wider text-center">About Me</h2>
        <div className="max-w-4xl w-full text-left space-y-6">
          <p className="text-xl font-semibold text-white">Hi, I'm Bhumi — a Computer Engineering student at the University of Waterloo.</p>
          <p className="text-gray-300 leading-relaxed">I’m passionate about using software to design tools that solve real-world problems. My curiosity lies at the intersection of:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 pl-2">
            <li><strong>Engineering</strong> — building resilient systems</li>
            <li><strong>Finance</strong> — modeling markets & strategic analysis</li>
            <li><strong>Problem-solving</strong> — scaling solutions with clarity and purpose</li>
          </ul>
          <p className="text-gray-300 leading-relaxed">Whether it’s coding backend systems, debugging data pipelines, or exploring quant models, I’m always chasing clean logic and smart outcomes.</p>
          <div className="text-gray-400 leading-relaxed">
            <p className="mb-2">When I’m not deep in code, you’ll catch me:</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Vibing to Spotify playlists</li>
              <li>Binge-watching <em>Suits</em> (Harvey’s mindset hits different)</li>
              <li>Analyzing stock graphs with $0 invested — <em>for now...</em></li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <ProjectsSection />

      {/* EXPERIENCE SECTION */}
      <ExperienceSection/>

    </>
  );
}
