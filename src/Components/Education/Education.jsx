import React from "react";
import { motion } from "framer-motion";

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
    institution:
      "International University of Business Agriculture & Technology",
    year: "2028",
    result: "CGPA: 3.83",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

const Education = () => {
  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="pt-[130px] -mt-[80px] text-3xl md:text-4xl lg:text-5xl text-primary font-extrabold text-center mb-12">
        Education Timeline
      </h1>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative border-l-4 border-purple-500 ml-6"
      >
        {educationData
          .slice()
          .reverse()
          .map((edu) => (
            <motion.div
              key={edu.id}
              variants={item}
              className="mb-12 ml-6 relative group"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-9 top-3 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></span>

              {/* Card */}
              <div className="bg-[#ede9fe] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-purple-700">
                  {edu.degree}
                </h3>
                <p className="text-gray-700 font-medium">
                  {edu.institution} &nbsp;|&nbsp;
                  <span className="italic">{edu.year}</span>
                </p>
                <p className="mt-1 text-gray-600 font-semibold">{edu.result}</p>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
};

export default Education;
