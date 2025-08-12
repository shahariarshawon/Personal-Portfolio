import React from "react";

const educationData = [
  {
    id: 1,
    degree: "SSC (Secondary School Certificate)",
    institution: "KC Model School & College",
    year: "2020",
    result: "GPA: 4.61",
    
  },
  {
    id: 2,
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Uttara High School & College",
    year: "2022",
    result: "GPA: 5.00",
   
  },
  {
    id: 3,
    degree: "Bachelor of Science in Computer Science",
    institution: "International University of Business Agriculture & Technology",
    year: "2028",
    result: "CGPA: 3.83",
    
  }
];

const Education = () => {
  return (
    <section className="max-w-3xl mx-auto p-6 ">
      <h1 className='pt-5 text-center mb-10 m-auto mt-10 text-6xl text-primary font-extrabold'>
          Education Timeline
        </h1>
      <div className="relative border-l-4 border-purple-500 ml-6">
        {educationData
          .slice()
          .reverse() // bottom to top: oldest at bottom
          .map((edu, idx) => (
            <div
              key={edu.id}
              className="mb-12 ml-6 relative"
              style={{ animationDelay: `${idx * 0.3}s` }}
            >
              {/* Circle */}
              <span className="absolute -left-9 top-2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-md"></span>
              {/* Card */}
              <div className="bg-[#ede9fe]  p-6 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-purple-700 ">
                  {edu.degree}
                </h3>
                <p className="text-gray-700  font-medium">
                  {edu.institution} &nbsp;|&nbsp; <span className="italic">{edu.year}</span>
                </p>
                <p className="mt-1 text-gray-600  font-semibold">{edu.result}</p>
                <p className="mt-3 text-gray-600 ">{edu.description}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Education;
