"use client";

import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen w-full bg-[#1c1c1e] px-6 py-20 text-white flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-7xl font-bold mb-12 text-[#ffda61] uppercase tracking-wider text-center">
        Experience
      </h2>

      <div className="max-w-5xl w-full space-y-10">
        {/* PRGX */}
        <div className="bg-[#2c2c2e] rounded-md shadow-sm p-4 md:p-6 flex gap-6 items-start">
          <div className="flex items-center justify-center rounded-md">
            <Image
              src="/images/PRGX.jpg"
              alt="PRGX Logo"
              width={300} 
              height={600} 
              className="object-contain rounded-md"
            />
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-[#ffda61]">
              PRGX Global Inc. - Data Engineering Intern
            </h4>
            <p className="text-base text-gray-300 mb-2 italic">
              Apr 2025 – Aug 2025 | Mississauga, Ontario, Canada
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-xs md:text-sm">
              <li>Automated client reporting workflows using Python by validating structured data, standardizing output formats, and performing line count analysis to support internal audits.</li>
              <li>Leveraged SQL Server to synchronize rebate, inventory, and client datasets, enabling consistent, audit-ready analytics.</li>
              <li> Built Excel VBA macros to automate multi-source data consolidation, cutting manual reporting time significantly.</li>
            </ul>
            {/* Tech stack row */}
            <div className="flex flex-wrap gap-2 mb-2 font-bold  text-white text-base">
                <span className="bg-[#333333] px-2 py-1 rounded-md">MSSQL</span>
                <span className="bg-[#333333] px-2 py-1 rounded-md">Excel VBA</span>
                <span className="bg-[#333333] px-2 py-1 rounded-md">Python</span>
            </div>
          </div>
        </div>

        {/* Biotron */}
        <div className="bg-[#2c2c2e] rounded-md shadow-sm p-4 md:p-6 flex gap-6 items-start">
          <div className="flex items-center justify-center rounded-md">
            <Image
              src="/images/biotron.jpeg"
              alt="Biotron Logo"
              width={300} 
              height={600} 
              className="object-contain rounded-md"
            />
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-[#ffda61]">
              UW Biomechatronics Design Team - EMG Software Developer
            </h4>
            <p className="text-base text-gray-300 mb-2 italic">
              May 2025 – Present | Waterloo, Ontario, Canada
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-xs md:text-sm">
              <li>Designed and implemented the EMG data collection protocol for bicep motion analysis, including electrode placement, signal calibration, and repeatable recording processes.</li>
              <li>Built a custom Python GUI for data acquisition, sensor validation, calibration, and motion trial coordination.</li>
              <li>Defined structured CSV output format with motion/event labeling, timestamping, and dual-sensor logging for downstream ML analysis.</li>
              {/* Tech stack row */}
            <div className="flex flex-wrap gap-2 mb-2 font-bold  text-white text-base">
                <span className="bg-[#333333] px-2 py-1 rounded-md">Python</span>
                <span className="bg-[#333333] px-2 py-1 rounded-md">GUI</span>
                <span className="bg-[#333333] px-2 py-1 rounded-md">C++</span>
                <span className="bg-[#333333] px-2 py-1 rounded-md">ESP32</span>
            </div>
            </ul>
          </div>
        </div>

        {/* Electrium Mobility */}
        <div className="bg-[#2c2c2e] rounded-md shadow-sm p-4 md:p-6 flex gap-6 items-start">
          <div className="flex items-center justify-center rounded-md">
            <Image
              src="/images/ElectriumMobility.jpeg"
              alt="EM Logo"
              width={250} 
              height={600} 
              className="object-contain rounded-md"
            />
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-[#ffda61]">
              Electrium Mobility - Web Developer
            </h4>
            <p className="text-base text-gray-300 mb-2 italic">
              December 2024 – April 2025 | Waterloo, Ontario, Canada
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-xs md:text-sm">
              <li>Developed real-time inventory validation at checkout using PostgreSQL to prevent overselling and ensure product availability.</li>
              <li>Integrated Stripe API to process secure payments and streamline the user transaction flow.</li>
              <li>Automated post-checkout operations, including confirmation emails to users, admin alerts to Electrium, and live stock updates in the database.</li>
              {/* Tech stack row */}
            <div className="flex flex-wrap gap-2 mb-2 font-bold  text-white text-base">
                <span className="bg-[#333333] px-2 py-1 rounded-md">Next.js</span>
                <span className="bg-[#333333] px-2 py-1 rounded-md">PostgreSQL</span>
                <span className="bg-[#333333] px-2 py-1 rounded-md">Tailwind CSS</span>
                <span className="bg-[#333333] px-2 py-1 rounded-md">Stripe API</span>
            </div>
            </ul>
          </div>
        </div>

        {/* Biz Insights */}
        <div className="bg-[#2c2c2e] rounded-md shadow-sm p-4 md:p-6 flex gap-6 items-start">
          <div className="flex items-center justify-center rounded-md">
            <Image
              src="/images/bizinsightslogo.jpeg"
              alt="bizinsights Logo"
              width={250} 
              height={600} 
              className="object-contain rounded-md"
            />
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-[#ffda61]">
              Biz-Insights IT Solutions LLP - Software Engineering Intern
            </h4>
            <p className="text-base text-gray-300 mb-2 italic">
              May 2024 – August 2024 | Newark, California, United States(Remote)
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-xs md:text-sm">
              <li>Developed an automated HR Data Management System by scripting Excel download and tracking workflows from SharePoint</li>
              <li>Consolidated data from multiple sources into a SQL Server database, applying cleaning and standardization logic to maintain accuracy.</li>
              <li>Built interactive Power BI dashboards for HR to monitor employee distribution, service types, and training conversion rates.</li>
              {/* Tech stack row */}
            <div className="flex flex-wrap gap-2 mb-2 font-bold  text-white text-base">
                <span className="bg-[#333333] px-2 py-1 rounded-md">Python</span>
                <span className="bg-[#333333] px-2 py-1 rounded-md">MYSQL</span>
                <span className="bg-[#333333] px-2 py-1 rounded-md">PowerBI</span>
            </div>
            </ul>
          </div>
        </div>
        
        </div>
    </section>
  );
}
