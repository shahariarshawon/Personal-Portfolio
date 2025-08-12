import React from "react";
import { ChevronRight } from "lucide-react";

function FeaturedProjects({ project }) {
  return (
    <div>
      {/* projects */}
      <div className="w-[90%] h-[480px] group mx-auto bg-[#C0C9EE] p-2 overflow-hidden rounded-md text-[#2a2a2a] border border-[#b0b9dc]">
        {/* FIGURE SECTION */}
        <a href={project.liveLink} target="_blank">
          <figure className="w-full h-80 group-hover:h-72 transition-all duration-300 bg-[#d8def5] p-2 rounded-md relative overflow-hidden">
            <img
              src={project.image}
              alt="Roommate Finder Project"
              className="w-full h-full object-cover rounded-md"
            />
            <div
              style={{
                background:
                  "linear-gradient(123.9deg, #8b5cf6 1.52%, rgba(0, 0, 0, 0) 68.91%)",
              }}
              className="absolute top-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 transition-all duration-300"
            ></div>
          </figure>
        </a>

        {/* CONTENT SECTION */}
        <a href={project.liveLink} target="_blank">
        <article className="p-4 space-y-2">
          
          <h1 className="text-xl font-semibold capitalize">{project.title}</h1>
          <p className="text-base hidden md:inline-block leading-[120%] text-[#3a3a3a]">
            {project.description}
          </p>
          <br />
          <p className="text-base hidden md:inline-block leading-[120%] text-[#3a3a3a]">
            <span className="font-bold">Stack:</span> {" "}{project.stack}
          </p>
          <div className="flex ">
            <a
            href={project.liveLink}
            target="_blank"
            className="text-base text-[#6a73b8] font-medium group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2 flex gap-1 transition-all duration-300"
          >
            Visit
            <span>
              <ChevronRight />
            </span>
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            className="text-base text-[#6a73b8] font-medium group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2 flex gap-1 transition-all duration-300"
          >
            GitHub
            <span>
              <ChevronRight />
            </span>
          </a>
          </div>
        </article>
        </a>
      </div>
    </div>
  );
}

export default FeaturedProjects;
