import React from "react";
import { ChevronRight } from "lucide-react";

function FeaturedProjects({ project }) {
  return (
    <div>
      <div className="w-[90%] h-auto mb-5 group mx-auto bg-[#C0C9EE] p-2 overflow-hidden rounded-md text-[#2a2a2a] border border-[#b0b9dc]">
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

          <div className="flex gap-4 pt-2">
            {/* Visit Link */}
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-base text-[#6a73b8] font-medium flex gap-1 transition-all duration-300
                lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-50 lg:group-hover:translate-y-0
                opacity-100 translate-y-0
              "
            >
              Visit
              <ChevronRight />
            </a>

            {/* GitHub Link */}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-base text-[#6a73b8] font-medium flex gap-1 transition-all duration-300
                lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0
                opacity-100 translate-y-0
              "
            >
              GitHub
              <ChevronRight />
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}

export default FeaturedProjects;
