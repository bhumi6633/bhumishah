"use client";

import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen w-full bg-[#1c1c1e] px-4 py-16 flex flex-col items-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#ffda61] uppercase tracking-wider text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mb-16">
        <ProjectCard
          title="DermaCare"
          image="/images/DermaCare.jpg"
          github="https://github.com/bhumi6633/DermaCare"
          live="https://www.youtube.com/watch?v=j2ykAA4lfdY"
          summary="AI-powered skincare barcode scanner with real-time analysis."
          tech={["Flask", "Tailwind CSS", "QuaggaJS", "INCI Beauty API"]}
          details={[
            "Scan barcodes to identify skincare product ingredients instantly",
            "Highlights harmful chemicals based on medical research",
            "Generates safety score based on user skin profile",
            "Uses Gemini AI to suggest safer alternatives and skincare tips"
          ]}
          imageClass="object-cover"
        />

        <ProjectCard
          title="SparkPath"
          image="/images/SparkPath.png"
          github="https://github.com/bhumi6633/SparkPath"
          live="https://www.youtube.com/watch?v=6iyYuZ_SYlc"
          summary="AI-Powered EV Rideshare for a Greener, Smarter Future."
          tech={["Flask", "Leaflet.js", "MongoDB","React.js","OpenRouteService API"]}
          details={[
            "Post a Ride with route, time, and details",
            "Find a Ride using AI + route suggestion",
            "Live CO₂ & trees saved stats"
          ]}
          imageClass="object-cover"
        />

        <ProjectCard
          title="Mindful Harmony"
          image="/images/MindufulHarmony.png"
          github="https://github.com/bhumi6633/Mindful-Harmony"
          live="https://www.youtube.com/watch?v=fK1wVEYR0nc"
          summary="A mental health web app to help you feel better."
          tech={["React.js", "Tailwind CSS", "Spotify API", "MongoDB", "Flask"]}
          details={[
            "AI therapy journal with quick supportive replies",
            "Generates Spotify playlists tailored to how you feel",
            "Activity suggestions with timers and streaks",
            "Anonymous venting platform with emoji replies"
          ]}
          imageClass="object-cover"
        />

        <ProjectCard
          title="PennyWise"
          image="/images/PennyWise.png"
          github="https://github.com/bhumi6633/PennyWise"
          live="https://pennywise-2.onrender.com/"
          summary="A simple personal finance app for tracking, budgeting, and building healthy money habits."
          tech={["React.js", "Tailwind CSS", "Flask", "PostgreSQL(SQLAlchemy)"]}
          details={[
            "Add and manage your daily spending with category, description, and date",
            "Get smart tips and forecasts based on your unique spending habits",
            "Set monthly goals and monitor how close you are to reaching or overspending them"
          ]}
          imageClass="object-cover"
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
          imageClass="object-cover"
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
          imageClass="object-cover"
        />
      </div>

      {/* View More Section */}
      <div className="w-full max-w-4xl text-center">
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Explore more projects on my GitHub!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/bhumi6633?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#ffda61] text-black font-semibold rounded-lg hover:bg-white hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
          >
            View All Projects →
          </a>
          <a
            href="mailto:b32shah@uwaterloo.ca"
            className="px-8 py-4 border-2 border-[#ffda61] text-[#ffda61] font-semibold rounded-lg hover:bg-[#ffda61] hover:text-black transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105"
          >
            Let&apos;s Collaborate
          </a>
        </div>
      </div>
    </section>
  );
}
