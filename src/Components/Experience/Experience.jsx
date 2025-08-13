import React from "react";

const experienceData = [
  {
    id: 1,
    position: "Customer Representative",
    company: "Genex Infosys Ltd",
    duration: "June 2023 - March 2024",
    description:
      "Handled a large volume of customers efficiently, providing excellent support and resolving issues promptly. Improved social and communication skills significantly."
  }
];

const Experience = () => {
  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="pt-[130px] -mt-[80px] m-auto text-3xl md:text-4xl lg:text-5xl text-primary font-extrabold text-center mb-10">
        Work Experience
      </h1>
      <div className="relative border-l-4 border-purple-500 ml-6">
        {experienceData.map((job, idx) => (
          <div
            key={job.id}
            className="mb-12 ml-6 relative"
            style={{ animationDelay: `${idx * 0.3}s` }}
          >
            {/* Circle */}
            <span className="absolute -left-9 top-2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-md"></span>
            {/* Card */}
            <div className="bg-[#ede9fe] p-6 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-purple-700">
                {job.position}
              </h3>
              <p className="text-gray-700 font-medium">
                {job.company} &nbsp;|&nbsp; <span className="italic">{job.duration}</span>
              </p>
              <p className="mt-3 text-gray-600">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
