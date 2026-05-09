import React from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function FeaturedProjects({ project }) {
  return (
    <div>
      <div className=" h-auto group bg-[#C0C9EE] p-2 overflow-hidden rounded-md text-[#2a2a2a] border border-[#b0b9dc]">
        {/* FIGURE SECTION */}
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          <figure className="w-full h-80 lg:group-hover:h-72 transition-all duration-300 bg-[#d8def5] p-2 rounded-md relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-md"
            />
            <div
              style={{
                background:
                  "linear-gradient(123.9deg, #8b5cf6 1.52%, rgba(0, 0, 0, 0) 68.91%)",
              }}
              className="absolute top-0 left-0 w-full h-full lg:group-hover:opacity-100 opacity-0 transition-all duration-300"
            ></div>
          </figure>
        </a>

        {/* CONTENT SECTION */}
        <article className="p-4 space-y-2">
          <h1 className="text-xl font-semibold capitalize">{project.title}</h1>
          <p className="text-base leading-[120%] text-[#3a3a3a]">
            {project.description}
          </p>
          <p className="text-base leading-[120%] text-[#3a3a3a]">
            <span className="font-bold">Stack:</span> {project.stack}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-sm font-medium"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300 text-sm font-medium"
            >
              <FaGithub size={16} />
              Code
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}

export default FeaturedProjects;
