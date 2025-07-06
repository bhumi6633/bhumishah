"use client";

import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen w-full bg-[#1c1c1e] px-4 py-16 flex flex-col items-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#ffda61] uppercase tracking-wider text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
        <ProjectCard
          title="DermaCare"
          image="/images/dermacare.png"
          github="https://github.com/bhumi6633/DermaCare"
          live="https://www.youtube.com/watch?v=j2ykAA4lfdY"
          summary="AI-powered skincare barcode scanner with real-time analysis."
          tech={["Flask", "Tailwind CSS", "QuaggaJS", "Gemini API", "INCI Beauty API"]}
          details={[
            "Scan barcodes to identify skincare product ingredients instantly",
            "Highlights harmful chemicals based on medical research",
            "Generates safety score based on user skin profile",
            "Uses Gemini AI to suggest safer alternatives and skincare tips"
          ]}
        />

        <ProjectCard
          title="EquityPulse"
          image="/images/EquityPulse.png"
          github="https://github.com/bhumi6633/EquityPulse"
          live="https://www.youtube.com/watch?v=fhOKYrtcuxo"
          summary="A live-stock tracker inspired by the Bloomberg Terminal."
          tech={["Flask", "Tailwind CSS", "yFinance API", "Chart.js", "HTML", "JavaScript"]}
          details={[
            "Displays real-time stock prices and percentage change",
            "Plots historical price data using Chart.js",
            "Includes dark mode toggle and company search",
            "Supports watchlist and recent searches",
          ]}
        />

        <ProjectCard
          title="SeaSentinel"
          image="/images/SeaSentinal.jpg"
          github="https://github.com/bhumi6633/SeaSentinel"
          live="https://www.youtube.com/shorts/cziz5092vsU"
          summary="Marine data logger for ocean temperature shifts and climate monitoring, built on STM32."
          tech={["C++", "STM32", "Assembly", "Embedded Systems", "SD Logging"]}
          details={[
            "Real-time marine temperature logging using STM32",
            "Supports year-long data tracking to analyze global warming trends",
            "Displays Celsius, Fahrenheit, Kelvin",
            "Shows average temperature and min-max thresholds"
          ]}
        />

        <div className="w-full h-full flex flex-col justify-center items-center p-4 border border-[#2c2c2e] rounded-md text-center hover:bg-[#2a2a2a] transition">
          <h3 className="text-white text-lg font-semibold mb-2 uppercase">More Projects</h3>
          <p className="text-gray-400 text-sm mb-4 px-2">Explore more utilities, tools, and experiments in my GitHub.</p>
          <a
            href="https://github.com/bhumi6633?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-[#ffda61] text-black text-sm font-semibold rounded hover:bg-white transition"
          >
            View More →
          </a>
        </div>
      </div>
    </section>
  );
}
