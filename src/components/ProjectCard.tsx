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
    <div className="w-full h-full flex flex-col justify-between p-4 bg-[#1a1a1a] border border-[#2c2c2e] rounded-lg text-sm hover:border-[#ffda61] hover:bg-[#2a2a2a] transition-all duration-300 group">
      <div className="relative w-full aspect-video mb-3 rounded-md overflow-hidden border border-[#333] bg-[#1a1a1a] group-hover:border-[#ffda61] transition-colors duration-300">
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={800}
          height={450}
          className={`rounded-md object-cover w-full h-full ${imageClass || ''} group-hover:scale-105 transition-transform duration-300`}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex items-center gap-3 text-lg font-bold mb-2">
        <h3 className="text-white uppercase group-hover:text-[#ffda61] transition-colors duration-300">{title}</h3>
        <div className="flex gap-2">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-[#ffda61] hover:text-white transition-colors duration-200 hover:scale-110">
            <FaGithub />
          </a>
          <a href={live} target="_blank" rel="noopener noreferrer" className="text-[#ffda61] hover:text-white transition-colors duration-200 hover:scale-110">
            <FaLink />
          </a>
        </div>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed mb-3">{summary}</p>

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-auto text-xs text-[#ffda61] hover:text-white underline underline-offset-2 transition-colors duration-200 font-medium"
      >
        {showDetails ? "Hide Details" : "View More"}
      </button>

      {showDetails && (
        <div className="mt-3 space-y-3 border-t border-[#333] pt-3">
          <div className="flex flex-wrap gap-2">
            {tech.map((tag, index) => (
              <span key={index} className="bg-[#333] text-[#ffda61] px-2 py-1 text-xs rounded-full border border-[#444] hover:border-[#ffda61] transition-colors duration-200">{tag}</span>
            ))}
          </div>
          <ul className="list-disc pl-4 text-xs text-gray-400 space-y-1">
            {details.map((point, idx) => (
              <li key={idx} className="leading-relaxed">{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
