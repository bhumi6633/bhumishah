"use client";

import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen w-full bg-[#1c1c1e] px-4 py-16 flex flex-col items-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#ffda61] uppercase tracking-wider text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mb-12">
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
          title="SparkPath"
          image="/images/SparkPath.png"
          github="https://github.com/bhumi6633"
          live="#"
          summary="Description for SparkPath project."
          tech={["Tech 1", "Tech 2", "Tech 3"]}
          details={[
            "Feature 1 description",
            "Feature 2 description",
            "Feature 3 description",
            "Feature 4 description"
          ]}
        />

        <ProjectCard
          title="Mindful Harmony"
          image="/images/Minful_Harmony.png"
          github="https://github.com/bhumi6633"
          live="#"
          summary="Description for Mindful Harmony project."
          tech={["Tech 1", "Tech 2", "Tech 3"]}
          details={[
            "Feature 1 description",
            "Feature 2 description",
            "Feature 3 description",
            "Feature 4 description"
          ]}
          imageClass="object-contain"
        />

        <ProjectCard
          title="PennyWise"
          image="/images/pennywise-logo.png"
          github="https://github.com/bhumi6633"
          live="#"
          summary="Description for PennyWise project."
          tech={["Tech 1", "Tech 2", "Tech 3"]}
          details={[
            "Feature 1 description",
            "Feature 2 description",
            "Feature 3 description",
            "Feature 4 description"
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
      </div>

      {/* View More Section */}
      <div className="w-full max-w-4xl text-center">
        <div className="bg-[#2c2c2e] rounded-lg p-8 border border-[#3c3c3e] hover:bg-[#3a3a3a] transition duration-300">
          <h3 className="text-2xl font-bold text-[#ffda61] mb-4 uppercase tracking-wider">
            More Projects
          </h3>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Explore more utilities, tools, experiments, and side projects in my GitHub repository.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/bhumi6633?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#ffda61] text-black font-semibold rounded-lg hover:bg-white hover:scale-105 transition duration-200 flex items-center justify-center gap-2"
            >
              View All Projects →
            </a>
            <a
              href="mailto:b32shah@uwaterloo.ca"
              className="px-6 py-3 border border-[#ffda61] text-[#ffda61] font-semibold rounded-lg hover:bg-[#ffda61] hover:text-black transition duration-200 flex items-center justify-center gap-2"
            >
              Let&apos;s Collaborate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
