"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  image: string;
  github: string;
  live: string;
  summary: string;
  tech: string[];
  details: string[];
  imageClass?: string;
}

export default function ProjectCard({ title, image, github, live, summary, tech, details, imageClass }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 bg-transparent border border-[#2c2c2e] rounded-md text-sm">
      <div className="relative w-full aspect-video mb-3 rounded-md overflow-hidden border border-[#333] bg-[#1a1a1a]">
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={800}
          height={450}
          className={`rounded-md object-cover w-full h-full ${imageClass || ''}`}
        />
      </div>

      <div className="flex items-center gap-3 text-lg font-bold mb-1">
        <h3 className="text-white uppercase">{title}</h3>
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-[#ffda61] hover:text-white">
          <FaGithub />
        </a>
        <a href={live} target="_blank" rel="noopener noreferrer" className="text-[#ffda61] hover:text-white">
          <FaLink />
        </a>
      </div>

      <p className="text-gray-300 text-sm">{summary}</p>

      <div className="flex flex-wrap mt-2 gap-2">
        {tech.map((tag, index) => (
          <span key={index} className="bg-[#333] text-[#ffda61] px-2 py-0.5 text-xs rounded-full">{tag}</span>
        ))}
      </div>

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-3 text-xs text-[#ffda61] hover:text-white underline underline-offset-2"
      >
        {showDetails ? "Hide Details" : "View More"}
      </button>

      {showDetails && (
        <ul className="mt-2 list-disc pl-4 text-xs text-gray-400 space-y-1">
          {details.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
